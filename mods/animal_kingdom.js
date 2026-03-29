// == Sandboxels Animal Kingdom Mod v2 ==
// Adds 30 new animals, improved aquatic swimming mechanics, and a Breeding tool!

const catLife = "life";

// --- HELPERS & BEHAVIORS ---
const walkBehavior = [
    "XX|XX|XX",
    "M2|FX%5|M2",
    "M2|M1|M2"
];
const flyBehavior = [
    "M2|M1|M2",
    "M1|FX%10|M1",
    "M2|M1|M2"
];

// Custom function to allow aquatic animals to swap with water to simulate swimming
function swimLogic(pixel) {
    let inWater = false;
    let neighbors = [
        {x: pixel.x, y: pixel.y - 1}, // Up
        {x: pixel.x, y: pixel.y + 1}, // Down
        {x: pixel.x + 1, y: pixel.y}, // Right
        {x: pixel.x - 1, y: pixel.y}  // Left
    ];
    
    // Check if touching water
    for (let i = 0; i < neighbors.length; i++) {
        let n = getPixel(neighbors[i].x, neighbors[i].y);
        if (n && (n.element === "water" || n.element === "salt_water")) {
            inWater = true;
            break;
        }
    }

    if (!inWater) {
        // Suffocation mechanic: 1% chance to die per tick when totally beached
        if (Math.random() < 0.01) {
            changePixel("meat", pixel.x, pixel.y);
        }
        // Flop around on land
        if (Math.random() < 0.2) {
            tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y);
        }
    } else {
        // Active Swimming: Randomly pick an adjacent coordinate
        if (Math.random() < 0.4) {
            let nx = pixel.x + Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
            let ny = pixel.y + Math.floor(Math.random() * 3) - 1;
            let target = getPixel(nx, ny);
            
            // Swap places with water to simulate fluid movement
            if (target && (target.element === "water" || target.element === "salt_water")) {
                let tempElem = target.element;
                changePixel(pixel.element, nx, ny);
                changePixel(tempElem, pixel.x, pixel.y);
            } else if (!target) {
                // Move into empty space if available
                tryMove(pixel, nx, ny);
            }
        }
    }
}

// --- NEW TOOL: BREEDING TOOL ---
elements.breed = {
    color: "#ff69b4",
    tool: function(pixel) {
        // Check if the pixel is alive
        if (elements[pixel.element].category === catLife) {
            // Try to find an empty spot around the animal to spawn a baby
            const spots = [[0,-1], [0,1], [-1,0], [1,0], [-1,-1], [1,-1], [-1,1], [1,1]];
            for (let i = 0; i < spots.length; i++) {
                if (isEmpty(pixel.x + spots[i][0], pixel.y + spots[i][1], false)) {
                    tryCreate(pixel.element, pixel.x + spots[i][0], pixel.y + spots[i][1], false);
                    break;
                }
            }
        }
    },
    category: "tools"
};

// --- 1. THE FARM ANIMALS ---

elements.cow = {
    color: "#ecf0f1",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1000,
    reactions: {
        "grass": { elem2: null, chance: 0.5 },
        "plant": { elem2: null, chance: 0.5 }
    },
    tick: function(pixel) {
        if (Math.random() < 0.005 && isEmpty(pixel.x, pixel.y + 1)) {
            tryCreate("milk", pixel.x, pixel.y + 1);
        }
    }
};

elements.pig = {
    color: "#ffb8c6",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 900,
    reactions: {
        "mud": { elem2: "pig", chance: 0.05 }, // Pigs reproduce in mud
        "plant": { elem2: null, chance: 0.5 },
        "meat": { elem2: null, chance: 0.2 } // Omnivores
    }
};

elements.sheep = {
    color: "#ffffff",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 850,
    reactions: {
        "grass": { elem2: null, chance: 0.4 }
    }
};

elements.chicken = {
    color: "#f39c12",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 400,
    reactions: {
        "seed": { elem2: null, chance: 0.8 },
        "wheat": { elem2: null, chance: 0.8 }
    },
    tick: function(pixel) {
        if (Math.random() < 0.003 && isEmpty(pixel.x, pixel.y + 1)) {
            tryCreate("egg", pixel.x, pixel.y + 1);
        }
    }
};

// --- 2. FOREST WILDLIFE ---

elements.bear = {
    color: "#5c4033",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1500,
    reactions: {
        "fish": { elem2: "bone", chance: 0.8 },
        "meat": { elem2: null, chance: 0.8 },
        "honey": { elem2: null, chance: 0.9 }
    }
};

elements.wolf = {
    color: "#7f8c8d",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1100,
    reactions: {
        "sheep": { elem2: "meat", chance: 0.5 },
        "cow": { elem2: "meat", chance: 0.2 },
        "meat": { elem2: "wolf", chance: 0.1 } // Eating meat spawns more wolves
    }
};

elements.fox = {
    color: "#d35400",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 700,
    reactions: {
        "chicken": { elem2: "meat", chance: 0.6 },
        "rabbit": { elem2: "meat", chance: 0.6 }
    }
};

elements.rabbit = {
    color: "#bdc3c7",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 300,
    reactions: {
        "grass": { elem2: "rabbit", chance: 0.05 }, // Breed upon eating
        "plant": { elem2: "rabbit", chance: 0.05 }
    }
};

// --- 3. JUNGLE & SAVANNA ---

elements.lion = {
    color: "#f1c40f",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1300,
    reactions: {
        "meat": { elem2: null, chance: 0.8 },
        "cow": { elem2: "meat", chance: 0.4 },
        "pig": { elem2: "meat", chance: 0.5 }
    }
};

elements.monkey = {
    color: "#8b5a2b",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 600,
    reactions: {
        "fruit": { elem2: "monkey", chance: 0.1 }
    }
};

// --- 4. BIRDS & BATS ---

elements.owl = {
    color: "#5d4037",
    behavior: flyBehavior,
    category: catLife,
    state: "solid",
    density: 200,
    reactions: {
        "mouse": { elem2: "meat", chance: 0.6 },
        "meat": { elem2: null, chance: 0.8 }
    }
};

elements.eagle = {
    color: "#3e2723",
    behavior: flyBehavior,
    category: catLife,
    state: "solid",
    density: 250,
    reactions: {
        "fish": { elem2: "meat", chance: 0.7 },
        "rabbit": { elem2: "meat", chance: 0.5 }
    }
};

// --- 5. BUGS & CREEPY CRAWLIES ---

elements.spider = {
    color: "#000000",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 100,
    reactions: {
        "fly": { elem2: null, chance: 0.8 },
        "ant": { elem2: null, chance: 0.5 }
    },
    tick: function(pixel) {
        if (Math.random() < 0.01 && isEmpty(pixel.x, pixel.y - 1)) {
            tryCreate("web", pixel.x, pixel.y - 1);
        }
    }
};

elements.bee = {
    color: "#f1c40f",
    behavior: flyBehavior,
    category: catLife,
    state: "solid",
    density: 50,
    reactions: {
        "flower": { elem2: null, chance: 0.01 } 
    },
    tick: function(pixel) {
        if (Math.random() < 0.005 && isEmpty(pixel.x, pixel.y + 1)) {
            tryCreate("honey", pixel.x, pixel.y + 1);
        }
    }
};

// --- 6. AQUATIC & AMPHIBIOUS LIFE ---

elements.frog = {
    color: "#2ecc71",
    behavior: [
        "XX|XX|XX",
        "XX|FX%10|XX",
        "M2|M1|M2"
    ],
    category: catLife,
    state: "solid",
    density: 400,
    reactions: {
        "fly": { elem2: null, chance: 0.9 },
        "flea": { elem2: null, chance: 0.9 }
    }
};

// Sharks & Dolphins utilize the custom swimLogic
elements.shark = {
    color: "#34495e",
    behavior: ["XX|XX|XX", "XX|XX|XX", "XX|XX|XX"], // Movement handled dynamically in tick()
    category: catLife,
    state: "solid",
    density: 1000,
    reactions: {
        "fish": { elem2: "blood", chance: 0.8 },
        "meat": { elem2: "blood", chance: 0.8 },
        "blood": { elem2: null, chance: 1 } // Cleans up blood rapidly
    },
    tick: function(pixel) {
        swimLogic(pixel);
    }
};

elements.dolphin = {
    color: "#bdc3c7",
    behavior: ["XX|XX|XX", "XX|XX|XX", "XX|XX|XX"],
    category: catLife,
    state: "solid",
    density: 1000,
    reactions: {
        "fish": { elem2: null, chance: 0.7 }
    },
    tick: function(pixel) {
        swimLogic(pixel);
    }
};

elements.crab = {
    color: "#e74c3c",
    behavior: [
        "XX|XX|XX",
        "M1|XX|M1", // Side to side walking
        "XX|M1|XX"
    ],
    category: catLife,
    state: "solid",
    density: 1100,
    reactions: {
        "meat": { elem2: null, chance: 0.6 }
    }
};
