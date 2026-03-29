// == Sandboxels Pro Debugger Toolkit v2 ==
// Refined for maximum utility, no color-ruining, and deep inspection.

// 1. INSPECT: Deep dive into a pixel's data.
elements.inspect = {
    color: "#00ff00", 
    category: "tools",
    tool: function(pixel) {
        // Calculate how many simulation ticks this specific pixel has been alive
        let age = pixelTicks - pixel.start; 
        
        // Log the heavy data to the browser console (F12)
        console.log(`--- Inspecting [${pixel.element.toUpperCase()}] ---`);
        console.log("Pixel Live Memory:", pixel);
        console.log("Element Base Rules:", elements[pixel.element]);

        // Build a detailed UI message for the top-left of the screen
        let msg = `[${pixel.element.toUpperCase()}] Temp: ${Math.round(pixel.temp)}°C | Age: ${age}t`;
        if (pixel.charge) msg += ` | Charge: ${Math.round(pixel.charge * 100)}%`;
        if (pixel.burning) msg += ` | BURNING`;
        if (pixel.frozen) msg += ` | FROZEN`;
        
        logMessage(msg);

        // Visual Feedback: Quick transparency blink instead of color change
        let originalAlpha = pixel.alpha || 1;
        pixel.alpha = 0.2;
        setTimeout(() => { if (pixel) pixel.alpha = originalAlpha; }, 150);
    }
};

// 2. FREEZE: Pauses the pixel's physics completely.
elements.freeze = {
    color: "#00ffff", 
    category: "tools",
    tool: function(pixel) {
        if (!pixel.frozen) {
            pixel.frozen = true;
            pixel.skip = true; // Engine natively stops updating this pixel
            pixel.alpha = 0.5; // Make it semi-transparent so you know it's paused
        }
    }
};

// 3. UNFREEZE: Restores physics to a frozen pixel.
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

// 4. NEUTRALIZE: Cures fire, removes electricity, and resets temperature.
elements.neutralize = {
    color: "#88ccff", 
    category: "tools",
    tool: function(pixel) {
        pixel.temp = 20; // Reset to room temp
        if (pixel.burning) {
            delete pixel.burning;
            delete pixel.burnStart;
        }
        if (pixel.charge) {
            delete pixel.charge;
        }
        
        let originalAlpha = pixel.alpha || 1;
        pixel.alpha = 0.2;
        setTimeout(() => { if (pixel) pixel.alpha = originalAlpha; }, 150);
    }
};

// 5. TRACER: Highlights the pixel and leaves a fading trail of its exact color.
elements.tracer = {
    color: "#ff00ff", 
    category: "tools",
    tool: function(pixel) {
        pixel.isBeingTraced = true;
        // Just make it slightly transparent to show it's being tracked
        pixel.alpha = 0.8; 
    }
};

// The fading trail left behind by the Tracer
elements.ghost_trail = {
    color: "#ffffff", // Default, overwritten instantly by the tracer
    behavior: behaviors.GAS, 
    category: "special", 
    hidden: true, 
    density: 0,
    tick: function(pixel) {
        pixel.alpha = (pixel.alpha || 1) - 0.05; // Fade out smoothly
        if (pixel.alpha <= 0) tryDelete(pixel.x, pixel.y);
    }
};

// Global hook for the Tracer to monitor movement
runPerPixel(function(pixel) {
    if (pixel.isBeingTraced) {
        if (pixel.lastX !== undefined && (pixel.lastX !== pixel.x || pixel.lastY !== pixel.y)) {
            if (isEmpty(pixel.lastX, pixel.lastY, false)) {
                tryCreate("ghost_trail", pixel.lastX, pixel.lastY, false);
                let trail = getPixel(pixel.lastX, pixel.lastY);
                if (trail) {
                    trail.color = pixel.color; // Copy the target's exact color!
                    trail.alpha = 0.4;         // Start at 40% opacity
                }
            }
        }
        pixel.lastX = pixel.x; 
        pixel.lastY = pixel.y;
    }
});

// 6. ISOLATE: Erases everything in a 5x5 grid EXCEPT the element you click.
elements.isolate = {
    color: "#ff0000", 
    category: "tools",
    tool: function(pixel) {
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                if (i === 0 && j === 0) continue;
                let targetX = pixel.x + i;
                let targetY = pixel.y + j;
                let target = getPixel(targetX, targetY);
                // If there's a pixel here, and it's NOT the same element, delete it
                if (target && target.element !== pixel.element) {
                    tryDelete(targetX, targetY);
                }
            }
        }
    }
};

// 7. ELECTRIFY: Instantly injects maximum electricity into the pixel.
elements.electrify = {
    color: "#ffff00", 
    category: "tools",
    tool: function(pixel) {
        pixel.charge = 1; // 1 is max charge in Sandboxels
        
        let originalAlpha = pixel.alpha || 1;
        pixel.alpha = 0.2;
        setTimeout(() => { if (pixel) pixel.alpha = originalAlpha; }, 150);
    }
};
