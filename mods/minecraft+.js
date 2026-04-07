// ==========================================
// Sandboxels x Minecraft Core Mod
// Version: Curated & Textured Edition
// ==========================================

// 1. CORE LIQUIDS & THERMODYNAMICS
// Safely injecting cross-reactions with vanilla elements
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };

if (!elements.steam.reactions) elements.steam.reactions = {};

// 2. CURATED ELEMENT DATABASE
// Filtered out slabs/stairs/variants. Added hex arrays for native texturing.
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
    
    // Natural Terrain (Solids)
    "mc_grass_block": { color: ["#4B712F", "#5b8738", "#866043", "#75543b"], behavior: behaviors.WALL }, // Mix of grass and dirt
    "mc_mycelium": { color: ["#7a6c7d", "#695b6b", "#866043"], behavior: behaviors.WALL },
    "mc_podzol": { color: ["#5e4429", "#4a3520", "#866043"], behavior: behaviors.WALL },
    
    // Stones & Minerals (Textured Walls)
    "mc_cobblestone": { color: ["#7a7a7a", "#6b6b6b", "#5e5e5e", "#474747"], behavior: behaviors.WALL },
    "mc_stone_bricks": { color: ["#7d7d7d", "#757575", "#696969", "#5e5e5e"], behavior: behaviors.WALL },
    "mc_deepslate": { color: ["#3b3b40", "#313136", "#27272b"], behavior: behaviors.WALL },
    "mc_calcite": { color: ["#e3e3e0", "#d6d6d1", "#c9c9c4"], behavior: behaviors.WALL },
    "mc_tuff": { color: ["#6c7068", "#5e635a", "#51544e"], behavior: behaviors.WALL },
    "mc_obsidian": { color: ["#151024", "#1e1633", "#100c1c", "#281b45"], behavior: behaviors.WALL, hardness: 0.99 },
    "mc_bedrock": { color: ["#171717", "#121212", "#0a0a0a", "#212121"], behavior: behaviors.WALL, hardness: 1.0 },

    // Wood & Flora
    "mc_oak_log": { color: ["#403323", "#362a1c", "#94774a"], behavior: behaviors.WALL, state: "solid", burn: 40, burnTime: 100 },
    "mc_oak_planks": { color: ["#a18251", "#94774a", "#856a42"], behavior: behaviors.WALL, state: "solid", burn: 50, burnTime: 80 },
    "mc_oak_leaves": { color: ["#296a23", "#20541b", "#1a4516"], behavior: behaviors.WALL, state: "solid", burn: 80, burnTime: 20 },
    
    // Nether
    "mc_netherrack": { color: ["#6b2626", "#591f1f", "#471818", "#782b2b"], behavior: behaviors.WALL },
    "mc_soul_sand": { color: ["#544033", "#453429", "#36281f"], behavior: behaviors.POWDER },
    "mc_glowstone": { color: ["#f2cb63", "#e0b643", "#c79e2c"], behavior: behaviors.WALL },
    "mc_magma_block": { color: ["#822b0f", "#63200a", "#e65c00"], behavior: behaviors.WALL, temp: 200 },
    
    // End
    "mc_end_stone": { color: ["#deed93", "#cddb88", "#bcc97d", "#e3f0a1"], behavior: behaviors.WALL },
    "mc_purpur_block": { color: ["#a172a1", "#946394", "#855485"], behavior: behaviors.WALL },
    
    // Ores (Mixing stone base with gem colors)
    "mc_coal_ore": { color: ["#7a7a7a", "#6b6b6b", "#1f1f1f", "#141414"], behavior: behaviors.WALL },
    "mc_iron_ore": { color: ["#7a7a7a", "#6b6b6b", "#d8af93", "#c29d84"], behavior: behaviors.WALL },
    "mc_gold_ore": { color: ["#7a7a7a", "#6b6b6b", "#fceb42", "#e3d33b"], behavior: behaviors.WALL },
    "mc_diamond_ore": { color: ["#7a7a7a", "#6b6b6b", "#5de0cf", "#4bc2b2"], behavior: behaviors.WALL },
    "mc_redstone_ore": { color: ["#7a7a7a", "#6b6b6b", "#d11111", "#a80b0b"], behavior: behaviors.WALL },
    
    // Special / Utility
    "mc_slime_block": { color: ["#6cb854", "#5c9e47", "#7bcf61"], behavior: behaviors.WALL }, // Bouncy physics require raw JS, defaulting to Wall for stability
    "mc_honey_block": { color: ["#ebad34", "#d49c2e", "#c28e29"], behavior: behaviors.WALL },
    "mc_glass": { color: ["#e8ffff", "#d4f2f2"], behavior: behaviors.WALL },
    "mc_tnt": { 
        color: ["#d12828", "#bd2424", "#e8e8e8"], 
        behavior: behaviors.WALL,
        state: "solid",
        burn: 100,
        burnTime: 5,
        tempHigh: 150,
        stateHigh: "explosion" 
    }
};

// 3. INJECTION ENGINE
// Safely loops through our curated list and mounts them to the engine
for (let id in mcBlocks) {
    if (!elements[id]) { // Strict check to prevent overwriting existing elements
        elements[id] = mcBlocks[id];
        elements[id].category = "Minecraft"; // Force them all into the Minecraft tab
    }
}
