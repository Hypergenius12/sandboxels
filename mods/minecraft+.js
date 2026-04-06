// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Version: Blocks, Items, Smelting, and Redstone
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
elements.mc_sand = { color: ["#DBD3A0", "#D1C998", "#C7BFA1"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600, tempHigh: 1500, stateHigh: "mc_glass" }; // Smelts to Glass
elements.mc_red_sand = { color: ["#A95821", "#9C511E", "#B86024"], behavior: behaviors.POWDER, category: "Minecraft", density: 1600, tempHigh: 1500, stateHigh: "mc_glass" };
elements.mc_gravel = { color: ["#837F7E", "#7A7675", "#8C8887"], behavior: behaviors.POWDER, category: "Minecraft", density: 1700 };

elements.mc_cobblestone = { color: ["#757575", "#616161", "#424242", "#545454"], behavior: behaviors.WALL, category: "Minecraft", density: 2400, tempHigh: 1200, stateHigh: "mc_stone" }; // Smelts to Stone
elements.mc_stone = { color: ["#7D7D7D", "#757575"], behavior: behaviors.WALL, category: "Minecraft", density: 2500 };
elements.mc_obsidian = { color: ["#161021", "#1C142B", "#100B1A"], behavior: behaviors.WALL, category: "Minecraft", density: 3500 };
elements.mc_bedrock = { color: ["#1F1F1F", "#171717", "#262626"], behavior: behaviors.WALL, category: "Minecraft", density: 99999 };
elements.mc_netherrack = { color: ["#612727", "#522121", "#732E2E"], behavior: behaviors.WALL, category: "Minecraft", density: 2000, burnTime: 99999 };
elements.mc_soul_sand = { color: ["#544033", "#4A382C", "#5E4839"], behavior: behaviors.WALL, category: "Minecraft", density: 1500 };
elements.mc_glowstone = { color: ["#E5BB5D", "#F0C86E", "#D4A949"], behavior: behaviors.WALL, category: "Minecraft", density: 2200, glow: true };
elements.mc_glass = { color: "rgba(200, 237, 246, 0.4)", behavior: behaviors.WALL, category: "Minecraft", density: 2500 };

// Working TNT
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
// The 16 Colors (Wool, Glass, Terracotta, Concrete)
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

// Woods
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

// Ores & Smelting
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
    // Generate the Item/Ingot
    elements["mc_" + ore + "_item"] = { color: mcOres[ore].item, behavior: behaviors.POWDER, category: "Minecraft", density: 3000 };
    // Generate the Ore (Smelts into the item at 1000 degrees!)
    elements["mc_" + ore + "_ore"] = { 
        color: ["#7D7D7D", mcOres[ore].ore, "#686868"], 
        behavior: behaviors.WALL, category: "Minecraft", density: 2800,
        tempHigh: 1000, stateHigh: "mc_" + ore + "_item" 
    };
    // Generate the solid Block of the mineral
    elements["mc_" + ore + "_block"] = { color: mcOres[ore].item, behavior: behaviors.WALL, category: "Minecraft", density: 4000 };
}

/* ==========================================
   4. REDSTONE & PISTONS
   ========================================== */
// Redstone Dust
elements.mc_redstone_dust = { 
    color: ["#AA0F0A", "#800906"], behavior: behaviors.POWDER, category: "Minecraft", density: 1500, conductive: true 
};

// Redstone Block (Constant power source)
elements.mc_redstone_block = { 
    color: "#9E160A", behavior: behaviors.WALL, category: "Minecraft", density: 2500, conductive: true,
    tick: function(pixel) { pixel.charge = 1; } // Always powered
};

// Upward-Facing Piston
elements.mc_piston = {
    color: ["#7D7D7D", "#A2834E"], behavior: behaviors.WALL, category: "Minecraft", density: 2000, conductive: true,
    tick: function(pixel) {
        if (pixel.charge) {
            // Extend Piston
            if (isEmpty(pixel.x, pixel.y - 1, false)) {
                createPixel("mc_piston_head", pixel.x, pixel.y - 1);
            } 
            // Push block above it up one space
            else if (pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y - 1] && pixelMap[pixel.x][pixel.y - 1].element !== "mc_piston_head") {
                if (isEmpty(pixel.x, pixel.y - 2, false)) {
                    swapPixels(pixelMap[pixel.x][pixel.y - 1], pixelMap[pixel.x][pixel.y - 2]);
                    createPixel("mc_piston_head", pixel.x, pixel.y - 1);
                }
            }
        } else {
            // Retract Piston
            if (pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y - 1] && pixelMap[pixel.x][pixel.y - 1].element === "mc_piston_head") {
                deletePixel(pixel.x, pixel.y - 1);
            }
        }
    }
};

elements.mc_piston_head = { color: "#8A6F41", behavior: behaviors.WALL, category: "states", hidden: true, state: "solid" };

/* ==========================================
   5. WORKING TORCHES, END ITEMS & SPECIALTIES
   ========================================== */
// Working Torch (Generates fire above itself)
elements.mc_torch = { 
    color: "#593D29", behavior: behaviors.WALL, category: "Minecraft", density: 500,
    tick: function(pixel) {
        if (Math.random() < 0.1 && isEmpty(pixel.x, pixel.y - 1, false)) {
            createPixel("fire", pixel.x, pixel.y - 1);
        }
    }
};

// The End Blocks
elements.mc_purpur_block = { color: ["#A97AA9", "#9A6A9A"], behavior: behaviors.WALL, category: "Minecraft", density: 2400 };
elements.mc_end_rod = { color: "#FFFFFF", behavior: behaviors.WALL, category: "Minecraft", density: 1000, glow: true };

// Dragon Egg (Teleports when clicked)
elements.mc_dragon_egg = {
    color: ["#140B1A", "#CC00FF"], behavior: behaviors.POWDER, category: "Minecraft", density: 3000,
    onClicked: function(pixel) {
        let tx = pixel.x + Math.floor(Math.random() * 40) - 20;
        let ty = pixel.y + Math.floor(Math.random() * 40) - 20;
        if (isEmpty(tx, ty, false)) {
            tryMove(pixel, tx, ty);
            for(let i=0; i<5; i++) createPixel("mc_ender_pearl_sparkle", pixel.x, pixel.y); // visual flair
        }
    }
};

// End Crystal (Explodes violently if heated or touched by fire/lava)
elements.mc_end_crystal = {
    color: ["#E98CFF", "#FFFFFF", "#CC00FF"], behavior: behaviors.WALL, category: "Minecraft", density: 1000, glow: true,
    tempHigh: 100, stateHigh: "explosion", // Explodes if it gets warm
    tick: function(pixel) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (!isEmpty(pixel.x + i, pixel.y + j, true)) {
                    let n = pixelMap[pixel.x + i][pixel.y + j];
                    if (n.element === "fire" || n.element === "mc_lava" || n.burning) {
                        pixel.element = "explosion";
                    }
                }
            }
        }
    }
};

// Translucent Ender Pearl
elements.mc_ender_pearl = {
    color: "rgba(26, 135, 120, 0.8)", behavior: behaviors.POWDER, category: "Minecraft", density: 2000,
    tick: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y + 1, false) && !isEmpty(pixel.x - 1, pixel.y + 1, false) && !isEmpty(pixel.x + 1, pixel.y + 1, false)) {
            let below = pixelMap[pixel.x][pixel.y + 1];
            if (below && below.element !== "mc_ender_pearl") {
                for(let i=0; i<8; i++) {
                    let rx = pixel.x + Math.floor(Math.random()*5)-2;
                    let ry = pixel.y + Math.floor(Math.random()*5)-2;
                    if(isEmpty(rx,ry)) createPixel("mc_ender_pearl_sparkle", rx, ry);
                }
                deletePixel(pixel.x, pixel.y);
            }
        }
    }
};

elements.mc_ender_pearl_sparkle = {
    color: ["#CC00FF", "#E98CFF"], behavior: behaviors.GAS, category: "states", hidden: true, density: 1, glow: true,
    tick: function(pixel) {
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y + (Math.random() < 0.5 ? 1 : -1));
        if (Math.random() < 0.2) deletePixel(pixel.x, pixel.y);
    }
};

// Satisfying XP Orbs
elements.mc_xp_orb = {
    color: ["#80FF20", "#D0FF40"], behavior: behaviors.POWDER, category: "Minecraft", density: 2500, glow: true,
    tick: function(pixel) {
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40"; 
        if (isEmpty(pixel.x, pixel.y + 1, false)) tryMove(pixel, pixel.x, pixel.y + 1); 
    }
};

// Bottle o' Enchanting (Breaks into XP)
elements.mc_bottle_o_enchanting = {
    color: "rgba(165, 227, 88, 0.8)", behavior: behaviors.POWDER, category: "Minecraft", density: 1500,
    tick: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y + 1, true) && !isEmpty(pixel.x - 1, pixel.y + 1, true) && !isEmpty(pixel.x + 1, pixel.y + 1, true)) {
            let below = pixelMap[pixel.x][pixel.y + 1];
            if (below && below.element !== "mc_bottle_o_enchanting") {
                pixel.element = "mc_xp_orb"; 
                for (let i = 0; i < 4; i++) {
                    let rx = pixel.x + Math.floor(Math.random() * 5) - 2;
                    let ry = pixel.y - Math.floor(Math.random() * 4);
                    if (isEmpty(rx, ry, false)) createPixel("mc_xp_orb", rx, ry);
                }
            }
        }
    }
};
