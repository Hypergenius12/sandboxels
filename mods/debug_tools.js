// == Sandboxels Pro Debugger Toolkit v3 ==

// 1. INSPECT (Silent, no visual changes)
elements.inspect = {
    color: "#00ff00", 
    category: "tools",
    tool: function(pixel) {
        let age = pixelTicks - pixel.start; 
        let state = elements[pixel.element].state || "unknown";
        
        // Heavy logging to F12 Console
        console.log(`--- INSPECT: ${pixel.element.toUpperCase()} ---`);
        console.log("Memory:", pixel);

        // In-game UI Log
        let msg = `[${pixel.element.toUpperCase()}] Temp: ${Math.round(pixel.temp)}°C | Age: ${age} | X:${pixel.x} Y:${pixel.y} | State: ${state}`;
        if (pixel.charge) msg += ` | Charge: ${Math.round(pixel.charge * 100)}%`;
        if (pixel.burning) msg += ` | BURNING`;
        if (pixel.frozen) msg += ` | FROZEN`;
        
        logMessage(msg);
    }
};

// 2. FREEZE (Requires transparency so you don't lose track of it)
elements.freeze = {
    color: "#00ffff", 
    category: "tools",
    tool: function(pixel) {
        if (!pixel.frozen) {
            pixel.frozen = true;
            pixel.skip = true; 
            pixel.alpha = 0.5; 
        }
    }
};

// 3. UNFREEZE
elements.unfreeze = {
    color: "#ffaa00", 
    category: "tools",
    tool: function(pixel) {
        if (pixel.frozen) {
            delete pixel.frozen;
            delete pixel.skip;
            pixel.alpha = 1.0;
        }
    }
};

// 4. NEUTRALIZE (Silent, no visual changes)
elements.neutralize = {
    color: "#88ccff", 
    category: "tools",
    tool: function(pixel) {
        pixel.temp = 20; 
        if (pixel.burning) {
            delete pixel.burning;
            delete pixel.burnStart;
        }
        if (pixel.charge) delete pixel.charge;
    }
};

// 5. TRACER (Silent on the target, spawns trails)
elements.tracer = {
    color: "#ff00ff", 
    category: "tools",
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

// 6. ISOLATE (Expanded to a 9x9 grid to be more useful)
elements.isolate = {
    color: "#ffaa00", 
    category: "tools",
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

// 7. PURGE (Replaces Electrify - Wipes an element from the whole map)
elements.purge = {
    color: "#ff0000", 
    category: "tools",
    tool: function(pixel) {
        let targetElement = pixel.element;
        logMessage(`Purging all ${targetElement.toUpperCase()} from the canvas...`);
        
        // Scan the entire grid safely
        for (let x = 1; x < width; x++) {
            for (let y = 1; y < height; y++) {
                let p = getPixel(x, y);
                if (p && p.element === targetElement) {
                    tryDelete(x, y);
                }
            }
        }
    }
};
