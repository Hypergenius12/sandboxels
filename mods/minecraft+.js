// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Bug-Free Master File: Terrain, Multi-Pixel Mobs & Items
// ==========================================

/* ==========================================
   1. FLUIDS & CORE PHYSICS
   ========================================== */
// Only prefixing elements that clash with vanilla Sandboxels
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { elem1: "steam", elem2: "cobblestone" };

elements.mc_water = {
    color: "#3F76E4", behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 1000,
    reactions: { "mc_lava": { elem1: "steam", elem2: "cobblestone", chance: 1.0 } }
};
elements.mc_lava = {
    color: ["#D95100", "#FF8C00"], behavior: behaviors.LIQUID, category: "Minecraft", state: "liquid", density: 3000, temp: 1200,
    reactions: { "mc_water": { elem1: "obsidian", elem2: "steam", chance: 1.0 }, "water": { elem1: "obsidian", elem2: "steam", chance: 1.0 } }
};

/* ==========================================
   2. TERRAIN & ENVIRONMENT BLOCKS
   ========================================== */
elements.mc_sand = { color: "#DBD3A0", behavior: behaviors.POWDER, category: "Minecraft Blocks", state: "solid", density: 1600 };
elements.mc_dirt = { color: "#866043", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 1200 };
elements.mc_stone = { color: "#7D7D7D", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 2500 };
elements.mc_glass = { color: "#C8EDF6", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 2500 };

// Unique names don't need the mc_ prefix
elements.cobblestone = { color: "#5A5A5A", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 2400 };
elements.obsidian = { color: "#161021", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 3500 };
elements.bedrock = { color: "#1F1F1F", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 99999 };
elements.netherrack = { color: "#612727", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 2000, burnTime: 99999 };
elements.end_stone = { color: "#DDE0A5", behavior: behaviors.WALL, category: "Minecraft Blocks", state: "solid", density: 2700 };

/* ==========================================
   3. ITEMS, XP, & MUSIC DISCS
   ========================================== */
elements.xp_orb = {
    color: ["#80FF20", "#D0FF40"], 
    behavior: behaviors.POWDER, // Acts like a heavy powder to fall fast
    category: "Minecraft Items", 
    density: 2000, // Very heavy so it drops quickly
    state: "solid", 
    glow: true, 
    tick: function(pixel) {
        // Flash neon colors rapidly
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40";
        // Extra downward momentum
        if (isEmpty(pixel.x, pixel.y + 1)) tryMove(pixel, pixel.x, pixel.y + 1);
    }
};

elements.bottle_o_enchanting = {
    color: "#A5E358",
    behavior: behaviors.POWDER,
    category: "Minecraft Items",
    state: "solid",
    density: 1500,
    tick: function(pixel) {
        // If the pixel exists, and cannot move down, down-left, or down-right, it has hit the ground
        if (!isEmpty(pixel.x, pixel.y + 1) && !isEmpty(pixel.x - 1, pixel.y + 1) && !isEmpty(pixel.x + 1, pixel.y + 1)) {
            // Check if the thing below it isn't another bottle (to prevent mid-air collision breaks)
            let below = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
            if (below && below.element !== "bottle_o_enchanting") {
                // Shatter into XP
                pixel.element = "xp_orb";
                for (let i = 0; i < 4; i++) {
                    let rx = pixel.x + Math.floor(Math.random() * 5) - 2;
                    let ry = pixel.y - Math.floor(Math.random() * 4);
                    if (isEmpty(rx, ry)) tryCreate("xp_orb", rx, ry);
                }
            }
        }
    }
};

// Consolidated Music Disc
elements.music_disc = {
    color: ["#55FF55", "#FF5555", "#5555FF", "#FFFF55"],
    behavior: behaviors.POWDER,
    category: "Minecraft Items",
    state: "solid",
    density: 1000
};

elements.jukebox = {
    color: "#5E3A24",
    behavior: behaviors.WALL,
    category: "Minecraft Blocks",
    state: "solid",
    density: 600,
    reactions: {
        "music_disc": { elem1: "jukebox_playing", elem2: null } // Consumes disc and starts playing
    }
};

elements.jukebox_playing = {
    color: "#7E4A2E",
    behavior: behaviors.WALL,
    category: "states",
    hidden: true,
    state: "solid",
    tick: function(pixel) {
        // Emits colorful notes upward
        if (Math.random() < 0.05 && isEmpty(pixel.x, pixel.y - 1)) {
            tryCreate("music_note", pixel.x, pixel.y - 1);
        }
    }
};

elements.music_note = {
    color: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"],
    behavior: behaviors.GAS,
    category: "states",
    hidden: true,
    density: 5,
    tick: function(pixel) {
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y - 1);
        if (Math.random() < 0.1) pixel.element = "air"; // Fade out
    }
};

/* ==========================================
   4. MULTI-PIXEL MOBS & AI
   ========================================== */

// --- 2-Pixel Zombie ---
elements.zombie = {
    color: "#4A4A9C", // Blue Shirt (Base/Legs)
    behavior: behaviors.POWDER,
    category: "Minecraft Mobs",
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        let oldX = pixel.x;
        let oldY = pixel.y;
        let moved = false;

        // Simple wandering AI
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (tryMove(pixel, pixel.x + dir, pixel.y)) {
                moved = true;
            } else if (isEmpty(pixel.x + dir, pixel.y - 1) && tryMove(pixel, pixel.x + dir, pixel.y - 1)) {
                moved = true; // Jumped up a block
            }
        }

        // Head Synchronization
        if (moved || !pixel.headSpawned) {
            // If it had a head, delete the old head from the previous coordinate
            if (pixel.headSpawned && pixelMap[oldX] && pixelMap[oldX][oldY - 1] && pixelMap[oldX][oldY - 1].element === "zombie_head") {
                pixelMap[oldX][oldY - 1].element = "air"; 
            }
            // Spawn the new head directly above the current coordinate
            if (isEmpty(pixel.x, pixel.y - 1)) {
                tryCreate("zombie_head", pixel.x, pixel.y - 1);
                pixel.headSpawned = true;
            }
        }
    }
};

elements.zombie_head = {
    color: "#4A7129", // Green Head
    behavior: behaviors.WALL, // Driven entirely by the body below it
    category: "states", 
    hidden: true,
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        // If the body below it is destroyed or missing, the head turns to blood
        let body = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
        if (!body || body.element !== "zombie") {
            pixel.element = "blood";
        }
    }
};

// --- 3-Pixel Enderman ---
elements.enderman = {
    color: "#161616", // Legs/Base
    behavior: behaviors.POWDER,
    category: "Minecraft Mobs",
    state: "solid",
    density: 1200,
    tick: function(pixel) {
        let oldX = pixel.x;
        let oldY = pixel.y;
        let moved = false;

        // Teleport logic (randomly skips to a new block)
        if (Math.random() < 0.01) {
            let tx = pixel.x + Math.floor(Math.random() * 20) - 10;
            let ty = pixel.y + Math.floor(Math.random() * 20) - 10;
            // Enderman needs 3 empty vertical blocks to teleport
            if (isEmpty(tx, ty) && isEmpty(tx, ty - 1) && isEmpty(tx, ty - 2)) {
                if (tryMove(pixel, tx, ty)) moved = true;
            }
        } 
        // Normal wander
        else if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (tryMove(pixel, pixel.x + dir, pixel.y)) moved = true;
        }

        // Body and Head Synchronization
        if (moved || !pixel.partsSpawned) {
            if (pixel.partsSpawned) {
                // Erase old torso and head
                if (pixelMap[oldX] && pixelMap[oldX][oldY - 1] && pixelMap[oldX][oldY - 1].element === "enderman_torso") pixelMap[oldX][oldY - 1].element = "air";
                if (pixelMap[oldX] && pixelMap[oldX][oldY - 2] && pixelMap[oldX][oldY - 2].element === "enderman_head") pixelMap[oldX][oldY - 2].element = "air";
            }
            // Create new torso and head
            if (isEmpty(pixel.x, pixel.y - 1)) tryCreate("enderman_torso", pixel.x, pixel.y - 1);
            if (isEmpty(pixel.x, pixel.y - 2)) tryCreate("enderman_head", pixel.x, pixel.y - 2);
            pixel.partsSpawned = true;
        }
    }
};

elements.enderman_torso = {
    color: "#111111", behavior: behaviors.WALL, category: "states", hidden: true, state: "solid",
    tick: function(pixel) {
        let legs = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
        if (!legs || legs.element !== "enderman") pixel.element = "smoke";
    }
};

elements.enderman_head = {
    color: ["#161616", "#CC00FF"], behavior: behaviors.WALL, category: "states", hidden: true, state: "solid", glow: true,
    tick: function(pixel) {
        let torso = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1];
        if (!torso || torso.element !== "enderman_torso") pixel.element = "smoke";
    }
};
