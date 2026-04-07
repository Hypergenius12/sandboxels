// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: Native Textures & Outlines (100+ Items)
// ==========================================

// 1. THERMODYNAMICS & CORE
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };
if (!elements.steam.reactions) elements.steam.reactions = {};

// 2. HELPER FUNCTIONS FOR BORDERS
// This gives elements that "solid block outline" when touching air
function drawBlockOutline(pixel, innerColor, outerColor) {
    if (isEmpty(pixel.x, pixel.y - 1) || isEmpty(pixel.x, pixel.y + 1) || isEmpty(pixel.x - 1, pixel.y) || isEmpty(pixel.x + 1, pixel.y)) {
        pixel.color = outerColor;
    } else {
        pixel.color = innerColor;
    }
}

// Custom tick for Grass Block (Green on top, dirt below)
function grassBlockTick(pixel) {
    if (isEmpty(pixel.x, pixel.y - 1)) {
        pixel.color = "#5b8738"; // Grass Top
    } else {
        pixel.color = "#866043"; // Dirt Bottom
    }
}

// 3. THE ELEMENT DATABASE
const mcBlocks = {
    // --- FLUIDS & GASES ---
    "mc_water": { color: "#3F76E4", behavior: behaviors.LIQUID, state: "liquid", density: 1000 },
    "mc_lava": { color: "#E65C00", behavior: behaviors.LIQUID, state: "liquid", density: 3000, temp: 1200, reactions: { "mc_water": { elem1: "mc_obsidian", elem2: "steam" } } },
    "mc_steam": { color: "#FFFFFF", behavior: behaviors.GAS, state: "gas", density: 0.5 },
    "mc_dragon_breath": { color: "#c631a0", behavior: behaviors.GAS, state: "gas", density: 1.5, temp: 300 },

    // --- POWDERS ---
    "mc_sand": { color: "#dbd3a0", behavior: behaviors.POWDER },
    "mc_red_sand": { color: "#a85622", behavior: behaviors.POWDER },
    "mc_gravel": { color: "#82807f", behavior: behaviors.POWDER },
    "mc_dirt": { color: "#866043", behavior: behaviors.POWDER },
    "mc_clay": { color: "#9fa5b0", behavior: behaviors.POWDER },
    "mc_snow": { color: "#FFFFFF", behavior: behaviors.POWDER, state: "solid", density: 100, meltPoint: 0, stateHigh: "water" },
    "mc_redstone_dust": { color: "#d11111", behavior: behaviors.POWDER, conduct: 1 },
    "mc_gunpowder": { color: "#454545", behavior: behaviors.POWDER, burn: 100, burnTime: 5, tempHigh: 200, stateHigh: "explosion" },
    "mc_glowstone_dust": { color: "#fceb42", behavior: behaviors.POWDER },
    "mc_sugar": { color: "#f2f2f2", behavior: behaviors.POWDER, dissolve: true },
    "mc_bone_meal": { color: "#fcfcfc", behavior: behaviors.POWDER },
    "mc_wheat_seeds": { color: "#3dc44a", behavior: behaviors.POWDER },

    // --- BLOCKS WITH NATIVE TEXTURE PATTERNS (colorPattern) ---
    "mc_cobblestone": { 
        color: "#7a7a7a", behavior: behaviors.WALL,
        colorPattern: ["cdbc", "bcde", "edcb", "cbed"],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#5e5e5e", "e": "#474747" }
    },
    "mc_stone_bricks": { 
        color: "#7d7d7d", behavior: behaviors.WALL,
        colorPattern: ["ddde", "dcdb", "eeee", "dded"],
        colorKey: { "b": "#7a7a7a", "c": "#6b6b6b", "d": "#7d7d7d", "e": "#5e5e5e" }
    },
    "mc_bricks": { 
        color: "#cb4141", behavior: behaviors.WALL,
        colorPattern: ["rrrrrwrrrrr", "wwwwwwwwwww", "rrrwrrrrwrr", "wwwwwwwwwww"],
        colorKey: { "r": "#cb4141", "w": "#bababa" }
    },
    "mc_oak_planks": { 
        color: "#a18251", behavior: behaviors.WALL, burn: 50, burnTime: 80,
        colorPattern: ["oooo", "oooo", "dddd"],
        colorKey: { "o": "#a18251", "d": "#856a42" } // Horizontal wood lines
    },
    "mc_birch_planks": { 
        color: "#d7c49a", behavior: behaviors.WALL, burn: 40, burnTime: 90,
        colorPattern: ["bbbb", "bbbb", "dddd"],
        colorKey: { "b": "#d7c49a", "d": "#c5b38e" }
    },
    "mc_bookshelf": {
        color: "#a18251", behavior: behaviors.WALL, burn: 80, burnTime: 40,
        colorPattern: ["wwww", "rbgw", "wwww", "gbrw"],
        colorKey: { "w": "#856a42", "r": "#c43c3c", "b": "#3c50c4", "g": "#459e4e" }
    },

    // --- ORES WITH NATIVE TEXTURE PATTERNS ---
    "mc_coal_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["sscs", "ssss", "csss", "sssc"], colorKey: { "s": "#7a7a7a", "c": "#141414" } },
    "mc_iron_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["ssis", "isss", "sssi", "ssis"], colorKey: { "s": "#7a7a7a", "i": "#d8af93" } },
    "mc_gold_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["ssgs", "ssss", "gsss", "sssg"], colorKey: { "s": "#7a7a7a", "g": "#fceb42" } },
    "mc_diamond_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["ssds", "dsss", "sssd", "ssds"], colorKey: { "s": "#7a7a7a", "d": "#5de0cf" } },
    "mc_redstone_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["ssrs", "rsss", "sssr", "ssrs"], colorKey: { "s": "#7a7a7a", "r": "#d11111" } },
    "mc_lapis_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["ssls", "lsss", "sssl", "ssls"], colorKey: { "s": "#7a7a7a", "l": "#2c64b5" } },
    "mc_emerald_ore": { color: "#7a7a7a", behavior: behaviors.WALL, colorPattern: ["sses", "esss", "ssse", "sses"], colorKey: { "s": "#7a7a7a", "e": "#1fc442" } },

    // --- FULL BLOCKS WITH AIR-TOUCH OUTLINES (Tick-based) ---
    "mc_glass": { color: "#a5e7e8", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#c8fcfd", "#ffffff"); } },
    "mc_slime_block": { color: "#6cb854", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#7bcf61", "#5c9e47"); } },
    "mc_honey_block": { color: "#ebad34", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#ffc824", "#e59410"); } },
    "mc_block_of_diamond": { color: "#5de0cf", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#5de0cf", "#2da697"); } },
    "mc_block_of_gold": { color: "#fceb42", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#fceb42", "#d4c533"); } },
    "mc_block_of_iron": { color: "#e3e3e3", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#e3e3e3", "#b0b0b0"); } },
    "mc_block_of_emerald": { color: "#1fc442", behavior: behaviors.WALL, tick: function(pixel) { drawBlockOutline(pixel, "#1fc442", "#13852b"); } },

    // --- UNTEXTURED & OTHER NATURE BLOCKS ---
    "mc_grass_block": { color: "#4B712F", behavior: behaviors.WALL, tick: grassBlockTick },
    "mc_stone": { color: "#7D7D7D", behavior: behaviors.WALL },
    "mc_deepslate": { color: "#3b3b40", behavior: behaviors.WALL },
    "mc_calcite": { color: "#e3e3e0", behavior: behaviors.WALL },
    "mc_tuff": { color: "#6c7068", behavior: behaviors.WALL },
    "mc_diorite": { color: "#e0e0e0", behavior: behaviors.WALL },
    "mc_granite": { color: "#9e6857", behavior: behaviors.WALL },
    "mc_andesite": { color: "#808080", behavior: behaviors.WALL },
    "mc_obsidian": { color: "#151024", behavior: behaviors.WALL, hardness: 0.99 },
    "mc_bedrock": { color: "#171717", behavior: behaviors.WALL, hardness: 1.0 },

    "mc_oak_log": { color: "#362a1c", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "mc_oak_leaves": { color: "#296a23", behavior: behaviors.WALL, burn: 80, burnTime: 20 },
    "mc_cactus": { color: "#1e5917", behavior: behaviors.WALL, burn: 20 },
    "mc_pumpkin": { color: "#db7a14", behavior: behaviors.WALL },
    "mc_melon": { color: "#608a28", behavior: behaviors.WALL },

    // --- NETHER & END ---
    "mc_netherrack": { color: "#6b2626", behavior: behaviors.WALL },
    "mc_soul_sand": { color: "#544033", behavior: behaviors.POWDER },
    "mc_glowstone": { color: "#e0b643", behavior: behaviors.WALL },
    "mc_magma_block": { color: "#822b0f", behavior: behaviors.WALL, temp: 200 },
    "mc_ancient_debris": { color: "#5c403d", behavior: behaviors.WALL, hardness: 0.95 },
    "mc_nether_bricks": { color: "#36181b", behavior: behaviors.WALL },
    "mc_end_stone": { color: "#cddb88", behavior: behaviors.WALL },
    "mc_purpur_block": { color: "#a172a1", behavior: behaviors.WALL },
    "mc_end_portal_frame": { color: "#254031", behavior: behaviors.WALL, hardness: 0.99 },

    // --- UTILITY ---
    "mc_tnt": { color: "#d12828", behavior: behaviors.WALL, burn: 100, burnTime: 5, tempHigh: 150, stateHigh: "explosion" },
    "mc_chest": { color: "#5e4429", behavior: behaviors.WALL },
    "mc_furnace": { color: "#5e5e5e", behavior: behaviors.WALL },
    "mc_dispenser": { color: "#636363", behavior: behaviors.WALL }
};

// 4. SAFE INJECTION ENGINE
for (let id in mcBlocks) {
    if (!elements[id]) { 
        elements[id] = mcBlocks[id];
        elements[id].category = "Minecraft"; 
    }
}
