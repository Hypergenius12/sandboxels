// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: Flattened Deepslate, Fixed Lava & Expansion
// ==========================================

// 1. ADVANCED TICK FUNCTIONS

// Perfect Beveled Shiny Block: Rotated L, 2 pixels inside, bright color variant
function shinyBlockTick(pixel, inner, outer, highlight) {
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

    let isL = (t2 && (l2 || l3)) || (l2 && (t2 || t3));

    if (isL) {
        pixel.color = highlight; 
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

function grassBlockTick(pixel) {
    if (isEmpty(pixel.x, pixel.y - 1)) pixel.color = "#5b8738";
    else pixel.color = "#866043";
}

function leafTick(pixel) {
    if (!pixel.leafHoled) {
        pixel.leafHoled = true;
        if (Math.random() < 0.20) deletePixel(pixel.x, pixel.y);
    }
}

function cropTick(pixel) {
    if (Math.random() < 0.005) {
        var below = pixelMap[pixel.x]?.[pixel.y+1];
        if (below && (below.element === "dirt" || below.element === "grass_block" || below.element === "farmland" || below.element === "mc_dirt")) {
            changePixel(pixel, "wheat");
        }
    }
}

// 2. MASSIVE ELEMENT DATABASE
const mcBlocks = {
    // --- FLUIDS & GASES ---
    "water": { color: "#3F76E4", behavior: behaviors.LIQUID, state: "liquid", density: 1000 },
    // Reverted Lava to the flowing, glowing color array!
    "lava": { color: ["#E65C00", "#FF8C00", "#D95100"], behavior: behaviors.LIQUID, state: "liquid", density: 3000, temp: 1200 },
    "dragon_breath": { color: "#c631a0", behavior: behaviors.GAS, state: "gas", density: 1.5, temp: 300 },
    "smoke": { color: "#545454", behavior: behaviors.GAS, state: "gas", density: 0.8 }, 

    // --- POWDERS ---
    "sand": { color: ["#dbd3a0", "#d1c890"], behavior: behaviors.POWDER },
    "red_sand": { color: ["#a85622", "#9c4e1c"], behavior: behaviors.POWDER },
    "gravel": { color: ["#82807f", "#737170", "#636160"], behavior: behaviors.POWDER },
    "dirt": { color: ["#866043", "#75543b"], behavior: behaviors.POWDER },
    "farmland": { color: "#5e3e26", behavior: behaviors.POWDER },
    "mud": { color: ["#3d291b", "#332217"], behavior: behaviors.POWDER }, 
    "ash": { color: "#9c9c9c", behavior: behaviors.POWDER }, 
    "redstone_dust": { color: "#d11111", behavior: behaviors.POWDER, conduct: 1 },
    "glowstone_dust": { color: ["#fceb42", "#e0b643"], behavior: behaviors.POWDER },
    "bone_meal": { color: "#fcfcfc", behavior: behaviors.POWDER },
    "wheat_seeds": { color: "#3dc44a", behavior: behaviors.POWDER, tick: cropTick },
    "concrete_powder": { color: "#a8a8a8", behavior: behaviors.POWDER }, // Added for reaction

    // --- NATURE BLOCKS ---
    "wheat": { color: ["#e3ca54", "#d1b638"], behavior: behaviors.WALL },
    "grass_block": { color: "#4B712F", behavior: behaviors.WALL, tick: grassBlockTick },
    "oak_leaves": { color: "#296a23", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "birch_leaves": { color: "#4b8c45", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "spruce_leaves": { color: "#1d4d19", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "oak_log": { color: "#362a1c", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "cactus": { color: "#1e5917", behavior: behaviors.WALL, burn: 20 },
    "pumpkin": { color: "#db7a14", behavior: behaviors.WALL },
    "ice": { color: "#a5d5e8", behavior: behaviors.WALL, tempHigh: 5, stateHigh: "water" },
    "packed_ice": { color: "#8abde0", behavior: behaviors.WALL, tempHigh: 20, stateHigh: "water" },
    "sponge": { color: "#ded147", behavior: behaviors.WALL }, 

    // --- HD TEXTURE PATTERNS (8x8 Grids) ---
    "cobblestone": { 
        color: "#7a7a7a", behavior: behaviors.WALL,
        colorPattern: [ // Wavy, interlocking organic lumps
            "bccbdeed", "cbbeddec", "cddecbbc", "deedbccb",
            "deedbccb", "cddecbbc", "cbbeddec", "bccbdeed"
        ],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#5e5e5e", "e": "#474747" }
    },
    "stone_bricks": { 
        color: "#7d7d7d", behavior: behaviors.WALL,
        colorPattern: [ 
            "ddddeeed", "ddcdeeed", "ddecddbb", "eeeeeeee",
            "edddddde", "eddcdeee", "bbddecdd", "eeeeeeee"
        ],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#7d7d7d", "e": "#5e5e5e" }
    },
    "deepslate": { 
        color: "#3b3b40", behavior: behaviors.WALL,
        colorPattern: [ // Flattened, horizontal cobble layers!
            "ccddddee", "eeddccdd", "ddccddcc", "eeddddee",
            "ddccddcc", "eeddccdd", "ccddddee", "ddccddcc"
        ],
        colorKey: { "c": "#27272b", "d": "#3b3b40", "e": "#4f4f54" }
    },
    "glowstone": { 
        color: "#e0b643", behavior: behaviors.WALL,
        colorPattern: [ // 8x8 Golden rocky noise
            "yygoydoy", "godyyoog", "oygdggyy", "yoyoodyg",
            "dgyyoyog", "yodygoyd", "oyggyyoo", "godyyody"
        ],
        colorKey: { "y": "#fceb42", "o": "#e0b643", "g": "#f2cb63", "d": "#b88a21" }
    },
    "bookshelf": {
        color: "#a18251", behavior: behaviors.WALL, burn: 80, burnTime: 40,
        colorPattern: [
            "wwwwwwww", "wwwwwdww", "rrbbggww", "rrbbggww",
            "wwwwwwww", "wwdwwwww", "ggbbrrww", "ggbbrrww"
        ],
        colorKey: { "w": "#856a42", "r": "#c43c3c", "b": "#3c50c4", "g": "#459e4e", "d": "#6e522d" }
    },
    "tnt": { 
        color: "#d12828", behavior: behaviors.WALL, burn: 100, burnTime: 5, tempHigh: 150, stateHigh: "explosion",
        colorPattern: [ // Fixed TNT! Red block with white label band
            "rrrrrrrr", "rdrrdrrd", "wwwwwwww", "wbwbwwbw",
            "wwwwwwww", "rdrrdrrd", "rrrrrrrr", "rdrrdrrd"
        ],
        colorKey: { "r": "#d12828", "d": "#9c1b1b", "w": "#e8e8e8", "b": "#242424" }
    },

    // --- STANDARD TEXTURES (4x4 Grids) ---
    "oak_planks": { 
        color: "#a18251", behavior: behaviors.WALL, burn: 50, burnTime: 80,
        colorPattern: ["oooe", "oooe", "eeoe", "oooo"],
        colorKey: { "o": "#a18251", "e": "#856a42" } 
    },
    "amethyst_block": {
        color: "#9a5cc6", behavior: behaviors.WALL,
        colorPattern: ["ppld", "ldpp", "plpd", "dplp"],
        colorKey: { "p": "#9a5cc6", "l": "#b382d6", "d": "#7a41a3" }
    },

    // --- VANILLA ARRAY ORES ---
    "coal_ore": { color: ["#7a7a7a", "#141414", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "iron_ore": { color: ["#7a7a7a", "#d8af93", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "gold_ore": { color: ["#7a7a7a", "#fceb42", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "diamond_ore": { color: ["#7a7a7a", "#5de0cf", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "redstone_ore": { color: ["#7a7a7a", "#d11111", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "emerald_ore": { color: ["#7a7a7a", "#1fc442", "#7a7a7a", "#7a7a7a"], behavior: behaviors.WALL },
    "copper_ore": { color: ["#7a7a7a", "#e0734a", "#7a7a7a", "#5de0a1"], behavior: behaviors.WALL },

    // --- BEVELED SHINY BLOCKS (L-Shape, InnerColor, OuterColor, BRIGHT Highlight) ---
    "block_of_diamond": { color: "#5de0cf", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#5de0cf", "#2da697", "#b3fffa"); } }, 
    "block_of_gold": { color: "#fceb42", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#fceb42", "#d4c533", "#ffffa1"); } },    
    "block_of_iron": { color: "#e3e3e3", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#e3e3e3", "#b0b0b0", "#ffffff"); } },      
    "block_of_emerald": { color: "#1fc442", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#1fc442", "#13852b", "#8aff9f"); } },   
    "block_of_copper": { color: "#e0734a", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#e0734a", "#a34a29", "#ffb294"); } },    

    // --- OUTLINED BLOCKS ---
    "glass": { color: "#a5e7e8", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#c8fcfd", "#ffffff"); } },
    "slime_block": { color: "#6cb854", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#7bcf61", "#5c9e47"); } },
    "honey_block": { color: "#ebad34", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#ffc824", "#e59410"); } },
    "concrete": { color: "#8a8a8a", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#8a8a8a", "#6b6b6b"); } },

    // --- NETHER / END / BEDROCK ---
    "netherrack": { color: ["#6b2626", "#591f1f"], behavior: behaviors.WALL },
    "soul_sand": { color: ["#544033", "#453429"], behavior: behaviors.POWDER },
    "ancient_debris": { color: "#5c403d", behavior: behaviors.WALL, hardness: 0.95 },
    "end_stone": { color: ["#cddb88", "#bcc97d"], behavior: behaviors.WALL },
    "purpur_block": { color: ["#a172a1", "#946394"], behavior: behaviors.WALL },
    "magma_cream": { color: ["#d98523", "#f2b055"], behavior: behaviors.POWDER },
    "obsidian": { color: ["#151024", "#1e1633"], behavior: behaviors.WALL, hardness: 0.99 }, 
    "bedrock": { color: ["#171717", "#0a0a0a"], behavior: behaviors.WALL, hardness: 1.0 },   

    // --- UTILITY ---
    "chest": { color: "#5e4429", behavior: behaviors.WALL },
    "furnace": { color: "#5e5e5e", behavior: behaviors.WALL },
    "wool": { color: "#e8e8e8", behavior: behaviors.WALL, burn: 90, burnTime: 10 } 
};

// 3. SMART INJECTION ENGINE (Safely mounts arrays)
const getSafeId = (id) => elements[id] ? "mc_" + id : id;

for (let id in mcBlocks) {
    let safeId = getSafeId(id);
    elements[safeId] = mcBlocks[id];
    elements[safeId].category = "Minecraft"; 
}

// 4. THE MINECRAFT REACTIONS ENGINE
let safeWater = getSafeId("water");
let safeLava = getSafeId("lava");
let safeDirt = getSafeId("dirt");
let safeSand = getSafeId("sand");
let safeSponge = getSafeId("sponge");
let safeConcretePowder = getSafeId("concrete_powder");

// Water Reactions
if (!elements[safeWater].reactions) elements[safeWater].reactions = {};
// When Water touches Lava, it creates Cobblestone and Steam!
elements[safeWater].reactions[safeLava] = { elem1: "steam", elem2: getSafeId("cobblestone") }; 
elements[safeWater].reactions[safeDirt] = { elem1: null, elem2: getSafeId("mud") }; 
elements[safeWater].reactions[safeConcretePowder] = { elem1: null, elem2: getSafeId("concrete") }; // Hardens Concrete!
elements[safeWater].reactions[safeSponge] = { elem1: null, elem2: null }; 

// Lava Reactions
if (!elements[safeLava].reactions) elements[safeLava].reactions = {};
// When Lava dives into Water, it cools into Obsidian!
elements[safeLava].reactions[safeWater] = { elem1: getSafeId("obsidian"), elem2: "steam" }; 
elements[safeLava].reactions[safeSand] = { elem1: null, elem2: getSafeId("glass") }; // Smelts Sand

// Fire Reactions
if (elements.fire) {
    if (!elements.fire.reactions) elements.fire.reactions = {};
    elements.fire.reactions[getSafeId("oak_planks")] = { elem1: getSafeId("smoke"), elem2: getSafeId("ash") };
    elements.fire.reactions[getSafeId("oak_log")] = { elem1: getSafeId("smoke"), elem2: getSafeId("ash") };
    elements.fire.reactions[getSafeId("wool")] = { elem1: getSafeId("smoke"), elem2: getSafeId("ash") };
}
