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

// --- 6. CATALYST BRUSH (Forces chemical reactions instantly) ---
elements.catalyst_brush = {
    color: "#ff0088",
    category: catDebug,
    tool: function(pixel) {
        let reactions = elements[pixel.element].reactions;
        if (!reactions) return; 
        
        let neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let i = 0; i < neighbors.length; i++) {
            let target = getPixel(pixel.x + neighbors[i][0], pixel.y + neighbors[i][1]);
            
            if (target && reactions[target.element]) {
                let result = reactions[target.element];
                // Sandboxels reactions can be arrays, default to the first one if so
                if (Array.isArray(result)) result = result[0];
                
                if (result.elem1 === null) tryDelete(pixel.x, pixel.y);
                else if (result.elem1 !== undefined) changePixel(pixel, result.elem1);
                
                if (result.elem2 === null) tryDelete(target.x, target.y);
                else if (result.elem2 !== undefined) changePixel(target, result.elem2);
                
                break; // Only force one reaction per click
            }
        }
    }
};

// --- 7. TRACER & GHOST TRAIL (Motion tracking) ---
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

// --- 8. SIGNAL LOGGER (Machine block that monitors electricity) ---
elements.signal_logger = {
    color: "#33ff33",
    category: "machines", // Moved to machines so it acts like a block
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

// --- 9. PIXEL COUNTER (Scans map for element quantities) ---
elements.pixel_counter = {
    color: "#4444ff",
    category: catDebug,
    tool: function() {
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

// --- 10 & 11. SCHEMATIC COPY & PASTE (Structure exporter/importer) ---
let schStartX = null;
let schStartY = null;

elements.schematic_copy = {
    color: "#bbbbff",
    category: catDebug,
    tool: function(pixel) {
        if (schStartX === null) {
            schStartX = pixel.x;
            schStartY = pixel.y;
            logMessage(`[SCHEMATIC] Point 1 set at X:${pixel.x} Y:${pixel.y}. Click the opposite corner.`);
        } else {
            let minX = Math.min(schStartX, pixel.x);
            let maxX = Math.max(schStartX, pixel.x);
            let minY = Math.min(schStartY, pixel.y);
            let maxY = Math.max(schStartY, pixel.y);
            
            let schematic = { pixels: [] };
            for (let x = minX; x <= maxX; x++) {
                for (let y = minY; y <= maxY; y++) {
                    let p = getPixel(x, y);
                    if (p) schematic.pixels.push({ dx: x - minX, dy: y - minY, e: p.element });
                }
            }
            
            console.log("\n💾 === COPY YOUR SCHEMATIC DATA BELOW ===");
            console.log(JSON.stringify(schematic));
            logMessage(`[SCHEMATIC] Copied ${schematic.pixels.length} pixels! Check F12 Console.`);
            
            window.clipboardSchematic = schematic; 
            schStartX = null; 
        }
    }
};

elements.schematic_paste = {
    color: "#ffbbbb",
    category: catDebug,
    tool: function(pixel) {
        if (!window.clipboardSchematic) {
            logMessage("[SCHEMATIC] Error: No schematic copied yet.");
            return;
        }
        
        let sch = window.clipboardSchematic;
        let pastedCount = 0;
        
        for (let i = 0; i < sch.pixels.length; i++) {
            let pData = sch.pixels[i];
            let targetX = pixel.x + pData.dx;
            let targetY = pixel.y + pData.dy;
            
            if (isEmpty(targetX, targetY, false)) {
                tryCreate(pData.e, targetX, targetY, false);
                pastedCount++;
            }
        }
        logMessage(`[SCHEMATIC] Pasted ${pastedCount} pixels!`);
    }
};
