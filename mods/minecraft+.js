// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Version: Stable Master File
// Features: Single-Pixel Mobs, Massive Block Roster, Gradients, Crash-Fixes
// ==========================================

/* ==========================================
   1. CORE PHYSICS & FLUIDS
   ========================================== */
// Safely patch vanilla water to react with MC lava without breaking the game
if (elements.water && !elements.water.reactions) elements.water.reactions = {};
if (elements.water && elements.water.reactions) {
    elements.water.reactions.mc_lava = { elem1: "steam", elem2: "mc_cobblestone" };
}

elements.mc_water = {
    color: "rgba(63, 118, 228, 0.7)", // Translucent
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "steam", elem2: "mc_cobblestone", chance: 1.0 } }
};

elements.mc_lava = {
    color: ["#E65C00", "#FF8C00", "#D95100"], // Gradient flowing lava
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 3000, temp: 1200,
    reactions: { 
        "mc_water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 }, 
        "water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 } 
    }
};

/* ==========================================
   2. TERRAIN, EXPLOSIVES & ENVIRONMENT
   ========================================== */
elements.mc_dirt = { color: ["#866043", "#7A563C", "#6D4C35"], behavior: behaviors.WALL, category: "Minecraft", density: 1200 };
elements.mc_sand = { color: ["#DBD3A0", "#D1C998", "#C7BFA1"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600 };
elements.mc_red_sand = { color: ["#A95821", "#9C511E", "#B86024"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600 };
elements.mc_gravel = { color: ["#837F7E", "#7A7675", "#8C8887"], behavior: behaviors.POWDER, category: "Minecraft", density: 1700 };

// Heavily textured Cobblestone
elements.mc_cobblestone = { color: ["#757575", "#616161", "#424242", "#545454"], behavior: behaviors.WALL, category: "Minecraft", density: 2400 };
elements.mc_stone = { color: ["#7D7D7D", "#757575"], behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_obsidian = { color: ["#161021", "#1C142B", "#100B1A"], behavior: behaviors.WALL, category: "Minecraft", density: 3500 };
elements.mc_bedrock = { color: ["#1F1F1F", "#171717", "#262626"], behavior: behaviors.WALL, category: "Minecraft", density: 99999 };
elements.mc_netherrack = { color: ["#612727", "#522121", "#732E2E"], behavior: behaviors.WALL, category: "Minecraft", density: 2000, burnTime: 99999 };
elements.mc_soul_sand = { color: ["#544033", "#4A382C", "#5E4839"], behavior: behaviors.WALL, category: "Minecraft", density: 1500 };
elements.mc_glowstone = { color: ["#E5BB5D", "#F0C86E", "#D4A949"], behavior: behaviors.WALL, category: "Minecraft", density: 2200, glow: true };
elements.mc_glass = { color: "rgba(200, 237, 246, 0.3)", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };

// Grass spreading
elements.mc_grass_block = {
    color: ["#5CB031", "#866043", "#63C235"], behavior: behaviors.WALL, category: "Minecraft", density: 1250,
    tick: function(pixel) {
        if (pixelTicks % 40 === 0) {
            let tx = pixel.x + (Math.random() < 0.5 ? 1 : -1);
            let ty = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (!isEmpty(tx, ty, true)) {
                let target = pixelMap[tx][ty];
                if (target && target.element === "mc_dirt" && isEmpty(tx, ty - 1, false)) target.element = "mc_grass_block";
            }
        }
    }
};

// Fixed TNT (Mostly Red, definitely explodes)
elements.mc_tnt = { 
    color: ["#E53935", "#D32F2F", "#B71C1C", "#FFFFFF"], // Red gradient with a tiny bit of white
    behavior: behaviors.WALL, category: "Minecraft", density: 1500, burnTime: 30,
    tick: function(pixel) { 
        if (pixel.burning) { 
            if (pixelTicks % 5 === 0) pixel.color = "#FFFFFF"; // Flash white
            if (pixelTicks - pixel.burnStart > 45) pixel.element = "explosion"; // Boom!
        } 
    }
};

/* ==========================================
   3. PROCEDURAL GENERATION: HUNDREDS OF BLOCKS
   ========================================== */
// The 16 Colors (Wool, Glass, Terracotta, Concrete)
const mcColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
const mcHex = ["#E9ECEC", "#F07613", "#BD44B3", "#3AAFD9", "#F8C627", "#70B919", "#ED8DAC", "#3E4447", "#8E8E86", "#158991", "#792AAC", "#35399D", "#724728", "#546D1B", "#A12722", "#141519"];

for (let i = 0; i < mcColors.length; i++) {
    let name = "mc_" + mcColors[i];
    let hex = mcHex[i];
    
    elements[name + "_wool"] = { color: [hex, hex, "#00000022"], behavior: behaviors.WALL, category: "Minecraft", density: 400, burnTime: 150 };
    elements[name + "_terracotta"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", density: 2000 };
    elements[name + "_concrete"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
    
    // Translucent Stained Glass
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    elements[name + "_stained_glass"] = { color: `rgba(${r}, ${g}, ${b}, 0.5)`, behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
    
    // Concrete Powder (Falls, hardens in water)
    elements[name + "_concrete_powder"] = { 
        color: [hex, hex, "#ffffff11"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600,
        reactions: { "mc_water": { elem1: name + "_concrete", elem2: null }, "water": { elem1: name + "_concrete", elem2: null } }
    };
}

// Woods (Logs, Planks, Leaves with gradients)
const mcWoods = {
    "oak": { log: ["#6A5232", "#5C462A"], plank: ["#A2834E", "#8A6F41"], leaf: "rgba(72, 181, 41, 0.85)" },
    "spruce": { log: ["#392A1A", "#2E2114"], plank: ["#705334", "#5C442A"], leaf: "rgba(48, 87, 48, 0.85)" },
    "birch": { log: ["#DFDFDB", "#D0D0CC"], plank: ["#C3B37B", "#B0A16D"], leaf: "rgba(98, 164, 75, 0.85)" },
    "jungle": { log: ["#594319", "#4A3713"], plank: ["#A27551", "#8A6242"], leaf: "rgba(48, 160, 30, 0.85)" },
    "acacia": { log: ["#625D56", "#524E47"], plank: ["#A55D28", "#8F4F21"], leaf: "rgba(134, 162, 56, 0.85)" }
};
for (let wood in mcWoods) {
    elements["mc_" + wood + "_log"] = { color: mcWoods[wood].log, behavior: behaviors.WALL, category: "Minecraft", density: 700, burnTime: 400 };
    elements["mc_" + wood + "_planks"] = { color: mcWoods[wood].plank, behavior: behaviors.WALL, category: "Minecraft", density: 600, burnTime: 300 };
    elements["mc_" + wood + "_leaves"] = { color: mcWoods[wood].leaf, behavior: behaviors.WALL, category: "Minecraft", density: 300, burnTime: 100 };
}

// Ores & Mineral Blocks
const mcOres = {
    "coal": { ore: "#1D1D1D", block: ["#111111", "#1A1A1A"] }, "iron": { ore: "#D8AF93", block: ["#E2E2E2", "#D4D4D4"] }, 
    "gold": { ore: "#FCEE4B", block: ["#FCEE4B", "#E6D83E"] }, "diamond": { ore: "#4AEDD9", block: ["#68EBD8", "#58D1BF"] }, 
    "emerald": { ore: "#17DD62", block: ["#41F384", "#35DE75"] }, "redstone": { ore: "#AA0F0A", block: ["#9E160A", "#8A1208"] },
    "lapis": { ore: "#2149A6", block: ["#1C4195", "#16367D"] }
};
for (let ore in mcOres) {
    elements["mc_" + ore + "_ore"] = { color: ["#7D7D7D", mcOres[ore].ore, "#686868"], behavior: behaviors.WALL, category: "Minecraft", density: 2800 };
    elements["mc_" + ore + "_block"] = { color: mcOres[ore].block, behavior: behaviors.WALL, category: "Minecraft", density: 4000 };
}

/* ==========================================
   4. ITEMS, XP ORBS, AND MUSIC DISCS (CRASH FIXED)
   ========================================== */
elements.mc_torch = { color: ["#FCEE4B", "#E69C24", "#593D29"], behavior: behaviors.WALL, category: "Minecraft", density: 500, glow: true };
elements.mc_gunpowder = { color: ["#555555", "#444444"], behavior: behaviors.POWDER, category: "Minecraft", density: 900, burnTime: 10, stateHigh: "explosion", tempHigh: 150 };
elements.mc_bone = { color: ["#E8E8E8", "#D4D4D4"], behavior: behaviors.POWDER, category: "Minecraft", density: 1200 };
elements.mc_spider_eye = { color: ["#8F2633", "#6E1B26"], behavior: behaviors.POWDER, category: "Minecraft", density: 1000 };

// Satisfying XP Orbs (Heavy Powder, Neon Flash)
elements.mc_xp_orb = {
    color: ["#80FF20", "#D0FF40"], behavior: behaviors.POWDER, category: "Minecraft", density: 2500, glow: true,
    tick: function(pixel) {
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40"; 
        if (isEmpty(pixel.x, pixel.y + 1, false)) tryMove(pixel, pixel.x, pixel.y + 1); // Extra gravity
    }
};

// Bottle o' Enchanting (Breaks into XP)
elements.mc_bottle_o_enchanting = {
    color: "rgba(165, 227, 88, 0.8)", behavior: behaviors.POWDER, category: "Minecraft", density: 1500,
    tick: function(pixel) {
        // If it cannot move down (it hit the floor/wall)
        if (!isEmpty(pixel.x, pixel.y + 1, true) && !isEmpty(pixel.x - 1, pixel.y + 1, true) && !isEmpty(pixel.x + 1, pixel.y + 1, true)) {
            let below = pixelMap[pixel.x][pixel.y + 1];
            if (below && below.element !== "mc_bottle_o_enchanting") {
                pixel.element = "mc_xp_orb"; // Turn the bottle itself into XP
                // Spawn a few extra XP Orbs safely
                for (let i = 0; i < 4; i++) {
                    let rx = pixel.x + Math.floor(Math.random() * 5) - 2;
                    let ry = pixel.y - Math.floor(Math.random() * 4);
                    if (isEmpty(rx, ry, false)) createPixel("mc_xp_orb", rx, ry);
                }
            }
        }
    }
};

// Music Disc & Jukebox (Safely coded to avoid crashes)
elements.mc_music_disc = { color: ["#55FF55", "#FF5555", "#5555FF", "#FFFF55"], behavior: behaviors.POWDER, category: "Minecraft", density: 1000 };
elements.mc_jukebox = {
    color: ["#5E3A24", "#4A2D1B"], behavior: behaviors.WALL, category: "Minecraft", density: 600,
    reactions: { "mc_music_disc": { elem1: "mc_jukebox_playing", elem2: null } }
};
elements.mc_jukebox_playing = {
    color: ["#7E4A2E", "#663A22"], behavior: behaviors.WALL, category: "Minecraft", density: 600,
    tick: function(pixel) {
        if (Math.random() < 0.05 && isEmpty(pixel.x, pixel.y - 1, false)) {
            createPixel("mc_music_note", pixel.x, pixel.y - 1);
        }
    }
};
elements.mc_music_note = {
    color: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], behavior: behaviors.GAS, category: "Minecraft", hidden: true, density: 5,
    tick: function(pixel) {
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y - 1);
        if (Math.random() < 0.1) deletePixel(pixel.x, pixel.y); // Fade out
    }
};

/* ==========================================
   5. SINGLE-PIXEL MOBS (NO MORE MULTI-PIXEL CRASHES)
   ========================================== */
elements.mc_zombie = {
    color: ["#4A7129", "#4A4A9C", "#2D2D6A"], // Mixed Green Head and Blue Shirt
    behavior: behaviors.POWDER, category: "Minecraft", density: 1100,
    tick: function(pixel) {
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (!tryMove(pixel, pixel.x + dir, pixel.y) && isEmpty(pixel.x + dir, pixel.y - 1, false)) tryMove(pixel, pixel.x + dir, pixel.y - 1);
        }
        if (pixel.y < 20 && Math.random() < 0.02 && isEmpty(pixel.x, pixel.y - 1, true)) pixel.burning = true;
    }
};

elements.mc_skeleton = {
    color: ["#D0D0D0", "#E8E8E8", "#BDBDBD"], // Whites and grays
    behavior: behaviors.POWDER, category: "Minecraft", density: 1000,
    tick: function(pixel) {
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (!tryMove(pixel, pixel.x + dir, pixel.y) && isEmpty(pixel.x + dir, pixel.y - 1, false)) tryMove(pixel, pixel.x + dir, pixel.y - 1);
        }
        if (pixel.y < 20 && Math.random() < 0.02 && isEmpty(pixel.x, pixel.y - 1, true)) pixel.burning = true;
    }
};

elements.mc_creeper = {
    color: ["#3EAA34", "#2A7A22", "#000000"], // Greens and Black
    behavior: behaviors.POWDER, category: "Minecraft", density: 1000,
    tick: function(pixel) {
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (!tryMove(pixel, pixel.x + dir, pixel.y) && isEmpty(pixel.x + dir, pixel.y - 1, false)) tryMove(pixel, pixel.x + dir, pixel.y - 1);
        }
        // Explode near fire/lava
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (!isEmpty(pixel.x + i, pixel.y + j, true)) {
                    let n = pixelMap[pixel.x + i][pixel.y + j];
                    if (n.element === "mc_fire" || n.element === "mc_lava" || n.burning) {
                        pixel.element = "explosion";
                        return;
                    }
                }
            }
        }
    }
};

elements.mc_enderman = {
    color: ["#161616", "#111111", "#CC00FF"], // Blacks and Purple eyes
    behavior: behaviors.POWDER, category: "Minecraft", density: 1200,
    tick: function(pixel) {
        if (Math.random() < 0.02) { // Teleport
            let tx = pixel.x + Math.floor(Math.random() * 30) - 15;
            let ty = pixel.y + Math.floor(Math.random() * 30) - 15;
            if (isEmpty(tx, ty, false)) tryMove(pixel, tx, ty);
        } else if (Math.random() < 0.05) { // Walk
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (!tryMove(pixel, pixel.x + dir, pixel.y) && isEmpty(pixel.x + dir, pixel.y - 1, false)) tryMove(pixel, pixel.x + dir, pixel.y - 1);
        }
    }
};

elements.mc_pig = { color: ["#F0A5A5", "#E08484"], behavior: behaviors.POWDER, category: "Minecraft", density: 1000, tick: function(pixel) { if (Math.random() < 0.05) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); } };
elements.mc_sheep = { color: ["#E4E4E4", "#D6CACA", "#F0A5A5"], behavior: behaviors.POWDER, category: "Minecraft", density: 900, tick: function(pixel) { if (Math.random() < 0.05) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); } };
elements.mc_cow = { color: ["#4A3018", "#F2F2F2", "#2B1B0D"], behavior: behaviors.POWDER, category: "Minecraft", density: 1200, tick: function(pixel) { if (Math.random() < 0.05) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); } };
