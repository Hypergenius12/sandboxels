// == Sandboxels Animal Kingdom Mod ==
// Adds 30 new animals with unique diets, behaviors, and ecosystems!

const catLife = "life";

// --- HELPERS ---
// Reusable behaviors so we don't have to write them 30 times
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
        // Cows randomly produce milk if there's space below them
        if (Math.random() < 0.01 && isEmpty(pixel.x, pixel.y + 1)) {
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
        "mud": { elem2: "pig", chance: 0.05 }, // Pigs reproduce in mud!
        "plant": { elem2: null, chance: 0.5 }
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
        // Lay eggs occasionally
        if (Math.random() < 0.005 && isEmpty(pixel.x, pixel.y + 1)) {
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
        "fish": { elem2: null, chance: 0.8 },
        "meat": { elem2: null, chance: 0.8 },
        "honey": { elem2: null, chance: 0.9 } // Bears love honey
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
        "grass": { elem2: "rabbit", chance: 0.08 }, // Rabbits breed quickly
        "plant": { elem2: "rabbit", chance: 0.08 }
    }
};

elements.deer = {
    color: "#8e6c4a",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 950,
    reactions: {
        "leaves": { elem2: null, chance: 0.5 },
        "grass": { elem2: null, chance: 0.5 }
    }
};

elements.moose = {
    color: "#4a3b2c",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1800,
    reactions: {
        "leaves": { elem2: null, chance: 0.6 }
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
        "moose": { elem2: "meat", chance: 0.3 },
        "deer": { elem2: "meat", chance: 0.5 },
        "meat": { elem2: null, chance: 0.8 }
    }
};

elements.elephant = {
    color: "#95a5a6",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 3000,
    reactions: {
        "leaves": { elem2: null, chance: 0.4 },
        "water": { elem2: null, chance: 0.2 } // Drinks water
    }
};

elements.giraffe = {
    color: "#e67e22",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1400,
    reactions: {
        "leaves": { elem2: null, chance: 0.7 } // Strictly eats leaves
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

elements.gorilla = {
    color: "#2c3e50",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 2000,
    reactions: {
        "fruit": { elem2: null, chance: 0.8 },
        "leaves": { elem2: null, chance: 0.5 }
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

elements.bat = {
    color: "#1a1a1a",
    behavior: flyBehavior,
    category: catLife,
    state: "solid",
    density: 150,
    reactions: {
        "fly": { elem2: null, chance: 0.9 },
        "flea": { elem2: null, chance: 0.9 }
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
        // Spiders randomly leave web behind
        if (Math.random() < 0.02 && isEmpty(pixel.x, pixel.y - 1)) {
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
        "flower": { elem2: null, chance: 0.01 } // Pollinates
    },
    tick: function(pixel) {
        // Bees create honey when flying over empty space
        if (Math.random() < 0.01 && isEmpty(pixel.x, pixel.y + 1)) {
            tryCreate("honey", pixel.x, pixel.y + 1);
        }
    }
};

elements.butterfly = {
    color: ["#3498db", "#e74c3c", "#f1c40f", "#9b59b6"], // Random colors!
    behavior: flyBehavior,
    category: catLife,
    state: "solid",
    density: 30
};

elements.mouse = {
    color: "#a6abae",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 200,
    reactions: {
        "cheese": { elem2: "mouse", chance: 0.2 },
        "seed": { elem2: null, chance: 0.6 }
    }
};

elements.snake = {
    color: "#27ae60",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 500,
    reactions: {
        "mouse": { elem2: "meat", chance: 0.8 },
        "frog": { elem2: "meat", chance: 0.8 }
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

elements.turtle = {
    color: "#1abc9c",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1200,
    reactions: {
        "leaves": { elem2: null, chance: 0.5 },
        "jellyfish": { elem2: null, chance: 0.5 }
    }
};

elements.crab = {
    color: "#e74c3c",
    behavior: [
        "XX|XX|XX",
        "M1|XX|M1", // Crabs walk side to side!
        "XX|M1|XX"
    ],
    category: catLife,
    state: "solid",
    density: 1100,
    reactions: {
        "meat": { elem2: null, chance: 0.6 },
        "sand": { elem2: null, chance: 0.01 } // Sifts through sand
    }
};

elements.penguin = {
    color: "#222222",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 900,
    reactions: {
        "fish": { elem2: "meat", chance: 0.5 }
    }
};

elements.seal = {
    color: "#7f8c8d",
    behavior: walkBehavior,
    category: catLife,
    state: "solid",
    density: 1050,
    reactions: {
        "fish": { elem2: null, chance: 0.6 }
    }
};

elements.shark = {
    color: "#34495e",
    behavior: flyBehavior, // We use fly behavior, but restrict them to water in tick
    category: catLife,
    state: "solid",
    density: 1000,
    reactions: {
        "fish": { elem2: "blood", chance: 0.8 },
        "meat": { elem2: "blood", chance: 0.8 },
        "blood": { elem2: null, chance: 1 } // Sharks clean up blood
    },
    tick: function(pixel) {
        // If a shark isn't touching water, it dies
        if (!pixelMap[pixel.x][pixel.y + 1] || pixelMap[pixel.x][pixel.y + 1].element !== "water") {
            if (Math.random() < 0.1) changePixel(pixel, "meat");
        }
    }
};

elements.dolphin = {
    color: "#bdc3c7",
    behavior: flyBehavior,
    category: catLife,
    state: "solid",
    density: 1000,
    reactions: {
        "fish": { elem2: null, chance: 0.7 }
    },
    tick: function(pixel) {
        // Similar to sharks, they need water
        if (!pixelMap[pixel.x][pixel.y + 1] || pixelMap[pixel.x][pixel.y + 1].element !== "water") {
            if (Math.random() < 0.1) changePixel(pixel, "meat");
        }
    }
};
