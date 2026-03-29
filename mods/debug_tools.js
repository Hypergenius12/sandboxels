// == Sandboxels Pro Debugger Toolkit ==
// Rebuilt for perfect visual feedback using alpha transparency and engine-level skipping.

const catDebug = "tools";

// 1. INSPECTOR: Logs details and flashes the pixel white.
elements.tool_inspect = {
    color: "#00ff00", 
    category: catDebug,
    tool: function(pixel) {
        console.log("🔍 INSPECT:", pixel);
        let chargeText = pixel.charge ? ` | Charge: ${Math.round(pixel.charge * 100)}%` : "";
        logMessage(`[${pixel.element.toUpperCase()}] Temp: ${Math.round(pixel.temp)}°C | X:${pixel.x} Y:${pixel.y}${chargeText}`);
        pixel.color = "#ffffff"; 
    }
};

// 2. FREEZE: Pauses the pixel's physics and makes it 50% transparent.
elements.tool_freeze = {
    color: "#00ffff", 
    category: catDebug,
    tool: function(pixel) {
        if (!pixel.frozen) {
            pixel.frozen = true;
            pixel.skip = true; // Engine natively stops updating this pixel
            pixel.alpha = 0.5; // Makes it slightly see-through!
        }
    }
};

// 3. UNFREEZE: Restores physics and turns opacity back to 100%.
elements.tool_unfreeze = {
    color: "#ffaa00", 
    category: catDebug,
    tool: function(pixel) {
        if (pixel.frozen) {
            delete pixel.frozen;
            delete pixel.skip;
            pixel.alpha = 1.0; // Solid again
        }
    }
};

// 4. TICK STEPPER (NEW): Forces a frozen pixel to simulate exactly 1 frame.
elements.tool_step = {
    color: "#ffffff", 
    category: catDebug,
    tool: function(pixel) {
        if (pixel.frozen && elements[pixel.element].tick) {
            pixel.skip = false;
            elements[pixel.element].tick(pixel); // Run physics manually
            pixel.skip = true;
            
            // Blink effect to show it stepped
            pixel.alpha = 0.8; 
            setTimeout(() => { if(pixel) pixel.alpha = 0.5; }, 50);
        }
    }
};

// 5. MOTION TRACER: Highlights the pixel and leaves a fading translucent trail.
elements.tool_tracer = {
    color: "#ff00ff", 
    category: catDebug,
    tool: function(pixel) {
        pixel.isBeingTraced = true;
        pixel.color = "#ff00ff";
    }
};

// The fading trail left behind by the Tracer
elements.ghost_trail = {
    color: "#ff00ff", 
    behavior: behaviors.GAS, 
    category: "special", 
    hidden: true, 
    density: 0,
    tick: function(pixel) {
        pixel.alpha = (pixel.alpha || 1) - 0.05; // Fade out smoothly via opacity
        if (pixel.alpha <= 0) tryDelete(pixel.x, pixel.y); // Delete when invisible
    }
};

// Global hook for the Tracer
runPerPixel(function(pixel) {
    if (pixel.isBeingTraced) {
        if (pixel.lastX !== undefined && (pixel.lastX !== pixel.x || pixel.lastY !== pixel.y)) {
            if (isEmpty(pixel.lastX, pixel.lastY, false)) {
                tryCreate("ghost_trail", pixel.lastX, pixel.lastY, false);
                let trail = getPixel(pixel.lastX, pixel.lastY);
                if (trail) trail.alpha = 0.5; // Start trail at 50% opacity
            }
        }
        pixel.lastX = pixel.x; 
        pixel.lastY = pixel.y;
    }
});

// 6. ISOLATOR (NEW): Erases everything in a 5x5 grid EXCEPT the element you click.
elements.tool_isolate = {
    color: "#ff0000", 
    category: catDebug,
    tool: function(pixel) {
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                let target = getPixel(pixel.x + i, pixel.y + j);
                if (target && target.element !== pixel.element) {
                    tryDelete(target.x, target.y);
                }
            }
        }
    }
};

// 7. MAX CHARGE: Instantly electrifies the pixel.
elements.tool_charge = {
    color: "#ffff00", 
    category: catDebug,
    tool: function(pixel) {
        pixel.charge = 1;
        pixel.color = "#ffffaa"; // Bright yellow flash
    }
};
