// == Sandboxels Debugging & Inspection Tool Set ==
// A suite of advanced developer tools to pause, track, and analyze your simulation.

// --- 1. THE DATA PROBE ---
// Clicks a pixel to log its exact variables to the UI and browser console.
elements.data_probe = {
    color: "#00ff00",
    category: "tools",
    tool: function(pixel) {
        // Log the full JSON object to the browser console (F12) for deep inspection
        console.log("🔍 PROBE DATA:", pixel);
        
        // Show a quick summary in the game's native log (Top Left)
        let chargeText = pixel.charge ? ` | Charge: ${Math.round(pixel.charge * 100)}%` : "";
        logMessage(`Probed ${pixel.element.toUpperCase()} | Temp: ${Math.round(pixel.temp)}°C | X:${pixel.x}, Y:${pixel.y}${chargeText}`);
        
        // Briefly flash the pixel white so you know you clicked it
        pixel.color = "#ffffff";
    }
};

// --- 2 & 3. STASIS AND AWAKEN (The Freeze-Frame System) ---
// Stasis physically freezes a pixel in place, storing its properties. Awaken restores it.
elements.stasis_block = {
    color: "#00ffff", 
    behavior: behaviors.WALL, // Cannot move or fall
    category: "special", 
    hidden: true,
    insulate: true // Prevents temperature from changing while frozen
};

elements.stasis_brush = {
    color: "#00ffff",
    category: "tools",
    tool: function(pixel) {
        if (pixel.element === "stasis_block") return; // Already frozen
        
        // Save the old data before changing it
        let oldElem = pixel.element;
        let oldTemp = pixel.temp;
        
        // Turn it into a frozen wall
        changePixel(pixel, "stasis_block");
        
        // Store the original data inside the new pixel object
        pixel.storedElement = oldElem;
        pixel.storedTemp = oldTemp;
        pixel.color = "rgba(0, 255, 255, 0.8)"; // Give it a cyan frozen tint
    }
};

elements.awaken_brush = {
    color: "#ffaa00",
    category: "tools",
    tool: function(pixel) {
        if (pixel.element === "stasis_block" && pixel.storedElement) {
            // Restore the original element and temperature
            changePixel(pixel, pixel.storedElement);
            pixel.temp = pixel.storedTemp;
        }
    }
};

// --- 4. THE PATH TRACER ---
// Paints a tracker onto a pixel. As it moves, it leaves a fading ghost trail behind.
elements.path_tracer = {
    color: "#ff00ff",
    category: "tools",
    tool: function(pixel) {
        pixel.isBeingTraced = true;
        pixel.color = "#ff00ff"; // Highlight the traced pixel
    }
};

// The ghost pixel that gets left behind (fades away automatically)
elements.ghost_trail = {
    color: "rgba(255, 0, 255, 0.3)",
    behavior: behaviors.GAS,
    category: "special",
    hidden: true,
    density: 0,
    tick: function(pixel) {
        // 10% chance to delete itself every frame to create a fading effect
        if (Math.random() < 0.10) {
            tryDelete(pixel.x, pixel.y);
        }
    }
};

// Global hook to track movement for the Path Tracer
runPerPixel(function(pixel) {
    if (pixel.isBeingTraced) {
        // If the pixel has moved since the last frame
        if (pixel.lastX !== undefined && (pixel.lastX !== pixel.x || pixel.lastY !== pixel.y)) {
            // Spawn a ghost trail in the old coordinate
            if (isEmpty(pixel.lastX, pixel.lastY, false)) {
                tryCreate("ghost_trail", pixel.lastX, pixel.lastY, false);
            }
        }
        // Update the last known coordinates
        pixel.lastX = pixel.x;
        pixel.lastY = pixel.y;
    }
});

// --- 5. THE HEAT MAPPER ---
// Visually colors pixels strictly based on their temperature, ignoring their default color.
elements.heat_mapper = {
    color: "#ff4500",
    category: "tools",
    tool: function(pixel) {
        let t = pixel.temp;
        if (t > 200) pixel.color = "#ff0000";       // Boiling hot = Red
        else if (t > 50) pixel.color = "#ff8800";   // Warm = Orange
        else if (t > 0) pixel.color = "#00ff00";    // Room Temp = Green
        else if (t > -50) pixel.color = "#00ffff";  // Cold = Cyan
        else pixel.color = "#0000ff";               // Freezing = Deep Blue
    }
};

// --- 6. THE ENERGIZER ---
// Instantly forces maximum electrical charge into a pixel, bypassing standard circuitry limits.
elements.energizer = {
    color: "#ffff00",
    category: "tools",
    tool: function(pixel) {
        pixel.charge = 1;      // Max out the charge parameter
        pixel.color = "#ffffff"; // Flash bright white
    }
};
