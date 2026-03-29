// == Sandboxels Pro Debugger Toolkit ==
// A highly polished suite of developer tools for testing, tracking, and manipulating the simulation.

const catDebug = "tools";

// --- 1. INSPECT (Silent Data Reader) ---
elements.inspect = {
    color: "#00ff00", 
    category: catDebug,
    tool: function(pixel) {
        let age = pixelTicks - pixel.start; 
        let state = elements[pixel.element].state || "unknown";
        
        // Deep F12 Console Logging
        console.log(`\n--- INSPECT: ${pixel.element.toUpperCase()} ---`);
        console.log("Memory:", pixel);
        
        // UI Logging
        let msg = `[${pixel.element.toUpperCase()}] Temp: ${Math.round(pixel.temp)}°C | Age: ${age}t | X:${pixel.x} Y:${pixel.y} | State: ${state}`;
        if (pixel.charge) msg += ` | Charge: ${Math.round(pixel.charge * 100)}%`;
        if (pixel.burning) msg += ` | BURNING`;
        if (pixel.frozen) msg += ` | FROZEN`;
        
        logMessage(msg);
    }
};

// --- 2. FREEZE (Pauses physics, turns semi-transparent) ---
elements.freeze = {
    color: "#00ffff", 
    category: catDebug,
    tool: function(pixel) {
        if (!pixel.frozen) {
            pixel.frozen = true;
            pixel.skip = true; 
            pixel.alpha = 0.5; // Visual indicator that it is paused
        }
    }
};

// --- 3. UNFREEZE (Restores physics and opacity) ---
elements.unfreeze = {
    color: "#ffaa00", 
    category: catDebug,
    tool: function(pixel) {
        if (pixel.frozen) {
            delete pixel.frozen;
            delete pixel.skip;
            pixel.alpha = 1.0;
        }
    }
};

// --- 4. NEUTRALIZE (Cures fire, removes electricity, resets to 20°C) ---
elements.neutralize = {
    color: "#88ccff", 
    category: catDebug,
    tool: function(pixel) {
        pixel.temp = 20; 
        if (pixel.burning) {
            delete pixel.burning;
            delete pixel.burnStart;
        }
        if (pixel.charge) delete pixel.charge;
    }
};

// --- 5. ISOLATE (Deletes a 9x9 area EXCEPT the clicked element) ---
elements.isolate = {
    color: "#ffaa00", 
    category: catDebug,
    tool: function(pixel) {
        for (let i = -4; i <= 4; i++) {
            for (let j = -4; j <= 4; j++) {
                if (i === 0 && j === 0) continue;
                let targetX = pixel.x + i;
                let targetY = pixel.y + j;
                let target = getPixel(targetX, targetY);
                
                if (target && target.element !== pixel.element) {
                    tryDelete(targetX, targetY);
                }
            }
        }
    }
};

// --- 6. TRACER & GHOST TRAIL (Motion tracking) ---
elements.tracer = {
    color: "#ff00ff", 
    category: catDebug,
    tool: function(pixel) {
        pixel.isBeingTraced = true;
    }
};

elements.ghost_trail = {
    color: "#ffffff", 
    behavior: behaviors.GAS, 
    category: "special", 
    hidden: true, 
    density: 0,
    tick: function(pixel) {
        pixel.alpha = (pixel.alpha || 1) - 0.05; 
        if (pixel.alpha <= 0) tryDelete(pixel.x, pixel.y);
    }
};

runPerPixel(function(pixel) {
    if (pixel.isBeingTraced) {
        if (pixel.lastX !== undefined && (pixel.lastX !== pixel.x || pixel.lastY !== pixel.y)) {
            if (isEmpty(pixel.lastX, pixel.lastY, false)) {
                tryCreate("ghost_trail", pixel.lastX, pixel.lastY, false);
                let trail = getPixel(pixel.lastX, pixel.lastY);
                if (trail) {
                    trail.color = pixel.color; 
                    trail.alpha = 0.5;         
                }
            }
        }
        pixel.lastX = pixel.x; 
        pixel.lastY = pixel.y;
    }
});

// --- 7. SIGNAL LOGGER (Machine block that monitors electricity) ---
elements.signal_logger = {
    color: "#33ff33",
    category: "machines", 
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        if (pixel.charge && !pixel.wasCharged) {
            console.log(`⏱️ [SIGNAL LOGGER] Charge detected at X:${pixel.x} Y:${pixel.y} | Tick: ${pixelTicks}`);
            pixel.color = "#ffffff"; 
        } else if (!pixel.charge && pixel.wasCharged) {
            pixel.color = "#33ff33"; 
        }
        pixel.wasCharged = !!pixel.charge;
    }
};

// --- 8. PIXEL COUNTER (Scans map for element quantities) ---
elements.pixel_counter = {
    color: "#4444ff",
    category: catDebug,
    tool: function() {
        // Prevent spam clicking from lagging the game
        if (window.lastCountTick && pixelTicks - window.lastCountTick < 30) return;
        window.lastCountTick = pixelTicks;

        let counts = {};
        for (let x = 1; x < width; x++) {
            for (let y = 1; y < height; y++) {
                let p = pixelMap[x][y];
                if (p) counts[p.element] = (counts[p.element] || 0) + 1;
            }
        }
        
        let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
        
        console.log("\n📊 --- CANVAS PIXEL COUNT ---");
        let uiMessage = "Top 5 Elements: ";
        sorted.forEach((item, index) => {
            console.log(`${index + 1}. ${item[0].toUpperCase()}: ${item[1]} px`);
            uiMessage += `${item[0].toUpperCase()} (${item[1]})  `;
        });
        logMessage(uiMessage);
    }
};

// --- 9 & 10. COPY & PASTE (Deep State Cloning & Forceful Pasting) ---
let copyStartX = null;
let copyStartY = null;

elements.copy = {
    color: "#bbbbff",
    category: catDebug,
    tool: function(pixel) {
        // Cooldown prevents accidental double-clicks when dragging
        if (window.lastCopyTick && pixelTicks - window.lastCopyTick < 15) return;
        window.lastCopyTick = pixelTicks;

        if (copyStartX === null) {
            copyStartX = pixel.x;
            copyStartY = pixel.y;
            logMessage(`[COPY] Corner 1 set at X:${pixel.x} Y:${pixel.y}. Click the opposite corner.`);
        } else {
            let minX = Math.min(copyStartX, pixel.x);
            let maxX = Math.max(copyStartX, pixel.x);
            let minY = Math.min(copyStartY, pixel.y);
            let maxY = Math.max(copyStartY, pixel.y);
            
            // Calculate the absolute center of the bounding box
            let centerX = Math.floor((minX + maxX) / 2);
            let centerY = Math.floor((minY + maxY) / 2);
            
            let clipboard = [];
            for (let x = minX; x <= maxX; x++) {
                for (let y = minY; y <= maxY; y++) {
                    let p = getPixel(x, y);
                    if (p) {
                        // DEEP COPY: Grab all important states alongside the element
                        let origAlpha = p.alpha || 1;
                        clipboard.push({ 
                            dx: x - centerX, 
                            dy: y - centerY, 
                            e: p.element, 
                            color: p.color,
                            temp: p.temp,
                            charge: p.charge,
                            burning: p.burning,
                            burnStart: p.burnStart,
                            frozen: p.frozen,
                            alpha: origAlpha
                        });
                        
                        // Briefly flash the copied area to confirm the selection
                        p.alpha = 0.2;
                        setTimeout(() => { if (pixelMap[x] && pixelMap[x][y]) pixelMap[x][y].alpha = origAlpha; }, 200);
                    }
                }
            }
            
            logMessage(`[COPY] Selection copied! (${clipboard.length} pixels)`);
            window.selectionClipboard = clipboard; 
            copyStartX = null; // Reset for the next use
        }
    }
};

elements.paste = {
    color: "#ffbbbb",
    category: catDebug,
    tool: function(pixel) {
        if (!window.selectionClipboard) {
            logMessage("[PASTE] Error: Nothing copied yet.");
            return;
        }
        
        // Cooldown prevents massive frame drops if held down
        if (window.lastPasteTick && pixelTicks - window.lastPasteTick < 5) return;
        window.lastPasteTick = pixelTicks;

        let clip = window.selectionClipboard;
        let pastedCount = 0;
        
        for (let i = 0; i < clip.length; i++) {
            let pData = clip[i];
            let targetX = pixel.x + pData.dx;
            let targetY = pixel.y + pData.dy;
            
            // Safe bounds check to prevent game crashes at the edge of the screen
            if (targetX >= 1 && targetX < width && targetY >= 1 && targetY < height) {
                
                // FORCE OVERWRITE: The 'true' parameter tells the engine to delete whatever is there
                tryCreate(pData.e, targetX, targetY, true);
                let newP = getPixel(targetX, targetY);
                
                // DEEP PASTE: Restore all the copied states to the new pixel
                if (newP) {
                    newP.color = pData.color;
                    newP.temp = pData.temp;
                    if (pData.charge) newP.charge = pData.charge;
                    if (pData.burning) {
                        newP.burning = pData.burning;
                        newP.burnStart = pData.burnStart || pixelTicks;
                    }
                    if (pData.frozen) {
                        newP.frozen = true;
                        newP.skip = true;
                    }
                    if (pData.alpha !== undefined) newP.alpha = pData.alpha;
                }
                pastedCount++;
            }
        }
        logMessage(`[PASTE] Pasted ${pastedCount} pixels successfully!`);
    }
};
