// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Version: Master File (Bug-Free)
// Features: Dynamic Lighting Shaders, Multi-Pixel AI, XP Physics
// ==========================================

/* ==========================================
   1. MINECRAFT SHADERS (DYNAMIC 2D LIGHTING)
   ========================================== */
viewInfo.mc_shaders = {
    name: "MC Shaders",
    pre: function(ctx) {
        // Clear the light map at the start of each frame
        window.mcLightMap = [];
    },
    pixel: function(pixel, ctx) {
        // Draw every pixel normally
        drawSquare(ctx, pixel.color, pixel.x, pixel.y, 1);
        
        // Identify light sources
        let isLight = pixel.glow || pixel.element === "torch" || pixel.element === "glowstone" || 
                      pixel.element === "mc_lava" || pixel.element === "mc_fire" || 
                      pixel.element === "jack_o_lantern" || pixel.element === "redstone_lamp_on";
                      
        // Add to light map (sampled at 20% to save FPS while maintaining glow)
        if (isLight && Math.random() < 0.2) {
            window.mcLightMap.push({x: pixel.x, y: pixel.y, color: pixel.color});
        }
    },
    post: function(ctx) {
        // Draw the darkness overlay
        ctx.fillStyle = "rgba(5, 10, 15, 0.85)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        // Draw the glowing light blooms
        if (window.mcLightMap) {
            ctx.globalCompositeOperation = "screen"; // Blend mode for light
            for (let i = 0; i < window.mcLightMap.length; i++) {
                let l = window.mcLightMap[i];
                let cx = l.x * pixelSize;
                let cy = l.y * pixelSize;
                let rad = pixelSize * 15; // Light radius
                
                let grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
                grad.addColorStop(0, l.color);
                grad.addColorStop(0.2, l.color);
                grad.addColorStop(1, "rgba(0,0,0,0)");
                
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(cx, cy, rad, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalCompositeOperation = "source-over"; // Reset blend mode
        }
    }
};

/* ==========================================
   2. CORE PHYSICS & FLUIDS
   ========================================== */
// Patch vanilla water to react with MC lava
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "mc_steam", elem2: "cobblestone" };

elements.mc_water = {
    color: "#3F76E4", behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "mc_steam", elem2: "cobblestone", chance: 1.0 } }
};
elements.mc_lava = {
    color: ["#D95100", "#FF8C00"], behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 3000, temp: 1200,
    reactions: { "mc_water": { elem1: "obsidian", elem2: "mc_steam", chance: 1.0 }, "water": { elem1: "obsidian", elem2: "steam", chance: 1.0 } }
};

/* ==========================================
   3. TERRAIN & ENVIRONMENT BLOCKS
   ========================================== */
// Prefixed (Conflicts with Vanilla)
elements.mc_sand = { color: "#DBD3A0", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1600 };
elements.mc_dirt = { color: "#866043", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1200 };
elements.mc_stone = { color: "#7D7D7D", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
elements.mc_glass = { color: "#C8EDF6", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
elements.mc_tnt = { 
    color: ["#D43325", "#FFFFFF"], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1500, burnTime: 30,
    tick: function(pixel) { if (pixel.burning) { if (pixelTicks % 5 === 0) pixel.color = "#FFFFFF"; if (pixelTicks - pixel.burnStart > 45) pixel.element = "explosion"; } }
};

// Non-Prefixed (Unique to Minecraft)
elements.cobblestone = { color: "#5A5A5A", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2400 };
elements.obsidian = { color: "#161021", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 3500 };
elements.bedrock = { color: "#1F1F1F", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 99999 };
elements.netherrack = { color: "#612727", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2000, burnTime: 99999 };
elements.soul_sand = { color: "#544033", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1500 };
elements.end_stone = { color: "#DDE0A5", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2700 };
elements.glowstone = { color: "#E5BB5D", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2200, glow: true };
elements.magma_block = { color: ["#893318", "#D95100"], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2600, temp: 300 };
elements.torch = { color: ["#FCEE4B", "#593D29"], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 500, glow: true };

// Grass Spreading Logic
elements.grass_block = {
    color: ["#5CB031", "#866043"], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 1250,
    tick: function(pixel) {
        if (pixelTicks % 40 === 0) {
            let tx = pixel.x + (Math.random() < 0.5 ? 1 : -1);
            let ty = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (isEmpty(tx, ty - 1) && !isEmpty(tx, ty)) {
                let target = pixelMap[tx][ty];
                if (target && target.element === "mc_dirt") target.element = "grass_block";
            }
        }
    }
};

/* ==========================================
   4. PROCEDURAL GENERATION: ORES, WOODS & COLORS
   ========================================== */
const mcOres = {
    "coal": { ore: "#1D1D1D", block: "#111111" },
    "iron": { ore: "#D8AF93", block: "#E2E2E2" },
    "gold": { ore: "#FCEE4B", block: "#FCEE4B" },
    "diamond": { ore: "#4AEDD9", block: "#68EBD8" },
    "emerald": { ore: "#17DD62", block: "#41F384" },
    "redstone": { ore: "#AA0F0A", block: "#9E160A" },
    "lapis": { ore: "#2149A6", block: "#1C4195" }
};
for (let ore in mcOres) {
    elements[ore + "_ore"] = { color: ["#7D7D7D", mcOres[ore].ore], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2800 };
    elements[ore + "_block"] = { color: mcOres[ore].block, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 4000 };
}

const mcWoods = {
    "oak": { log: "#6A5232", plank: "#A2834E", leaf: "#48B529" },
    "spruce": { log: "#392A1A", plank: "#705334", leaf: "#305730" },
    "birch": { log: "#DFDFDB", plank: "#C3B37B", leaf: "#62A44B" }
};
for (let wood in mcWoods) {
    elements[wood + "_log"] = { color: mcWoods[wood].log, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 700, burnTime: 400 };
    elements[wood + "_planks"] = { color: mcWoods[wood].plank, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 600, burnTime: 300 };
    elements[wood + "_leaves"] = { color: mcWoods[wood].leaf, behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 300, burnTime: 100 };
}

const mcColors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
const mcHex = ["#E9ECEC", "#F07613", "#BD44B3", "#3AAFD9", "#F8C627", "#70B919", "#ED8DAC", "#3E4447", "#8E8E86", "#158991", "#792AAC", "#35399D", "#724728", "#546D1B", "#A12722", "#141519"];
for (let i = 0; i < mcColors.length; i++) {
    elements[mcColors[i] + "_wool"] = { color: mcHex[i], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 400, burnTime: 150 };
    elements[mcColors[i] + "_stained_glass"] = { color: mcHex[i], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
    elements[mcColors[i] + "_concrete"] = { color: mcHex[i], behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 2500 };
    elements[mcColors[i] + "_concrete_powder"] = { 
        color: mcHex[i], behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1600,
        reactions: { "mc_water": { elem1: mcColors[i] + "_concrete", elem2: null }, "water": { elem1: mcColors[i] + "_concrete", elem2: null } }
    };
}

/* ==========================================
   5. ITEMS, XP ORBS & MUSIC DISCS
   ========================================== */
elements.xp_orb = {
    color: ["#80FF20", "#D0FF40"], behavior: behaviors.POWDER, category: "Minecraft", density: 2000, state: "solid", glow: true, 
    tick: function(pixel) {
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40"; // Flashing neon
        if (isEmpty(pixel.x, pixel.y + 1)) tryMove(pixel, pixel.x, pixel.y + 1); // Extra gravity to fall fast
    }
};

elements.bottle_o_enchanting = {
    color: "#A5E358", behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1500,
    tick: function(pixel) {
        // If it hits the floor (cannot move down, down-left, or down-right)
        if (!isEmpty(pixel.x, pixel.y + 1) && !isEmpty(pixel.x - 1, pixel.y + 1) && !isEmpty(pixel.x + 1, pixel.y + 1)) {
            let below = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
            // Don't break if it's just stacked on another falling bottle
            if (below && below.element !== "bottle_o_enchanting") {
                pixel.element = "xp_orb"; // Shatter
                for (let i = 0; i < 4; i++) {
                    let rx = pixel.x + Math.floor(Math.random() * 5) - 2;
                    let ry = pixel.y - Math.floor(Math.random() * 4);
                    if (isEmpty(rx, ry)) createPixel("xp_orb", rx, ry);
                }
            }
        }
    }
};

elements.music_disc = { color: ["#55FF55", "#FF5555", "#5555FF", "#FFFF55"], behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1000 };
elements.jukebox = {
    color: "#5E3A24", behavior: behaviors.WALL, category: "Minecraft", state: "solid", density: 600,
    reactions: { "music_disc": { elem1: "jukebox_playing", elem2: null } }
};
elements.jukebox_playing = {
    color: "#7E4A2E", behavior: behaviors.WALL, category: "Minecraft", state: "solid",
    tick: function(pixel) {
        if(Math.random() < 0.05 && isEmpty(pixel.x, pixel.y - 1)) createPixel("music_note", pixel.x, pixel.y - 1);
    }
};
elements.music_note = {
    color: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"], behavior: behaviors.GAS, category: "states", hidden: true, density: 5,
    tick: function(pixel) {
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y - 1);
        if (Math.random() < 0.1) pixel.element = "air"; // Fade out slowly
    }
};

/* ==========================================
   6. MULTI-PIXEL MOBS & AI
   ========================================== */
// --- Zombie (2-Pixel) ---
elements.zombie = {
    color: "#4A4A9C", // Blue Shirt (Body)
    behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1100,
    tick: function(pixel) {
        // AI Wander & Jump
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (tryMove(pixel, pixel.x + dir, pixel.y)) { /* Moved */ } 
            else if (isEmpty(pixel.x + dir, pixel.y - 1)) { tryMove(pixel, pixel.x + dir, pixel.y - 1); }
        }
        // Head Spawning (Chain Logic)
        if (isEmpty(pixel.x, pixel.y - 1)) createPixel("zombie_head", pixel.x, pixel.y - 1);
        // Sunlight Burning
        if (pixel.y < 20 && Math.random() < 0.02 && isEmpty(pixel.x, pixel.y - 2)) pixel.burning = true;
    }
};
elements.zombie_head = {
    color: "#4A7129", behavior: behaviors.WALL, category: "states", hidden: true, state: "solid", density: 1100,
    tick: function(pixel) {
        // If body goes away, head dies
        let body = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
        if (!body || body.element !== "zombie") pixel.element = "blood";
    }
};

// --- Enderman (3-Pixel) ---
elements.enderman = {
    color: "#161616", // Legs
    behavior: behaviors.POWDER, category: "Minecraft", state: "solid", density: 1200,
    tick: function(pixel) {
        // AI Teleport
        if (Math.random() < 0.01) {
            let tx = pixel.x + Math.floor(Math.random() * 20) - 10;
            let ty = pixel.y + Math.floor(Math.random() * 20) - 10;
            if (isEmpty(tx, ty) && isEmpty(tx, ty - 1) && isEmpty(tx, ty - 2)) tryMove(pixel, tx, ty);
        } else if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            tryMove(pixel, pixel.x + dir, pixel.y);
        }
        // Torso Spawning
        if (isEmpty(pixel.x, pixel.y - 1)) createPixel("enderman_torso", pixel.x, pixel.y - 1);
    }
};
elements.enderman_torso = {
    color: "#111111", behavior: behaviors.WALL, category: "states", hidden: true, state: "solid",
    tick: function(pixel) {
        let legs = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
        if (!legs || legs.element !== "enderman") { pixel.element = "smoke"; return; }
        // Head Spawning
        if (isEmpty(pixel.x, pixel.y - 1)) createPixel("enderman_head", pixel.x, pixel.y - 1);
    }
};
elements.enderman_head = {
    color: ["#161616", "#CC00FF"], behavior: behaviors.WALL, category: "states", hidden: true, state: "solid", glow: true,
    tick: function(pixel) {
        let torso = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
        if (!torso || torso.element !== "enderman_torso") pixel.element = "smoke";
    }
};

// --- Standard 1-Pixel Mobs ---
elements.creeper = {
    color: ["#3EAA34", "#000000"], behavior: behaviors.POWDER, category: "Minecraft", density: 1000, state: "solid",
    tick: function(pixel) {
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (!tryMove(pixel, pixel.x + dir, pixel.y) && isEmpty(pixel.x + dir, pixel.y - 1)) tryMove(pixel, pixel.x + dir, pixel.y - 1);
        }
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let n = pixelMap[pixel.x + i] && pixelMap[pixel.x + i][pixel.y + j];
                if (n && (n.element === "mc_fire" || n.element === "mc_lava" || n.burning)) pixel.element = "explosion";
            }
        }
    }
};
elements.pig = { color: "#F0A5A5", behavior: behaviors.POWDER, category: "Minecraft", density: 1000, state: "solid", tick: function(pixel) { if (Math.random() < 0.05) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); } };
elements.sheep = { color: ["#E4E4E4", "#D6CACA"], behavior: behaviors.POWDER, category: "Minecraft", density: 900, state: "solid", tick: function(pixel) { if (Math.random() < 0.05) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); } };
elements.cow = { color: ["#4A3018", "#F2F2F2"], behavior: behaviors.POWDER, category: "Minecraft", density: 1200, state: "solid", tick: function(pixel) { if (Math.random() < 0.05) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); } };
