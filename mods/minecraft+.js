// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Version: Blocks, Items, Smelting, Redstone, and Expansion
// ==========================================

/* ==========================================
   1. CORE PHYSICS & FLUIDS
   ========================================== */
if (elements.water && !elements.water.reactions) elements.water.reactions = {};
if (elements.water && elements.water.reactions) {
    elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };
}

elements.mc_water = {
    color: "rgba(63, 118, 228, 0.7)", 
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "steam", elem2: "mc_cobblestone", chance: 1.0 } }
};

elements.mc_lava = {
    color: ["#E65C00", "#FF8C00", "#D95100"], 
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 3000, temp: 1200,
    reactions: { 
        "mc_water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 }, 
        "water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 } 
    }
};

/* ==========================================
   2. TERRAIN, EXPLOSIVES & SMELTING
   ========================================== */
elements.mc_dirt = { color: ["#866043", "#7A563C", "#6D4C35"], behavior: behaviors.WALL, category: "Minecraft", density: 1200 };
elements.mc_sand = { color: ["#DBD3A0", "#D1C998", "#C7BFA1"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600, tempHigh: 1500, stateHigh: "mc_glass" };
elements.mc_red_sand = { color: ["#A95821", "#9C511E", "#B86024"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600, tempHigh: 1500, stateHigh: "mc_glass" };
elements.mc_gravel = { color: ["#837F7E", "#7A7675", "#8C8887"], behavior: behaviors.POWDER, category: "Minecraft", density: 1700 };

elements.mc_cobblestone = { color: ["#757575", "#616161", "#424242", "#545454"], behavior: behaviors.WALL, category: "Minecraft", density: 2400, tempHigh: 1200, stateHigh: "mc_stone" };
elements.mc_stone = { color: ["#7D7D7D", "#757575"], behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_obsidian = { color: ["#161021", "#1C142B", "#100B1A"], behavior: behaviors.WALL, category: "Minecraft", density: 3500 };
elements.mc_bedrock = { color: ["#1F1F1F", "#171717", "#262626"], behavior: behaviors.WALL, category: "Minecraft", density: 99999 };
elements.mc_netherrack = { color: ["#612727", "#522121", "#732E2E"], behavior: behaviors.WALL, category: "Minecraft", density: 2000, burnTime: 99999 };
elements.mc_soul_sand = { color: ["#544033", "#4A382C", "#5E4839"], behavior: behaviors.WALL, category: "Minecraft", density: 1500 };
elements.mc_glowstone = { color: ["#E5BB5D", "#F0C86E", "#D4A949"], behavior: behaviors.WALL, category: "Minecraft", density: 2200, glow: true };
elements.mc_glass = { color: "rgba(200, 237, 246, 0.4)", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };

elements.mc_tnt = { 
    color: ["#E53935", "#D32F2F", "#B71C1C", "#FFFFFF"], 
    behavior: behaviors.WALL, category: "Minecraft", density: 1500, burnTime: 30,
    tick: function(pixel) { 
        if (pixel.burning) { 
            if (pixelTicks % 5 === 0) pixel.color = "#FFFFFF"; 
            if (pixelTicks - pixel.burnStart > 45) pixel.element = "explosion"; 
        } 
    }
};

/* ==========================================
   3. PROCEDURAL GENERATION: WOODS, COLORS, ORES
   ========================================== */
const mcColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
const mcHex = ["#E9ECEC", "#F07613", "#BD44B3", "#3AAFD9", "#F8C627", "#70B919", "#ED8DAC", "#3E4447", "#8E8E86", "#158991", "#792AAC", "#35399D", "#724728", "#546D1B", "#A12722", "#141519"];

for (let i = 0; i < mcColors.length; i++) {
    let name = "mc_" + mcColors[i];
    let hex = mcHex[i];
    elements[name + "_wool"] = { color: [hex, hex, "#00000022"], behavior: behaviors.WALL, category: "Minecraft", density: 400, burnTime: 150 };
    elements[name + "_terracotta"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", density: 2000 };
    elements[name + "_concrete"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    elements[name + "_stained_glass"] = { color: `rgba(${r}, ${g}, ${b}, 0.5)`, behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
}

const mcWoods = {
    "oak": { log: ["#6A5232", "#5C462A"], plank: ["#A2834E", "#8A6F41"], leaf: "rgba(72, 181, 41, 0.85)" },
    "spruce": { log: ["#392A1A", "#2E2114"], plank: ["#705334", "#5C442A"], leaf: "rgba(48, 87, 48, 0.85)" },
    "birch": { log: ["#DFDFDB", "#D0D0CC"], plank: ["#C3B37B", "#B0A16D"], leaf: "rgba(98, 164, 75, 0.85)" },
    "cherry": { log: ["#54352D", "#3B211A"], plank: ["#E8B3B3", "#D19898"], leaf: "rgba(255, 157, 205, 0.85)" }
};
for (let wood in mcWoods) {
    elements["mc_" + wood + "_log"] = { color: mcWoods[wood].log, behavior: behaviors.WALL, category: "Minecraft", density: 700, burnTime: 400 };
    elements["mc_" + wood + "_planks"] = { color: mcWoods[wood].plank, behavior: behaviors.WALL, category: "Minecraft", density: 600, burnTime: 300 };
    elements["mc_" + wood + "_leaves"] = { color: mcWoods[wood].leaf, behavior: behaviors.WALL, category: "Minecraft", density: 300, burnTime: 100 };
}

const mcOres = {
    "coal": { ore: "#1D1D1D", item: "#111111" }, 
    "iron": { ore: "#D8AF93", item: "#E2E2E2" }, 
    "gold": { ore: "#FCEE4B", item: "#FCEE4B" }, 
    "copper": { ore: "#C06B50", item: "#D67A5E" },
    "diamond": { ore: "#4AEDD9", item: "#68EBD8" }, 
    "emerald": { ore: "#17DD62", item: "#41F384" }, 
    "redstone": { ore: "#AA0F0A", item: "#9E160A" }
};
for (let ore in mcOres) {
    elements["mc_" + ore + "_item"] = { color: mcOres[ore].item, behavior: behaviors.POWDER, category: "Minecraft", density: 3000 };
    elements["mc_" + ore + "_ore"] = { 
        color: ["#7D7D7D", mcOres[ore].ore, "#686868"], 
        behavior: behaviors.WALL, category: "Minecraft", density: 2800,
        tempHigh: 1000, stateHigh: "mc_" + ore + "_item" 
    };
    elements["mc_" + ore + "_block"] = { color: mcOres[ore].item, behavior: behaviors.WALL, category: "Minecraft", density: 4000 };
}

/* ==========================================
   5. WORKING TORCHES & END ITEMS
   ========================================== */
elements.mc_torch = { 
    color: "#593D29", behavior: behaviors.WALL, category: "Minecraft", density: 500,
    tick: function(pixel) {
        if (Math.random() < 0.1 && isEmpty(pixel.x, pixel.y - 1, false)) {
            tryCreate("fire", pixel.x, pixel.y - 1);
        }
    }
};

elements.mc_purpur_block = { color: ["#A97AA9", "#9A6A9A"], behavior: behaviors.WALL, category: "Minecraft", density: 2400 };
elements.mc_end_rod = { color: "#FFFFFF", behavior: behaviors.WALL, category: "Minecraft", density: 1000, glow: true };

elements.mc_dragon_egg = {
    color: ["#140B1A", "#CC00FF"], behavior: behaviors.POWDER, category: "Minecraft", density: 3000,
    onClicked: function(pixel) {
        let tx = pixel.x + Math.floor(Math.random() * 40) - 20;
        let ty = pixel.y + Math.floor(Math.random() * 40) - 20;
        if (isEmpty(tx, ty, false)) {
            tryMove(pixel, tx, ty);
            for(let i=0; i<5; i++) tryCreate("mc_ender_pearl_sparkle", pixel.x, pixel.y); 
        }
    }
};

elements.mc_end_crystal = {
    color: ["#E98CFF", "#FFFFFF", "#CC00FF"], behavior: behaviors.WALL, category: "Minecraft", density: 1000, glow: true,
    tempHigh: 100, stateHigh: "explosion",
    tick: function(pixel) {
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

elements.mc_ender_pearl = {
    color: "rgba(26, 135, 120, 0.8)", behavior: behaviors.POWDER, category: "Minecraft", density: 2000,
    tick: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y + 1, false) && !isEmpty(pixel.x - 1, pixel.y + 1, false) && !isEmpty(pixel.x + 1, pixel.y + 1, false)) {
            let below = getPixel(pixel.x, pixel.y + 1);
            if (below && below.element !== "mc_ender_pearl") {
                for(let i=0; i<8; i++) {
                    let rx = pixel.x + Math.floor(Math.random()*5)-2;
                    let ry = pixel.y + Math.floor(Math.random()*5)-2;
                    if(isEmpty(rx, ry, false)) tryCreate("mc_ender_pearl_sparkle", rx, ry);
                }
                tryDelete(pixel.x, pixel.y);
            }
        }
    }
};

elements.mc_ender_pearl_sparkle = {
    color: ["#CC00FF", "#E98CFF"], behavior: behaviors.GAS, category: "states", hidden: true, density: 1, glow: true,
    tick: function(pixel) {
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y + (Math.random() < 0.5 ? 1 : -1));
        if (Math.random() < 0.2) tryDelete(pixel.x, pixel.y);
    }
};

elements.mc_xp_orb = {
    color: ["#80FF20", "#D0FF40"], behavior: behaviors.POWDER, category: "Minecraft", density: 2500, glow: true,
    tick: function(pixel) {
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40"; 
        if (isEmpty(pixel.x, pixel.y + 1, false)) tryMove(pixel, pixel.x, pixel.y + 1); 
    }
};

elements.mc_bottle_o_enchanting = {
    color: "rgba(165, 227, 88, 0.8)", behavior: behaviors.POWDER, category: "Minecraft", density: 1500,
    tick: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y + 1, true) && !isEmpty(pixel.x - 1, pixel.y + 1, true) && !isEmpty(pixel.x + 1, pixel.y + 1, true)) {
            let below = getPixel(pixel.x, pixel.y + 1);
            if (below && below.element !== "mc_bottle_o_enchanting") {
                pixel.element = "mc_xp_orb"; 
                for (let i = 0; i < 4; i++) {
                    let rx = pixel.x + Math.floor(Math.random() * 5) - 2;
                    let ry = pixel.y - Math.floor(Math.random() * 4);
                    if (isEmpty(rx, ry, false)) tryCreate("mc_xp_orb", rx, ry);
                }
            }
        }
    }
};

/* ==========================================
   6. EXPANSION PACK: NEW ITEMS & BLOCKS
   ========================================== */
elements.mc_honeycomb_block = { color: "#E6B033", behavior: behaviors.WALL, category: "Minecraft", density: 1500 };
elements.mc_honey_block = { color: "rgba(250,195,50,0.8)", behavior: behaviors.WALL, category: "Minecraft", density: 1500 };
elements.mc_candle = { color: "#E1D5B8", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 60, stateHigh: "fire" };
elements.mc_exposed_cut_copper = { color: "#C48A64", behavior: behaviors.WALL, category: "Minecraft", density: 3000 };
elements.mc_nether_bricks = { color: "#2E1418", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_oxidized_cut_copper_slab = { color: "#509B85", behavior: behaviors.WALL, category: "Minecraft", density: 3000 };
elements.mc_waxed_oxidized_cut_copper = { color: "#4E9782", behavior: behaviors.WALL, category: "Minecraft", density: 3100 };
elements.mc_crimson_fungus = { color: "#932021", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 50 };
elements.mc_smooth_basalt = { color: "#484952", behavior: behaviors.WALL, category: "Minecraft", density: 2700 };
elements.mc_crimson_button = { color: "#6A2D3C", behavior: behaviors.WALL, category: "Minecraft", burnTime: 100 };
elements.mc_cactus = { color: "#0F5D18", behavior: behaviors.WALL, category: "Minecraft", reactions: {"water":{elem1:"mc_cactus", chance:0.05}}};
elements.mc_acacia_sign = { color: "#A85A32", behavior: behaviors.WALL, category: "Minecraft", burnTime: 100 };
elements.mc_purple_candle = { color: "#7A3598", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 60, stateHigh: "fire" };
elements.mc_skeleton_skull = { color: "#D1D1D1", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_bubble_coral_fan = { color: "#CC31A9", behavior: behaviors.WALL, category: "Minecraft", reactions: {"water":{elem1:"mc_bubble_coral_fan"}}};
elements.mc_pumpkin_seeds = { color: "#E4D19E", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_vines = { color: "#36601D", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 40 };
elements.mc_detector_rail = { color: "#8E725F", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_leather_boots = { color: "#A05A38", behavior: behaviors.WALL, category: "Minecraft", burnTime: 60 };
elements.mc_cyan_dye = { color: "#168B95", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_netherite_helmet = { color: "#454141", behavior: behaviors.WALL, category: "Minecraft", density: 6000 };
elements.mc_grass = { color: "#4B712F", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 50 };
elements.mc_red_bed = { color: "#9F2522", behavior: behaviors.WALL, category: "Minecraft", burnTime: 120 };
elements.mc_iron_trapdoor = { color: "#CECECE", behavior: behaviors.WALL, category: "Minecraft", density: 3000 };
elements.mc_arrow = { color: "#8E725F", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 40 };
elements.mc_shroomlight = { color: "#EE8E4D", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_blue_ice = { color: "#7291F0", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 0, stateHigh: "mc_water" };
elements.mc_nautilus_shell = { color: "#D9C9B4", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_smooth_red_sandstone = { color: "#B86526", behavior: behaviors.WALL, category: "Minecraft", density: 2400 };
elements.mc_bucket_of_tropical_fish = { color: "#E86F2C", behavior: behaviors.LIQUID, category: "Minecraft", density: 1000 };
elements.mc_prismarine_shard = { color: "#5E9B95", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_pink_tulip = { color: "#D39FBC", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_chiseled_quartz_block = { color: "#EAE7DF", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_paper = { color: "#E8E7E4", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 10 };
elements.mc_golden_apple = { color: "#E5D241", behavior: behaviors.POWDER, category: "Minecraft", tempHigh: 1000, stateHigh: "mc_gold_item" };
elements.mc_sculk_sensor = { color: "#063A45", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_chain = { color: "#3B424C", behavior: behaviors.WALL, category: "Minecraft", density: 3000 };
elements.mc_tinted_glass = { color: "rgba(35, 30, 40, 0.8)", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_small_dripleaf = { color: "#54792C", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_furnace = { color: "#6A6A6A", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 1200 };
elements.mc_diorite = { color: "#B8B8BA", behavior: behaviors.WALL, category: "Minecraft", density: 2600 };
elements.mc_lily_of_the_valley = { color: "#FFFFFF", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_ink_sac = { color: "#1F1F23", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_amethyst_shard = { color: "#A883CC", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_shulker_shell = { color: "#8E608E", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_poppy = { color: "#ED302C", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 25 };
elements.mc_daylight_detector = { color: "#81735E", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_target = { color: "#D69F8B", behavior: behaviors.WALL, category: "Minecraft", burnTime: 60 };
elements.mc_observer = { color: "#6C6C6C", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_sugar = { color: "#FFFFFF", behavior: behaviors.POWDER, category: "Minecraft", reactions: {"water":{elem1:null, elem2:"mc_water"}}};
elements.mc_dried_kelp_block = { color: "#323B2A", behavior: behaviors.WALL, category: "Minecraft", burnTime: 150 };
elements.mc_black_dye = { color: "#1D1D21", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_treasure_map = { color: "#D4C28E", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 15 };
elements.mc_crying_obsidian = { color: "#2B1143", behavior: behaviors.WALL, category: "Minecraft", density: 3500, glow: true };
elements.mc_emerald = { color: "#17DD62", behavior: behaviors.POWDER, category: "Minecraft", density: 3000 };
elements.mc_sea_pickle = { color: "#5A641A", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_granite = { color: "#925E4D", behavior: behaviors.WALL, category: "Minecraft", density: 2600 };
elements.mc_glow_berries = { color: "#E09C23", behavior: behaviors.POWDER, category: "Minecraft", glow: true, burnTime: 30 };
elements.mc_string = { color: "#D3D3D3", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 15 };
elements.mc_red_mushroom = { color: "#C62E2E", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_brewing_stand = { color: "#A87232", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_azalea = { color: "#547535", behavior: behaviors.WALL, category: "Minecraft", burnTime: 60 };
elements.mc_block_of_raw_iron = { color: "#A78673", behavior: behaviors.WALL, category: "Minecraft", density: 3500 };
elements.mc_sunflower = { color: "#ECCD21", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_block_of_raw_copper = { color: "#9C5940", behavior: behaviors.WALL, category: "Minecraft", density: 3500 };
elements.mc_block_of_lapis_lazuli = { color: "#1D47A6", behavior: behaviors.WALL, category: "Minecraft", density: 2800 };
elements.mc_fire_coral = { color: "#A4262E", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_wither_rose = { color: "#211A1B", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_turtle_egg = { color: "#E2E5CC", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_blaze_rod = { color: "#F0CD31", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_eye_of_ender = { color: "#169C75", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_wheat_seeds = { color: "#6A9B35", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_lever = { color: "#77634F", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_dropper = { color: "#676767", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_milk = { color: "#FFFFFF", behavior: behaviors.LIQUID, category: "Minecraft", density: 1000 };
elements.mc_hay_bale = { color: "#A28328", behavior: behaviors.WALL, category: "Minecraft", burnTime: 200 };
elements.mc_name_tag = { color: "#D7D2BE", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_sea_lantern = { color: "#ACD6D2", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_flint = { color: "#3B3939", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_farmland = { color: "#5C3B23", behavior: behaviors.WALL, category: "Minecraft", density: 1300 };
elements.mc_barrel = { color: "#8E6B41", behavior: behaviors.WALL, category: "Minecraft", burnTime: 150 };
elements.mc_goat_horn = { color: "#C6B296", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_ender_chest = { color: "#243236", behavior: behaviors.WALL, category: "Minecraft", density: 3500 };
elements.mc_cooked_cod = { color: "#C29367", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_clay = { color: "#9EA4B0", behavior: behaviors.POWDER, category: "Minecraft", tempHigh: 800, stateHigh: "mc_terracotta" };
elements.mc_grindstone = { color: "#6A6A6A", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_powdered_snow = { color: "#F1FBFB", behavior: behaviors.POWDER, category: "Minecraft", tempHigh: 0, stateHigh: "mc_water" };
elements.mc_splash_potion = { color: "#2A41B0", behavior: behaviors.LIQUID, category: "Minecraft" };
elements.mc_egg = { color: "#E0CCA7", behavior: behaviors.POWDER, category: "Minecraft", tempHigh: 100, stateHigh: "steam" };
elements.mc_bamboo = { color: "#548821", behavior: behaviors.WALL, category: "Minecraft", burnTime: 50 };
elements.mc_netherite_scrap = { color: "#563A2E", behavior: behaviors.POWDER, category: "Minecraft", density: 5000 };
elements.mc_written_book = { color: "#773922", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 40 };
elements.mc_cocoa_beans = { color: "#8B542E", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_tropical_fish = { color: "#E6732B", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_tripwire_hook = { color: "#868686", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_scaffolding = { color: "#CBA469", behavior: behaviors.WALL, category: "Minecraft", burnTime: 40 };
elements.mc_dead_bush = { color: "#6A4A28", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 15 };
elements.mc_redstone_lamp = { color: "#64351B", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_grass_block = { color: "#669D40", behavior: behaviors.WALL, category: "Minecraft", density: 1300 };
elements.mc_sculk_shrieker = { color: "#06323B", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_lantern = { color: "#5B514A", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_sea_grass = { color: "#3B7222", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_jukebox = { color: "#5E4028", behavior: behaviors.WALL, category: "Minecraft", burnTime: 100 };
elements.mc_beehive = { color: "#A87A4C", behavior: behaviors.WALL, category: "Minecraft", burnTime: 80 };
elements.mc_andesite = { color: "#838384", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_glowstone_dust = { color: "#FFD800", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_large_amethyst_bud = { color: "#B191D5", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_mushroom_stew = { color: "#A8704D", behavior: behaviors.LIQUID, category: "Minecraft" };
elements.mc_melon_slice = { color: "#D13134", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_dragon_head = { color: "#161616", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_apple = { color: "#D52618", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_dimond = { color: "#4AEDD9", behavior: behaviors.POWDER, category: "Minecraft", density: 3500 }; // kept requested misspelling
elements.mc_prismarine_crystals = { color: "#8FD5C9", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_sculk_catalyst = { color: "#0B262F", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_flower_pot = { color: "#773C2C", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_basalt = { color: "#4F5057", behavior: behaviors.WALL, category: "Minecraft", density: 2700 };
elements.mc_verdant_froglight = { color: "#B8D4AD", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_raw_rabbit = { color: "#D49E87", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_magma_block = { color: "#893717", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 300, glow: true };
elements.mc_beetroot_stew = { color: "#8F161A", behavior: behaviors.LIQUID, category: "Minecraft" };
elements.mc_cake = { color: "#F3DFCC", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_budding_amethyst = { color: "#7F5A9A", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_ladder = { color: "#8B6538", behavior: behaviors.WALL, category: "Minecraft", burnTime: 40 };
elements.mc_cooked_chicken = { color: "#A85324", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_compass = { color: "#858585", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_enchanted_book = { color: "#8F3585", behavior: behaviors.POWDER, category: "Minecraft", glow: true, burnTime: 40 };
elements.mc_sponge = { color: "#C6C347", behavior: behaviors.WALL, category: "Minecraft", reactions: {"water":{elem1:"mc_wet_sponge", elem2:null}}};
elements.mc_wet_sponge = { color: "#A1A432", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 100, stateHigh: "mc_sponge" };
elements.mc_creeper_head = { color: "#498C41", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_nether_wart = { color: "#76181C", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_end_portal_frame = { color: "#4B6154", behavior: behaviors.WALL, category: "Minecraft", density: 4000 };
elements.mc_fletching_table = { color: "#C4AA79", behavior: behaviors.WALL, category: "Minecraft", burnTime: 100 };
elements.mc_ghast_tear = { color: "#E0E0E0", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_charcoal = { color: "#1D1D1D", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 300 };
elements.mc_dragon_breath = { color: "#C646BA", behavior: behaviors.GAS, category: "Minecraft" };
elements.mc_scute = { color: "#547535", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_end_stone = { color: "#DDE0A4", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_dandelion = { color: "#F0D131", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_fire_charge = { color: "#2E211A", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 5, tempHigh: 40, stateHigh: "fire" };
elements.mc_spider_eye = { color: "#87212C", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_composter = { color: "#926831", behavior: behaviors.WALL, category: "Minecraft", burnTime: 80 };
elements.mc_bookshelf = { color: "#836136", behavior: behaviors.WALL, category: "Minecraft", burnTime: 60 };
elements.mc_pumpkin_pie = { color: "#C47738", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_sweet_berries = { color: "#921319", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_bowl = { color: "#875C34", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_anvil = { color: "#494949", behavior: behaviors.WALL, category: "Minecraft", density: 4000 };
elements.mc_blast_furnace = { color: "#4C4B4C", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 1200 };
elements.mc_chorus_plant = { color: "#886788", behavior: behaviors.WALL, category: "Minecraft", burnTime: 40 };
elements.mc_soul_lantern = { color: "#4E5C5D", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_tuff = { color: "#6C6D66", behavior: behaviors.WALL, category: "Minecraft", density: 2400 };
elements.mc_snow = { color: "#FFFFFF", behavior: behaviors.POWDER, category: "Minecraft", tempHigh: 0, stateHigh: "mc_water" };
elements.mc_smoker = { color: "#5A544F", behavior: behaviors.WALL, category: "Minecraft", tempHigh: 1200 };
elements.mc_sugar_cane = { color: "#8BB74A", behavior: behaviors.WALL, category: "Minecraft", burnTime: 30 };
elements.mc_cobweb = { color: "#E0E0E0", behavior: behaviors.WALL, category: "Minecraft", density: 10 };
elements.mc_heart_of_the_sea = { color: "#3690D0", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_potato = { color: "#C19C4A", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_rabbit_foot = { color: "#D2B895", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_loom = { color: "#927653", behavior: behaviors.WALL, category: "Minecraft", burnTime: 100 };
elements.mc_enchanting_table = { color: "#5F3A48", behavior: behaviors.WALL, category: "Minecraft", density: 3000 };
elements.mc_coarse_dirt = { color: "#77553A", behavior: behaviors.WALL, category: "Minecraft", density: 1250 };
elements.mc_cookie = { color: "#E09756", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_rabbit_hide = { color: "#B18961", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 25 };
elements.mc_moss_carpet = { color: "#5B7330", behavior: behaviors.WALL, category: "Minecraft", burnTime: 30 };
elements.mc_oxeye_daisy = { color: "#DDE5DD", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_carrot = { color: "#EFA12B", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_pufferfish = { color: "#DEB544", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_tall_grass = { color: "#5C8B3B", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_leather = { color: "#C65C35", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 30 };
elements.mc_saddle = { color: "#9E3C1B", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_painting = { color: "#A87042", behavior: behaviors.WALL, category: "Minecraft", burnTime: 30 };
elements.mc_gunpowder = { color: "#525252", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 5, tempHigh: 100, stateHigh: "fire" };
elements.mc_beacon = { color: "#69BDB8", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_bone = { color: "#E0DECA", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_lightning_rod = { color: "#C66A45", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_lectern = { color: "#98714A", behavior: behaviors.WALL, category: "Minecraft", burnTime: 80 };
elements.mc_magma_cream = { color: "#A14220", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_nether_star = { color: "#E2F0E9", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_glass_bottle = { color: "#78A6D2", behavior: behaviors.POWDER, category: "Minecraft", density: 2500 };
elements.mc_snowball = { color: "#FFFFFF", behavior: behaviors.POWDER, category: "Minecraft", tempHigh: 0, stateHigh: "mc_water" };
elements.mc_totem_of_undying = { color: "#E0CD31", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_glow_ink_sac = { color: "#6EB0A3", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_slimeball = { color: "#6ABB44", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_honeycomb = { color: "#E6B033", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 25 };
elements.mc_zombie_head = { color: "#3B5C32", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_conduit = { color: "#90775D", behavior: behaviors.WALL, category: "Minecraft", glow: true };
elements.mc_lingering_potion = { color: "#A33BAA", behavior: behaviors.LIQUID, category: "Minecraft" };
elements.mc_chest = { color: "#8E6B41", behavior: behaviors.WALL, category: "Minecraft", burnTime: 120 };
elements.mc_item_frame = { color: "#7D532C", behavior: behaviors.WALL, category: "Minecraft", burnTime: 30 };
elements.mc_armor_stand = { color: "#876646", behavior: behaviors.WALL, category: "Minecraft", burnTime: 60 };
elements.mc_chorus_fruit = { color: "#8B6590", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_frog_spawn = { color: "#54463A", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_pointed_dripstone = { color: "#7B6252", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_mycelium = { color: "#6C5963", behavior: behaviors.WALL, category: "Minecraft", density: 1250 };
elements.mc_glistering_melon_slice = { color: "#DEB82E", behavior: behaviors.POWDER, category: "Minecraft", glow: true };
elements.mc_jack_o_lantern = { color: "#E28B14", behavior: behaviors.WALL, category: "Minecraft", burnTime: 80, glow: true };
elements.mc_calcite = { color: "#D8D6CD", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_elytra = { color: "#9292A1", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 60 };
elements.mc_shears = { color: "#8B8B8B", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_hopper = { color: "#4E4E4E", behavior: behaviors.WALL, category: "Minecraft", density: 3000 };
elements.mc_redstone_comparator = { color: "#A1A1A1", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_spyglass = { color: "#B88939", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_fishing_rod = { color: "#755531", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 20 };
elements.mc_camp_fire = { color: "#E98926", behavior: behaviors.WALL, category: "Minecraft", glow: true, temp: 400 };
elements.mc_stonecutter = { color: "#6E6D6B", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_redstone_repeater = { color: "#8E8E8E", behavior: behaviors.WALL, category: "Minecraft", conductive: true };
elements.mc_smithing_table = { color: "#2E2D33", behavior: behaviors.WALL, category: "Minecraft", burnTime: 100 };
elements.mc_bell = { color: "#EDCD4C", behavior: behaviors.WALL, category: "Minecraft" };
elements.mc_feather = { color: "#E5E5E5", behavior: behaviors.POWDER, category: "Minecraft", burnTime: 10 };
elements.mc_clock = { color: "#D1B73B", behavior: behaviors.POWDER, category: "Minecraft" };
elements.mc_phantom_membrane = { color: "#C7B999", behavior: behaviors.POWDER, category: "Minecraft" };
