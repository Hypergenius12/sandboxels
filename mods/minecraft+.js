// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: Beveled Ores, Smart Textures & Expansions
// ==========================================

// 1. ADVANCED TICK FUNCTIONS
// Beveled Shiny Block: Bright in the Top-Left corner, dark outline elsewhere
function shinyBlockTick(pixel, inner, outer, highlight) {
    let leftAir = isEmpty(pixel.x - 1, pixel.y);
    let topAir = isEmpty(pixel.x, pixel.y - 1);
    let rightAir = isEmpty(pixel.x + 1, pixel.y);
    let bottomAir = isEmpty(pixel.x, pixel.y + 1);

    // Top-Left corner gets the bright shine
    if (leftAir && topAir) {
        pixel.color = highlight; 
    } 
    // Other exposed edges get the dark shadow outline
    else if (leftAir || topAir || rightAir || bottomAir) {
        pixel.color = outer; 
    } 
    // Inside stays the core color
    else {
        pixel.color = inner;
    }
}

// Basic solid outline for things like glass/slime
function outlineTick(pixel, inner, outer) {
    if (isEmpty(pixel.x, pixel.y - 1) || isEmpty(pixel.x, pixel.y + 1) || isEmpty(pixel.x - 1, pixel.y) || isEmpty(pixel.x + 1, pixel.y)) {
        pixel.color = outer;
    } else {
        pixel.color = inner;
    }
}

// Grass outline (Green top, dirt sides)
function grassBlockTick(pixel) {
    if (isEmpty(pixel.x, pixel.y - 1)) pixel.color = "#5b8738";
    else pixel.color = "#866043";
}

// Leaf transparency (deletes 20% of itself instantly to make holes)
function leafTick(pixel) {
    if (!pixel.leafHoled) {
        pixel.leafHoled = true;
        if (Math.random() < 0.20) deletePixel(pixel.x, pixel.y);
    }
}

// Wheat Growth (Changes seeds to wheat when on dirt/grass)
function cropTick(pixel) {
    if (Math.random() < 0.005) {
        var below = pixelMap[pixel.x]?.[pixel.y+1];
        if (below && (below.element === "dirt" || below.element === "grass_block" || below.element === "farmland" || below.element === "mc_dirt")) {
            changePixel(pixel, "wheat");
        }
    }
}

// 2. THE ELEMENT DATABASE
const mcBlocks = {
    // --- FLUIDS & GASES ---
    "water": { color: "#3F76E4", behavior: behaviors.LIQUID, state: "liquid", density: 1000 },
    "lava": { color: "#E65C00", behavior: behaviors.LIQUID, state: "liquid", density: 3000, temp: 1200 },
    "dragon_breath": { color: "#c631a0", behavior: behaviors.GAS, state: "gas", density: 1.5, temp: 300 },

    // --- POWDERS ---
    "sand": { color: ["#dbd3a0", "#d1c890"], behavior: behaviors.POWDER },
    "red_sand": { color: ["#a85622", "#9c4e1c"], behavior: behaviors.POWDER },
    "gravel": { color: ["#82807f", "#737170", "#636160"], behavior: behaviors.POWDER },
    "dirt": { color: ["#866043", "#75543b"], behavior: behaviors.POWDER },
    "farmland": { color: "#5e3e26", behavior: behaviors.POWDER },
    "redstone_dust": { color: "#d11111", behavior: behaviors.POWDER, conduct: 1 },
    "glowstone_dust": { color: "#fceb42", behavior: behaviors.POWDER },
    "bone_meal": { color: "#fcfcfc", behavior: behaviors.POWDER },
    "wheat_seeds": { color: "#3dc44a", behavior: behaviors.POWDER, tick: cropTick },
    "wheat": { color: ["#e3ca54", "#d1b638"], behavior: behaviors.WALL },

    // --- HD TEXTURE PATTERNS (8x8 Grids) ---
    "cobblestone": { 
        color: "#7a7a7a", behavior: behaviors.WALL,
        colorPattern: [
            "ccddbbce", "ecddbbcc",
            "bbccddee", "bbecddee",
            "eeddccbb", "eeddcebb",
            "cebbeedd", "ccbbeedd"
        ],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#5e5e5e", "e": "#474747" }
    },
    "stone_bricks": { 
        color: "#7d7d7d", behavior: behaviors.WALL,
        colorPattern: [
            "ddddddee", "ddddcdee",
            "ddecddbb", "ddccddbb",
            "eeeeeeee", "eeeeeeee",
            "ddddeedd", "ddcdeedd"
        ],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#7d7d7d", "e": "#5e5e5e" }
    },
    "bookshelf": {
        color: "#a18251", behavior: behaviors.WALL, burn: 80, burnTime: 40,
        colorPattern: [
            "wwwwwwww", "wwwwwwww",
            "rrbbggww", "rrbbggww",
            "wwwwwwww", "wwwwwwww",
            "ggbbrrww", "ggbbrrww"
        ],
        colorKey: { "w": "#856a42", "r": "#c43c3c", "b": "#3c50c4", "g": "#459e4e" }
    },

    // --- STANDARD TEXTURES (4x4 Grids) ---
    "oak_planks": { 
        color: "#a18251", behavior: behaviors.WALL, burn: 50, burnTime: 80,
        colorPattern: ["oooo", "oooo", "dddd", "dddd"],
        colorKey: { "o": "#a18251", "d": "#856a42" } 
    },
    "deepslate": { 
        color: "#3b3b40", behavior: behaviors.WALL,
        colorPattern: ["cddc", "dccd", "cdcd", "dcdc"], // Layered rocky noise
        colorKey: { "c": "#3b3b40", "d": "#27272b" }
    },
    "glowstone": { 
        color: "#e0b643", behavior: behaviors.WALL,
        colorPattern: ["yoyg", "oygy", "gyyo", "ygyo"], // Clumpy yellow/orange noise
        colorKey: { "y": "#fceb42", "o": "#e0b643", "g": "#f2cb63" }
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

    // --- BEVELED SHINY BLOCKS (Top-Left Highlight) ---
    // Usage: (pixel, innerColor, shadowColor, highlightColor)
    "block_of_diamond": { color: "#5de0cf", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#5de0cf", "#2da697", "#ffffff"); } },
    "block_of_gold": { color: "#fceb42", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#fceb42", "#d4c533", "#ffffff"); } },
    "block_of_iron": { color: "#e3e3e3", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#e3e3e3", "#b0b0b0", "#ffffff"); } },
    "block_of_emerald": { color: "#1fc442", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#1fc442", "#13852b", "#a8ffb0"); } },
    "block_of_copper": { color: "#e0734a", behavior: behaviors.WALL, tick: function(p) { shinyBlockTick(p, "#e0734a", "#a34a29", "#ffaa8a"); } },

    // --- OUTLINED BLOCKS ---
    "glass": { color: "#a5e7e8", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#c8fcfd", "#ffffff"); } },
    "slime_block": { color: "#6cb854", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#7bcf61", "#5c9e47"); } },
    "honey_block": { color: "#ebad34", behavior: behaviors.WALL, tick: function(p) { outlineTick(p, "#ffc824", "#e59410"); } },
    
    // --- NATURE, ICE & PLANTS ---
    "grass_block": { color: "#4B712F", behavior: behaviors.WALL, tick: grassBlockTick },
    "oak_leaves": { color: "#296a23", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "birch_leaves": { color: "#4b8c45", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "spruce_leaves": { color: "#1d4d19", behavior: behaviors.WALL, burn: 80, burnTime: 20, tick: leafTick },
    "oak_log": { color: "#362a1c", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "cactus": { color: "#1e5917", behavior: behaviors.WALL, burn: 20 },
    "pumpkin": { color: "#db7a14", behavior: behaviors.WALL },
    "ice": { color: "#a5d5e8", behavior: behaviors.WALL, tempHigh: 5, stateHigh: "water" },
    "packed_ice": { color: "#8abde0", behavior: behaviors.WALL, tempHigh: 20, stateHigh: "water" },

    // --- NETHER / END ---
    "netherrack": { color: ["#6b2626", "#591f1f"], behavior: behaviors.WALL },
    "soul_sand": { color: ["#544033", "#453429"], behavior: behaviors.POWDER },
    "ancient_debris": { color: "#5c403d", behavior: behaviors.WALL, hardness: 0.95 },
    "end_stone": { color: ["#cddb88", "#bcc97d"], behavior: behaviors.WALL },
    "purpur_block": { color: ["#a172a1", "#946394"], behavior: behaviors.WALL },
    "magma_cream": { color: ["#d98523", "#f2b055"], behavior: behaviors.POWDER },

    // --- UTILITY ---
    "tnt": { color: ["#d12828", "#e8e8e8"], behavior: behaviors.WALL, burn: 100, burnTime: 5, tempHigh: 150, stateHigh: "explosion" },
    "chest": { color: "#5e4429", behavior: behaviors.WALL },
    "furnace": { color: "#5e5e5e", behavior: behaviors.WALL },
};

// 3. SMART INJECTION ENGINE (Handles the mc_ prefixes automatically)
const getSafeId = (id) => elements[id] ? "mc_" + id : id;

for (let id in mcBlocks) {
    let safeId = getSafeId(id);
    elements[safeId] = mcBlocks[id];
    elements[safeId].category = "Minecraft"; 
}

// 4. THERMODYNAMICS & REACTIONS 
let safeWater = getSafeId("water");
let safeLava = getSafeId("lava");
let safeCobble = getSafeId("cobblestone");

if (!elements[safeWater].reactions) elements[safeWater].reactions = {};
elements[safeWater].reactions[safeLava] = { elem1: "steam", elem2: safeCobble };
