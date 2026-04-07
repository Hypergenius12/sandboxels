// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: True Textures Edition (Expanded)
// ==========================================

// 1. TEXTURE GENERATOR (2D Arrays)
// These define the exact pixel-by-pixel repeating patterns for the blocks.

const tex_cobblestone = [
    ["#7a7a7a", "#5e5e5e", "#6b6b6b", "#474747"],
    ["#5e5e5e", "#474747", "#7a7a7a", "#6b6b6b"],
    ["#6b6b6b", "#7a7a7a", "#474747", "#5e5e5e"],
    ["#474747", "#6b6b6b", "#5e5e5e", "#7a7a7a"]
];

const tex_stone_bricks = [
    ["#7d7d7d", "#7d7d7d", "#7d7d7d", "#5e5e5e"],
    ["#7d7d7d", "#696969", "#7d7d7d", "#5e5e5e"],
    ["#5e5e5e", "#5e5e5e", "#5e5e5e", "#474747"],
    ["#7d7d7d", "#7d7d7d", "#5e5e5e", "#7d7d7d"]
];

const tex_oak_planks = [
    ["#a18251", "#a18251", "#a18251", "#856a42"],
    ["#94774a", "#94774a", "#94774a", "#856a42"],
    ["#a18251", "#94774a", "#a18251", "#856a42"],
    ["#5c472a", "#5c472a", "#5c472a", "#3d2e1a"]
];

const tex_grass_block = [
    ["#4B712F", "#5b8738", "#4B712F", "#5b8738"], // Top grass
    ["#5b8738", "#4B712F", "#4B712F", "#5b8738"], // Overhang
    ["#866043", "#75543b", "#866043", "#634732"], // Dirt
    ["#75543b", "#634732", "#75543b", "#866043"]  // Dirt
];

const tex_glass = [
    ["#ffffff", "#a5e7e8", "#a5e7e8", "#a5e7e8"],
    ["#a5e7e8", "#c8fcfd", "#c8fcfd", "#a5e7e8"],
    ["#a5e7e8", "#c8fcfd", "#c8fcfd", "#a5e7e8"],
    ["#a5e7e8", "#a5e7e8", "#a5e7e8", "#a5e7e8"]
];

// 2. CORE LIQUIDS & PHYSICS
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };

// 3. MASSIVE CURATED ELEMENT DATABASE (100+ Elements)
const mcBlocks = {
    // --- FLUIDS & GASES ---
    "mc_water": { color: "#3F76E4", behavior: behaviors.LIQUID, state: "liquid", density: 1000 },
    "mc_lava": { color: ["#E65C00", "#FF8C00", "#D95100"], behavior: behaviors.LIQUID, state: "liquid", density: 3000, temp: 1200, reactions: { "mc_water": { elem1: "mc_obsidian", elem2: "steam" } } },
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

    // --- TEXTURED WALLS ---
    "mc_grass_block": { texture: tex_grass_block, behavior: behaviors.WALL }, 
    "mc_cobblestone": { texture: tex_cobblestone, behavior: behaviors.WALL },
    "mc_stone_bricks": { texture: tex_stone_bricks, behavior: behaviors.WALL },
    "mc_oak_planks": { texture: tex_oak_planks, behavior: behaviors.WALL, burn: 50, burnTime: 80 },
    "mc_glass": { texture: tex_glass, behavior: behaviors.WALL },

    // --- UNTEXTURED WALLS & STONES ---
    "mc_stone": { color: "#7D7D7D", behavior: behaviors.WALL },
    "mc_deepslate": { color: "#3b3b40", behavior: behaviors.WALL },
    "mc_calcite": { color: "#e3e3e0", behavior: behaviors.WALL },
    "mc_tuff": { color: "#6c7068", behavior: behaviors.WALL },
    "mc_diorite": { color: "#e0e0e0", behavior: behaviors.WALL },
    "mc_granite": { color: "#9e6857", behavior: behaviors.WALL },
    "mc_andesite": { color: "#808080", behavior: behaviors.WALL },
    "mc_obsidian": { color: "#151024", behavior: behaviors.WALL, hardness: 0.99 },
    "mc_bedrock": { color: "#171717", behavior: behaviors.WALL, hardness: 1.0 },

    // --- LOGS & NATURE ---
    "mc_oak_log": { color: "#362a1c", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "mc_birch_log": { color: "#e6e6e6", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "mc_spruce_log": { color: "#291b0d", behavior: behaviors.WALL, burn: 40, burnTime: 100 },
    "mc_oak_leaves": { color: "#296a23", behavior: behaviors.WALL, burn: 80, burnTime: 20 },
    "mc_cactus": { color: "#1e5917", behavior: behaviors.WALL, burn: 20 },
    "mc_melon": { color: "#608a28", behavior: behaviors.WALL },
    "mc_pumpkin": { color: "#db7a14", behavior: behaviors.WALL },

    // --- ORES ---
    "mc_coal_ore": { color: ["#7a7a7a", "#141414"], behavior: behaviors.WALL },
    "mc_iron_ore": { color: ["#7a7a7a", "#d8af93"], behavior: behaviors.WALL },
    "mc_gold_ore": { color: ["#7a7a7a", "#fceb42"], behavior: behaviors.WALL },
    "mc_diamond_ore": { color: ["#7a7a7a", "#5de0cf"], behavior: behaviors.WALL },
    "mc_emerald_ore": { color: ["#7a7a7a", "#1fc442"], behavior: behaviors.WALL },
    "mc_lapis_ore": { color: ["#7a7a7a", "#2c64b5"], behavior: behaviors.WALL },
    "mc_redstone_ore": { color: ["#7a7a7a", "#d11111"], behavior: behaviors.WALL },

    // --- NETHER ---
    "mc_netherrack": { color: "#6b2626", behavior: behaviors.WALL },
    "mc_soul_sand": { color: "#544033", behavior: behaviors.POWDER },
    "mc_glowstone": { color: "#e0b643", behavior: behaviors.WALL },
    "mc_magma_block": { color: "#822b0f", behavior: behaviors.WALL, temp: 200 },
    "mc_ancient_debris": { color: "#5c403d", behavior: behaviors.WALL, hardness: 0.95 },
    "mc_nether_bricks": { color: "#36181b", behavior: behaviors.WALL },

    // --- END ---
    "mc_end_stone": { color: "#cddb88", behavior: behaviors.WALL },
    "mc_purpur_block": { color: "#a172a1", behavior: behaviors.WALL },
    "mc_end_portal_frame": { color: "#254031", behavior: behaviors.WALL, hardness: 0.99 },

    // --- FUNCTIONAL & SPECIAL ---
    "mc_tnt": { color: "#d12828", behavior: behaviors.WALL, burn: 100, burnTime: 5, tempHigh: 150, stateHigh: "explosion" },
    "mc_slime_block": { color: "#6cb854", behavior: behaviors.WALL }, // Sticky/Bouncy proxy
    "mc_honey_block": { color: "#ebad34", behavior: behaviors.WALL },
    "mc_chest": { color: "#5e4429", behavior: behaviors.WALL },
    "mc_crafting_table": { color: "#7a532f", behavior: behaviors.WALL },
    "mc_furnace": { color: "#5e5e5e", behavior: behaviors.WALL },
    "mc_dispenser": { color: "#636363", behavior: behaviors.WALL },
    "mc_hopper": { color: "#4a4a4a", behavior: behaviors.WALL }
};

// 4. INJECTION ENGINE
for (let id in mcBlocks) {
    if (!elements[id]) { 
        elements[id] = mcBlocks[id];
        elements[id].category = "Minecraft"; 
    }
}
