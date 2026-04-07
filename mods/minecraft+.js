// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Version: Textured Base Materials Update
// ==========================================

/* ==========================================
   1. CORE LIQUIDS & THERMODYNAMICS
   ========================================== */
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };

elements.mc_water = {
    color: "rgba(63, 118, 228, 0.7)", 
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "steam", elem2: "mc_cobblestone" } }
};

elements.mc_lava = {
    color: ["#E65C00", "#FF8C00", "#D95100", "#FF6600"], 
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 3000, temp: 1200,
    reactions: { "mc_water": { elem1: "mc_obsidian", elem2: "steam" } },
    glow: true
};

/* ==========================================
   2. TEXTURED TERRAIN & BUILDING BLOCKS
   ========================================== */
const mcTerrain = {
    "dirt": { color: ["#866043", "#7A563C", "#6D4C35"], type: behaviors.POWDER, density: 1200 },
    "coarse_dirt": { color: ["#77553A", "#654832", "#5C412C"], type: behaviors.POWDER, density: 1250 },
    "mud": { color: ["#3E2D25", "#33251E", "#47342B"], type: behaviors.POWDER, density: 1400 },
    "clay": { color: ["#9EA4B0", "#8D949F", "#A9AFB9"], type: behaviors.POWDER, density: 1500 },
    "sand": { color: ["#DBD3A0", "#D1C998", "#C7BFA1", "#E3DBA8"], type: behaviors.POWDER, density: 1600 },
    "red_sand": { color: ["#A95821", "#9C511E", "#B86024", "#C66327"], type: behaviors.POWDER, density: 1600 },
    "gravel": { color: ["#837F7E", "#7A7675", "#8C8887", "#6E6A6A"], type: behaviors.POWDER, density: 1700 },
    "cobblestone": { color: ["#757575", "#616161", "#424242", "#545454", "#828282"], type: behaviors.WALL, density: 2400 },
    "stone": { color: ["#7D7D7D", "#757575", "#707070"], type: behaviors.WALL, density: 2500 },
    "stone_bricks": { color: ["#707070", "#686868", "#585858", "#484848"], type: behaviors.WALL, density: 2500 },
    "bricks": { color: ["#964A44", "#8B433D", "#793A35", "#A4524B", "#C3B1A9"], type: behaviors.WALL, density: 2200 },
    "obsidian": { color: ["#161021", "#1C142B", "#100B1A", "#251B38"], type: behaviors.WALL, density: 3500 },
    "bedrock": { color: ["#1F1F1F", "#171717", "#262626", "#0F0F0F"], type: behaviors.WALL, density: 99999 },
    "netherrack": { color: ["#612727", "#522121", "#732E2E", "#421A1A"], type: behaviors.WALL, density: 2000, burn: 99999 },
    "soul_sand": { color: ["#544033", "#4A382C", "#5E4839", "#3D2E24"], type: behaviors.POWDER, density: 1500 },
    "end_stone": { color: ["#DDE0A4", "#D1D498", "#C4C78D"], type: behaviors.WALL, density: 2500 },
    "purpur_block": { color: ["#A97AA9", "#9A6A9A", "#B68AB6"], type: behaviors.WALL, density: 2400 },
    "prismarine": { color: ["#5E9B95", "#518580", "#6BAEAA"], type: behaviors.WALL, density: 2500 },
    "diorite": { color: ["#B8B8BA", "#A6A6A8", "#C9C9CB", "#8E8E90"], type: behaviors.WALL, density: 2600 },
    "granite": { color: ["#925E4D", "#825445", "#A26955", "#70483B"], type: behaviors.WALL, density: 2600 },
    "andesite": { color: ["#838384", "#757576", "#909091"], type: behaviors.WALL, density: 2500 },
    "tuff": { color: ["#6C6D66", "#5C5D57", "#7B7C74"], type: behaviors.WALL, density: 2400 },
    "calcite": { color: ["#D8D6CD", "#C8C6BD", "#E7E5DC"], type: behaviors.WALL, density: 2500 },
    "basalt": { color: ["#4F5057", "#43444A", "#5D5E65"], type: behaviors.WALL, density: 2700 },
    "blackstone": { color: ["#2A2429", "#1E1A1D", "#352D33"], type: behaviors.WALL, density: 2700 },
    "glass": { color: "rgba(200, 237, 246, 0.3)", type: behaviors.WALL, density: 2500 },
    "glowstone": { color: ["#E5BB5D", "#F0C86E", "#D4A949", "#CC9423"], type: behaviors.WALL, density: 2200, glow: true },
    "sea_lantern": { color: ["#ACD6D2", "#99C7C3", "#BEE4E0", "#E8FAF8"], type: behaviors.WALL, density: 2500, glow: true },
    "tnt": { color: ["#E53935", "#D32F2F", "#FFFFFF"], type: behaviors.WALL, density: 1500, burn: 10 }
};

for (let id in mcTerrain) {
    let props = mcTerrain[id];
    elements["mc_" + id] = {
        color: props.color, behavior: props.type, category: "Minecraft", density: props.density
    };
    if (props.burn) elements["mc_" + id].burnTime = props.burn;
    if (props.glow) elements["mc_" + id].glow = true;
}

/* ==========================================
   3. WOODS & PLANTS
   ========================================== */
const mcWoods = {
    "oak": { log: ["#6A5232", "#5C462A"], plank: ["#A2834E", "#8A6F41", "#B39257"], leaf: ["#48B529", "#3A9621"] },
    "spruce": { log: ["#392A1A", "#2E2114"], plank: ["#705334", "#5C442A", "#82613D"], leaf: ["#305730", "#254225"] },
    "birch": { log: ["#DFDFDB", "#D0D0CC", "#262626"], plank: ["#C3B37B", "#B0A16D", "#D4C489"], leaf: ["#62A44B", "#4F853D"] },
    "jungle": { log: ["#554419", "#473815"], plank: ["#A07350", "#8A6345", "#B8865D"], leaf: ["#30A126", "#26821E"] },
    "acacia": { log: ["#666056", "#524D45"], plank: ["#A85A32", "#8F4D2A", "#C2683A"], leaf: ["#48B529", "#3A9621"] },
    "dark_oak": { log: ["#3C2E1A", "#2D2213"], plank: ["#422B14", "#33210F", "#52361A"], leaf: ["#2C6E1A", "#215213"] },
    "cherry": { log: ["#2B1B18", "#1A100F"], plank: ["#E2A5A5", "#C99191", "#F5B5B5"], leaf: ["#FFB6C1", "#FF9EAD"] }
};

for (let wood in mcWoods) {
    elements["mc_" + wood + "_log"] = { color: mcWoods[wood].log, behavior: behaviors.WALL, category: "Minecraft", density: 700, burnTime: 200 };
    elements["mc_" + wood + "_planks"] = { color: mcWoods[wood].plank, behavior: behaviors.WALL, category: "Minecraft", density: 600, burnTime: 150 };
    elements["mc_" + wood + "_leaves"] = { color: mcWoods[wood].leaf, behavior: behaviors.POWDER, category: "Minecraft", density: 300, burnTime: 50 };
}

const mcFlora = {
    "grass": "#5C8B3B", "fern": "#4B712F", "dead_bush": "#6A4A28", 
    "sugar_cane": ["#8BB74A", "#79A13D"], "bamboo": ["#548821", "#446E1A"], 
    "cactus": ["#0F5D18", "#0B4512", "#13751E"], "kelp": "#528A32",
    "crimson_fungus": ["#932021", "#731A1A"], "warped_fungus": ["#167E86", "#126268"]
};

for (let plant in mcFlora) {
    elements["mc_" + plant] = { color: mcFlora[plant], behavior: behaviors.POWDER, category: "Minecraft", burnTime: 40 };
}

/* ==========================================
   4. ORES, MINERALS & ITEMS
   ========================================== */
const mcOres = {
    "coal": { ore: "#1D1D1D", item: "#111111" }, 
    "iron": { ore: "#D8AF93", item: "#E2E2E2" }, 
    "gold": { ore: "#FCEE4B", item: "#FCEE4B" }, 
    "copper": { ore: "#C06B50", item: "#D67A5E" },
    "diamond": { ore: "#4AEDD9", item: "#68EBD8" }, 
    "emerald": { ore: "#17DD62", item: "#41F384" },
    "lapis": { ore: "#1D47A6", item: "#2657C6" },
    "redstone": { ore: "#AA0F0A", item: "#9E160A" },
    "netherite": { ore: "#453B3B", item: "#383030" }
};

for (let ore in mcOres) {
    elements["mc_" + ore + "_item"] = { color: mcOres[ore].item, behavior: behaviors.POWDER, category: "Minecraft", density: 3000 };
    elements["mc_" + ore + "_block"] = { color: [mcOres[ore].item, mcOres[ore].ore], behavior: behaviors.WALL, category: "Minecraft", density: 4000 };
    
    // Base stone ore generator
    if (ore !== "netherite") {
        elements["mc_" + ore + "_ore"] = { 
            color: ["#7D7D7D", "#757575", mcOres[ore].ore], behavior: behaviors.WALL, category: "Minecraft", density: 2800
        };
        // Deepslate variant
        elements["mc_deepslate_" + ore + "_ore"] = { 
            color: ["#3D3D43", "#2F2F34", mcOres[ore].ore], behavior: behaviors.WALL, category: "Minecraft", density: 3200
        };
    }
}
// Ancient Debris
elements.mc_ancient_debris = { color: ["#5E423A", "#4A332D", "#6E4C43"], behavior: behaviors.WALL, category: "Minecraft", density: 3500 };

/* ==========================================
   5. PROCEDURAL COLORED BLOCKS
   ========================================== */
const mcColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
const mcHex = ["#E9ECEC", "#F07613", "#BD44B3", "#3AAFD9", "#F8C627", "#70B919", "#ED8DAC", "#3E4447", "#8E8E86", "#158991", "#792AAC", "#35399D", "#724728", "#546D1B", "#A12722", "#141519"];

for (let i = 0; i < mcColors.length; i++) {
    let name = "mc_" + mcColors[i];
    let hex = mcHex[i];
    
    // Wool (Slightly textured)
    elements[name + "_wool"] = { color: [hex, hex, "#00000011"], behavior: behaviors.WALL, category: "Minecraft", burnTime: 80 };
    
    // Terracotta (Flat, slightly muted)
    elements[name + "_terracotta"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", density: 2000 };
    
    // Concrete & Powder
    elements[name + "_concrete"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
    elements[name + "_concrete_powder"] = { color: [hex, "#00000009"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600 };
    
    // Stained Glass
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    elements[name + "_stained_glass"] = { color: `rgba(${r}, ${g}, ${b}, 0.5)`, behavior: behaviors.WALL, category: "Minecraft" };
}

/* ==========================================
   6. MISC ITEMS & MOB DROPS
   ========================================== */
const mcMisc = {
    "stick": "#8B5A2B", "string": "#FFFFFF", "feather": "#E5E5E5", 
    "gunpowder": ["#525252", "#3D3D3D"], "blaze_rod": ["#F0CD31", "#F29422"],
    "ender_pearl": "#169C75", "slimeball": "#6ABB44", "magma_cream": "#A14220",
    "leather": "#C65C35", "bone": "#E0DECA", "apple": "#D52618",
    "golden_apple": "#E5D241", "wheat": "#A28328", "carrot": "#EFA12B",
    "potato": "#C19C4A", "melon": "#D13134", "pumpkin": "#E28B14",
    "snowball": "#FFFFFF", "clay_ball": "#9EA4B0", "flint": "#3B3939"
};

for (let item in mcMisc) {
    elements["mc_" + item] = { color: mcMisc[item], behavior: behaviors.POWDER, category: "Minecraft", density: 1000 };
}
