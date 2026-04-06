// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Part 1: Massive Block & Physics Roster
// ==========================================

const b = behaviors; // Shortcut for behaviors
const C = "MC Blocks"; // Shortcut for category
const F = "MC Flora";
const I = "MC Items";

// Core Physics Reactions (Water + Lava = Cobblestone/Obsidian)
let mc_water_rx = { "mc_lava": { elem1: "steam", elem2: "mc_cobblestone", chance: 1.0 } };
let mc_lava_rx = { "mc_water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 }, "water": { elem1: "mc_obsidian", elem2: "steam", chance: 1.0 } };

// === FLUIDS ===
elements.mc_water = {color:"#3F76E4", behavior:b.LIQUID, category:C, state:"liquid", density:1000, reactions: mc_water_rx};
elements.mc_flowing_water = {color:"#4A83ED", behavior:b.LIQUID, category:C, state:"liquid", density:950, reactions: mc_water_rx};
elements.mc_lava = {color:["#D95100","#FF8C00"], behavior:b.LIQUID, category:C, state:"liquid", density:3000, temp:1200, reactions: mc_lava_rx};
elements.mc_flowing_lava = {color:["#E65C00","#FFA01A"], behavior:b.LIQUID, category:C, state:"liquid", density:2900, temp:1150, reactions: mc_lava_rx};

// === TERRAIN & GRAVITY BLOCKS ===
// Gravity blocks use POWDER behavior. Standard blocks use WALL so they don't fall.
elements.mc_sand = {color:"#DBD3A0", behavior:b.POWDER, category:C, state:"solid", density:1600};
elements.mc_red_sand = {color:"#A95821", behavior:b.POWDER, category:C, state:"solid", density:1600};
elements.mc_gravel = {color:"#837F7E", behavior:b.POWDER, category:C, state:"solid", density:1700};
elements.mc_dirt = {color:"#866043", behavior:b.WALL, category:C, state:"solid", density:1200};
elements.mc_coarse_dirt = {color:"#77553A", behavior:b.WALL, category:C, state:"solid", density:1250};
elements.mc_podzol = {color:["#593D29","#866043"], behavior:b.WALL, category:C, state:"solid", density:1150};
elements.mc_grass = {color:["#5CB031","#866043"], behavior:b.WALL, category:C, state:"solid", density:1250};
elements.mc_grass_path = {color:"#E0B86F", behavior:b.WALL, category:C, state:"solid", density:1300};
elements.mc_mycelium = {color:["#6F6265","#866043"], behavior:b.WALL, category:C, state:"solid", density:1200};
elements.mc_snow_block = {color:"#FFFFFF", behavior:b.WALL, category:C, state:"solid", density:500, tempLow:-5, stateHigh:"mc_water"};
elements.mc_ice = {color:"#7EB2F0", behavior:b.WALL, category:C, state:"solid", density:920, tempLow:-10, stateHigh:"mc_water"};
elements.mc_packed_ice = {color:"#5A8DDE", behavior:b.WALL, category:C, state:"solid", density:980, tempLow:-20, stateHigh:"mc_water"};
elements.mc_frosted_ice = {color:"#95C5FF", behavior:b.WALL, category:C, state:"solid", density:900, tempLow:-5, stateHigh:"mc_water"};
elements.mc_clay = {color:"#A0A6B3", behavior:b.WALL, category:C, state:"solid", density:1800};
elements.mc_bedrock = {color:"#1F1F1F", behavior:b.WALL, category:C, state:"solid", density:99999, hardness:1.0}; // Unbreakable

// === STONES & MINERALS ===
elements.mc_stone = {color:"#7D7D7D", behavior:b.WALL, category:C, state:"solid", density:2500, hardness:0.8};
elements.mc_cobblestone = {color:"#5A5A5A", behavior:b.WALL, category:C, state:"solid", density:2400, hardness:0.7};
elements.mc_mossy_cobblestone = {color:["#5A5A5A","#4B7035"], behavior:b.WALL, category:C, state:"solid", density:2400};
elements.mc_granite = {color:"#956755", behavior:b.WALL, category:C, state:"solid", density:2600};
elements.mc_diorite = {color:"#BDBDBD", behavior:b.WALL, category:C, state:"solid", density:2550};
elements.mc_andesite = {color:"#828383", behavior:b.WALL, category:C, state:"solid", density:2550};
elements.mc_sandstone = {color:"#D5C48E", behavior:b.WALL, category:C, state:"solid", density:2300};
elements.mc_red_sandstone = {color:"#A75A22", behavior:b.WALL, category:C, state:"solid", density:2300};
elements.mc_obsidian = {color:"#161021", behavior:b.WALL, category:C, state:"solid", density:3500, hardness:0.99};
elements.mc_prismarine = {color:"#5E9E96", behavior:b.WALL, category:C, state:"solid", density:2400};
elements.mc_dark_prismarine = {color:"#325B4C", behavior:b.WALL, category:C, state:"solid", density:2500};
elements.mc_magma_block = {color:["#893318","#D95100"], behavior:b.WALL, category:C, state:"solid", density:2600, temp:300};
elements.mc_netherrack = {color:"#612727", behavior:b.WALL, category:C, state:"solid", density:2000, burnTime:9999}; // Burns forever
elements.mc_soul_sand = {color:"#544033", behavior:b.WALL, category:C, state:"solid", density:1500};
elements.mc_end_stone = {color:"#DDE0A5", behavior:b.WALL, category:C, state:"solid", density:2700};
elements.mc_purpur_block = {color:"#A97AA9", behavior:b.WALL, category:C, state:"solid", density:2400};

// === ORES & BLOCKS OF MINERALS ===
elements.mc_coal_ore = {color:["#7D7D7D","#1D1D1D"], behavior:b.WALL, category:C, state:"solid", density:2500};
elements.mc_iron_ore = {color:["#7D7D7D","#D8AF93"], behavior:b.WALL, category:C, state:"solid", density:2800};
elements.mc_gold_ore = {color:["#7D7D7D","#FCEE4B"], behavior:b.WALL, category:C, state:"solid", density:3000};
elements.mc_lapis_ore = {color:["#7D7D7D","#2149A6"], behavior:b.WALL, category:C, state:"solid", density:2600};
elements.mc_redstone_ore = {color:["#7D7D7D","#AA0F0A"], behavior:b.WALL, category:C, state:"solid", density:2600, charge:1};
elements.mc_diamond_ore = {color:["#7D7D7D","#4AEDD9"], behavior:b.WALL, category:C, state:"solid", density:2600};
elements.mc_emerald_ore = {color:["#7D7D7D","#17DD62"], behavior:b.WALL, category:C, state:"solid", density:2600};
elements.mc_nether_quartz_ore = {color:["#612727","#E4D6D1"], behavior:b.WALL, category:C, state:"solid", density:2100};
elements.mc_block_of_coal = {color:"#111111", behavior:b.WALL, category:C, state:"solid", density:1800, burnTime:2000};
elements.mc_iron_block = {color:"#E2E2E2", behavior:b.WALL, category:C, state:"solid", density:7800, conductive:true};
elements.mc_gold_block = {color:"#FCEE4B", behavior:b.WALL, category:C, state:"solid", density:19300, conductive:true};
elements.mc_diamond_block = {color:"#68EBD8", behavior:b.WALL, category:C, state:"solid", density:3500};
elements.mc_emerald_block = {color:"#41F384", behavior:b.WALL, category:C, state:"solid", density:3200};
elements.mc_redstone_block = {color:"#9E160A", behavior:b.WALL, category:C, state:"solid", density:2500, conductive:true, charge:1};
elements.mc_lapis_block = {color:"#1C4195", behavior:b.WALL, category:C, state:"solid", density:2700};
elements.mc_quartz_block = {color:"#EEE6E2", behavior:b.WALL, category:C, state:"solid", density:2400};

// === WOODS, PLANKS & LEAVES ===
elements.mc_oak_wood = {color:"#6A5232", behavior:b.WALL, category:C, state:"solid", density:700, burnTime:400};
elements.mc_spruce_wood = {color:"#392A1A", behavior:b.WALL, category:C, state:"solid", density:720, burnTime:400};
elements.mc_birch_wood = {color:"#DFDFDB", behavior:b.WALL, category:C, state:"solid", density:680, burnTime:400};
elements.mc_jungle_wood = {color:"#594319", behavior:b.WALL, category:C, state:"solid", density:690, burnTime:400};
elements.mc_acacia_wood = {color:"#625D56", behavior:b.WALL, category:C, state:"solid", density:730, burnTime:400};
elements.mc_dark_oak_wood = {color:"#2A2116", behavior:b.WALL, category:C, state:"solid", density:750, burnTime:400};
elements.mc_oak_planks = {color:"#A2834E", behavior:b.WALL, category:C, state:"solid", density:600, burnTime:300};
elements.mc_spruce_planks = {color:"#705334", behavior:b.WALL, category:C, state:"solid", density:620, burnTime:300};
elements.mc_birch_planks = {color:"#C3B37B", behavior:b.WALL, category:C, state:"solid", density:580, burnTime:300};
elements.mc_jungle_planks = {color:"#A27551", behavior:b.WALL, category:C, state:"solid", density:590, burnTime:300};
elements.mc_acacia_planks = {color:"#A55D28", behavior:b.WALL, category:C, state:"solid", density:630, burnTime:300};
elements.mc_dark_oak_planks = {color:"#412B15", behavior:b.WALL, category:C, state:"solid", density:650, burnTime:300};
elements.mc_oak_leaves = {color:"#48B529", behavior:b.WALL, category:C, state:"solid", density:300, burnTime:100};
elements.mc_spruce_leaves = {color:"#305730", behavior:b.WALL, category:C, state:"solid", density:350, burnTime:100};
elements.mc_birch_leaves = {color:"#62A44B", behavior:b.WALL, category:C, state:"solid", density:300, burnTime:100};
elements.mc_jungle_leaves = {color:"#30A01E", behavior:b.WALL, category:C, state:"solid", density:300, burnTime:100};
elements.mc_acacia_leaves = {color:"#86A238", behavior:b.WALL, category:C, state:"solid", density:300, burnTime:100};
elements.mc_dark_oak_leaves = {color:"#31761F", behavior:b.WALL, category:C, state:"solid", density:300, burnTime:100};

// === MANUFACTURED / UTILITY BLOCKS ===
elements.mc_glass = {color:"#C8EDF6", behavior:b.WALL, category:C, state:"solid", density:2500, hardness:0.1}; // Fragile
elements.mc_bricks = {color:"#904C42", behavior:b.WALL, category:C, state:"solid", density:2200};
elements.mc_stone_bricks = {color:"#757575", behavior:b.WALL, category:C, state:"solid", density:2500};
elements.mc_bookshelf = {color:["#A2834E","#831D1D","#1A1464"], behavior:b.WALL, category:C, state:"solid", density:650, burnTime:200};
elements.mc_chest = {color:"#855C2A", behavior:b.WALL, category:C, state:"solid", density:600, burnTime:250};
elements.mc_crafting_table = {color:["#A2834E","#5A3B1D"], behavior:b.WALL, category:C, state:"solid", density:600, burnTime:250};
elements.mc_furnace = {color:"#5A5A5A", behavior:b.WALL, category:C, state:"solid", density:2400};
elements.mc_sponge = {color:"#C9CA4C", behavior:b.WALL, category:C, state:"solid", density:200, reactions:{"mc_water":{elem1:"mc_wet_sponge", elem2:null}}};
elements.mc_wet_sponge = {color:"#B1B426", behavior:b.WALL, category:C, state:"solid", density:1200, tempHigh:100, stateHigh:"mc_sponge"};
elements.mc_tnt = {color:["#D43325","#FFFFFF"], behavior:b.WALL, category:C, state:"solid", density:1500, burnTime:30, tick: function(pixel) { if (pixel.burning) { if (pixelTicks % 5 === 0) pixel.color = "#FFFFFF"; if (pixelTicks - pixel.burnStart > 45) changePixel(pixel, "explosion"); } }};
elements.mc_cobweb = {color:"#E6E6E6", behavior:b.WALL, category:C, state:"solid", density:100, burnTime:50};

// === FLORA ===
elements.mc_cactus = {color:"#527D26", behavior:b.WALL, category:F, state:"solid", density:900, reactions:{"mc_water":{elem1:null,elem2:null}}};
elements.mc_sugar_cane = {color:"#8DAE4E", behavior:b.WALL, category:F, state:"solid", density:400};
elements.mc_wheat_crops = {color:"#D1C260", behavior:b.WALL, category:F, state:"solid", density:300};
elements.mc_dandelion = {color:"#F2E02A", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_poppy = {color:"#ED302C", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_blue_orchid = {color:"#21A5D8", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_allium = {color:"#B56CE1", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_azure_bluet = {color:"#D2D6DC", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_red_tulip = {color:"#E72F21", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_orange_tulip = {color:"#F18222", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_white_tulip = {color:"#E8ECEE", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_pink_tulip = {color:"#ECA4CB", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_oxeye_daisy = {color:"#E6EBE6", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_brown_mushroom = {color:"#A57B5A", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_red_mushroom = {color:"#D23030", behavior:b.WALL, category:F, state:"solid", density:100};
elements.mc_lily_pad = {color:"#1D7324", behavior:b.WALL, category:F, state:"solid", density:200}; // Floats on water natively if placed on top
elements.mc_vines = {color:"#306B1F", behavior:b.WALL, category:F, state:"solid", density:100};

// === CONCRETE POWDERS (React with water to become Concrete) ===
const concretes = ["white","orange","magenta","light_blue","yellow","lime","pink","gray","light_gray","cyan","purple","blue","brown","green","red","black"];
const concreteColors = ["#CFD5D6","#E06100","#A9309F","#2389C6","#F0AF15","#5EA818","#D5658E","#36393D","#7D7D73","#157788","#641F9C","#2C2E8F","#603B1F","#495B24","#8E2020","#080A0F"];
for (let i = 0; i < concretes.length; i++) {
    let powder = `mc_${concretes[i]}_concrete_powder`;
    let block = `mc_${concretes[i]}_concrete`;
    // Add Concrete Block
    elements[block] = {color:concreteColors[i], behavior:b.WALL, category:C, state:"solid", density:2500, hardness:0.8};
    // Add Powder that turns into Concrete Block on water contact
    elements[powder] = {color:concreteColors[i], behavior:b.POWDER, category:C, state:"solid", density:1600, reactions:{"mc_water":{elem1:block, elem2:null, chance:1.0}}};
}

// === BASIC ITEMS & DROPS (Using POWDER behavior so they fall like dropped items) ===
elements.mc_coal = {color:"#222222", behavior:b.POWDER, category:I, state:"solid", density:1300, burnTime:600};
elements.mc_charcoal = {color:"#333333", behavior:b.POWDER, category:I, state:"solid", density:1200, burnTime:600};
elements.mc_diamond = {color:"#4AEDD9", behavior:b.POWDER, category:I, state:"solid", density:3500};
elements.mc_iron_ingot = {color:"#E2E2E2", behavior:b.POWDER, category:I, state:"solid", density:7800, conductive:true};
elements.mc_gold_ingot = {color:"#FCEE4B", behavior:b.POWDER, category:I, state:"solid", density:19300, conductive:true};
elements.mc_stick = {color:"#855C2A", behavior:b.POWDER, category:I, state:"solid", density:500, burnTime:100};
elements.mc_apple = {color:"#E82828", behavior:b.POWDER, category:I, state:"solid", density:800};
elements.mc_golden_apple = {color:"#F7DE3D", behavior:b.POWDER, category:I, state:"solid", density:2000};
elements.mc_gunpowder = {color:"#555555", behavior:b.POWDER, category:I, state:"solid", density:900, burnTime:10, stateHigh:"explosion", tempHigh:150};
elements.mc_string = {color:"#FFFFFF", behavior:b.POWDER, category:I, state:"solid", density:200, burnTime:50};
elements.mc_feather = {color:"#F0F0F0", behavior:b.POWDER, category:I, state:"solid", density:50, burnTime:30};
elements.mc_redstone_dust = {color:"#AA0F0A", behavior:b.POWDER, category:I, state:"solid", density:1500, conductive:true, charge:1};
elements.mc_glowstone_dust = {color:"#FFE160", behavior:b.POWDER, category:I, state:"solid", density:1200, glow:true};
elements.mc_slimeball = {color:"#68B451", behavior:b.POWDER, category:I, state:"solid", density:1100, bounce:0.8};
elements.mc_ender_pearl = {color:"#1A8778", behavior:b.POWDER, category:I, state:"solid", density:2000};
elements.mc_blaze_rod = {color:"#F1B122", behavior:b.POWDER, category:I, state:"solid", density:1200, temp:400};
elements.mc_nether_wart = {color:"#771E1E", behavior:b.POWDER, category:I, state:"solid", density:300};
elements.mc_ghast_tear = {color:"#EAEAEA", behavior:b.POWDER, category:I, state:"solid", density:1000};
elements.mc_spider_eye = {color:"#8F2633", behavior:b.POWDER, category:I, state:"solid", density:1050};
elements.mc_magma_cream = {color:"#ED761E", behavior:b.POWDER, category:I, state:"solid", density:1400, temp:200};
elements.mc_shulker_shell = {color:"#956795", behavior:b.POWDER, category:I, state:"solid", density:1800};

// === INTERACTIVE MINECRAFT TOOLS ===
// Use these tools to ignite things or mine!
elements.mc_flint_and_steel = {color:"#A1A1A1", category:"MC Tools", tool: function(pixel) { if (pixel.burnTime || pixel.element==="mc_tnt" || pixel.element==="mc_netherrack") { pixel.burning = true; pixel.burnStart = pixelTicks; } else if (isEmpty(pixel.x, pixel.y-1)) tryCreate("fire", pixel.x, pixel.y-1); }};
elements.mc_diamond_pickaxe = {color:"#4AEDD9", category:"MC Tools", tool: function(pixel) { let drops = {"mc_stone":"mc_cobblestone","mc_coal_ore":"mc_coal","mc_iron_ore":"mc_iron_ingot","mc_gold_ore":"mc_gold_ingot","mc_diamond_ore":"mc_diamond","mc_redstone_ore":"mc_redstone_dust"}; if(drops[pixel.element]) { changePixel(pixel, drops[pixel.element]); pixel.behavior=b.POWDER; } else { changePixel(pixel, "air"); } }};

// ==========================================
// Sandboxels x Minecraft Total Conversion 
// Part 2: Mobs, Entities, XP & New Blocks
// ==========================================

const b = behaviors;
const M = "MC Mobs";
const E = "MC Entities";
const NB = "MC New Blocks";

// === AI HELPER FUNCTIONS ===
// These lightweight functions run every tick to give mobs realistic behavior without massive code.
const wlk = (p) => { if(Math.random()<0.05){let d=Math.random()<0.5?1:-1; if(!tryMove(p,p.x+d,p.y)&&isEmpty(p.x,p.y-1))tryMove(p,p.x+d,p.y-1)} }; // Wander & jump 1 block
const brn = (p) => { if(p.y<20 && Math.random()<0.02 && isEmpty(p.x,p.y-1,true) && !p.burning) {p.burning=true; p.burnStart=pixelTicks;} }; // Burn in sunlight
const fly = (p) => { if(Math.random()<0.1) tryMove(p,p.x+(Math.random()<0.5?1:-1),p.y+(Math.random()<0.5?1:-1)); }; // Float randomly
const swm = (p) => { let n=getPixel(p.x,p.y-1); if(n&&n.element.includes("water")) tryMove(p,p.x+(Math.random()<0.5?1:-1),p.y-1); else wlk(p); }; // Swim up in water
const crp = (p) => { for(let i=-1;i<=1;i++) for(let j=-1;j<=1;j++){let n=getPixel(p.x+i,p.y+j); if(n&&(n.element==="fire"||n.element==="mc_lava"||n.burning))changePixel(p,"explosion");} }; // Explode on fire
const end = (p) => { for(let i=-1;i<=1;i++) for(let j=-1;j<=1;j++){let n=getPixel(p.x+i,p.y+j); if(n&&(n.element.includes("water")||n.burning)){tryMove(p,p.x+(Math.random()*20-10),p.y+(Math.random()*20-10));}} }; // Teleport from water/fire

// === SATISFYING XP ORBS ===
elements.mc_xp_orb = {color:["#80FF20","#D0FF40"], behavior:b.GAS, category:E, density:10, state:"gas", glow:true, tick:(p)=>{ p.color=Math.random()<0.5?"#80FF20":"#D0FF40"; if(Math.random()<0.15)tryMove(p,p.x+(Math.random()<0.5?1:-1),p.y+1); }};

// === PASSIVE MOBS ===
elements.mc_pig = {color:"#F0A5A5", behavior:b.POWDER, category:M, density:1000, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_sheep = {color:["#E4E4E4","#D6CACA"], behavior:b.POWDER, category:M, density:900, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_cow = {color:["#4A3018","#F2F2F2"], behavior:b.POWDER, category:M, density:1200, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_chicken = {color:"#FFFFFF", behavior:b.POWDER, category:M, density:500, state:"solid", tick:(p)=>{wlk(p); if(Math.random()<0.2&&isEmpty(p.x,p.y+1))tryMove(p,p.x,p.y+1);}}; // Slow fall
elements.mc_squid = {color:"#223B4D", behavior:b.POWDER, category:M, density:1000, state:"solid", tick:(p)=>{swm(p); if(Math.random()<0.01&&isEmpty(p.x,p.y-1)&&isEmpty(p.x,p.y+1))changePixel(p,"mc_ink_sack");}}; // Dies out of water
elements.mc_wolf = {color:"#CCCCCC", behavior:b.POWDER, category:M, density:1050, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_mooshroom = {color:["#A31010","#F2F2F2"], behavior:b.POWDER, category:M, density:1200, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_ocelot = {color:"#E5AA49", behavior:b.POWDER, category:M, density:800, state:"solid", tick:(p)=>{wlk(p); if(Math.random()<0.05)tryMove(p,p.x,p.y-2);}}; // Jumps high
elements.mc_horse = {color:["#7C4D26","#412814"], behavior:b.POWDER, category:M, density:1300, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_donkey = {color:"#7A6A5E", behavior:b.POWDER, category:M, density:1250, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_mule = {color:"#68462A", behavior:b.POWDER, category:M, density:1250, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_rabbit = {color:["#BCA882","#FFFFFF"], behavior:b.POWDER, category:M, density:600, state:"solid", tick:(p)=>{ if(Math.random()<0.05)tryMove(p,p.x+(Math.random()<0.5?2:-2),p.y-2); }}; // Hops
elements.mc_polar_bear = {color:"#F2F6F6", behavior:b.POWDER, category:M, density:1500, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_llama = {color:["#C7B199","#EFEBE5"], behavior:b.POWDER, category:M, density:1200, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_parrot = {color:["#E42727","#2DAA23","#1488BE"], behavior:b.POWDER, category:M, density:400, state:"solid", tick:(p)=>{fly(p);}};
elements.mc_villager = {color:["#BD8B72","#745A45"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_snow_golem = {color:"#FFFFFF", behavior:b.POWDER, category:M, density:500, state:"solid", tempLow:0, stateHigh:"water", tick:(p)=>{wlk(p); if(Math.random()<0.05&&isEmpty(p.x,p.y+1,true))tryCreate("mc_snow",p.x,p.y+1);}}; // Leaves snow
elements.mc_iron_golem = {color:"#D2D2D2", behavior:b.POWDER, category:M, density:3000, state:"solid", tick:(p)=>{wlk(p);}};

// === HOSTILE MOBS ===
elements.mc_zombie = {color:["#4A7129","#2E1B6D"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);brn(p);}};
elements.mc_zombie_villager = {color:["#4A7129","#745A45"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);brn(p);}};
elements.mc_husk = {color:["#91855F","#8F7A50"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);}}; // Doesn't burn
elements.mc_skeleton = {color:"#BCBCBC", behavior:b.POWDER, category:M, density:800, state:"solid", tick:(p)=>{wlk(p);brn(p);}};
elements.mc_stray = {color:["#BCBCBC","#768C94"], behavior:b.POWDER, category:M, density:800, state:"solid", tick:(p)=>{wlk(p);brn(p);}};
elements.mc_wither_skeleton = {color:"#2A2D2E", behavior:b.POWDER, category:M, density:900, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_creeper = {color:["#3EAA34","#000000"], behavior:b.POWDER, category:M, density:1000, state:"solid", tick:(p)=>{wlk(p);crp(p);}};
elements.mc_spider = {color:["#322A26","#9B1414"], behavior:b.POWDER, category:M, density:900, state:"solid", tick:(p)=>{wlk(p); if(!isEmpty(p.x+1,p.y)||!isEmpty(p.x-1,p.y))tryMove(p,p.x,p.y-1);}}; // Climbs walls
elements.mc_cave_spider = {color:["#17403B","#9B1414"], behavior:b.POWDER, category:M, density:850, state:"solid", tick:(p)=>{wlk(p); if(!isEmpty(p.x+1,p.y)||!isEmpty(p.x-1,p.y))tryMove(p,p.x,p.y-1);}};
elements.mc_slime = {color:"#55BE4D", behavior:b.POWDER, category:M, density:1000, state:"solid", bounce:0.8, tick:(p)=>{ if(Math.random()<0.05)tryMove(p,p.x+(Math.random()<0.5?2:-2),p.y-2); }};
elements.mc_magma_cube = {color:["#3A0000","#FF4500"], behavior:b.POWDER, category:M, density:1200, state:"solid", temp:300, tick:(p)=>{ if(Math.random()<0.05)tryMove(p,p.x+(Math.random()<0.5?2:-2),p.y-2); }};
elements.mc_enderman = {color:["#161616","#CC00FF"], behavior:b.POWDER, category:M, density:1200, state:"solid", tick:(p)=>{wlk(p);end(p);}};
elements.mc_ghast = {color:"#F0F0F0", behavior:b.POWDER, category:M, density:200, state:"solid", tick:(p)=>{fly(p);crp(p);}}; // Explodes if it touches lava/fire
elements.mc_blaze = {color:["#E4A62F","#592608"], behavior:b.POWDER, category:M, density:800, state:"solid", temp:200, tick:(p)=>{fly(p); if(Math.random()<0.01)tryCreate("fire",p.x,p.y+1);}};
elements.mc_silverfish = {color:"#809292", behavior:b.POWDER, category:M, density:400, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_endermite = {color:"#40245E", behavior:b.POWDER, category:M, density:400, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_witch = {color:["#2C1A38","#4A7129"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_guardian = {color:"#6E9A8E", behavior:b.POWDER, category:M, density:1300, state:"solid", tick:(p)=>{swm(p);}};
elements.mc_elder_guardian = {color:"#B6B1A2", behavior:b.POWDER, category:M, density:1500, state:"solid", tick:(p)=>{swm(p);}};
elements.mc_shulker = {color:"#956795", behavior:b.WALL, category:M, density:1500, state:"solid"}; // Stationary
elements.mc_evoker = {color:["#8F9092","#1A1B1E"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_vindicator = {color:["#8F9092","#2C4C4F"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_illusioner = {color:["#8F9092","#3C4B89"], behavior:b.POWDER, category:M, density:1100, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_vex = {color:"#8AA6B5", behavior:b.POWDER, category:M, density:100, state:"solid", tick:(p)=>{fly(p);}};
elements.mc_ender_dragon = {color:["#141414","#CC00FF"], behavior:b.POWDER, category:M, density:5000, state:"solid", tick:(p)=>{fly(p); for(let i=-2;i<=2;i++)for(let j=-2;j<=2;j++)if(Math.random()<0.2)tryDelete(p.x+i,p.y+j);}}; // Destroys blocks

// === NEW MOBS (1.17+) ===
elements.mc_axolotl = {color:["#FCA8B9","#F2E762","#5E4459"], behavior:b.POWDER, category:M, density:900, state:"solid", tick:(p)=>{swm(p);}};
elements.mc_warden = {color:["#0C1318","#0C5F67"], behavior:b.POWDER, category:M, density:4000, state:"solid", tick:(p)=>{wlk(p);}};
elements.mc_allay = {color:"#00DBFF", behavior:b.POWDER, category:M, density:200, state:"solid", tick:(p)=>{fly(p);}};
elements.mc_frog = {color:["#E49247","#F1F1F1","#4F8146"], behavior:b.POWDER, category:M, density:700, state:"solid", tick:(p)=>{ if(Math.random()<0.05)tryMove(p,p.x+(Math.random()<0.5?3:-3),p.y-3); }};
elements.mc_goat = {color:"#EBE9E3", behavior:b.POWDER, category:M, density:1200, state:"solid", tick:(p)=>{wlk(p); if(Math.random()<0.02)tryMove(p,p.x+(Math.random()<0.5?4:-4),p.y-4);}}; // High jump

// === ENTITIES & PROJECTILES ===
elements.mc_arrow = {color:"#FFFFFF", behavior:b.POWDER, category:E, density:800, state:"solid"};
elements.mc_snowball = {color:"#FFFFFF", behavior:b.POWDER, category:E, density:500, state:"solid", tempLow:0, stateHigh:"water", tick:(p)=>{ if(!tryMove(p,p.x,p.y+1))changePixel(p,"mc_snow"); }}; // Breaks into snow
elements.mc_ender_pearl_projectile = {color:"#1A8778", behavior:b.POWDER, category:E, density:2000, state:"solid"};
elements.mc_splash_potion = {color:"#8A2BE2", behavior:b.LIQUID, category:E, density:1000, state:"liquid"};
elements.mc_bottle_o_enchanting = {color:"#A5E358", behavior:b.POWDER, category:E, density:800, state:"solid", tick:(p)=>{ if(!tryMove(p,p.x,p.y+1))changePixel(p,"mc_xp_orb"); }}; // Breaks into XP
elements.mc_primed_tnt = {color:"#FFFFFF", behavior:b.POWDER, category:E, density:1500, state:"solid", tick:(p)=>{ p.color=Math.random()<0.5?"#FFFFFF":"#D43325"; if(pixelTicks%30===0)changePixel(p,"explosion"); }}; // Flashes and explodes

// === NEW BLOCKS (1.17+) ===
elements.mc_copper_ore = {color:["#7D7D7D","#C06B50","#55B69F"], behavior:b.WALL, category:NB, state:"solid", density:2800};
elements.mc_copper_block = {color:"#C06B50", behavior:b.WALL, category:NB, state:"solid", density:8900, conductive:true, reactions:{"mc_water":{elem1:"mc_exposed_copper",chance:0.01}}}; // Slowly oxidizes
elements.mc_exposed_copper = {color:"#A17765", behavior:b.WALL, category:NB, state:"solid", density:8900, conductive:true, reactions:{"mc_water":{elem1:"mc_weathered_copper",chance:0.01}}};
elements.mc_weathered_copper = {color:"#6D9B85", behavior:b.WALL, category:NB, state:"solid", density:8900, conductive:true, reactions:{"mc_water":{elem1:"mc_oxidized_copper",chance:0.01}}};
elements.mc_oxidized_copper = {color:"#55B69F", behavior:b.WALL, category:NB, state:"solid", density:8900, conductive:false}; // Fully oxidized loses conductivity
elements.mc_amethyst_block = {color:"#8A66AA", behavior:b.WALL, category:NB, state:"solid", density:2650};
elements.mc_deepslate = {color:"#3D3D43", behavior:b.WALL, category:NB, state:"solid", density:2900, hardness:0.85};
elements.mc_cobbled_deepslate = {color:"#35353A", behavior:b.WALL, category:NB, state:"solid", density:2800, hardness:0.8};
elements.mc_deepslate_coal_ore = {color:["#3D3D43","#1D1D1D"], behavior:b.WALL, category:NB, state:"solid", density:2900};
elements.mc_deepslate_iron_ore = {color:["#3D3D43","#D8AF93"], behavior:b.WALL, category:NB, state:"solid", density:3100};
elements.mc_deepslate_gold_ore = {color:["#3D3D43","#FCEE4B"], behavior:b.WALL, category:NB, state:"solid", density:3200};
elements.mc_deepslate_redstone_ore = {color:["#3D3D43","#AA0F0A"], behavior:b.WALL, category:NB, state:"solid", density:3000, charge:1};
elements.mc_deepslate_diamond_ore = {color:["#3D3D43","#4AEDD9"], behavior:b.WALL, category:NB, state:"solid", density:3000};
elements.mc_tuff = {color:"#6C6D66", behavior:b.WALL, category:NB, state:"solid", density:2500};
elements.mc_calcite = {color:"#E2E3E3", behavior:b.WALL, category:NB, state:"solid", density:2600};
elements.mc_dripstone_block = {color:"#866E5E", behavior:b.WALL, category:NB, state:"solid", density:2500};
elements.mc_pointed_dripstone = {color:"#765C4B", behavior:b.WALL, category:NB, state:"solid", density:2500};
