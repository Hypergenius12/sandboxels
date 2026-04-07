// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: Fixed rendering, Hash-based Ticks & Smelting
// ==========================================

// 1. ADVANCED TICK FUNCTIONS

// Perfect 3D Beveled Block: Top-Left Highlight L, Bottom-Right Shadow L
function shinyBlockTick(pixel, inner, outer, highlight, shadow) {
    let l1 = isEmpty(pixel.x - 1, pixel.y);
    let t1 = isEmpty(pixel.x, pixel.y - 1);
    let r1 = isEmpty(pixel.x + 1, pixel.y);
    let b1 = isEmpty(pixel.x, pixel.y + 1);

    if (l1 || t1 || r1 || b1) {
        pixel.color = outer; 
        return;
    }

    let l2 = isEmpty(pixel.x - 2, pixel.y);
    let t2 = isEmpty(pixel.x, pixel.y - 2);
    let l3 = isEmpty(pixel.x - 3, pixel.y);
    let t3 = isEmpty(pixel.x, pixel.y - 3);

    let r2 = isEmpty(pixel.x + 2, pixel.y);
    let b2 = isEmpty(pixel.x, pixel.y + 2);
    let r3 = isEmpty(pixel.x + 3, pixel.y);
    let b3 = isEmpty(pixel.x, pixel.y + 3);

    let isHighlightL = (t2 && (l2 || l3)) || (l2 && (t2 || t3));
    let isShadowL = (b2 && (r2 || r3)) || (r2 && (b2 || b3));

    if (isHighlightL) {
        pixel.color = highlight; 
    } else if (isShadowL) {
        pixel.color = shadow;
    } else {
        pixel.color = inner;
    }
}

function outlineTick(pixel, inner, outer) {
    if (isEmpty(pixel.x, pixel.y - 1) || isEmpty(pixel.x, pixel.y + 1) || isEmpty(pixel.x - 1, pixel.y) || isEmpty(pixel.x + 1, pixel.y)) {
        pixel.color = outer;
    } else {
        pixel.color = inner;
    }
}

function slimeTick(pixel) {
    outlineTick(pixel, "#7bcf61", "#5c9e47");
    let up = pixelMap[pixel.x]?.[pixel.y - 1];
    if (up && elements[up.element] && elements[up.element].behavior === behaviors.POWDER) {
        if (!up.handled) up.vy = -3;
    }
}

function honeyTick(pixel) {
    outlineTick(pixel, "#ffc824", "#e59410");
    for (let dx = -1; dx <= 1; dx++) {
        let neighbor = pixelMap[pixel.x + dx]?.[pixel.y - 1];
        if (neighbor && elements[neighbor.element]) {
            let cat = elements[neighbor.element].behavior;
            if (cat === behaviors.POWDER || cat === behaviors.LIQUID) {
                if (Math.random() < 0.85) neighbor.handled = true;
            }
        }
    }
}

function chestTick(pixel) {
    if (!pixel.stored) {
        let up = pixelMap[pixel.x]?.[pixel.y - 1];
        if (up && elements[up.element].behavior === behaviors.POWDER && up.element !== "mc_chest") {
            pixel.stored = up.element;
            deletePixel(up.x, up.y);
            pixel.color = "#8b643a"; 
        }
    } else {
        if (isEmpty(pixel.x, pixel.y + 1)) {
            createPixel(pixel.stored, pixel.x, pixel.y + 1);
            pixel.stored = null;
            pixel.color = "#5e4429"; 
        }
    }
}

// Multilayered Grass Block (Coordinate Hashing fixes the strobe flickering!)
function grassBlockTick(pixel) {
    let topEmpty = isEmpty(pixel.x, pixel.y - 1);
    let secondEmpty = isEmpty(pixel.x, pixel.y - 2);

    if (topEmpty) {
        pixel.color = "#4B712F"; // Layer 1: Pure Grass
    } else if (secondEmpty) {
        let hash = (pixel.x * 7 + pixel.y * 11) % 2; // Locked to grid coordinates
        pixel.color = hash === 0 ? "#4B712F" : "#866043"; // Layer 2: Mixed Grass & Dirt
    } else {
        let hash = (pixel.x * 13 + pixel.y * 17) % 2; // Locked to grid coordinates
        pixel.color = hash === 0 ? "#866043" : "#75543b"; // Layer 3: Solid Dirt
    }
}

// Coordinate Hashing ensures holes cannot be "filled in" when dragged over!
function leafTick(pixel) {
    if (!pixel.leafHoled) {
        pixel.leafHoled = true;
        let hash = (pixel.x * 37 + pixel.y * 13) % 100;
        if (hash < 22) { // 22% of the exact coordinate grid is ALWAYS empty
            deletePixel(pixel.x, pixel.y);
        }
    }
}

// Fixed Cactus Spikes: Top corners + Staggered sides
function cactusTick(pixel) {
    let l = isEmpty(pixel.x - 1, pixel.y);
    let r = isEmpty(pixel.x + 1, pixel.y);
    let t = isEmpty(pixel.x, pixel.y - 1);
    
    if (t && l) {
        pixel.color = "#ffffff"; // Top Left corner
    } else if (t && r) {
        pixel.color = "#ffffff"; // Top Right corner
    } else if (l && pixel.y % 3 === 0) {
        pixel.color = "#ffffff"; // Left side staggered spike
    } else if (r && pixel.y % 3 === 1) {
        pixel.color = "#ffffff"; // Right side staggered spike
    } else {
        pixel.color = "#1e5917";
    }
}

function saplingTick(pixel) {
    if (Math.random() < 0.01) {
        let below = pixelMap[pixel.x]?.[pixel.y + 1];
        if (below && (below.element === "mc_dirt" || below.element === "mc_grass_block" || below.element === "mc_farmland")) {
            changePixel(pixel, "mc_oak_log");
            let trunkHeight = 5 + Math.floor(Math.random() * 4);
            
            for (let i = 1; i <= trunkHeight; i++) {
                if (isEmpty(pixel.x, pixel.y - i)) createPixel("mc_oak_log", pixel.x, pixel.y - i);
            }
            for (let dx = -3; dx <= 3; dx++) {
                for (let dy = trunkHeight - 2; dy <= trunkHeight + 2; dy++) {
                    if (Math.abs(dx) + Math.abs(dy - trunkHeight) <= 4) {
                        if (isEmpty(pixel.x + dx, pixel.y - dy)) createPixel("mc_leaves", pixel.x + dx, pixel.y - dy);
                    }
                }
            }
        }
    }
}

function cropTick(pixel) {
    if (Math.random() < 0.005) {
        let below = pixelMap[pixel.x]?.[pixel.y + 1];
        if (below && (below.element === "mc_dirt" || below.element === "mc_grass_block" || below.element === "mc_farmland")) {
            changePixel(pixel, "mc_wheat");
        }
    }
}

function tntTick(pixel) {
    if (pixel.burning || pixel.temp > 150) {
        explodeAt(pixel.x, pixel.y, 16, "fire,smoke");
        deletePixel(pixel.x, pixel.y);
    }
}


// 2. MASSIVE ELEMENT DATABASE
const mcBlocks = {
    // --- FLUIDS & GASES ---
    "mc_water": { name: "Water", color: "#3F76E4", behavior: behaviors.LIQUID, state: "liquid", density: 1000 },
    "mc_lava": { name: "Lava", color: ["#E65C00", "#FF8C00", "#D95100"], behavior: behaviors.LIQUID, state: "liquid", density: 3000, temp: 1200 },
    "mc_dragon_breath": { name: "Dragon Breath", color: "#c631a0", behavior: behaviors.GAS, state: "gas", density: 1.5, temp: 300 },

    // --- POWDERS ---
    "mc_sand": { name: "Sand", color: ["#dbd3a0", "#d1c890"], behavior: behaviors.POWDER },
    "mc_red_sand": { name: "Red Sand", color: ["#a85622", "#9c4e1c"], behavior: behaviors.POWDER },
    "mc_gravel": { name: "Gravel", color: ["#82807f", "#737170", "#636160"], behavior: behaviors.POWDER },
    "mc_dirt": { name: "Dirt", color: ["#866043", "#75543b"], behavior: behaviors.POWDER },
    "mc_farmland": { name: "Farmland", color: "#5e3e26", behavior: behaviors.POWDER },
    "mc_mud": { name: "Mud", color: ["#3d291b", "#332217"], behavior: behaviors.POWDER }, 
    "mc_ash": { name: "Ash", color: "#9c9c9c", behavior: behaviors.POWDER }, 
    "mc_redstone_dust": { name: "Redstone Dust", color: "#d11111", behavior: behaviors.POWDER, conduct: 1 },
    "mc_bone_meal": { name: "Bone Meal", color: "#fcfcfc", behavior: behaviors.POWDER },
    "mc_wheat_seeds": { name: "Wheat Seeds", color: "#3dc44a", behavior: behaviors.POWDER, tick: cropTick },
    "mc_sapling": { name: "Sapling", color: "#59b342", behavior: behaviors.POWDER, tick: saplingTick },
    "mc_concrete_powder": { name: "Concrete Powder", color: "#a8a8a8", behavior: behaviors.POWDER },

    // --- NATURE BLOCKS ---
    "mc_wheat": { name: "Wheat", color: ["#e3ca54", "#d1b638"], behavior: behaviors.WALL },
    "mc_grass_block": { name: "Grass Block", color: "#4B712F", behavior: behaviors.WALL, tick: grassBlockTick },
    "mc_leaves": { name: "Leaves", color: "#296a23", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "mc_oak_log": { name: "Oak Log", color: "#362a1c", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "mc_cactus": { name: "Cactus", color: "#1e5917", behavior: behaviors.WALL, burn: 20, tick: cactusTick },
    "mc_pumpkin": { name: "Pumpkin", color: "#db7a14", behavior: behaviors.WALL },
    "mc_ice": { name: "Ice", color: "#a5d5e8", behavior: behaviors.WALL, tempHigh: 5, stateHigh: "mc_water" },
    "mc_packed_ice": { name: "Packed Ice", color: "#8abde0", behavior: behaviors.WALL, tempHigh: 20, stateHigh: "mc_water" },
    "mc_sponge": { name: "Sponge", color: "#ded147", behavior: behaviors.WALL, burn: 60, burnTime: 40 }, 

    // --- HD TEXTURE PATTERNS ---
    "mc_cobblestone": { 
        name: "Cobblestone", color: "#7a7a7a", behavior: behaviors.WALL,
        colorPattern: [ "bccbdeed", "cbbeddec", "cddecbbc", "deedbccb", "deedbccb", "cddecbbc", "cbbeddec", "bccbdeed" ],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#5e5e5e", "e": "#474747" }
    },
    "mc_stone_bricks": { 
        name: "Stone Bricks", color: "#7d7d7d", behavior: behaviors.WALL,
        colorPattern: [ "ddddeeed", "ddcdeeed", "ddecddbb", "eeeeeeee", "edddddde", "eddcdeee", "bbddecdd", "eeeeeeee" ],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#7d7d7d", "e": "#5e5e5e" }
    },
    "mc_deepslate": { 
        name: "Deepslate", color: "#3b3b40", behavior: behaviors.WALL,
        colorPattern: [ "ccddddee", "eeddccdd", "ddccddcc", "eeddddee", "ddccddcc", "eeddccdd", "ccddddee", "ddccddcc" ],
        colorKey: { "c": "#27272b", "d": "#3b3b40", "e": "#4f4f54" }
    },
    "mc_bookshelf": {
        name: "Bookshelf", color: "#a18251", behavior: behaviors.WALL, burn: 80, burnTime: 40,
        colorPattern: [ "wwwwwwww", "wwwwwdww", "rrbbggww", "rrbbggww", "wwwwwwww", "wwdwwwww", "ggbbrrww", "ggbbrrww" ],
        colorKey: { "w": "#856a42", "r": "#c43c3c", "b": "#3c50c4", "g": "#459e4e", "d": "#6e522d" }
    },
    "mc_tnt": { 
        name: "TNT", color: "#d12828", behavior: behaviors.WALL, tick: tntTick,
        colorPattern: [ "rrrrrrrr", "rdrrdrrd", "wwwwwwww", "wbwbwwbw", "wwwwwwww", "rdrrdrrd", "rrrrrrrr", "rdrrdrrd" ],
        colorKey: { "r": "#d12828", "d": "#9c1b1b", "w": "#e8e8e8", "b": "#242424" }
    },

    // --- FIXED TEXTURES ---
    "mc_oak_planks": { 
        name: "Oak Planks", color: "#a18251", behavior: behaviors.WALL, burn: 50, burnTime: 80,
        colorPattern: ["oooo", "oooo", "dddd"], 
        colorKey: { "o": "#a18251", "d": "#856a42" } 
    },
    "mc_glowstone": { name: "Glowstone", color: ["#fceb42", "#e0b643", "#f2cb63"], behavior: behaviors.WALL },
    "mc_amethyst_block": {
        name: "Amethyst Block", color: "#9a5cc6", behavior: behaviors.WALL,
        colorPattern: ["ppld", "ldpp", "plpd", "dplp"],
        colorKey: { "p": "#9a5cc6", "l": "#b382d6", "d": "#7a41a3" }
    },

    // --- VANILLA ARRAY ORES ---
    "mc_coal_ore": { name: "Coal Ore", color: ["#7a7a7a", "#141414", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "mc_iron_ore": { name: "Iron Ore", color: ["#7a7a7a", "#d8af93", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "mc_gold_ore": { name: "Gold Ore", color: ["#7a7a7a", "#fceb42", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "mc_diamond_ore": { name: "Diamond Ore", color: ["#7a7a7a", "#5de0cf", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "mc_redstone_ore": { name: "Redstone Ore", color: ["#7a7a7a", "#d11111", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "mc_emerald_ore": { name: "Emerald Ore", color: ["#7a7a7a", "#1fc442", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "mc_copper_ore": { name: "Copper Ore", color: ["#7a7a7a", "#e0734a", "#7a7a7a", "#5de0a1"], behavior: behaviors.WALL },

    // --- BEVELED SHINY BLOCKS ---
    "mc_block_of_diamond": { name: "Block of Diamond", color: "#5de0cf", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#5de0cf", "#2da697", "#b3fffa", "#3db5a6"); } }, 
    "mc_block_of_gold": { name: "Block of Gold", color: "#fceb42", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#fceb42", "#d4c533", "#ffffa1", "#c7b61c"); } },  
    "mc_block_of_iron": { name: "Block of Iron", color: "#e3e3e3", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#e3e3e3", "#b0b0b0", "#ffffff", "#c7c7c7"); } },     
    "mc_block_of_emerald": { name: "Block of Emerald", color: "#1fc442", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#1fc442", "#13852b", "#8aff9f", "#18a336"); } },   
    "mc_block_of_copper": { name: "Block of Copper", color: "#e0734a", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#e0734a", "#a34a29", "#ffb294", "#b85633"); } },  

    // --- OUTLINED BLOCKS & PHYSICS ---
    "mc_glass": { name: "Glass", color: "#a5e7e8", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#c8fcfd", "#ffffff"); } },
    "mc_slime_block": { name: "Slime Block", color: "#6cb854", behavior: behaviors.WALL, tick: slimeTick },
    "mc_honey_block": { name: "Honey Block", color: "#ebad34", behavior: behaviors.WALL, tick: honeyTick },
    "mc_concrete": { name: "Concrete", color: "#8a8a8a", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#8a8a8a", "#6b6b6b"); } },

    // --- NETHER / END / BEDROCK ---
    "mc_netherrack": { name: "Netherrack", color: ["#6b2626", "#591f1f"], behavior: behaviors.WALL },
    "mc_soul_sand": { name: "Soul Sand", color: ["#544033", "#453429"], behavior: behaviors.POWDER },
    "mc_ancient_debris": { name: "Ancient Debris", color: "#5c403d", behavior: behaviors.WALL, hardness: 0.95 },
    "mc_end_stone": { name: "End Stone", color: ["#cddb88", "#bcc97d"], behavior: behaviors.WALL },
    "mc_purpur_block": { name: "Purpur Block", color: ["#a172a1", "#946394"], behavior: behaviors.WALL },
    "mc_magma_cream": { name: "Magma Cream", color: ["#d98523", "#f2b055"], behavior: behaviors.POWDER },
    "mc_magma_block": { name: "Magma Block", color: ["#822b0f", "#e65c00"], behavior: behaviors.WALL, temp: 200 },
    "mc_obsidian": { name: "Obsidian", color: ["#151024", "#1e1633"], behavior: behaviors.WALL, hardness: 0.99 }, 
    "mc_bedrock": { name: "Bedrock", color: ["#171717", "#0a0a0a"], behavior: behaviors.WALL, hardness: 1.0 },   

    // --- UTILITY ---
    "mc_chest": { name: "Chest", color: "#5e4429", behavior: behaviors.WALL, tick: chestTick },
    "mc_furnace": { name: "Furnace", color: "#5e5e5e", behavior: behaviors.WALL },
    "mc_wool": { name: "Wool", color: "#e8e8e8", behavior: behaviors.WALL, burn: 90, burnTime: 10 } 
};

// 3. SAFE INJECTION ENGINE
for (let id in mcBlocks) {
    elements[id] = mcBlocks[id];
    elements[id].category = "Minecraft"; 
}

// 4. THE MINECRAFT REACTIONS ENGINE

// Water Reactions
if (!elements.mc_water.reactions) elements.mc_water.reactions = {};
elements.mc_water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" }; 
elements.mc_water.reactions.mc_dirt = { elem1: null, elem2: "mc_mud" }; 
elements.mc_water.reactions.mc_concrete_powder = { elem1: null, elem2: "mc_concrete" }; 
elements.mc_water.reactions.mc_sponge = { elem1: null, elem2: null };

// Lava Reactions (Fixed to burn flammables on contact!)
if (!elements.mc_lava.reactions) elements.mc_lava.reactions = {};
elements.mc_lava.reactions.mc_water = { elem1: "mc_obsidian", elem2: "steam" }; 
elements.mc_lava.reactions.mc_sand = { elem1: null, elem2: "mc_glass" };
elements.mc_lava.reactions.mc_oak_log = { elem1: "mc_lava", elem2: "fire" };
elements.mc_lava.reactions.mc_oak_planks = { elem1: "mc_lava", elem2: "fire" };
elements.mc_lava.reactions.mc_leaves = { elem1: "mc_lava", elem2: "fire" };
elements.mc_lava.reactions.mc_sponge = { elem1: "mc_lava", elem2: "fire" };
elements.mc_lava.reactions.mc_wool = { elem1: "mc_lava", elem2: "fire" };
elements.mc_lava.reactions.mc_bookshelf = { elem1: "mc_lava", elem2: "fire" };

// Bone Meal Agriculture
if (!elements.mc_bone_meal.reactions) elements.mc_bone_meal.reactions = {};
elements.mc_bone_meal.reactions.mc_dirt = { elem1: null, elem2: "mc_grass_block" };
elements.mc_bone_meal.reactions.mc_wheat_seeds = { elem1: null, elem2: "mc_wheat" };

// Furnace Smelting Engine (Fixed to output respective Minecraft Blocks!)
if (!elements.mc_furnace.reactions) elements.mc_furnace.reactions = {};
elements.mc_furnace.reactions.mc_iron_ore = { elem2: "mc_block_of_iron" };         
elements.mc_furnace.reactions.mc_gold_ore = { elem2: "mc_block_of_gold" };         
elements.mc_furnace.reactions.mc_copper_ore = { elem2: "mc_block_of_copper" };     
elements.mc_furnace.reactions.mc_diamond_ore = { elem2: "mc_block_of_diamond" };     
elements.mc_furnace.reactions.mc_emerald_ore = { elem2: "mc_block_of_emerald" };     
elements.mc_furnace.reactions.mc_redstone_ore = { elem2: "mc_redstone_dust" };     
elements.mc_furnace.reactions.mc_sand = { elem2: "mc_glass" };
elements.mc_furnace.reactions.mc_cobblestone = { elem2: "stone" };     
elements.mc_furnace.reactions.mc_oak_log = { elem2: "charcoal" };      

// Fire Reactions
if (elements.fire) {
    if (!elements.fire.reactions) elements.fire.reactions = {};
    elements.fire.reactions.mc_oak_planks = { elem1: "smoke", elem2: "mc_ash" };
    elements.fire.reactions.mc_oak_log = { elem1: "smoke", elem2: "mc_ash" };
    elements.fire.reactions.mc_wool = { elem1: "smoke", elem2: "mc_ash" };
}
