// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Bug-Free Master File: Translucency, Massive Item List, Human-Based Mob AI
// ==========================================

/* ==========================================
   1. CORE REACTIONS & FLUIDS
   ========================================== */
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "cobblestone" };

elements.mc_water = {
    color: "rgba(63, 118, 228, 0.7)", // Slightly translucent water
    behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "steam", elem2: "cobblestone", chance: 1.0 } }
};
elements.mc_lava = {
    color: ["#D95100", "#FF8C00"], behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 3000, temp: 1200,
    reactions: { "mc_water": { elem1: "obsidian", elem2: "steam", chance: 1.0 }, "water": { elem1: "obsidian", elem2: "steam", chance: 1.0 } }
};

/* ==========================================
   2. PROCEDURAL GENERATION (HUNDREDS OF BLOCKS)
   ========================================== */
// The 16 Minecraft Colors
const mcColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
const mcHex = ["#E9ECEC", "#F07613", "#BD44B3", "#3AAFD9", "#F8C627", "#70B919", "#ED8DAC", "#3E4447", "#8E8E86", "#158991", "#792AAC", "#35399D", "#724728", "#546D1B", "#A12722", "#141519"];

for (let i = 0; i < mcColors.length; i++) {
    let name = mcColors[i];
    let hex = mcHex[i];
    
    elements[name + "_wool"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 400, burnTime: 150 };
    elements[name + "_terracotta"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2000 };
    elements[name + "_concrete"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
    elements[name + "_carpet"] = { color: hex, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 100, burnTime: 50 };
    
    // Translucent Stained Glass
    let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    elements[name + "_stained_glass"] = { color: `rgba(${r}, ${g}, ${b}, 0.5)`, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
    
    elements[name + "_concrete_powder"] = { 
        color: hex, behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1600,
        reactions: { "mc_water": { elem1: name + "_concrete", elem2: null }, "water": { elem1: name + "_concrete", elem2: null } }
    };
}

// Woods
const mcWoods = {
    "oak": { log: "#6A5232", plank: "#A2834E", leaf: "rgba(72, 181, 41, 0.85)" },
    "spruce": { log: "#392A1A", plank: "#705334", leaf: "rgba(48, 87, 48, 0.85)" },
    "birch": { log: "#DFDFDB", plank: "#C3B37B", leaf: "rgba(98, 164, 75, 0.85)" },
    "jungle": { log: "#594319", plank: "#A27551", leaf: "rgba(48, 160, 30, 0.85)" },
    "acacia": { log: "#625D56", plank: "#A55D28", leaf: "rgba(134, 162, 56, 0.85)" },
    "dark_oak": { log: "#2A2116", plank: "#412B15", leaf: "rgba(49, 118, 31, 0.85)" },
    "cherry": { log: "#54352D", plank: "#E8B3B3", leaf: "rgba(255, 157, 205, 0.85)" }
};
for (let wood in mcWoods) {
    elements[wood + "_log"] = { color: mcWoods[wood].log, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 700, burnTime: 400 };
    elements[wood + "_planks"] = { color: mcWoods[wood].plank, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 600, burnTime: 300 };
    elements[wood + "_leaves"] = { color: mcWoods[wood].leaf, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 300, burnTime: 100 };
}

// Stones & Ores
const mcStones = ["stone", "granite", "diorite", "andesite", "deepslate", "tuff", "calcite"];
const mcStoneColors = ["#7D7D7D", "#956755", "#BDBDBD", "#828383", "#3D3D43", "#6C6D66", "#E2E3E3"];
for (let i=0; i<mcStones.length; i++) {
    elements[mcStones[i]] = { color: mcStoneColors[i], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
    elements["polished_" + mcStones[i]] = { color: mcStoneColors[i], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2600 };
}

const mcOres = {
    "coal": { ore: "#1D1D1D", block: "#111111" }, "iron": { ore: "#D8AF93", block: "#E2E2E2" }, "gold": { ore: "#FCEE4B", block: "#FCEE4B" },
    "diamond": { ore: "#4AEDD9", block: "#68EBD8" }, "emerald": { ore: "#17DD62", block: "#41F384" }, "redstone": { ore: "#AA0F0A", block: "#9E160A" },
    "lapis": { ore: "#2149A6", block: "#1C4195" }, "copper": { ore: "#C06B50", block: "#C06B50" }
};
for (let ore in mcOres) {
    elements[ore + "_ore"] = { color: ["#7D7D7D", mcOres[ore].ore], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2800 };
    elements[ore + "_block"] = { color: mcOres[ore].block, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 4000 };
}

/* ==========================================
   3. INDIVIDUAL BLOCKS & ITEMS
   ========================================== */
elements.glass = { color: "rgba(200, 237, 246, 0.4)", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
elements.obsidian = { color: "#161021", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 3500 };
elements.bedrock = { color: "#1F1F1F", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 99999 };
elements.netherrack = { color: "#612727", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2000, burnTime: 99999 };
elements.soul_sand = { color: "#544033", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1500 };
elements.end_stone = { color: "#DDE0A5", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2700 };
elements.glowstone = { color: "#E5BB5D", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2200, glow: true };
elements.torch = { color: ["#FCEE4B", "#593D29"], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 500, glow: true };
elements.cobweb = { color: "rgba(230, 230, 230, 0.6)", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 100, burnTime: 20 };

elements.mc_sand = { color: "#DBD3A0", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1600 };
elements.mc_dirt = { color: "#866043", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1200 };
elements.grass_block = { color: ["#5CB031", "#866043"], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1250 };

elements.gunpowder = { color: "#555555", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 900, burnTime: 10, stateHigh: "explosion", tempHigh: 150 };
elements.bone = { color: "#E8E8E8", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1200 };
elements.rotten_flesh = { color: "#B75633", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1050 };
elements.spider_eye = { color: "#8F2633", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1000 };

/* ==========================================
   4. TRANSLUCENT ENDER PEARL, BOTTLE O' ENCHANTING & XP
   ========================================== */
elements.ender_pearl_sparkle = {
    color: ["#CC00FF", "#E98CFF", "#FFFFFF"], behavior: behaviors.GAS, category: "states", hidden: true, density: 1, glow: true,
    tick: function(pixel) {
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y + (Math.random() < 0.5 ? 1 : -1));
        if (Math.random() < 0.2) deletePixel(pixel.x, pixel.y); // Fade out quickly
    }
};

elements.ender_pearl = {
    color: "rgba(26, 135, 120, 0.8)", // Translucent
    behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 2000,
    tick: function(pixel) {
        // Explode into sparkles when it hits something
        if (!isEmpty(pixel.x, pixel.y + 1, false) && !isEmpty(pixel.x - 1, pixel.y + 1, false) && !isEmpty(pixel.x + 1, pixel.y + 1, false)) {
            let below = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
            if (below && below.element !== "ender_pearl") {
                for(let i=0; i<8; i++) {
                    let rx = pixel.x + Math.floor(Math.random()*5)-2;
                    let ry = pixel.y + Math.floor(Math.random()*5)-2;
                    if(isEmpty(rx,ry)) createPixel("ender_pearl_sparkle", rx, ry);
                }
                deletePixel(pixel.x, pixel.y);
            }
        }
    }
};

elements.xp_orb = {
    color: ["#80FF20", "#D0FF40"], 
    behavior: behaviors.POWDER, // Heavy powder behavior
    category: "Minecraft", density: 2500, state: "solid", glow: true,
    tick: function(pixel) {
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40"; // Flashing neon
    }
};

elements.bottle_o_enchanting = {
    color: "rgba(165, 227, 88, 0.9)", // Glassy translucent bottle
    behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1500,
    tick: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y + 1, false) && !isEmpty(pixel.x - 1, pixel.y + 1, false) && !isEmpty(pixel.x + 1, pixel.y + 1, false)) {
            let below = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
            if (below && below.element !== "bottle_o_enchanting") {
                changePixel(pixel, "xp_orb");
                for (let i = 0; i < 5; i++) {
                    let rx = pixel.x + Math.floor(Math.random() * 5) - 2;
                    let ry = pixel.y - Math.floor(Math.random() * 4);
                    if (isEmpty(rx, ry)) createPixel("xp_orb", rx, ry);
                }
            }
        }
    }
};

/* ==========================================
   5. MOB AI (ADAPTED EXACTLY FROM YOUR HUMAN CODE)
   ========================================== */

// --- ZOMBIE ---
elements.mc_zombie = {
    color: "#4A4A9C", // Blue Shirt
    category: "Minecraft",
    properties: { dead: false, dir: 1, panic: 0 },
    onPlace: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y-1, true) && pixelMap[pixel.x][pixel.y-1].element === "mc_zombie_head") deletePixel(pixel.x, pixel.y-1);
        else if (!isEmpty(pixel.x, pixel.y+1, true) && pixelMap[pixel.x][pixel.y+1].element === "mc_zombie_body") deletePixel(pixel.x, pixel.y+1);

        if (isEmpty(pixel.x, pixel.y+1)) {
            createPixel("mc_zombie_body", pixel.x, pixel.y+1);
            var color = pixel.color;
            changePixel(pixel,"mc_zombie_head");
            pixel.color = color;
        }
        else if (isEmpty(pixel.x, pixel.y-1)) {
            createPixel("mc_zombie_head", pixel.x, pixel.y-1);
            changePixel(pixel,"mc_zombie_body");
        } else { deletePixel(pixel.x, pixel.y); }
    }
};

elements.mc_zombie_body = {
    color: ["#4A4A9C", "#2D2D6A"], // Shirt
    category: "states", hidden: true, density: 1500, state: "solid",
    properties: { dead: false, dir: 1, panic: 0 },
    tick: function(pixel) {
        if (tryMove(pixel, pixel.x, pixel.y+1)) { 
            if (!isEmpty(pixel.x, pixel.y-2, true)) { 
                var headpixel = pixelMap[pixel.x][pixel.y-2];
                if (headpixel.element === "mc_zombie_head") {
                    if (isEmpty(pixel.x, pixel.y-1)) movePixel(pixelMap[pixel.x][pixel.y-2], pixel.x, pixel.y-1);
                    else swapPixels(pixelMap[pixel.x][pixel.y-2], pixelMap[pixel.x][pixel.y-1]);
                }
            }
        }
        doBurning(pixel);
        if (pixel.dead) return;

        if (!isEmpty(pixel.x, pixel.y-1, true) && pixelMap[pixel.x][pixel.y-1].element == "mc_zombie_head") {
            var head = pixelMap[pixel.x][pixel.y-1];
            if (head.dead) pixel.dead = head.dead;
        } else { var head = null; }

        if (pixel.burning && head) pixel.color = head.color;

        if (isEmpty(pixel.x, pixel.y-1)) {
            if (Math.random() < 0.1 && !pixel.charge) {
                createPixel("rotten_flesh", pixel.x, pixel.y-1);
                if (Math.random() < 0.15) pixel.dead = pixelTicks;
            }
        }
        else if (head === null) { return; }
        else if (Math.random() < 0.1) { 
            var movesToTry = [[1*pixel.dir,0], [1*pixel.dir,-1]];
            let moved = false;
            while (movesToTry.length > 0) {
                var move = movesToTry.splice(Math.floor(Math.random() * movesToTry.length), 1)[0];
                if (isEmpty(pixel.x+move[0], pixel.y+move[1]-1)) {
                    var origx = pixel.x+move[0]; var origy = pixel.y+move[1];
                    if (tryMove(pixel, pixel.x+move[0], pixel.y+move[1]) && pixel.x===origx && pixel.y===origy) {
                        movePixel(head, head.x+move[0], head.y+move[1]);
                        moved = true; break;
                    }
                }
            }
            if (Math.random() < 0.15 || !moved) pixel.dir *= -1;
        }
    }
};

elements.mc_zombie_head = {
    color: "#4A7129", // Green Head
    category: "states", hidden: true, density: 1080, state: "solid",
    properties: { dead: false },
    tick: function(pixel) {
        doBurning(pixel);
        // Burn in sunlight
        if (pixel.y < 20 && Math.random() < 0.05 && isEmpty(pixel.x, pixel.y - 1, true)) pixel.burning = true;

        if (pixel.dead) return;

        if (!isEmpty(pixel.x, pixel.y+1, true) && pixelMap[pixel.x][pixel.y+1].element == "mc_zombie_body") {
            var body = pixelMap[pixel.x][pixel.y+1];
            if (body.dead) pixel.dead = body.dead;
        } else { var body = null; }

        if (tryMove(pixel, pixel.x, pixel.y+1)) {
            if (isEmpty(pixel.x, pixel.y+1) && !pixel.dead && Math.random() < 0.1) {
                createPixel("rotten_flesh", pixel.x, pixel.y+1);
                if (Math.random() < 0.15) pixel.dead = pixelTicks;
            }
        }
    }
};

// --- SKELETON (Using exact same architecture) ---
elements.mc_skeleton = {
    color: "#D0D0D0", category: "Minecraft", properties: { dead: false, dir: 1, panic: 0 },
    onPlace: function(pixel) {
        if (!isEmpty(pixel.x, pixel.y-1, true) && pixelMap[pixel.x][pixel.y-1].element === "mc_skeleton_head") deletePixel(pixel.x, pixel.y-1);
        else if (!isEmpty(pixel.x, pixel.y+1, true) && pixelMap[pixel.x][pixel.y+1].element === "mc_skeleton_body") deletePixel(pixel.x, pixel.y+1);

        if (isEmpty(pixel.x, pixel.y+1)) {
            createPixel("mc_skeleton_body", pixel.x, pixel.y+1);
            var color = pixel.color; changePixel(pixel,"mc_skeleton_head"); pixel.color = color;
        }
        else if (isEmpty(pixel.x, pixel.y-1)) {
            createPixel("mc_skeleton_head", pixel.x, pixel.y-1);
            changePixel(pixel,"mc_skeleton_body");
        } else { deletePixel(pixel.x, pixel.y); }
    }
};

elements.mc_skeleton_body = {
    color: "#BDBDBD", category: "states", hidden: true, density: 1500, state: "solid",
    properties: { dead: false, dir: 1, panic: 0 },
    tick: function(pixel) {
        if (tryMove(pixel, pixel.x, pixel.y+1)) { 
            if (!isEmpty(pixel.x, pixel.y-2, true)) { 
                var headpixel = pixelMap[pixel.x][pixel.y-2];
                if (headpixel.element === "mc_skeleton_head") {
                    if (isEmpty(pixel.x, pixel.y-1)) movePixel(pixelMap[pixel.x][pixel.y-2], pixel.x, pixel.y-1);
                    else swapPixels(pixelMap[pixel.x][pixel.y-2], pixelMap[pixel.x][pixel.y-1]);
                }
            }
        }
        doBurning(pixel);
        if (pixel.dead) return;

        if (!isEmpty(pixel.x, pixel.y-1, true) && pixelMap[pixel.x][pixel.y-1].element == "mc_skeleton_head") {
            var head = pixelMap[pixel.x][pixel.y-1];
            if (head.dead) pixel.dead = head.dead;
        } else { var head = null; }

        if (isEmpty(pixel.x, pixel.y-1)) {
            if (Math.random() < 0.1 && !pixel.charge) {
                createPixel("bone", pixel.x, pixel.y-1);
                if (Math.random() < 0.15) pixel.dead = pixelTicks;
            }
        }
        else if (head === null) { return; }
        else if (Math.random() < 0.1) { 
            var movesToTry = [[1*pixel.dir,0], [1*pixel.dir,-1]];
            let moved = false;
            while (movesToTry.length > 0) {
                var move = movesToTry.splice(Math.floor(Math.random() * movesToTry.length), 1)[0];
                if (isEmpty(pixel.x+move[0], pixel.y+move[1]-1)) {
                    var origx = pixel.x+move[0]; var origy = pixel.y+move[1];
                    if (tryMove(pixel, pixel.x+move[0], pixel.y+move[1]) && pixel.x===origx && pixel.y===origy) {
                        movePixel(head, head.x+move[0], head.y+move[1]);
                        moved = true; break;
                    }
                }
            }
            if (Math.random() < 0.15 || !moved) pixel.dir *= -1;
        }
    }
};

elements.mc_skeleton_head = {
    color: "#E8E8E8", category: "states", hidden: true, density: 1080, state: "solid",
    properties: { dead: false },
    tick: function(pixel) {
        doBurning(pixel);
        if (pixel.y < 20 && Math.random() < 0.05 && isEmpty(pixel.x, pixel.y - 1, true)) pixel.burning = true;

        if (pixel.dead) return;

        if (!isEmpty(pixel.x, pixel.y+1, true) && pixelMap[pixel.x][pixel.y+1].element == "mc_skeleton_body") {
            var body = pixelMap[pixel.x][pixel.y+1];
            if (body.dead) pixel.dead = body.dead;
        } else { var body = null; }

        if (tryMove(pixel, pixel.x, pixel.y+1)) {
            if (isEmpty(pixel.x, pixel.y+1) && !pixel.dead && Math.random() < 0.1) {
                createPixel("bone", pixel.x, pixel.y+1);
                if (Math.random() < 0.15) pixel.dead = pixelTicks;
            }
        }
    }
};
