// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: Stable & Curated Textures
// ==========================================

// 1. CORE LIQUIDS & THERMODYNAMICS
// Safely injecting cross-reactions with vanilla elements
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };

// 2. CURATED ELEMENT DATABASE (FIXED & EXPANDED)
const mcBlocks = {
    // Fluids
    "mc_water": { color: "#3F76E4", behavior: behaviors.LIQUID, state: "liquid", density: 1000 },
    "mc_lava": { color: ["#E65C00", "#FF8C00", "#D95100"], behavior: behaviors.LIQUID, state: "liquid", density: 3000, temp: 1200, reactions: { "mc_water": { elem1: "mc_obsidian", elem2: "steam" } } },
    
    // Natural Terrain (Powders)
    "mc_sand": { color: ["#dbd3a0", "#d1c890", "#c2b87e"], behavior: behaviors.POWDER },
    "mc_red_sand": { color: ["#a85622", "#9c4e1c", "#8c4416"], behavior: behaviors.POWDER },
    "mc_gravel": { color: ["#82807f", "#737170", "#636160", "#545352"], behavior: behaviors.POWDER },
    "mc_dirt": { color: ["#866043", "#75543b", "#634732"], behavior: behaviors.POWDER },
    "mc_clay": { color: ["#9fa5b0", "#8e94a1", "#7e848f"], behavior: behaviors.POWDER },
    "mc_snow": { color: "#FFFFFF", behavior: behaviors.POWDER, state: "solid", density: 100, meltPoint: 0, stateHigh: "water" },

    // Natural Terrain (Walls / Static Blocks)
    "mc_grass_block": { color: ["#4B712F", "#5b8738", "#866043", "#75543b"], behavior: behaviors.WALL }, // Textured to look like a block (green top, dirt sides)
    "mc_mycelium": { color: ["#7a6c7d", "#695b6b", "#866043"], behavior: behaviors.WALL },
    "mc_podzol": { color: ["#5e4429", "#4a3520", "#866043"], behavior: behaviors.WALL },
    
    // Stones (Textured Walls)
    "mc_stone": { color: "#7D7D7D", behavior: behaviors.WALL },
    "mc_cobblestone": { color: ["#7a7a7a", "#6b6b6b", "#5e5e5e", "#474747"], behavior: behaviors.WALL },
    "mc_stone_bricks": { color: ["#7d7d7d", "#757575", "#696969", "#5e5e5e"], behavior: behaviors.WALL },
    "mc_deepslate": { color: ["#3b3b40", "#313136", "#27272b"], behavior: behaviors.WALL },
    "mc_obsidian": { color: ["#151024", "#1e1633", "#100c1c", "#281b45"], behavior: behaviors.WALL, hardness: 0.99 },
    "mc_bedrock": { color: ["#171717", "#121212", "#0a0a0a", "#212121"], behavior: behaviors.WALL, hardness: 1.0 },

    // Wood Types (Textured Planks)
    "mc_oak_planks": { color: ["#a18251", "#94774a", "#856a42"], behavior: behaviors.WALL, state: "solid", burn: 50, burnTime: 80 },
    "mc_birch_planks": { color: ["#d7c49a", "#c5b38e"], behavior: behaviors.WALL, state: "solid", burn: 40, burnTime: 90 },
    "mc_spruce_planks": { color: ["#685333", "#5c492d"], behavior: behaviors.WALL, state: "solid", burn: 60, burnTime: 70 },
    "mc_dark_oak_planks": { color: ["#422a14", "#3a2511"], behavior: behaviors.WALL, state: "solid", burn: 70, burnTime: 60 },
    "mc_acacia_planks": { color: ["#b05e3c", "#9c5335"], behavior: behaviors.WALL, state: "solid", burn: 55, burnTime: 75 },
    "mc_jungle_planks": { color: ["#a87850", "#956a47"], behavior: behaviors.WALL, state: "solid", burn: 45, burnTime: 85 },
    
    // Ores (Mixing stone base with mineral colors)
    "mc_coal_ore": { color: ["#7a7a7a", "#6b6b6b", "#1f1f1f", "#141414"], behavior: behaviors.WALL },
    "mc_iron_ore": { color: ["#7a7a7a", "#6b6b6b", "#d8af93", "#c29d84"], behavior: behaviors.WALL },
    "mc_gold_ore": { color: ["#7a7a7a", "#6b6b6b", "#fceb42", "#e3d33b"], behavior: behaviors.WALL },
    "mc_diamond_ore": { color: ["#7a7a7a", "#6b6b6b", "#5de0cf", "#4bc2b2"], behavior: behaviors.WALL },
    "mc_lapis_ore": { color: ["#7a7a7a", "#6b6b6b", "#2c64b5", "#225191"], behavior: behaviors.WALL },
    "mc_redstone_ore": { color: ["#7a7a7a", "#6b6b6b", "#d11111", "#a80b0b"], behavior: behaviors.WALL },
    
    // Pure Mineral Blocks (Textured Walls)
    "mc_block_of_coal": { color: ["#1f1f1f", "#141414"], behavior: behaviors.WALL },
    "mc_block_of_iron": { color: ["#e3e3e3", "#d6d6d1"], behavior: behaviors.WALL },
    "mc_block_of_gold": { color: ["#fceb42", "#e3d33b"], behavior: behaviors.WALL },
    "mc_block_of_diamond": { color: ["#5de0cf", "#4bc2b2"], behavior: behaviors.WALL },
    
    // Nether & End
    "mc_netherrack": { color: ["#6b2626", "#591f1f", "#471818", "#782b2b"], behavior: behaviors.WALL },
    "mc_soul_sand": { color: ["#544033", "#453429", "#36281f"], behavior: behaviors.POWDER },
    "mc_glowstone": { color: ["#f2cb63", "#e0b643", "#c79e2c"], behavior: behaviors.WALL },
    "mc_end_stone": { color: ["#deed93", "#cddb88", "#bcc97d", "#e3f0a1"], behavior: behaviors.WALL },
    
    // Special Blocks (Walls)
    "mc_chest": { color: ["#866043", "#75543b", "#5e4429"], behavior: behaviors.WALL }, // Brown shades for wood
    "mc_furnace": { color: ["#7d7d7d", "#5e5e5e", "#474747"], behavior: behaviors.WALL }, // Gray shades for stone
    "mc_glass": { color: "#e8ffff", behavior: behaviors.WALL, density: 2500, reactions: { "fire": { elem1: "fire", elem2: "shards" } } }, // Translucent light blue
    "mc_tnt": { 
        color: ["#d12828", "#bd2424", "#e8e8e8"], 
        behavior: behaviors.WALL,
        state: "solid",
        burn: 100,
        burnTime: 5,
        tempHigh: 150,
        stateHigh: "explosion" 
    },
    
    // Materials
    "mc_redstone_dust": { color: ["#d11111", "#a80b0b"], behavior: behaviors.POWDER }
};

// 3. INJECTION ENGINE
for (let id in mcBlocks) {
    if (!elements[id]) { // Strict check to prevent overwriting existing elements
        elements[id] = mcBlocks[id];
        elements[id].category = "Minecraft"; // Force them all into the Minecraft tab
    }
}
