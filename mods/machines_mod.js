// == Sandboxels Machine Mod ==
// Adds a new "machines" category with interactive industrial blocks!

// 1. Conveyor Belt (Right) - Pushes elements on top of it to the right
elements.conveyor_right = {
    color: "#5e666b",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 2000,
    tick: function(pixel) {
        var target = getPixel(pixel.x, pixel.y - 1); // Check pixel directly above
        // If there's a pixel and it's not another conveyor, try to move it right
        if (target && target.element !== "conveyor_right" && target.element !== "conveyor_left") {
            tryMove(target, target.x + 1, target.y);
        }
    }
};

// 2. Conveyor Belt (Left) - Pushes elements on top of it to the left
elements.conveyor_left = {
    color: "#5e666b",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 2000,
    tick: function(pixel) {
        var target = getPixel(pixel.x, pixel.y - 1);
        if (target && target.element !== "conveyor_right" && target.element !== "conveyor_left") {
            tryMove(target, target.x - 1, target.y);
        }
    }
};

// 3. Duplicator - Clones the pixel directly above it and pushes it below
elements.duplicator = {
    color: "#3498db",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 3000,
    tick: function(pixel) {
        var target = getPixel(pixel.x, pixel.y - 1);
        if (target && target.element !== "duplicator") {
            // Check if the space below the duplicator is empty, then spawn a copy
            if (isEmpty(pixel.x, pixel.y + 1, false)) {
                tryCreate(target.element, pixel.x, pixel.y + 1, false);
            }
        }
    }
};

// 4. Incinerator - Destroys anything touching its top, heating up and generating smoke
elements.incinerator = {
    color: "#e74c3c",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 4000,
    tick: function(pixel) {
        var target = getPixel(pixel.x, pixel.y - 1);
        // Only destroy non-machine elements
        if (target && elements[target.element].category !== "machines") {
            tryDelete(target.x, target.y); // Erase the targeted pixel
            pixel.temp += 10;              // Heat up the incinerator
            
            // 20% chance to generate smoke from the combustion
            if (Math.random() < 0.20 && isEmpty(pixel.x, pixel.y - 2, false)) {
                tryCreate("smoke", pixel.x, pixel.y - 2, false);
            }
        }
    }
};

// 5. Pump (Up) - Sucks liquid/powder from below it and outputs it above
elements.pump = {
    color: "#f1c40f",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 3500,
    tick: function(pixel) {
        var targetBelow = getPixel(pixel.x, pixel.y + 1);
        
        // If there is something below, and space above, teleport it up
        if (targetBelow && elements[targetBelow.element].state !== "solid" && elements[targetBelow.element].category !== "machines") {
            if (isEmpty(pixel.x, pixel.y - 1, false)) {
                tryMove(targetBelow, pixel.x, pixel.y - 1);
            }
        }
    }
};
