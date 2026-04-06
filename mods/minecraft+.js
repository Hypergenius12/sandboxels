// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Bug-Free Master File: Terrain, Mobs, Items & Shaders
// ==========================================

/* == Custom View Modes: Minecraft Shaders == */
viewInfo["mc_shaders"] = {
    name: "MC Shaders",
    pre: function(ctx) {
        // Darken background for atmosphere
        ctx.fillStyle = "rgba(10, 15, 20, 0.2)";
        ctx.fillRect(0, 0, width, height);
    },
    pixel: function(pixel, ctx) {
        // Draw slightly smaller squares for a grid-like blocky feel
        drawSquare(ctx, pixel.color, pixel.x, pixel.y, 0.85);
    }
};

/* == Core Reactions == */
// Include once to ensure properties exist safely
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mc_lava = { "elem1": "steam", "elem2": "mc_cobblestone" };

/* == Fluids & Physics == */
elements.mc_water = {color:"#3F76E4", behavior:behaviors.LIQUID, category:"Minecraft", state:"liquid", density:1000, reactions: {"mc_lava": {elem1: "steam", elem2: "mc_cobblestone", chance: 1.0}}};
elements.mc_lava = {color:["#D95100","#FF8C00"], behavior:behaviors.LIQUID, category:"Minecraft", state:"liquid", density:3000, temp:1200, reactions: {"mc_water": {elem1: "mc_obsidian", elem2: "steam", chance: 1.0}}};

/* == Gravity & Terrain Blocks == */
elements.mc_sand = {color:"#DBD3A0", behavior:behaviors.POWDER, category:"Minecraft", state:"solid", density:1600};
elements.mc_gravel = {color:"#837F7E", behavior:behaviors.POWDER, category:"Minecraft", state:"solid", density:1700};
elements.mc_dirt = {color:"#866043", behavior:behaviors.WALL, category:"Minecraft", state:"solid", density:1200};
elements.mc_stone = {color:"#7D7D7D", behavior:behaviors.WALL, category:"Minecraft", state:"solid", density:2500};
elements.mc_cobblestone = {color:"#5A5A5A", behavior:behaviors.WALL, category:"Minecraft", state:"solid", density:2400};
elements.mc_obsidian = {color:"#161021", behavior:behaviors.WALL, category:"Minecraft", state:"solid", density:3500};
elements.mc_bedrock = {color:"#1F1F1F", behavior:behaviors.WALL, category:"Minecraft", state:"solid", density:99999};

/* == Dynamic Blocks (Grass Spreading) == */
elements.mc_grass_block = {
    color: ["#5CB031", "#866043"], 
    behavior: behaviors.WALL, 
    category: "Minecraft", 
    state: "solid", 
    density: 1250,
    tick: function(pixel) {
        // Spread grass to nearby dirt
        if (pixelTicks % 30 === 0) {
            let tx = pixel.x + (Math.random() < 0.5 ? 1 : -1);
            let ty = pixel.y + Math.floor(Math.random() * 3) - 1;
            if (pixelMap[tx] && pixelMap[tx][ty] && pixelMap[tx][ty].element === "mc_dirt" && isEmpty(tx, ty - 1, false)) {
                changePixel(pixelMap[tx][ty], "mc_grass_block");
            }
        }
    }
};

/* == 2-Pixel Mobs (Zombies) == */
elements.mc_zombie = {
    color: "#4A4A9C", // Blue Shirt (Body)
    behavior: behaviors.POWDER,
    category: "Minecraft",
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        // Spawn head above body on first tick
        if (!pixel.headSpawned) {
            if (isEmpty(pixel.x, pixel.y - 1, false)) {
                createPixel("mc_zombie_head", pixel.x, pixel.y - 1);
            }
            pixel.headSpawned = true;
        }
        
        // Burn in daylight (if near top of screen and nothing above it)
        if (pixel.y < 20 && Math.random() < 0.05 && isEmpty(pixel.x, pixel.y - 1, true)) {
            pixel.burning = true;
        }

        // Basic wandering AI
        if (Math.random() < 0.05) {
            let dir = Math.random() < 0.5 ? 1 : -1;
            if (isEmpty(pixel.x + dir, pixel.y, false)) {
                tryMove(pixel, pixel.x + dir, pixel.y); // Move sideways
            } else if (isEmpty(pixel.x + dir, pixel.y - 1, false)) {
                tryMove(pixel, pixel.x + dir, pixel.y - 1); // Hop up 1 block
            }
        }
    }
};

elements.mc_zombie_head = {
    color: "#4A7129", // Green Head
    behavior: behaviors.POWDER,
    category: "Minecraft", // Hidden from menu usually, but left here for testing
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        // Check if the body exists below it. If not, the head "dies" and vanishes.
        let bodyExists = pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y + 1] && pixelMap[pixel.x][pixel.y + 1].element === "mc_zombie";
        if (!bodyExists) {
            deletePixel(pixel.x, pixel.y);
        }
    }
};

/* == Satisfying XP Orbs == */
elements.mc_xp_orb = {
    color: ["#80FF20", "#D0FF40"], 
    behavior: behaviors.GAS, // Floats and bounces around like a heavy gas
    category: "Minecraft", 
    density: 10, 
    state: "gas", 
    glow: true, 
    tick: function(pixel) {
        // Flash neon colors
        pixel.color = Math.random() < 0.5 ? "#80FF20" : "#D0FF40";
        // Gently drift downward over time
        if (Math.random() < 0.15) {
            tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y + 1);
        }
    }
};

/* == Tools & Spawn Eggs == */
elements.mc_spawn_zombie = {
    color: ["#006400", "#4A4A9C"],
    category: "Minecraft",
    tool: function(pixel) {
        // Replaces the targeted pixel with a Zombie entity
        if (isEmpty(pixel.x, pixel.y, false) || pixel.element === "air") {
            createPixel("mc_zombie", pixel.x, pixel.y);
        } else {
            changePixel(pixel, "mc_zombie");
        }
    }
};

elements.mc_bottle_o_enchanting = {
    color: "#A5E358",
    category: "Minecraft",
    tool: function(pixel) {
        // Splash XP orbs in an area
        for (let i = 0; i < 5; i++) {
            let px = pixel.x + Math.floor(Math.random() * 5) - 2;
            let py = pixel.y + Math.floor(Math.random() * 5) - 2;
            if (isEmpty(px, py, false)) {
                createPixel("mc_xp_orb", px, py);
            }
        }
    }
};

/* == Music Discs & Jukebox == */
elements.mc_jukebox = {
    color: "#5E3A24",
    behavior: behaviors.WALL,
    category: "Minecraft",
    state: "solid",
    density: 600,
    tick: function(pixel) {
        // If activated by a disc, shoot out colorful music notes
        if (pixel.playing && Math.random() < 0.05) {
            if (isEmpty(pixel.x, pixel.y - 1, false)) {
                createPixel("mc_music_note", pixel.x, pixel.y - 1);
            }
        }
    }
};

elements.mc_music_note = {
    color: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"],
    behavior: behaviors.GAS,
    category: "Minecraft",
    state: "gas",
    density: 5,
    tick: function(pixel) {
        // Float upward and eventually disappear
        tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y - 1);
        if (Math.random() < 0.05) deletePixel(pixel.x, pixel.y);
    }
};

elements.mc_music_disc_cat = {
    color: "#55FF55",
    category: "Minecraft",
    tool: function(pixel) {
        // Using this tool on a jukebox turns it on
        if (pixel.element === "mc_jukebox") {
            pixel.playing = true;
        }
    }
};
