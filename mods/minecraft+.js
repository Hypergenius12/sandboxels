// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Bug-Free Master File: Terrain, Mobs, Items & Procedural Variants
// ==========================================

/* ==========================================
   1. CORE PHYSICS & VANILLA INTEGRATION
   ========================================== */
// Safely add reactions to vanilla water so it interacts with our Minecraft lava
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };

/* ==========================================
   2. FLUIDS & GRAVITY BLOCKS
   ========================================== */
elements.mc_water = {
    color: "#3F76E4", behavior: behaviors.LIQUID, category: "MC Blocks", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "steam", elem2: "mc_cobblestone", chance: 1.0 } }
};
elements.mc_lava = {
    color: ["#D95100", "#FF8C00"], behavior: behaviors.LIQUID, category: "MC Blocks", state: "liquid", density: 3000, temp: 1200,
    reactions: { "mc_water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 }, "water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 } }
};
elements.mc_sand = { color: "#DBD3A0", behavior: behaviors.POWDER, category: "MC Blocks", state: "solid", density: 1600 };
elements.mc_red_sand = { color: "#A95821", behavior: behaviors.POWDER, category: "MC Blocks", state: "solid", density: 1600 };
elements.mc_gravel = { color: "#837F7E", behavior: behaviors.POWDER, category: "MC Blocks", state: "solid", density: 1700 };

/* ==========================================
   3. TERRAIN & ENVIRONMENT BLOCKS
   ========================================== */
elements.mc_dirt = { color: "#866043", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 1200 };
elements.mc_coarse_dirt = { color: "#77553A", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 1250 };
elements.mc_stone = { color: "#7D7D7D", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 2500 };
elements.mc_cobblestone = { color: "#5A5A5A", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 2400 };
elements.mc_obsidian = { color: "#161021", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 3500 };
elements.mc_bedrock = { color: "#1F1F1F", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 99999 };
elements.mc_netherrack = { color: "#612727", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 2000, burnTime: 99999 }; // Burns forever
elements.mc_soul_sand = { color: "#544033", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 1500 };
elements.mc_end_stone = { color: "#DDE0A5", behavior: behaviors.WALL, category: "MC Blocks", state: "solid", density: 2700 };

// Grass logic: spreads to nearby dirt over time
elements.mc_grass_block = {
    color: ["#5CB031", "#866043"], 
    behavior: behaviors.WALL, 
    category: "MC Blocks", 
    state: "solid", 
    density: 1250,
    tick: function(pixel) {
        if (pixelTicks % 40 === 0) {
            let tx = pixel.x + (Math.random() < 0.5 ? 1 : -1);
            let ty = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (isEmpty(tx, ty - 1) && !isEmpty(tx, ty)) {
                let target = getPixel(tx, ty);
                if (target && target.element === "mc_dirt") {
                    target.element = "mc_grass_block";
                }
            }
        }
    }
};

/* ==========================================
   4. PROCEDURAL GENERATION: WOODS, ORES & COLORS
   This generates hundreds of blocks automatically 
   without breaking the token limit!
   ========================================== */

// Woods
const mcWoods = {
    "oak": { log: "#6A5232", plank: "#A2834E", leaf: "#48B529" },
    "spruce": { log: "#392A1A", plank: "#705334", leaf: "#305730" },
    "birch": { log: "#DFDFDB", plank: "#C3B37B", leaf: "#62A44B" },
    "jungle": { log: "#594319", plank: "#A27551", leaf: "#30A01E" },
    "acacia": { log: "#625D56", plank: "#A55D28", leaf: "#86A238" },
    "dark_oak": { log: "#2A2116", plank: "#412B15", leaf: "#31761F" }
};
for (let wood in mcWoods) {
    elements["mc_" + wood + "_log"] = { color: mcWoods[wood].log, behavior: behaviors.WALL, category: "MC Woods", state: "solid", density: 700, burnTime: 400 };
    elements["mc_" + wood + "_planks"] = { color: mcWoods[wood].plank, behavior: behaviors.WALL, category: "MC Woods", state: "solid", density: 600, burnTime: 300 };
    elements["mc_" + wood + "_leaves"] = { color: mcWoods[wood].leaf, behavior: behaviors.WALL, category: "MC Woods", state: "solid", density: 300, burnTime: 100 };
}

// Ores & Mineral Blocks
const mcOres = {
    "coal": { ore: "#1D1D1D", block: "#111111", item: "#222222" },
    "iron": { ore: "#D8AF93", block: "#E2E2E2", item: "#E2E2E2" },
    "gold": { ore: "#FCEE4B", block: "#FCEE4B", item: "#FCEE4B" },
    "diamond": { ore: "#4AEDD9", block: "#68EBD8", item: "#4AEDD9" },
    "emerald": { ore: "#17DD62", block: "#41F384", item: "#17DD62" },
    "redstone": { ore: "#AA0F0A", block: "#9E160A", item: "#AA0F0A" },
    "lapis": { ore: "#2149A6", block: "#1C4195", item: "#2149A6" }
};
for (let ore in mcOres) {
    elements["mc_" + ore + "_ore"] = { color: ["#7D7D7D", mcOres[ore].ore], behavior: behaviors.WALL, category: "MC Ores", state: "solid", density: 2800 };
    elements["mc_" + ore + "_block"] = { color: mcOres[ore].block, behavior: behaviors.WALL, category: "MC Ores", state: "solid", density: 4000 };
    elements["mc_" + ore + "_item"] = { color: mcOres[ore].item, behavior: behaviors.POWDER, category: "MC Items", state: "solid", density: 2000 };
}

// The 16 Colors (Wool, Stained Glass, Concrete, Terracotta)
const mcColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
const mcHex = ["#E9ECEC", "#F07613", "#BD44B3", "#3AAFD9", "#F8C627", "#70B919", "#ED8DAC", "#3E4447", "#8E8E86", "#158991", "#792AAC", "#35399D", "#724728", "#546D1B", "#A12722", "#141519"];

for (let i = 0; i < mcColors.length; i++) {
    let name = mcColors[i];
    let hex = mcHex[i];
    
    // Wool
    elements["mc_" + name + "_wool"] = { color: hex, behavior: behaviors.WALL, category: "MC Wool", state: "solid", density: 400, burnTime: 150 };
    // Stained Glass
    elements["mc_" + name + "_stained_glass"] = { color: hex, behavior: behaviors.WALL, category: "MC Glass", state: "solid", density: 2500 };
    // Terracotta
    elements["mc_" + name + "_terracotta"] = { color: hex, behavior: behaviors.WALL, category: "MC Terracotta", state: "solid", density: 2000 };
    // Concrete
    elements["mc_" + name + "_concrete"] = { color: hex, behavior: behaviors.WALL, category: "MC Concrete", state: "solid", density: 2500 };
    
    // Concrete Powder (Falls, turns into concrete on touching water)
    elements["mc_" + name + "_concrete_powder"] = { 
        color: hex, behavior: behaviors.POWDER, category: "MC Concrete", state: "solid", density: 1600,
        reactions: { "mc_water": { elem1: "mc_" + name + "_concrete", elem2: null }, "water": { elem1: "mc_" + name + "_concrete", elem2: null } }
    };
}

/* ==========================================
   5. SATISFYING XP ORBS & ITEMS
   ========================================== */
elements.mc_xp_orb = {
    color: ["#80FF20", "#D0FF40"], 
    behavior: behaviors.GAS, 
    category: "MC Entities", 
    density: 10, 
    state: "gas", 
    glow: true, 
    tick: function(pixel) {
        // Flash neon colors
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40";
        // Gently drift downward over time to settle
        if (Math.random() < 0.15) {
            tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y + 1);
        }
    }
};

elements.mc_gunpowder = { color: "#555555", behavior: behaviors.POWDER, category: "MC Items", state: "solid", density: 900, burnTime: 10, stateHigh: "explosion", tempHigh: 150 };
elements.mc_slimeball = { color: "#68B451", behavior: behaviors.POWDER, category: "MC Items", state: "solid", density: 1100, bounce: 0.8 };
elements.mc_ender_pearl = { color: "#1A8778", behavior: behaviors.POWDER, category: "MC Items", state: "solid", density: 2000 };

/* ==========================================
   6. INTERACTIVE MOBS (2-PIXEL ZOMBIE AI)
   ========================================== */
elements.mc_zombie = {
    color: "#4A4A9C", // Blue Shirt
    behavior: behaviors.POWDER,
    category: "MC Mobs",
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        // Spawn head above body on first tick
        if (!pixel.headSpawned) {
            if (isEmpty(pixel.x, pixel.y - 1)) {
                tryCreate("mc_zombie_head", pixel.x, pixel.y - 1);
                pixel.headSpawned = true;
            }
        }
        
        // Burn in daylight (if near top of screen and nothing above it)
        if (pixel.y < 20 && Math.random() < 0.02 && isEmpty(pixel.x, pixel.y - 1)) {
            pixel.burning = true;
        }

        // Basic wandering AI
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (tryMove(pixel, pixel.x + dir, pixel.y)) {
                // Moved sideways
            } else if (isEmpty(pixel.x + dir, pixel.y - 1)) {
                tryMove(pixel, pixel.x + dir, pixel.y - 1); // Jump over 1 block
            }
        }
    }
};

// The head is tied to the body
elements.mc_zombie_head = {
    color: "#4A7129", // Green Head
    behavior: behaviors.POWDER,
    category: "states", // Hidden from normal menus
    state: "solid",
    density: 1100,
    hidden: true,
    tick: function(pixel) {
        let body = getPixel(pixel.x, pixel.y + 1);
        if (!body || body.element !== "mc_zombie") {
            pixel.element = "blood"; // "Die" if the body is destroyed
        }
    }
};

elements.mc_creeper = {
    color: ["#3EAA34", "#000000"],
    behavior: behaviors.POWDER,
    category: "MC Mobs",
    density: 1000,
    state: "solid",
    tick: function(pixel) {
        // Wander AI
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (!tryMove(pixel, pixel.x + dir, pixel.y) && isEmpty(pixel.x + dir, pixel.y - 1)) {
                tryMove(pixel, pixel.x + dir, pixel.y - 1);
            }
        }
        // Explode if touching fire/lava
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let n = getPixel(pixel.x + i, pixel.y + j);
                if (n && (n.element === "fire" || n.element === "mc_lava" || n.burning)) {
                    pixel.element = "explosion";
                }
            }
        }
    }
};

/* ==========================================
   7. TOOLS & SPAWNING
   ========================================== */
elements.mc_flint_and_steel = {
    color: "#A1A1A1",
    category: "MC Tools",
    tool: function(pixel) {
        if (pixel.burnTime || pixel.element === "mc_netherrack") {
            pixel.burning = true;
        } else if (isEmpty(pixel.x, pixel.y - 1)) {
            tryCreate("fire", pixel.x, pixel.y - 1);
        }
    }
};

elements.mc_spawn_zombie = {
    color: ["#006400", "#4A4A9C"],
    category: "MC Tools",
    tool: function(pixel) {
        if (isEmpty(pixel.x, pixel.y) || pixel.element === "air") {
            tryCreate("mc_zombie", pixel.x, pixel.y);
        } else {
            pixel.element = "mc_zombie";
        }
    }
};

elements.mc_bottle_o_enchanting = {
    color: "#A5E358",
    category: "MC Tools",
    tool: function(pixel) {
        for (let i = 0; i < 5; i++) {
            let px = pixel.x + Math.floor(Math.random() * 5) - 2;
            let py = pixel.y + Math.floor(Math.random() * 5) - 2;
            if (isEmpty(px, py)) tryCreate("mc_xp_orb", px, py);
        }
    }
};
