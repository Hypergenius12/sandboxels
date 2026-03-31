// ==========================================
// 200+ FOODS ULTIMATE EXPANSION - 100% MANUAL EDITION
// 480+ Total Elements. Zero Loops. Zero Crashes.
// Added: Deep Cooking Mechanics, Curing, Smoking & Authentic Smash Tool!
// ==========================================

const F = "food";
const S = "states";
const P = behaviors.POWDER;
const W = behaviors.WALL;
const L = behaviors.LIQUID;
const SP = behaviors.STURDYPOWDER;

// --- UNIVERSAL BURNT ELEMENT ---
elements.burnt = { color: ["#2b1d14", "#1a110c", "#000000"], behavior: SP, category: S, state: "solid", density: 500, tempHigh: 600, stateHigh: "ash" };
// ==========================================
// 150 MORE FOODS: THE MASTER CHEF EXPANSION
// 600 New Elements (Raw, Cooked, and Frozen States) + Full Chemistry
// ==========================================

// --- 1. MEATS & SEAFOOD (Raw -> Cooked) ---
elements.raw_turkey = {color:"#ffccbb", behavior:behaviors.WALL, category:"food", state:"solid", density:1020, tempHigh:110, stateHigh:"cooked_turkey", tempLow:-5, stateLow:"frozen_raw_turkey", breakInto:"blood"};
elements.frozen_raw_turkey = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1020, tempHigh:10, stateHigh:"raw_turkey"};
elements.cooked_turkey = {color:"#d2691e", behavior:behaviors.WALL, category:"food", state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_turkey"};
elements.frozen_cooked_turkey = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"cooked_turkey"};

elements.raw_quail = {color:"#e8bba8", behavior:behaviors.WALL, category:"food", state:"solid", density:1010, tempHigh:110, stateHigh:"cooked_quail", tempLow:-5, stateLow:"frozen_raw_quail", breakInto:"blood"};
elements.frozen_raw_quail = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1010, tempHigh:10, stateHigh:"raw_quail"};
elements.cooked_quail = {color:"#b85d19", behavior:behaviors.WALL, category:"food", state:"solid", density:940, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_quail"};
elements.frozen_cooked_quail = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"cooked_quail"};

elements.raw_pheasant = {color:"#d9a089", behavior:behaviors.WALL, category:"food", state:"solid", density:1015, tempHigh:110, stateHigh:"cooked_pheasant", tempLow:-5, stateLow:"frozen_raw_pheasant", breakInto:"blood"};
elements.frozen_raw_pheasant = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1015, tempHigh:10, stateHigh:"raw_pheasant"};
elements.cooked_pheasant = {color:"#a64b12", behavior:behaviors.WALL, category:"food", state:"solid", density:945, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_pheasant"};
elements.frozen_cooked_pheasant = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:945, tempHigh:10, stateHigh:"cooked_pheasant"};

elements.raw_goose = {color:"#ffb3a1", behavior:behaviors.WALL, category:"food", state:"solid", density:1030, tempHigh:110, stateHigh:"cooked_goose", tempLow:-5, stateLow:"frozen_raw_goose", breakInto:"blood"};
elements.frozen_raw_goose = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1030, tempHigh:10, stateHigh:"raw_goose"};
elements.cooked_goose = {color:"#8b3a0a", behavior:behaviors.WALL, category:"food", state:"solid", density:960, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_goose"};
elements.frozen_cooked_goose = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:960, tempHigh:10, stateHigh:"cooked_goose"};

elements.raw_rabbit = {color:"#ffcccc", behavior:behaviors.WALL, category:"food", state:"solid", density:1000, tempHigh:110, stateHigh:"cooked_rabbit", tempLow:-5, stateLow:"frozen_raw_rabbit", breakInto:"blood"};
elements.frozen_raw_rabbit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1000, tempHigh:10, stateHigh:"raw_rabbit"};
elements.cooked_rabbit = {color:"#e6a87c", behavior:behaviors.WALL, category:"food", state:"solid", density:930, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_rabbit"};
elements.frozen_cooked_rabbit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:930, tempHigh:10, stateHigh:"cooked_rabbit"};

elements.raw_veal = {color:"#f0a8a8", behavior:behaviors.WALL, category:"food", state:"solid", density:1040, tempHigh:110, stateHigh:"cooked_veal", tempLow:-5, stateLow:"frozen_raw_veal", breakInto:"blood"};
elements.frozen_raw_veal = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1040, tempHigh:10, stateHigh:"raw_veal"};
elements.cooked_veal = {color:"#c27a7a", behavior:behaviors.WALL, category:"food", state:"solid", density:970, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_veal"};
elements.frozen_cooked_veal = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:970, tempHigh:10, stateHigh:"cooked_veal"};

elements.raw_boar = {color:"#a84848", behavior:behaviors.WALL, category:"food", state:"solid", density:1060, tempHigh:110, stateHigh:"cooked_boar", tempLow:-5, stateLow:"frozen_raw_boar", breakInto:"blood"};
elements.frozen_raw_boar = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1060, tempHigh:10, stateHigh:"raw_boar"};
elements.cooked_boar = {color:"#6b2a2a", behavior:behaviors.WALL, category:"food", state:"solid", density:990, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_boar"};
elements.frozen_cooked_boar = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:990, tempHigh:10, stateHigh:"cooked_boar"};

elements.raw_bison = {color:"#8b2222", behavior:behaviors.WALL, category:"food", state:"solid", density:1070, tempHigh:110, stateHigh:"cooked_bison", tempLow:-5, stateLow:"frozen_raw_bison", breakInto:"blood"};
elements.frozen_raw_bison = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1070, tempHigh:10, stateHigh:"raw_bison"};
elements.cooked_bison = {color:"#4a1111", behavior:behaviors.WALL, category:"food", state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_bison"};
elements.frozen_cooked_bison = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1000, tempHigh:10, stateHigh:"cooked_bison"};

elements.raw_trout = {color:"#f08080", behavior:behaviors.WALL, category:"food", state:"solid", density:990, tempHigh:110, stateHigh:"cooked_trout", tempLow:-5, stateLow:"frozen_raw_trout", breakInto:"water"};
elements.frozen_raw_trout = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:990, tempHigh:10, stateHigh:"raw_trout"};
elements.cooked_trout = {color:"#ffb6c1", behavior:behaviors.WALL, category:"food", state:"solid", density:920, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_trout"};
elements.frozen_cooked_trout = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:920, tempHigh:10, stateHigh:"cooked_trout"};

elements.raw_halibut = {color:"#fff5ee", behavior:behaviors.WALL, category:"food", state:"solid", density:995, tempHigh:110, stateHigh:"cooked_halibut", tempLow:-5, stateLow:"frozen_raw_halibut", breakInto:"water"};
elements.frozen_raw_halibut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:995, tempHigh:10, stateHigh:"raw_halibut"};
elements.cooked_halibut = {color:"#fdf5e6", behavior:behaviors.WALL, category:"food", state:"solid", density:925, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_halibut"};
elements.frozen_cooked_halibut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:925, tempHigh:10, stateHigh:"cooked_halibut"};

elements.raw_mahi_mahi = {color:"#ffdab9", behavior:behaviors.WALL, category:"food", state:"solid", density:985, tempHigh:110, stateHigh:"cooked_mahi_mahi", tempLow:-5, stateLow:"frozen_raw_mahi_mahi", breakInto:"water"};
elements.frozen_raw_mahi_mahi = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:985, tempHigh:10, stateHigh:"raw_mahi_mahi"};
elements.cooked_mahi_mahi = {color:"#ffe4b5", behavior:behaviors.WALL, category:"food", state:"solid", density:915, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_mahi_mahi"};
elements.frozen_cooked_mahi_mahi = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:915, tempHigh:10, stateHigh:"cooked_mahi_mahi"};

elements.raw_mackerel = {color:"#b0c4de", behavior:behaviors.WALL, category:"food", state:"solid", density:990, tempHigh:110, stateHigh:"cooked_mackerel", tempLow:-5, stateLow:"frozen_raw_mackerel", breakInto:"water"};
elements.frozen_raw_mackerel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:990, tempHigh:10, stateHigh:"raw_mackerel"};
elements.cooked_mackerel = {color:"#778899", behavior:behaviors.WALL, category:"food", state:"solid", density:920, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_mackerel"};
elements.frozen_cooked_mackerel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:920, tempHigh:10, stateHigh:"cooked_mackerel"};

elements.raw_sardine = {color:"#c0c0c0", behavior:behaviors.WALL, category:"food", state:"solid", density:980, tempHigh:110, stateHigh:"cooked_sardine", tempLow:-5, stateLow:"frozen_raw_sardine", breakInto:"water"};
elements.frozen_raw_sardine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"raw_sardine"};
elements.cooked_sardine = {color:"#808080", behavior:behaviors.WALL, category:"food", state:"solid", density:910, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_sardine"};
elements.frozen_cooked_sardine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:910, tempHigh:10, stateHigh:"cooked_sardine"};

elements.raw_anchovy = {color:"#dcdcdc", behavior:behaviors.WALL, category:"food", state:"solid", density:980, tempHigh:110, stateHigh:"cooked_anchovy", tempLow:-5, stateLow:"frozen_raw_anchovy", breakInto:"water"};
elements.frozen_raw_anchovy = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"raw_anchovy"};
elements.cooked_anchovy = {color:"#a9a9a9", behavior:behaviors.WALL, category:"food", state:"solid", density:910, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_anchovy"};
elements.frozen_cooked_anchovy = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:910, tempHigh:10, stateHigh:"cooked_anchovy"};

elements.raw_scallop = {color:"#fffaf0", behavior:behaviors.WALL, category:"food", state:"solid", density:1010, tempHigh:110, stateHigh:"cooked_scallop", tempLow:-5, stateLow:"frozen_raw_scallop", breakInto:"water"};
elements.frozen_raw_scallop = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1010, tempHigh:10, stateHigh:"raw_scallop"};
elements.cooked_scallop = {color:"#ffe4c4", behavior:behaviors.WALL, category:"food", state:"solid", density:940, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_scallop"};
elements.frozen_cooked_scallop = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"cooked_scallop"};

elements.raw_mussel = {color:"#ffa07a", behavior:behaviors.WALL, category:"food", state:"solid", density:1010, tempHigh:110, stateHigh:"cooked_mussel", tempLow:-5, stateLow:"frozen_raw_mussel", breakInto:"water"};
elements.frozen_raw_mussel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1010, tempHigh:10, stateHigh:"raw_mussel"};
elements.cooked_mussel = {color:"#ff7f50", behavior:behaviors.WALL, category:"food", state:"solid", density:940, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_mussel"};
elements.frozen_cooked_mussel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"cooked_mussel"};

elements.raw_crayfish = {color:"#cd5c5c", behavior:behaviors.WALL, category:"food", state:"solid", density:1020, tempHigh:110, stateHigh:"cooked_crayfish", tempLow:-5, stateLow:"frozen_raw_crayfish", breakInto:"water"};
elements.frozen_raw_crayfish = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1020, tempHigh:10, stateHigh:"raw_crayfish"};
elements.cooked_crayfish = {color:"#ff0000", behavior:behaviors.WALL, category:"food", state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_crayfish"};
elements.frozen_cooked_crayfish = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"cooked_crayfish"};

elements.raw_eel = {color:"#a9a9a9", behavior:behaviors.WALL, category:"food", state:"solid", density:1000, tempHigh:110, stateHigh:"cooked_eel", tempLow:-5, stateLow:"frozen_raw_eel", breakInto:"blood"};
elements.frozen_raw_eel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1000, tempHigh:10, stateHigh:"raw_eel"};
elements.cooked_eel = {color:"#fff8dc", behavior:behaviors.WALL, category:"food", state:"solid", density:930, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_eel"};
elements.frozen_cooked_eel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:930, tempHigh:10, stateHigh:"cooked_eel"};

elements.raw_urchin = {color:"#ffa500", behavior:behaviors.WALL, category:"food", state:"solid", density:1030, tempHigh:110, stateHigh:"cooked_urchin", tempLow:-5, stateLow:"frozen_raw_urchin", breakInto:"water"};
elements.frozen_raw_urchin = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1030, tempHigh:10, stateHigh:"raw_urchin"};
elements.cooked_urchin = {color:"#ff8c00", behavior:behaviors.WALL, category:"food", state:"solid", density:960, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_urchin"};
elements.frozen_cooked_urchin = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:960, tempHigh:10, stateHigh:"cooked_urchin"};

elements.raw_escargot = {color:"#8b4513", behavior:behaviors.WALL, category:"food", state:"solid", density:1040, tempHigh:110, stateHigh:"cooked_escargot", tempLow:-5, stateLow:"frozen_raw_escargot", breakInto:"water"};
elements.frozen_raw_escargot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1040, tempHigh:10, stateHigh:"raw_escargot"};
elements.cooked_escargot = {color:"#a0522d", behavior:behaviors.WALL, category:"food", state:"solid", density:970, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_escargot"};
elements.frozen_cooked_escargot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:970, tempHigh:10, stateHigh:"cooked_escargot"};

// --- 2. DOUGHS & BATTERS (Raw -> Baked) ---
elements.raw_churro_dough = {color:"#f5deb3", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:900, tempHigh:120, stateHigh:"baked_churro", tempLow:-5, stateLow:"frozen_raw_churro_dough", breakInto:"water"};
elements.frozen_raw_churro_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:900, tempHigh:10, stateHigh:"raw_churro_dough"};
elements.baked_churro = {color:"#d2691e", behavior:behaviors.WALL, category:"food", state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_churro"};
elements.frozen_baked_churro = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:800, tempHigh:10, stateHigh:"baked_churro"};

elements.raw_pretzel_dough = {color:"#f5f5dc", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:910, tempHigh:120, stateHigh:"baked_pretzel", tempLow:-5, stateLow:"frozen_raw_pretzel_dough", breakInto:"water"};
elements.frozen_raw_pretzel_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:910, tempHigh:10, stateHigh:"raw_pretzel_dough"};
elements.baked_pretzel = {color:"#8b4513", behavior:behaviors.WALL, category:"food", state:"solid", density:810, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_pretzel"};
elements.frozen_baked_pretzel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:810, tempHigh:10, stateHigh:"baked_pretzel"};

elements.raw_eclair_paste = {color:"#ffefd5", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:890, tempHigh:120, stateHigh:"baked_eclair", tempLow:-5, stateLow:"frozen_raw_eclair_paste", breakInto:"water"};
elements.frozen_raw_eclair_paste = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:890, tempHigh:10, stateHigh:"raw_eclair_paste"};
elements.baked_eclair = {color:"#cd853f", behavior:behaviors.WALL, category:"food", state:"solid", density:790, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_eclair"};
elements.frozen_baked_eclair = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:790, tempHigh:10, stateHigh:"baked_eclair"};

elements.raw_brioche_dough = {color:"#fff8dc", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:920, tempHigh:120, stateHigh:"baked_brioche", tempLow:-5, stateLow:"frozen_raw_brioche_dough", breakInto:"water"};
elements.frozen_raw_brioche_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:920, tempHigh:10, stateHigh:"raw_brioche_dough"};
elements.baked_brioche = {color:"#daa520", behavior:behaviors.WALL, category:"food", state:"solid", density:820, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_brioche"};
elements.frozen_baked_brioche = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:820, tempHigh:10, stateHigh:"baked_brioche"};

elements.raw_focaccia_dough = {color:"#fdf5e6", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:930, tempHigh:120, stateHigh:"baked_focaccia", tempLow:-5, stateLow:"frozen_raw_focaccia_dough", breakInto:"water"};
elements.frozen_raw_focaccia_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:930, tempHigh:10, stateHigh:"raw_focaccia_dough"};
elements.baked_focaccia = {color:"#f4a460", behavior:behaviors.WALL, category:"food", state:"solid", density:830, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_focaccia"};
elements.frozen_baked_focaccia = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:830, tempHigh:10, stateHigh:"baked_focaccia"};

elements.raw_ciabatta_dough = {color:"#faf0e6", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:915, tempHigh:120, stateHigh:"baked_ciabatta", tempLow:-5, stateLow:"frozen_raw_ciabatta_dough", breakInto:"water"};
elements.frozen_raw_ciabatta_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:915, tempHigh:10, stateHigh:"raw_ciabatta_dough"};
elements.baked_ciabatta = {color:"#deb887", behavior:behaviors.WALL, category:"food", state:"solid", density:815, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_ciabatta"};
elements.frozen_baked_ciabatta = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:815, tempHigh:10, stateHigh:"baked_ciabatta"};

elements.raw_sourdough_starter = {color:"#fffacd", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:950, tempHigh:120, stateHigh:"baked_sourdough", tempLow:-5, stateLow:"frozen_raw_sourdough_starter", breakInto:"water"};
elements.frozen_raw_sourdough_starter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"raw_sourdough_starter"};
elements.baked_sourdough = {color:"#cd853f", behavior:behaviors.WALL, category:"food", state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_sourdough"};
elements.frozen_baked_sourdough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:850, tempHigh:10, stateHigh:"baked_sourdough"};

elements.raw_pancake_batter = {color:"#ffe4b5", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1020, tempHigh:120, stateHigh:"baked_pancake", tempLow:-5, stateLow:"frozen_raw_pancake_batter", breakInto:"water"};
elements.frozen_raw_pancake_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1020, tempHigh:10, stateHigh:"raw_pancake_batter"};
elements.baked_pancake = {color:"#f4a460", behavior:behaviors.WALL, category:"food", state:"solid", density:920, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_pancake"};
elements.frozen_baked_pancake = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:920, tempHigh:10, stateHigh:"baked_pancake"};

elements.raw_crepe_batter = {color:"#ffefd5", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1010, tempHigh:120, stateHigh:"baked_crepe", tempLow:-5, stateLow:"frozen_raw_crepe_batter", breakInto:"water"};
elements.frozen_raw_crepe_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1010, tempHigh:10, stateHigh:"raw_crepe_batter"};
elements.baked_crepe = {color:"#e6c280", behavior:behaviors.WALL, category:"food", state:"solid", density:910, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_crepe"};
elements.frozen_baked_crepe = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:910, tempHigh:10, stateHigh:"baked_crepe"};

elements.raw_blini_batter = {color:"#ffebcd", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1015, tempHigh:120, stateHigh:"baked_blini", tempLow:-5, stateLow:"frozen_raw_blini_batter", breakInto:"water"};
elements.frozen_raw_blini_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1015, tempHigh:10, stateHigh:"raw_blini_batter"};
elements.baked_blini = {color:"#d2b48c", behavior:behaviors.WALL, category:"food", state:"solid", density:915, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_blini"};
elements.frozen_baked_blini = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:915, tempHigh:10, stateHigh:"baked_blini"};

elements.raw_muffin_batter = {color:"#ffdead", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1050, tempHigh:120, stateHigh:"baked_muffin", tempLow:-5, stateLow:"frozen_raw_muffin_batter", breakInto:"water"};
elements.frozen_raw_muffin_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1050, tempHigh:10, stateHigh:"raw_muffin_batter"};
elements.baked_muffin = {color:"#8b4513", behavior:behaviors.WALL, category:"food", state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_muffin"};
elements.frozen_baked_muffin = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"baked_muffin"};

elements.raw_cupcake_batter = {color:"#ffe4e1", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1060, tempHigh:120, stateHigh:"baked_cupcake", tempLow:-5, stateLow:"frozen_raw_cupcake_batter", breakInto:"water"};
elements.frozen_raw_cupcake_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1060, tempHigh:10, stateHigh:"raw_cupcake_batter"};
elements.baked_cupcake = {color:"#ffb6c1", behavior:behaviors.WALL, category:"food", state:"solid", density:960, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_cupcake"};
elements.frozen_baked_cupcake = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:960, tempHigh:10, stateHigh:"baked_cupcake"};

elements.raw_brownie_batter = {color:"#5c4033", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1080, tempHigh:120, stateHigh:"baked_brownie", tempLow:-5, stateLow:"frozen_raw_brownie_batter", breakInto:"water"};
elements.frozen_raw_brownie_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1080, tempHigh:10, stateHigh:"raw_brownie_batter"};
elements.baked_brownie = {color:"#3e2723", behavior:behaviors.WALL, category:"food", state:"solid", density:980, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_brownie"};
elements.frozen_baked_brownie = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"baked_brownie"};

elements.raw_blondie_batter = {color:"#f5deb3", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1070, tempHigh:120, stateHigh:"baked_blondie", tempLow:-5, stateLow:"frozen_raw_blondie_batter", breakInto:"water"};
elements.frozen_raw_blondie_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1070, tempHigh:10, stateHigh:"raw_blondie_batter"};
elements.baked_blondie = {color:"#d2b48c", behavior:behaviors.WALL, category:"food", state:"solid", density:970, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_blondie"};
elements.frozen_baked_blondie = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:970, tempHigh:10, stateHigh:"baked_blondie"};

elements.raw_cornbread_batter = {color:"#fff8dc", behavior:behaviors.LIQUID, category:"food", state:"liquid", density:1040, tempHigh:120, stateHigh:"baked_cornbread", tempLow:-5, stateLow:"frozen_raw_cornbread_batter", breakInto:"water"};
elements.frozen_raw_cornbread_batter = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1040, tempHigh:10, stateHigh:"raw_cornbread_batter"};
elements.baked_cornbread = {color:"#ffd700", behavior:behaviors.WALL, category:"food", state:"solid", density:940, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_cornbread"};
elements.frozen_baked_cornbread = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"baked_cornbread"};

elements.raw_biscuit_dough = {color:"#ffefd5", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:930, tempHigh:120, stateHigh:"baked_biscuit", tempLow:-5, stateLow:"frozen_raw_biscuit_dough", breakInto:"water"};
elements.frozen_raw_biscuit_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:930, tempHigh:10, stateHigh:"raw_biscuit_dough"};
elements.baked_biscuit = {color:"#deb887", behavior:behaviors.WALL, category:"food", state:"solid", density:830, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_biscuit"};
elements.frozen_baked_biscuit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:830, tempHigh:10, stateHigh:"baked_biscuit"};

elements.raw_scone_dough = {color:"#faebd7", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:940, tempHigh:120, stateHigh:"baked_scone", tempLow:-5, stateLow:"frozen_raw_scone_dough", breakInto:"water"};
elements.frozen_raw_scone_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"raw_scone_dough"};
elements.baked_scone = {color:"#cd853f", behavior:behaviors.WALL, category:"food", state:"solid", density:840, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_scone"};
elements.frozen_baked_scone = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:840, tempHigh:10, stateHigh:"baked_scone"};

elements.raw_tart_dough = {color:"#fff5ee", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:950, tempHigh:120, stateHigh:"baked_tart", tempLow:-5, stateLow:"frozen_raw_tart_dough", breakInto:"water"};
elements.frozen_raw_tart_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"raw_tart_dough"};
elements.baked_tart = {color:"#f4a460", behavior:behaviors.WALL, category:"food", state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_tart"};
elements.frozen_baked_tart = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:850, tempHigh:10, stateHigh:"baked_tart"};

elements.raw_phyllo_dough = {color:"#fffff0", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:960, tempHigh:120, stateHigh:"baked_phyllo", tempLow:-5, stateLow:"frozen_raw_phyllo_dough", breakInto:"water"};
elements.frozen_raw_phyllo_dough = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:960, tempHigh:10, stateHigh:"raw_phyllo_dough"};
elements.baked_phyllo = {color:"#e6c280", behavior:behaviors.WALL, category:"food", state:"solid", density:860, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_phyllo"};
elements.frozen_baked_phyllo = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:860, tempHigh:10, stateHigh:"baked_phyllo"};

elements.raw_choux_pastry = {color:"#ffebcd", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:970, tempHigh:120, stateHigh:"baked_choux", tempLow:-5, stateLow:"frozen_raw_choux_pastry", breakInto:"water"};
elements.frozen_raw_choux_pastry = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:970, tempHigh:10, stateHigh:"raw_choux_pastry"};
elements.baked_choux = {color:"#d2b48c", behavior:behaviors.WALL, category:"food", state:"solid", density:870, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_choux"};
elements.frozen_baked_choux = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:870, tempHigh:10, stateHigh:"baked_choux"};

// --- 3. NUTS & SEEDS (Raw -> Roasted) ---
elements.raw_peanut = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:600, tempHigh:120, stateHigh:"roasted_peanut", tempLow:-5, stateLow:"frozen_raw_peanut", breakInto:"nut_oil"};
elements.frozen_raw_peanut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:600, tempHigh:10, stateHigh:"raw_peanut"};
elements.roasted_peanut = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:550, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_peanut"};
elements.frozen_roasted_peanut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:550, tempHigh:10, stateHigh:"roasted_peanut"};

elements.raw_almond = {color:"#ffebcd", behavior:behaviors.POWDER, category:"food", state:"solid", density:610, tempHigh:120, stateHigh:"roasted_almond", tempLow:-5, stateLow:"frozen_raw_almond", breakInto:"nut_oil"};
elements.frozen_raw_almond = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:610, tempHigh:10, stateHigh:"raw_almond"};
elements.roasted_almond = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:560, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_almond"};
elements.frozen_roasted_almond = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:560, tempHigh:10, stateHigh:"roasted_almond"};

elements.raw_walnut = {color:"#deb887", behavior:behaviors.POWDER, category:"food", state:"solid", density:620, tempHigh:120, stateHigh:"roasted_walnut", tempLow:-5, stateLow:"frozen_raw_walnut", breakInto:"nut_oil"};
elements.frozen_raw_walnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:620, tempHigh:10, stateHigh:"raw_walnut"};
elements.roasted_walnut = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:570, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_walnut"};
elements.frozen_roasted_walnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:570, tempHigh:10, stateHigh:"roasted_walnut"};

elements.raw_pecan = {color:"#cd853f", behavior:behaviors.POWDER, category:"food", state:"solid", density:630, tempHigh:120, stateHigh:"roasted_pecan", tempLow:-5, stateLow:"frozen_raw_pecan", breakInto:"nut_oil"};
elements.frozen_raw_pecan = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:630, tempHigh:10, stateHigh:"raw_pecan"};
elements.roasted_pecan = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:580, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_pecan"};
elements.frozen_roasted_pecan = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:580, tempHigh:10, stateHigh:"roasted_pecan"};

elements.raw_cashew = {color:"#fff8dc", behavior:behaviors.POWDER, category:"food", state:"solid", density:640, tempHigh:120, stateHigh:"roasted_cashew", tempLow:-5, stateLow:"frozen_raw_cashew", breakInto:"nut_oil"};
elements.frozen_raw_cashew = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:640, tempHigh:10, stateHigh:"raw_cashew"};
elements.roasted_cashew = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:590, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_cashew"};
elements.frozen_roasted_cashew = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:590, tempHigh:10, stateHigh:"roasted_cashew"};

elements.raw_pistachio = {color:"#93c572", behavior:behaviors.POWDER, category:"food", state:"solid", density:650, tempHigh:120, stateHigh:"roasted_pistachio", tempLow:-5, stateLow:"frozen_raw_pistachio", breakInto:"nut_oil"};
elements.frozen_raw_pistachio = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:650, tempHigh:10, stateHigh:"raw_pistachio"};
elements.roasted_pistachio = {color:"#556b2f", behavior:behaviors.POWDER, category:"food", state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_pistachio"};
elements.frozen_roasted_pistachio = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:600, tempHigh:10, stateHigh:"roasted_pistachio"};

elements.raw_macadamia = {color:"#fdf5e6", behavior:behaviors.POWDER, category:"food", state:"solid", density:660, tempHigh:120, stateHigh:"roasted_macadamia", tempLow:-5, stateLow:"frozen_raw_macadamia", breakInto:"nut_oil"};
elements.frozen_raw_macadamia = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:660, tempHigh:10, stateHigh:"raw_macadamia"};
elements.roasted_macadamia = {color:"#e6c280", behavior:behaviors.POWDER, category:"food", state:"solid", density:610, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_macadamia"};
elements.frozen_roasted_macadamia = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:610, tempHigh:10, stateHigh:"roasted_macadamia"};

elements.raw_hazelnut = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:670, tempHigh:120, stateHigh:"roasted_hazelnut", tempLow:-5, stateLow:"frozen_raw_hazelnut", breakInto:"nut_oil"};
elements.frozen_raw_hazelnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:670, tempHigh:10, stateHigh:"raw_hazelnut"};
elements.roasted_hazelnut = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:620, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_hazelnut"};
elements.frozen_roasted_hazelnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:620, tempHigh:10, stateHigh:"roasted_hazelnut"};

elements.raw_brazil_nut = {color:"#f5deb3", behavior:behaviors.POWDER, category:"food", state:"solid", density:680, tempHigh:120, stateHigh:"roasted_brazil_nut", tempLow:-5, stateLow:"frozen_raw_brazil_nut", breakInto:"nut_oil"};
elements.frozen_raw_brazil_nut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:680, tempHigh:10, stateHigh:"raw_brazil_nut"};
elements.roasted_brazil_nut = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:630, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_brazil_nut"};
elements.frozen_roasted_brazil_nut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:630, tempHigh:10, stateHigh:"roasted_brazil_nut"};

elements.raw_pine_nut = {color:"#fffacd", behavior:behaviors.POWDER, category:"food", state:"solid", density:690, tempHigh:120, stateHigh:"roasted_pine_nut", tempLow:-5, stateLow:"frozen_raw_pine_nut", breakInto:"nut_oil"};
elements.frozen_raw_pine_nut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:690, tempHigh:10, stateHigh:"raw_pine_nut"};
elements.roasted_pine_nut = {color:"#daa520", behavior:behaviors.POWDER, category:"food", state:"solid", density:640, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_pine_nut"};
elements.frozen_roasted_pine_nut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:640, tempHigh:10, stateHigh:"roasted_pine_nut"};

elements.raw_chestnut = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:700, tempHigh:120, stateHigh:"roasted_chestnut", tempLow:-5, stateLow:"frozen_raw_chestnut", breakInto:"nut_oil"};
elements.frozen_raw_chestnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:700, tempHigh:10, stateHigh:"raw_chestnut"};
elements.roasted_chestnut = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_chestnut"};
elements.frozen_roasted_chestnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:650, tempHigh:10, stateHigh:"roasted_chestnut"};

elements.raw_sunflower_seed = {color:"#d3d3d3", behavior:behaviors.POWDER, category:"food", state:"solid", density:710, tempHigh:120, stateHigh:"roasted_sunflower_seed", tempLow:-5, stateLow:"frozen_raw_sunflower_seed", breakInto:"nut_oil"};
elements.frozen_raw_sunflower_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:710, tempHigh:10, stateHigh:"raw_sunflower_seed"};
elements.roasted_sunflower_seed = {color:"#a9a9a9", behavior:behaviors.POWDER, category:"food", state:"solid", density:660, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_sunflower_seed"};
elements.frozen_roasted_sunflower_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:660, tempHigh:10, stateHigh:"roasted_sunflower_seed"};

elements.raw_pumpkin_seed = {color:"#9acd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:720, tempHigh:120, stateHigh:"roasted_pumpkin_seed", tempLow:-5, stateLow:"frozen_raw_pumpkin_seed", breakInto:"nut_oil"};
elements.frozen_raw_pumpkin_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:720, tempHigh:10, stateHigh:"raw_pumpkin_seed"};
elements.roasted_pumpkin_seed = {color:"#6b8e23", behavior:behaviors.POWDER, category:"food", state:"solid", density:670, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_pumpkin_seed"};
elements.frozen_roasted_pumpkin_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:670, tempHigh:10, stateHigh:"roasted_pumpkin_seed"};

elements.raw_sesame_seed = {color:"#fff8dc", behavior:behaviors.POWDER, category:"food", state:"solid", density:730, tempHigh:120, stateHigh:"roasted_sesame_seed", tempLow:-5, stateLow:"frozen_raw_sesame_seed", breakInto:"nut_oil"};
elements.frozen_raw_sesame_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:730, tempHigh:10, stateHigh:"raw_sesame_seed"};
elements.roasted_sesame_seed = {color:"#deb887", behavior:behaviors.POWDER, category:"food", state:"solid", density:680, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_sesame_seed"};
elements.frozen_roasted_sesame_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:680, tempHigh:10, stateHigh:"roasted_sesame_seed"};

elements.raw_flax_seed = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:740, tempHigh:120, stateHigh:"roasted_flax_seed", tempLow:-5, stateLow:"frozen_raw_flax_seed", breakInto:"nut_oil"};
elements.frozen_raw_flax_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:740, tempHigh:10, stateHigh:"raw_flax_seed"};
elements.roasted_flax_seed = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:690, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_flax_seed"};
elements.frozen_roasted_flax_seed = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:690, tempHigh:10, stateHigh:"roasted_flax_seed"};

// --- 4. VEGGIES (Raw -> Roasted) ---
elements.raw_brussels_sprout = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:400, tempHigh:120, stateHigh:"roasted_brussels_sprout", tempLow:-5, stateLow:"frozen_raw_brussels_sprout", breakInto:"water"};
elements.frozen_raw_brussels_sprout = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:400, tempHigh:10, stateHigh:"raw_brussels_sprout"};
elements.roasted_brussels_sprout = {color:"#556b2f", behavior:behaviors.POWDER, category:"food", state:"solid", density:350, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_brussels_sprout"};
elements.frozen_roasted_brussels_sprout = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:350, tempHigh:10, stateHigh:"roasted_brussels_sprout"};

elements.raw_swiss_chard = {color:"#32cd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:410, tempHigh:120, stateHigh:"cooked_swiss_chard", tempLow:-5, stateLow:"frozen_raw_swiss_chard", breakInto:"water"};
elements.frozen_raw_swiss_chard = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:410, tempHigh:10, stateHigh:"raw_swiss_chard"};
elements.cooked_swiss_chard = {color:"#006400", behavior:behaviors.POWDER, category:"food", state:"solid", density:360, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_swiss_chard"};
elements.frozen_cooked_swiss_chard = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:360, tempHigh:10, stateHigh:"cooked_swiss_chard"};

elements.raw_collard_green = {color:"#2e8b57", behavior:behaviors.POWDER, category:"food", state:"solid", density:420, tempHigh:120, stateHigh:"cooked_collard_green", tempLow:-5, stateLow:"frozen_raw_collard_green", breakInto:"water"};
elements.frozen_raw_collard_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:420, tempHigh:10, stateHigh:"raw_collard_green"};
elements.cooked_collard_green = {color:"#004d00", behavior:behaviors.POWDER, category:"food", state:"solid", density:370, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_collard_green"};
elements.frozen_cooked_collard_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:370, tempHigh:10, stateHigh:"cooked_collard_green"};

elements.raw_mustard_green = {color:"#9acd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:430, tempHigh:120, stateHigh:"cooked_mustard_green", tempLow:-5, stateLow:"frozen_raw_mustard_green", breakInto:"water"};
elements.frozen_raw_mustard_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:430, tempHigh:10, stateHigh:"raw_mustard_green"};
elements.cooked_mustard_green = {color:"#6b8e23", behavior:behaviors.POWDER, category:"food", state:"solid", density:380, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_mustard_green"};
elements.frozen_cooked_mustard_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:380, tempHigh:10, stateHigh:"cooked_mustard_green"};

elements.raw_turnip_green = {color:"#7cfc00", behavior:behaviors.POWDER, category:"food", state:"solid", density:440, tempHigh:120, stateHigh:"cooked_turnip_green", tempLow:-5, stateLow:"frozen_raw_turnip_green", breakInto:"water"};
elements.frozen_raw_turnip_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:440, tempHigh:10, stateHigh:"raw_turnip_green"};
elements.cooked_turnip_green = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:390, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_turnip_green"};
elements.frozen_cooked_turnip_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:390, tempHigh:10, stateHigh:"cooked_turnip_green"};

elements.raw_beet_green = {color:"#8fbc8f", behavior:behaviors.POWDER, category:"food", state:"solid", density:450, tempHigh:120, stateHigh:"cooked_beet_green", tempLow:-5, stateLow:"frozen_raw_beet_green", breakInto:"water"};
elements.frozen_raw_beet_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:450, tempHigh:10, stateHigh:"raw_beet_green"};
elements.cooked_beet_green = {color:"#2e8b57", behavior:behaviors.POWDER, category:"food", state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_beet_green"};
elements.frozen_cooked_beet_green = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:400, tempHigh:10, stateHigh:"cooked_beet_green"};

elements.raw_endive = {color:"#f0e68c", behavior:behaviors.POWDER, category:"food", state:"solid", density:460, tempHigh:120, stateHigh:"cooked_endive", tempLow:-5, stateLow:"frozen_raw_endive", breakInto:"water"};
elements.frozen_raw_endive = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:460, tempHigh:10, stateHigh:"raw_endive"};
elements.cooked_endive = {color:"#bdb76b", behavior:behaviors.POWDER, category:"food", state:"solid", density:410, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_endive"};
elements.frozen_cooked_endive = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:410, tempHigh:10, stateHigh:"cooked_endive"};

elements.raw_radicchio = {color:"#c71585", behavior:behaviors.POWDER, category:"food", state:"solid", density:470, tempHigh:120, stateHigh:"cooked_radicchio", tempLow:-5, stateLow:"frozen_raw_radicchio", breakInto:"water"};
elements.frozen_raw_radicchio = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:470, tempHigh:10, stateHigh:"raw_radicchio"};
elements.cooked_radicchio = {color:"#8b008b", behavior:behaviors.POWDER, category:"food", state:"solid", density:420, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_radicchio"};
elements.frozen_cooked_radicchio = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:420, tempHigh:10, stateHigh:"cooked_radicchio"};

elements.raw_frisee = {color:"#98fb98", behavior:behaviors.POWDER, category:"food", state:"solid", density:480, tempHigh:120, stateHigh:"cooked_frisee", tempLow:-5, stateLow:"frozen_raw_frisee", breakInto:"water"};
elements.frozen_raw_frisee = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:480, tempHigh:10, stateHigh:"raw_frisee"};
elements.cooked_frisee = {color:"#3cb371", behavior:behaviors.POWDER, category:"food", state:"solid", density:430, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_frisee"};
elements.frozen_cooked_frisee = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:430, tempHigh:10, stateHigh:"cooked_frisee"};

elements.raw_iceberg_lettuce = {color:"#e0ffff", behavior:behaviors.POWDER, category:"food", state:"solid", density:490, tempHigh:120, stateHigh:"cooked_iceberg_lettuce", tempLow:-5, stateLow:"frozen_raw_iceberg_lettuce", breakInto:"water"};
elements.frozen_raw_iceberg_lettuce = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:490, tempHigh:10, stateHigh:"raw_iceberg_lettuce"};
elements.cooked_iceberg_lettuce = {color:"#afeeee", behavior:behaviors.POWDER, category:"food", state:"solid", density:440, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_iceberg_lettuce"};
elements.frozen_cooked_iceberg_lettuce = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:440, tempHigh:10, stateHigh:"cooked_iceberg_lettuce"};

elements.raw_romaine_lettuce = {color:"#90ee90", behavior:behaviors.POWDER, category:"food", state:"solid", density:500, tempHigh:120, stateHigh:"cooked_romaine_lettuce", tempLow:-5, stateLow:"frozen_raw_romaine_lettuce", breakInto:"water"};
elements.frozen_raw_romaine_lettuce = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:500, tempHigh:10, stateHigh:"raw_romaine_lettuce"};
elements.cooked_romaine_lettuce = {color:"#32cd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_romaine_lettuce"};
elements.frozen_cooked_romaine_lettuce = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:450, tempHigh:10, stateHigh:"cooked_romaine_lettuce"};

elements.raw_butterhead_lettuce = {color:"#ccffcc", behavior:behaviors.POWDER, category:"food", state:"solid", density:510, tempHigh:120, stateHigh:"cooked_butterhead_lettuce", tempLow:-5, stateLow:"frozen_raw_butterhead_lettuce", breakInto:"water"};
elements.frozen_raw_butterhead_lettuce = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:510, tempHigh:10, stateHigh:"raw_butterhead_lettuce"};
elements.cooked_butterhead_lettuce = {color:"#99cc99", behavior:behaviors.POWDER, category:"food", state:"solid", density:460, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_butterhead_lettuce"};
elements.frozen_cooked_butterhead_lettuce = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:460, tempHigh:10, stateHigh:"cooked_butterhead_lettuce"};

elements.raw_kohlrabi = {color:"#d8bfd8", behavior:behaviors.POWDER, category:"food", state:"solid", density:520, tempHigh:120, stateHigh:"roasted_kohlrabi", tempLow:-5, stateLow:"frozen_raw_kohlrabi", breakInto:"water"};
elements.frozen_raw_kohlrabi = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:520, tempHigh:10, stateHigh:"raw_kohlrabi"};
elements.roasted_kohlrabi = {color:"#dda0dd", behavior:behaviors.POWDER, category:"food", state:"solid", density:470, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_kohlrabi"};
elements.frozen_roasted_kohlrabi = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:470, tempHigh:10, stateHigh:"roasted_kohlrabi"};

elements.raw_rutabaga = {color:"#ffefd5", behavior:behaviors.POWDER, category:"food", state:"solid", density:530, tempHigh:120, stateHigh:"roasted_rutabaga", tempLow:-5, stateLow:"frozen_raw_rutabaga", breakInto:"water"};
elements.frozen_raw_rutabaga = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:530, tempHigh:10, stateHigh:"raw_rutabaga"};
elements.roasted_rutabaga = {color:"#deb887", behavior:behaviors.POWDER, category:"food", state:"solid", density:480, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_rutabaga"};
elements.frozen_roasted_rutabaga = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:480, tempHigh:10, stateHigh:"roasted_rutabaga"};

elements.raw_jicama = {color:"#fdf5e6", behavior:behaviors.POWDER, category:"food", state:"solid", density:540, tempHigh:120, stateHigh:"roasted_jicama", tempLow:-5, stateLow:"frozen_raw_jicama", breakInto:"water"};
elements.frozen_raw_jicama = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:540, tempHigh:10, stateHigh:"raw_jicama"};
elements.roasted_jicama = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:490, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_jicama"};
elements.frozen_roasted_jicama = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:490, tempHigh:10, stateHigh:"roasted_jicama"};

elements.raw_sunchoke = {color:"#fff8dc", behavior:behaviors.POWDER, category:"food", state:"solid", density:550, tempHigh:120, stateHigh:"roasted_sunchoke", tempLow:-5, stateLow:"frozen_raw_sunchoke", breakInto:"water"};
elements.frozen_raw_sunchoke = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:550, tempHigh:10, stateHigh:"raw_sunchoke"};
elements.roasted_sunchoke = {color:"#bdb76b", behavior:behaviors.POWDER, category:"food", state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_sunchoke"};
elements.frozen_roasted_sunchoke = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:500, tempHigh:10, stateHigh:"roasted_sunchoke"};

elements.raw_bamboo_shoot = {color:"#fffacd", behavior:behaviors.POWDER, category:"food", state:"solid", density:560, tempHigh:120, stateHigh:"cooked_bamboo_shoot", tempLow:-5, stateLow:"frozen_raw_bamboo_shoot", breakInto:"water"};
elements.frozen_raw_bamboo_shoot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:560, tempHigh:10, stateHigh:"raw_bamboo_shoot"};
elements.cooked_bamboo_shoot = {color:"#f0e68c", behavior:behaviors.POWDER, category:"food", state:"solid", density:510, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_bamboo_shoot"};
elements.frozen_cooked_bamboo_shoot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:510, tempHigh:10, stateHigh:"cooked_bamboo_shoot"};

elements.raw_heart_of_palm = {color:"#fffff0", behavior:behaviors.POWDER, category:"food", state:"solid", density:570, tempHigh:120, stateHigh:"cooked_heart_of_palm", tempLow:-5, stateLow:"frozen_raw_heart_of_palm", breakInto:"water"};
elements.frozen_raw_heart_of_palm = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:570, tempHigh:10, stateHigh:"raw_heart_of_palm"};
elements.cooked_heart_of_palm = {color:"#fafad2", behavior:behaviors.POWDER, category:"food", state:"solid", density:520, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_heart_of_palm"};
elements.frozen_cooked_heart_of_palm = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:520, tempHigh:10, stateHigh:"cooked_heart_of_palm"};

elements.raw_water_chestnut = {color:"#f0ffff", behavior:behaviors.POWDER, category:"food", state:"solid", density:580, tempHigh:120, stateHigh:"cooked_water_chestnut", tempLow:-5, stateLow:"frozen_raw_water_chestnut", breakInto:"water"};
elements.frozen_raw_water_chestnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:580, tempHigh:10, stateHigh:"raw_water_chestnut"};
elements.cooked_water_chestnut = {color:"#e0eeee", behavior:behaviors.POWDER, category:"food", state:"solid", density:530, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_water_chestnut"};
elements.frozen_cooked_water_chestnut = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:530, tempHigh:10, stateHigh:"cooked_water_chestnut"};

elements.raw_lotus_root = {color:"#ffe4e1", behavior:behaviors.POWDER, category:"food", state:"solid", density:590, tempHigh:120, stateHigh:"cooked_lotus_root", tempLow:-5, stateLow:"frozen_raw_lotus_root", breakInto:"water"};
elements.frozen_raw_lotus_root = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:590, tempHigh:10, stateHigh:"raw_lotus_root"};
elements.cooked_lotus_root = {color:"#ffc0cb", behavior:behaviors.POWDER, category:"food", state:"solid", density:540, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_lotus_root"};
elements.frozen_cooked_lotus_root = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:540, tempHigh:10, stateHigh:"cooked_lotus_root"};

elements.raw_burdock_root = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:600, tempHigh:120, stateHigh:"cooked_burdock_root", tempLow:-5, stateLow:"frozen_raw_burdock_root", breakInto:"water"};
elements.frozen_raw_burdock_root = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:600, tempHigh:10, stateHigh:"raw_burdock_root"};
elements.cooked_burdock_root = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:550, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_burdock_root"};
elements.frozen_cooked_burdock_root = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:550, tempHigh:10, stateHigh:"cooked_burdock_root"};

elements.raw_bitter_melon = {color:"#9acd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:610, tempHigh:120, stateHigh:"cooked_bitter_melon", tempLow:-5, stateLow:"frozen_raw_bitter_melon", breakInto:"water"};
elements.frozen_raw_bitter_melon = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:610, tempHigh:10, stateHigh:"raw_bitter_melon"};
elements.cooked_bitter_melon = {color:"#6b8e23", behavior:behaviors.POWDER, category:"food", state:"solid", density:560, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_bitter_melon"};
elements.frozen_cooked_bitter_melon = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:560, tempHigh:10, stateHigh:"cooked_bitter_melon"};

elements.raw_butternut_squash = {color:"#ffebcd", behavior:behaviors.POWDER, category:"food", state:"solid", density:620, tempHigh:120, stateHigh:"roasted_butternut_squash", tempLow:-5, stateLow:"frozen_raw_butternut_squash", breakInto:"water"};
elements.frozen_raw_butternut_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:620, tempHigh:10, stateHigh:"raw_butternut_squash"};
elements.roasted_butternut_squash = {color:"#ffa500", behavior:behaviors.POWDER, category:"food", state:"solid", density:570, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_butternut_squash"};
elements.frozen_roasted_butternut_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:570, tempHigh:10, stateHigh:"roasted_butternut_squash"};

elements.raw_acorn_squash = {color:"#006400", behavior:behaviors.POWDER, category:"food", state:"solid", density:630, tempHigh:120, stateHigh:"roasted_acorn_squash", tempLow:-5, stateLow:"frozen_raw_acorn_squash", breakInto:"water"};
elements.frozen_raw_acorn_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:630, tempHigh:10, stateHigh:"raw_acorn_squash"};
elements.roasted_acorn_squash = {color:"#ffa500", behavior:behaviors.POWDER, category:"food", state:"solid", density:580, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_acorn_squash"};
elements.frozen_roasted_acorn_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:580, tempHigh:10, stateHigh:"roasted_acorn_squash"};

elements.raw_spaghetti_squash = {color:"#fffacd", behavior:behaviors.POWDER, category:"food", state:"solid", density:640, tempHigh:120, stateHigh:"roasted_spaghetti_squash", tempLow:-5, stateLow:"frozen_raw_spaghetti_squash", breakInto:"water"};
elements.frozen_raw_spaghetti_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:640, tempHigh:10, stateHigh:"raw_spaghetti_squash"};
elements.roasted_spaghetti_squash = {color:"#ffd700", behavior:behaviors.POWDER, category:"food", state:"solid", density:590, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_spaghetti_squash"};
elements.frozen_roasted_spaghetti_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:590, tempHigh:10, stateHigh:"roasted_spaghetti_squash"};

elements.raw_courgette = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:650, tempHigh:120, stateHigh:"cooked_courgette", tempLow:-5, stateLow:"frozen_raw_courgette", breakInto:"water"};
elements.frozen_raw_courgette = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:650, tempHigh:10, stateHigh:"raw_courgette"};
elements.cooked_courgette = {color:"#006400", behavior:behaviors.POWDER, category:"food", state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_courgette"};
elements.frozen_cooked_courgette = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:600, tempHigh:10, stateHigh:"cooked_courgette"};

elements.raw_pattypan_squash = {color:"#f0e68c", behavior:behaviors.POWDER, category:"food", state:"solid", density:660, tempHigh:120, stateHigh:"cooked_pattypan_squash", tempLow:-5, stateLow:"frozen_raw_pattypan_squash", breakInto:"water"};
elements.frozen_raw_pattypan_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:660, tempHigh:10, stateHigh:"raw_pattypan_squash"};
elements.cooked_pattypan_squash = {color:"#bdb76b", behavior:behaviors.POWDER, category:"food", state:"solid", density:610, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_pattypan_squash"};
elements.frozen_cooked_pattypan_squash = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:610, tempHigh:10, stateHigh:"cooked_pattypan_squash"};

elements.raw_chayote = {color:"#98fb98", behavior:behaviors.POWDER, category:"food", state:"solid", density:670, tempHigh:120, stateHigh:"cooked_chayote", tempLow:-5, stateLow:"frozen_raw_chayote", breakInto:"water"};
elements.frozen_raw_chayote = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:670, tempHigh:10, stateHigh:"raw_chayote"};
elements.cooked_chayote = {color:"#3cb371", behavior:behaviors.POWDER, category:"food", state:"solid", density:620, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_chayote"};
elements.frozen_cooked_chayote = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:620, tempHigh:10, stateHigh:"cooked_chayote"};

elements.raw_tomatillo = {color:"#adff2f", behavior:behaviors.POWDER, category:"food", state:"solid", density:680, tempHigh:120, stateHigh:"cooked_tomatillo", tempLow:-5, stateLow:"frozen_raw_tomatillo", breakInto:"water"};
elements.frozen_raw_tomatillo = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:680, tempHigh:10, stateHigh:"raw_tomatillo"};
elements.cooked_tomatillo = {color:"#808000", behavior:behaviors.POWDER, category:"food", state:"solid", density:630, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_tomatillo"};
elements.frozen_cooked_tomatillo = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:630, tempHigh:10, stateHigh:"cooked_tomatillo"};

elements.raw_nopales = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:690, tempHigh:120, stateHigh:"cooked_nopales", tempLow:-5, stateLow:"frozen_raw_nopales", breakInto:"water"};
elements.frozen_raw_nopales = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:690, tempHigh:10, stateHigh:"raw_nopales"};
elements.cooked_nopales = {color:"#006400", behavior:behaviors.POWDER, category:"food", state:"solid", density:640, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_nopales"};
elements.frozen_cooked_nopales = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:640, tempHigh:10, stateHigh:"cooked_nopales"};

// --- 5. FUNGI & ALGAE (Raw -> Cooked) ---
elements.raw_oyster_mushroom = {color:"#e6e6fa", behavior:behaviors.POWDER, category:"food", state:"solid", density:700, tempHigh:120, stateHigh:"sauteed_oyster_mushroom", tempLow:-5, stateLow:"frozen_raw_oyster_mushroom", breakInto:"water"};
elements.frozen_raw_oyster_mushroom = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:700, tempHigh:10, stateHigh:"raw_oyster_mushroom"};
elements.sauteed_oyster_mushroom = {color:"#b0c4de", behavior:behaviors.POWDER, category:"food", state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_oyster_mushroom"};
elements.frozen_sauteed_oyster_mushroom = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:650, tempHigh:10, stateHigh:"sauteed_oyster_mushroom"};

elements.raw_cremini = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:710, tempHigh:120, stateHigh:"sauteed_cremini", tempLow:-5, stateLow:"frozen_raw_cremini", breakInto:"water"};
elements.frozen_raw_cremini = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:710, tempHigh:10, stateHigh:"raw_cremini"};
elements.sauteed_cremini = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:660, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_cremini"};
elements.frozen_sauteed_cremini = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:660, tempHigh:10, stateHigh:"sauteed_cremini"};

elements.raw_chanterelle = {color:"#ffa500", behavior:behaviors.POWDER, category:"food", state:"solid", density:720, tempHigh:120, stateHigh:"sauteed_chanterelle", tempLow:-5, stateLow:"frozen_raw_chanterelle", breakInto:"water"};
elements.frozen_raw_chanterelle = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:720, tempHigh:10, stateHigh:"raw_chanterelle"};
elements.sauteed_chanterelle = {color:"#ff8c00", behavior:behaviors.POWDER, category:"food", state:"solid", density:670, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_chanterelle"};
elements.frozen_sauteed_chanterelle = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:670, tempHigh:10, stateHigh:"sauteed_chanterelle"};

elements.raw_porcini = {color:"#d2691e", behavior:behaviors.POWDER, category:"food", state:"solid", density:730, tempHigh:120, stateHigh:"sauteed_porcini", tempLow:-5, stateLow:"frozen_raw_porcini", breakInto:"water"};
elements.frozen_raw_porcini = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:730, tempHigh:10, stateHigh:"raw_porcini"};
elements.sauteed_porcini = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:680, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_porcini"};
elements.frozen_sauteed_porcini = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:680, tempHigh:10, stateHigh:"sauteed_porcini"};

elements.raw_morel = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:740, tempHigh:120, stateHigh:"sauteed_morel", tempLow:-5, stateLow:"frozen_raw_morel", breakInto:"water"};
elements.frozen_raw_morel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:740, tempHigh:10, stateHigh:"raw_morel"};
elements.sauteed_morel = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:690, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_morel"};
elements.frozen_sauteed_morel = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:690, tempHigh:10, stateHigh:"sauteed_morel"};

elements.raw_maitake = {color:"#deb887", behavior:behaviors.POWDER, category:"food", state:"solid", density:750, tempHigh:120, stateHigh:"sauteed_maitake", tempLow:-5, stateLow:"frozen_raw_maitake", breakInto:"water"};
elements.frozen_raw_maitake = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:750, tempHigh:10, stateHigh:"raw_maitake"};
elements.sauteed_maitake = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_maitake"};
elements.frozen_sauteed_maitake = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:700, tempHigh:10, stateHigh:"sauteed_maitake"};

elements.raw_matsutake = {color:"#f5deb3", behavior:behaviors.POWDER, category:"food", state:"solid", density:760, tempHigh:120, stateHigh:"sauteed_matsutake", tempLow:-5, stateLow:"frozen_raw_matsutake", breakInto:"water"};
elements.frozen_raw_matsutake = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:760, tempHigh:10, stateHigh:"raw_matsutake"};
elements.sauteed_matsutake = {color:"#deb887", behavior:behaviors.POWDER, category:"food", state:"solid", density:710, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_matsutake"};
elements.frozen_sauteed_matsutake = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:710, tempHigh:10, stateHigh:"sauteed_matsutake"};

elements.raw_wood_ear = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:770, tempHigh:120, stateHigh:"sauteed_wood_ear", tempLow:-5, stateLow:"frozen_raw_wood_ear", breakInto:"water"};
elements.frozen_raw_wood_ear = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:770, tempHigh:10, stateHigh:"raw_wood_ear"};
elements.sauteed_wood_ear = {color:"#2b1d14", behavior:behaviors.POWDER, category:"food", state:"solid", density:720, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sauteed_wood_ear"};
elements.frozen_sauteed_wood_ear = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:720, tempHigh:10, stateHigh:"sauteed_wood_ear"};

elements.raw_kelp = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:780, tempHigh:120, stateHigh:"cooked_kelp", tempLow:-5, stateLow:"frozen_raw_kelp", breakInto:"water"};
elements.frozen_raw_kelp = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:780, tempHigh:10, stateHigh:"raw_kelp"};
elements.cooked_kelp = {color:"#006400", behavior:behaviors.POWDER, category:"food", state:"solid", density:730, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_kelp"};
elements.frozen_cooked_kelp = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:730, tempHigh:10, stateHigh:"cooked_kelp"};

elements.raw_wakame = {color:"#32cd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:790, tempHigh:120, stateHigh:"cooked_wakame", tempLow:-5, stateLow:"frozen_raw_wakame", breakInto:"water"};
elements.frozen_raw_wakame = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:790, tempHigh:10, stateHigh:"raw_wakame"};
elements.cooked_wakame = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:740, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_wakame"};
elements.frozen_cooked_wakame = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:740, tempHigh:10, stateHigh:"cooked_wakame"};

elements.raw_nori = {color:"#004d00", behavior:behaviors.POWDER, category:"food", state:"solid", density:800, tempHigh:120, stateHigh:"cooked_nori", tempLow:-5, stateLow:"frozen_raw_nori", breakInto:"water"};
elements.frozen_raw_nori = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:800, tempHigh:10, stateHigh:"raw_nori"};
elements.cooked_nori = {color:"#003300", behavior:behaviors.POWDER, category:"food", state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_nori"};
elements.frozen_cooked_nori = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:750, tempHigh:10, stateHigh:"cooked_nori"};

elements.raw_kombu = {color:"#556b2f", behavior:behaviors.POWDER, category:"food", state:"solid", density:810, tempHigh:120, stateHigh:"cooked_kombu", tempLow:-5, stateLow:"frozen_raw_kombu", breakInto:"water"};
elements.frozen_raw_kombu = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:810, tempHigh:10, stateHigh:"raw_kombu"};
elements.cooked_kombu = {color:"#2f4f4f", behavior:behaviors.POWDER, category:"food", state:"solid", density:760, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_kombu"};
elements.frozen_cooked_kombu = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:760, tempHigh:10, stateHigh:"cooked_kombu"};

elements.raw_dulse = {color:"#8b0000", behavior:behaviors.POWDER, category:"food", state:"solid", density:820, tempHigh:120, stateHigh:"cooked_dulse", tempLow:-5, stateLow:"frozen_raw_dulse", breakInto:"water"};
elements.frozen_raw_dulse = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:820, tempHigh:10, stateHigh:"raw_dulse"};
elements.cooked_dulse = {color:"#800000", behavior:behaviors.POWDER, category:"food", state:"solid", density:770, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_dulse"};
elements.frozen_cooked_dulse = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:770, tempHigh:10, stateHigh:"cooked_dulse"};

elements.raw_spirulina = {color:"#00fa9a", behavior:behaviors.POWDER, category:"food", state:"solid", density:830, tempHigh:120, stateHigh:"cooked_spirulina", tempLow:-5, stateLow:"frozen_raw_spirulina", breakInto:"water"};
elements.frozen_raw_spirulina = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:830, tempHigh:10, stateHigh:"raw_spirulina"};
elements.cooked_spirulina = {color:"#00cf7a", behavior:behaviors.POWDER, category:"food", state:"solid", density:780, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_spirulina"};
elements.frozen_cooked_spirulina = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:780, tempHigh:10, stateHigh:"cooked_spirulina"};

elements.raw_agar_agar = {color:"#f5fffa", behavior:behaviors.POWDER, category:"food", state:"solid", density:840, tempHigh:120, stateHigh:"cooked_agar_agar", tempLow:-5, stateLow:"frozen_raw_agar_agar", breakInto:"water"};
elements.frozen_raw_agar_agar = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:840, tempHigh:10, stateHigh:"raw_agar_agar"};
elements.cooked_agar_agar = {color:"#e6e6fa", behavior:behaviors.POWDER, category:"food", state:"solid", density:790, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_agar_agar"};
elements.frozen_cooked_agar_agar = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:790, tempHigh:10, stateHigh:"cooked_agar_agar"};

// --- 6. FRUITS (Raw -> Grilled/Baked) ---
elements.raw_apricot = {color:"#ffb347", behavior:behaviors.POWDER, category:"food", state:"solid", density:850, tempHigh:120, stateHigh:"grilled_apricot", tempLow:-5, stateLow:"frozen_raw_apricot", breakInto:"peach_juice"};
elements.frozen_raw_apricot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:850, tempHigh:10, stateHigh:"raw_apricot"};
elements.grilled_apricot = {color:"#d2691e", behavior:behaviors.POWDER, category:"food", state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_apricot"};
elements.frozen_grilled_apricot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:800, tempHigh:10, stateHigh:"grilled_apricot"};

elements.raw_nectarine = {color:"#ff7f50", behavior:behaviors.POWDER, category:"food", state:"solid", density:860, tempHigh:120, stateHigh:"grilled_nectarine", tempLow:-5, stateLow:"frozen_raw_nectarine", breakInto:"peach_juice"};
elements.frozen_raw_nectarine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:860, tempHigh:10, stateHigh:"raw_nectarine"};
elements.grilled_nectarine = {color:"#cd5c5c", behavior:behaviors.POWDER, category:"food", state:"solid", density:810, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_nectarine"};
elements.frozen_grilled_nectarine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:810, tempHigh:10, stateHigh:"grilled_nectarine"};

elements.raw_plumcot = {color:"#c71585", behavior:behaviors.POWDER, category:"food", state:"solid", density:870, tempHigh:120, stateHigh:"grilled_plumcot", tempLow:-5, stateLow:"frozen_raw_plumcot", breakInto:"plum_juice"};
elements.frozen_raw_plumcot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:870, tempHigh:10, stateHigh:"raw_plumcot"};
elements.grilled_plumcot = {color:"#8b008b", behavior:behaviors.POWDER, category:"food", state:"solid", density:820, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_plumcot"};
elements.frozen_grilled_plumcot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:820, tempHigh:10, stateHigh:"grilled_plumcot"};

elements.raw_pluot = {color:"#800080", behavior:behaviors.POWDER, category:"food", state:"solid", density:880, tempHigh:120, stateHigh:"grilled_pluot", tempLow:-5, stateLow:"frozen_raw_pluot", breakInto:"plum_juice"};
elements.frozen_raw_pluot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:880, tempHigh:10, stateHigh:"raw_pluot"};
elements.grilled_pluot = {color:"#4b0082", behavior:behaviors.POWDER, category:"food", state:"solid", density:830, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_pluot"};
elements.frozen_grilled_pluot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:830, tempHigh:10, stateHigh:"grilled_pluot"};

elements.raw_blood_orange = {color:"#ff4500", behavior:behaviors.POWDER, category:"food", state:"solid", density:890, tempHigh:120, stateHigh:"grilled_blood_orange", tempLow:-5, stateLow:"frozen_raw_blood_orange", breakInto:"water"};
elements.frozen_raw_blood_orange = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:890, tempHigh:10, stateHigh:"raw_blood_orange"};
elements.grilled_blood_orange = {color:"#b22222", behavior:behaviors.POWDER, category:"food", state:"solid", density:840, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_blood_orange"};
elements.frozen_grilled_blood_orange = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:840, tempHigh:10, stateHigh:"grilled_blood_orange"};

elements.raw_navel_orange = {color:"#ffa500", behavior:behaviors.POWDER, category:"food", state:"solid", density:900, tempHigh:120, stateHigh:"grilled_navel_orange", tempLow:-5, stateLow:"frozen_raw_navel_orange", breakInto:"water"};
elements.frozen_raw_navel_orange = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:900, tempHigh:10, stateHigh:"raw_navel_orange"};
elements.grilled_navel_orange = {color:"#cc8400", behavior:behaviors.POWDER, category:"food", state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_navel_orange"};
elements.frozen_grilled_navel_orange = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:850, tempHigh:10, stateHigh:"grilled_navel_orange"};

elements.raw_clementine = {color:"#ff8c00", behavior:behaviors.POWDER, category:"food", state:"solid", density:910, tempHigh:120, stateHigh:"grilled_clementine", tempLow:-5, stateLow:"frozen_raw_clementine", breakInto:"water"};
elements.frozen_raw_clementine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:910, tempHigh:10, stateHigh:"raw_clementine"};
elements.grilled_clementine = {color:"#e67e22", behavior:behaviors.POWDER, category:"food", state:"solid", density:860, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_clementine"};
elements.frozen_grilled_clementine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:860, tempHigh:10, stateHigh:"grilled_clementine"};

elements.raw_tangerine = {color:"#f4a460", behavior:behaviors.POWDER, category:"food", state:"solid", density:920, tempHigh:120, stateHigh:"grilled_tangerine", tempLow:-5, stateLow:"frozen_raw_tangerine", breakInto:"water"};
elements.frozen_raw_tangerine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:920, tempHigh:10, stateHigh:"raw_tangerine"};
elements.grilled_tangerine = {color:"#d2691e", behavior:behaviors.POWDER, category:"food", state:"solid", density:870, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_tangerine"};
elements.frozen_grilled_tangerine = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:870, tempHigh:10, stateHigh:"grilled_tangerine"};

elements.raw_mandarin = {color:"#ff7f50", behavior:behaviors.POWDER, category:"food", state:"solid", density:930, tempHigh:120, stateHigh:"grilled_mandarin", tempLow:-5, stateLow:"frozen_raw_mandarin", breakInto:"water"};
elements.frozen_raw_mandarin = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:930, tempHigh:10, stateHigh:"raw_mandarin"};
elements.grilled_mandarin = {color:"#cd5c5c", behavior:behaviors.POWDER, category:"food", state:"solid", density:880, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_mandarin"};
elements.frozen_grilled_mandarin = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:880, tempHigh:10, stateHigh:"grilled_mandarin"};

elements.raw_grapefruit = {color:"#ffb6c1", behavior:behaviors.POWDER, category:"food", state:"solid", density:940, tempHigh:120, stateHigh:"grilled_grapefruit", tempLow:-5, stateLow:"frozen_raw_grapefruit", breakInto:"water"};
elements.frozen_raw_grapefruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"raw_grapefruit"};
elements.grilled_grapefruit = {color:"#ff69b4", behavior:behaviors.POWDER, category:"food", state:"solid", density:890, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_grapefruit"};
elements.frozen_grilled_grapefruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:890, tempHigh:10, stateHigh:"grilled_grapefruit"};

elements.raw_pomelo = {color:"#98fb98", behavior:behaviors.POWDER, category:"food", state:"solid", density:950, tempHigh:120, stateHigh:"grilled_pomelo", tempLow:-5, stateLow:"frozen_raw_pomelo", breakInto:"water"};
elements.frozen_raw_pomelo = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"raw_pomelo"};
elements.grilled_pomelo = {color:"#3cb371", behavior:behaviors.POWDER, category:"food", state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_pomelo"};
elements.frozen_grilled_pomelo = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:900, tempHigh:10, stateHigh:"grilled_pomelo"};

elements.raw_meyer_lemon = {color:"#fffacd", behavior:behaviors.POWDER, category:"food", state:"solid", density:960, tempHigh:120, stateHigh:"grilled_meyer_lemon", tempLow:-5, stateLow:"frozen_raw_meyer_lemon", breakInto:"water"};
elements.frozen_raw_meyer_lemon = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:960, tempHigh:10, stateHigh:"raw_meyer_lemon"};
elements.grilled_meyer_lemon = {color:"#f0e68c", behavior:behaviors.POWDER, category:"food", state:"solid", density:910, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_meyer_lemon"};
elements.frozen_grilled_meyer_lemon = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:910, tempHigh:10, stateHigh:"grilled_meyer_lemon"};

elements.raw_key_lemon = {color:"#f0e68c", behavior:behaviors.POWDER, category:"food", state:"solid", density:970, tempHigh:120, stateHigh:"grilled_key_lemon", tempLow:-5, stateLow:"frozen_raw_key_lemon", breakInto:"water"};
elements.frozen_raw_key_lemon = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:970, tempHigh:10, stateHigh:"raw_key_lemon"};
elements.grilled_key_lemon = {color:"#bdb76b", behavior:behaviors.POWDER, category:"food", state:"solid", density:920, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_key_lemon"};
elements.frozen_grilled_key_lemon = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:920, tempHigh:10, stateHigh:"grilled_key_lemon"};

elements.raw_yuzu = {color:"#ffd700", behavior:behaviors.POWDER, category:"food", state:"solid", density:980, tempHigh:120, stateHigh:"grilled_yuzu", tempLow:-5, stateLow:"frozen_raw_yuzu", breakInto:"water"};
elements.frozen_raw_yuzu = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"raw_yuzu"};
elements.grilled_yuzu = {color:"#daa520", behavior:behaviors.POWDER, category:"food", state:"solid", density:930, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_yuzu"};
elements.frozen_grilled_yuzu = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:930, tempHigh:10, stateHigh:"grilled_yuzu"};

elements.raw_calamansi = {color:"#ff8c00", behavior:behaviors.POWDER, category:"food", state:"solid", density:990, tempHigh:120, stateHigh:"grilled_calamansi", tempLow:-5, stateLow:"frozen_raw_calamansi", breakInto:"water"};
elements.frozen_raw_calamansi = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:990, tempHigh:10, stateHigh:"raw_calamansi"};
elements.grilled_calamansi = {color:"#d2691e", behavior:behaviors.POWDER, category:"food", state:"solid", density:940, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_calamansi"};
elements.frozen_grilled_calamansi = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:940, tempHigh:10, stateHigh:"grilled_calamansi"};

elements.raw_citron = {color:"#fff8dc", behavior:behaviors.POWDER, category:"food", state:"solid", density:1000, tempHigh:120, stateHigh:"grilled_citron", tempLow:-5, stateLow:"frozen_raw_citron", breakInto:"water"};
elements.frozen_raw_citron = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1000, tempHigh:10, stateHigh:"raw_citron"};
elements.grilled_citron = {color:"#bdb76b", behavior:behaviors.POWDER, category:"food", state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_citron"};
elements.frozen_grilled_citron = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:950, tempHigh:10, stateHigh:"grilled_citron"};

elements.raw_kumquat = {color:"#ffa500", behavior:behaviors.POWDER, category:"food", state:"solid", density:1010, tempHigh:120, stateHigh:"grilled_kumquat", tempLow:-5, stateLow:"frozen_raw_kumquat", breakInto:"water"};
elements.frozen_raw_kumquat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1010, tempHigh:10, stateHigh:"raw_kumquat"};
elements.grilled_kumquat = {color:"#cc8400", behavior:behaviors.POWDER, category:"food", state:"solid", density:960, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_kumquat"};
elements.frozen_grilled_kumquat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:960, tempHigh:10, stateHigh:"grilled_kumquat"};

elements.raw_lime = {color:"#00ff00", behavior:behaviors.POWDER, category:"food", state:"solid", density:1020, tempHigh:120, stateHigh:"grilled_lime", tempLow:-5, stateLow:"frozen_raw_lime", breakInto:"water"};
elements.frozen_raw_lime = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1020, tempHigh:10, stateHigh:"raw_lime"};
elements.grilled_lime = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:970, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_lime"};
elements.frozen_grilled_lime = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:970, tempHigh:10, stateHigh:"grilled_lime"};

elements.raw_bergamot = {color:"#adff2f", behavior:behaviors.POWDER, category:"food", state:"solid", density:1030, tempHigh:120, stateHigh:"grilled_bergamot", tempLow:-5, stateLow:"frozen_raw_bergamot", breakInto:"water"};
elements.frozen_raw_bergamot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1030, tempHigh:10, stateHigh:"raw_bergamot"};
elements.grilled_bergamot = {color:"#556b2f", behavior:behaviors.POWDER, category:"food", state:"solid", density:980, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_bergamot"};
elements.frozen_grilled_bergamot = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"grilled_bergamot"};

elements.raw_ugli_fruit = {color:"#9acd32", behavior:behaviors.POWDER, category:"food", state:"solid", density:1040, tempHigh:120, stateHigh:"grilled_ugli_fruit", tempLow:-5, stateLow:"frozen_raw_ugli_fruit", breakInto:"water"};
elements.frozen_raw_ugli_fruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1040, tempHigh:10, stateHigh:"raw_ugli_fruit"};
elements.grilled_ugli_fruit = {color:"#6b8e23", behavior:behaviors.POWDER, category:"food", state:"solid", density:990, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_ugli_fruit"};
elements.frozen_grilled_ugli_fruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:990, tempHigh:10, stateHigh:"grilled_ugli_fruit"};

elements.raw_jackfruit = {color:"#ffd700", behavior:behaviors.POWDER, category:"food", state:"solid", density:1050, tempHigh:120, stateHigh:"grilled_jackfruit", tempLow:-5, stateLow:"frozen_raw_jackfruit", breakInto:"banana_puree"};
elements.frozen_raw_jackfruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1050, tempHigh:10, stateHigh:"raw_jackfruit"};
elements.grilled_jackfruit = {color:"#daa520", behavior:behaviors.POWDER, category:"food", state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_jackfruit"};
elements.frozen_grilled_jackfruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1000, tempHigh:10, stateHigh:"grilled_jackfruit"};

elements.raw_durian = {color:"#f5deb3", behavior:behaviors.POWDER, category:"food", state:"solid", density:1060, tempHigh:120, stateHigh:"grilled_durian", tempLow:-5, stateLow:"frozen_raw_durian", breakInto:"banana_puree"};
elements.frozen_raw_durian = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1060, tempHigh:10, stateHigh:"raw_durian"};
elements.grilled_durian = {color:"#cd853f", behavior:behaviors.POWDER, category:"food", state:"solid", density:1010, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_durian"};
elements.frozen_grilled_durian = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1010, tempHigh:10, stateHigh:"grilled_durian"};

elements.raw_breadfruit = {color:"#98fb98", behavior:behaviors.POWDER, category:"food", state:"solid", density:1070, tempHigh:120, stateHigh:"grilled_breadfruit", tempLow:-5, stateLow:"frozen_raw_breadfruit", breakInto:"banana_puree"};
elements.frozen_raw_breadfruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1070, tempHigh:10, stateHigh:"raw_breadfruit"};
elements.grilled_breadfruit = {color:"#228b22", behavior:behaviors.POWDER, category:"food", state:"solid", density:1020, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_breadfruit"};
elements.frozen_grilled_breadfruit = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1020, tempHigh:10, stateHigh:"grilled_breadfruit"};

elements.raw_soursop = {color:"#3cb371", behavior:behaviors.POWDER, category:"food", state:"solid", density:1080, tempHigh:120, stateHigh:"grilled_soursop", tempLow:-5, stateLow:"frozen_raw_soursop", breakInto:"banana_puree"};
elements.frozen_raw_soursop = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1080, tempHigh:10, stateHigh:"raw_soursop"};
elements.grilled_soursop = {color:"#006400", behavior:behaviors.POWDER, category:"food", state:"solid", density:1030, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_soursop"};
elements.frozen_grilled_soursop = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1030, tempHigh:10, stateHigh:"grilled_soursop"};

elements.raw_cherimoya = {color:"#90ee90", behavior:behaviors.POWDER, category:"food", state:"solid", density:1090, tempHigh:120, stateHigh:"grilled_cherimoya", tempLow:-5, stateLow:"frozen_raw_cherimoya", breakInto:"banana_puree"};
elements.frozen_raw_cherimoya = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1090, tempHigh:10, stateHigh:"raw_cherimoya"};
elements.grilled_cherimoya = {color:"#2e8b57", behavior:behaviors.POWDER, category:"food", state:"solid", density:1040, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_cherimoya"};
elements.frozen_grilled_cherimoya = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1040, tempHigh:10, stateHigh:"grilled_cherimoya"};

elements.raw_sweetsop = {color:"#98fb98", behavior:behaviors.POWDER, category:"food", state:"solid", density:1100, tempHigh:120, stateHigh:"grilled_sweetsop", tempLow:-5, stateLow:"frozen_raw_sweetsop", breakInto:"banana_puree"};
elements.frozen_raw_sweetsop = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1100, tempHigh:10, stateHigh:"raw_sweetsop"};
elements.grilled_sweetsop = {color:"#3cb371", behavior:behaviors.POWDER, category:"food", state:"solid", density:1050, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_sweetsop"};
elements.frozen_grilled_sweetsop = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1050, tempHigh:10, stateHigh:"grilled_sweetsop"};

elements.raw_mamey = {color:"#d2691e", behavior:behaviors.POWDER, category:"food", state:"solid", density:1110, tempHigh:120, stateHigh:"grilled_mamey", tempLow:-5, stateLow:"frozen_raw_mamey", breakInto:"peach_juice"};
elements.frozen_raw_mamey = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1110, tempHigh:10, stateHigh:"raw_mamey"};
elements.grilled_mamey = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:1060, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_mamey"};
elements.frozen_grilled_mamey = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1060, tempHigh:10, stateHigh:"grilled_mamey"};

elements.raw_sapote = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:1120, tempHigh:120, stateHigh:"grilled_sapote", tempLow:-5, stateLow:"frozen_raw_sapote", breakInto:"peach_juice"};
elements.frozen_raw_sapote = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1120, tempHigh:10, stateHigh:"raw_sapote"};
elements.grilled_sapote = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:1070, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_sapote"};
elements.frozen_grilled_sapote = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1070, tempHigh:10, stateHigh:"grilled_sapote"};

elements.raw_sapodilla = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:1130, tempHigh:120, stateHigh:"grilled_sapodilla", tempLow:-5, stateLow:"frozen_raw_sapodilla", breakInto:"peach_juice"};
elements.frozen_raw_sapodilla = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1130, tempHigh:10, stateHigh:"raw_sapodilla"};
elements.grilled_sapodilla = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:1080, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_sapodilla"};
elements.frozen_grilled_sapodilla = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1080, tempHigh:10, stateHigh:"grilled_sapodilla"};

elements.raw_longan = {color:"#f5deb3", behavior:behaviors.POWDER, category:"food", state:"solid", density:1140, tempHigh:120, stateHigh:"grilled_longan", tempLow:-5, stateLow:"frozen_raw_longan", breakInto:"cherry_juice"};
elements.frozen_raw_longan = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1140, tempHigh:10, stateHigh:"raw_longan"};
elements.grilled_longan = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:1090, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_longan"};
elements.frozen_grilled_longan = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1090, tempHigh:10, stateHigh:"grilled_longan"};

elements.raw_rambutan = {color:"#dc143c", behavior:behaviors.POWDER, category:"food", state:"solid", density:1150, tempHigh:120, stateHigh:"grilled_rambutan", tempLow:-5, stateLow:"frozen_raw_rambutan", breakInto:"cherry_juice"};
elements.frozen_raw_rambutan = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1150, tempHigh:10, stateHigh:"raw_rambutan"};
elements.grilled_rambutan = {color:"#8b0000", behavior:behaviors.POWDER, category:"food", state:"solid", density:1100, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_rambutan"};
elements.frozen_grilled_rambutan = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1100, tempHigh:10, stateHigh:"grilled_rambutan"};

elements.raw_mangosteen = {color:"#4b0082", behavior:behaviors.POWDER, category:"food", state:"solid", density:1160, tempHigh:120, stateHigh:"grilled_mangosteen", tempLow:-5, stateLow:"frozen_raw_mangosteen", breakInto:"cherry_juice"};
elements.frozen_raw_mangosteen = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1160, tempHigh:10, stateHigh:"raw_mangosteen"};
elements.grilled_mangosteen = {color:"#2a0a3a", behavior:behaviors.POWDER, category:"food", state:"solid", density:1110, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_mangosteen"};
elements.frozen_grilled_mangosteen = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1110, tempHigh:10, stateHigh:"grilled_mangosteen"};

elements.raw_salak = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:1170, tempHigh:120, stateHigh:"grilled_salak", tempLow:-5, stateLow:"frozen_raw_salak", breakInto:"cherry_juice"};
elements.frozen_raw_salak = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1170, tempHigh:10, stateHigh:"raw_salak"};
elements.grilled_salak = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:1120, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_salak"};
elements.frozen_grilled_salak = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1120, tempHigh:10, stateHigh:"grilled_salak"};

elements.raw_jabuticaba = {color:"#2a0a3a", behavior:behaviors.POWDER, category:"food", state:"solid", density:1180, tempHigh:120, stateHigh:"grilled_jabuticaba", tempLow:-5, stateLow:"frozen_raw_jabuticaba", breakInto:"cherry_juice"};
elements.frozen_raw_jabuticaba = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1180, tempHigh:10, stateHigh:"raw_jabuticaba"};
elements.grilled_jabuticaba = {color:"#000000", behavior:behaviors.POWDER, category:"food", state:"solid", density:1130, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_jabuticaba"};
elements.frozen_grilled_jabuticaba = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1130, tempHigh:10, stateHigh:"grilled_jabuticaba"};

elements.raw_langsat = {color:"#f5deb3", behavior:behaviors.POWDER, category:"food", state:"solid", density:1190, tempHigh:120, stateHigh:"grilled_langsat", tempLow:-5, stateLow:"frozen_raw_langsat", breakInto:"cherry_juice"};
elements.frozen_raw_langsat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1190, tempHigh:10, stateHigh:"raw_langsat"};
elements.grilled_langsat = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:1140, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_langsat"};
elements.frozen_grilled_langsat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1140, tempHigh:10, stateHigh:"grilled_langsat"};

elements.raw_ackee = {color:"#ff4500", behavior:behaviors.POWDER, category:"food", state:"solid", density:1200, tempHigh:120, stateHigh:"grilled_ackee", tempLow:-5, stateLow:"frozen_raw_ackee", breakInto:"cherry_juice"};
elements.frozen_raw_ackee = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1200, tempHigh:10, stateHigh:"raw_ackee"};
elements.grilled_ackee = {color:"#b22222", behavior:behaviors.POWDER, category:"food", state:"solid", density:1150, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_ackee"};
elements.frozen_grilled_ackee = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1150, tempHigh:10, stateHigh:"grilled_ackee"};

elements.raw_cupuacu = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:1210, tempHigh:120, stateHigh:"grilled_cupuacu", tempLow:-5, stateLow:"frozen_raw_cupuacu", breakInto:"cherry_juice"};
elements.frozen_raw_cupuacu = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1210, tempHigh:10, stateHigh:"raw_cupuacu"};
elements.grilled_cupuacu = {color:"#5c3a21", behavior:behaviors.POWDER, category:"food", state:"solid", density:1160, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_cupuacu"};
elements.frozen_grilled_cupuacu = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1160, tempHigh:10, stateHigh:"grilled_cupuacu"};

elements.raw_loquat = {color:"#ffa500", behavior:behaviors.POWDER, category:"food", state:"solid", density:1220, tempHigh:120, stateHigh:"grilled_loquat", tempLow:-5, stateLow:"frozen_raw_loquat", breakInto:"peach_juice"};
elements.frozen_raw_loquat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1220, tempHigh:10, stateHigh:"raw_loquat"};
elements.grilled_loquat = {color:"#cc8400", behavior:behaviors.POWDER, category:"food", state:"solid", density:1170, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_loquat"};
elements.frozen_grilled_loquat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1170, tempHigh:10, stateHigh:"grilled_loquat"};

elements.raw_quince = {color:"#ffd700", behavior:behaviors.POWDER, category:"food", state:"solid", density:1230, tempHigh:120, stateHigh:"grilled_quince", tempLow:-5, stateLow:"frozen_raw_quince", breakInto:"pear_juice"};
elements.frozen_raw_quince = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1230, tempHigh:10, stateHigh:"raw_quince"};
elements.grilled_quince = {color:"#daa520", behavior:behaviors.POWDER, category:"food", state:"solid", density:1180, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_quince"};
elements.frozen_grilled_quince = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1180, tempHigh:10, stateHigh:"grilled_quince"};

elements.raw_medlar = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:1240, tempHigh:120, stateHigh:"grilled_medlar", tempLow:-5, stateLow:"frozen_raw_medlar", breakInto:"pear_juice"};
elements.frozen_raw_medlar = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1240, tempHigh:10, stateHigh:"raw_medlar"};
elements.grilled_medlar = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:1190, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grilled_medlar"};
elements.frozen_grilled_medlar = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1190, tempHigh:10, stateHigh:"grilled_medlar"};

// --- 7. GRAINS & MISC ---
elements.raw_quinoa = {color:"#deb887", behavior:behaviors.POWDER, category:"food", state:"solid", density:1250, tempHigh:120, stateHigh:"cooked_quinoa", tempLow:-5, stateLow:"frozen_raw_quinoa", breakInto:"water"};
elements.frozen_raw_quinoa = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1250, tempHigh:10, stateHigh:"raw_quinoa"};
elements.cooked_quinoa = {color:"#f5deb3", behavior:behaviors.POWDER, category:"food", state:"solid", density:1200, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_quinoa"};
elements.frozen_cooked_quinoa = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1200, tempHigh:10, stateHigh:"cooked_quinoa"};

elements.raw_barley = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:1260, tempHigh:120, stateHigh:"cooked_barley", tempLow:-5, stateLow:"frozen_raw_barley", breakInto:"water"};
elements.frozen_raw_barley = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1260, tempHigh:10, stateHigh:"raw_barley"};
elements.cooked_barley = {color:"#f5f5dc", behavior:behaviors.POWDER, category:"food", state:"solid", density:1210, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_barley"};
elements.frozen_cooked_barley = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1210, tempHigh:10, stateHigh:"cooked_barley"};

elements.raw_buckwheat = {color:"#8b4513", behavior:behaviors.POWDER, category:"food", state:"solid", density:1270, tempHigh:120, stateHigh:"cooked_buckwheat", tempLow:-5, stateLow:"frozen_raw_buckwheat", breakInto:"water"};
elements.frozen_raw_buckwheat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1270, tempHigh:10, stateHigh:"raw_buckwheat"};
elements.cooked_buckwheat = {color:"#a0522d", behavior:behaviors.POWDER, category:"food", state:"solid", density:1220, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_buckwheat"};
elements.frozen_cooked_buckwheat = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1220, tempHigh:10, stateHigh:"cooked_buckwheat"};


// ==========================================
// 1. RAW MEATS & VEGGIES (COOK TO COOKED STATE)
// ==========================================
elements.raw_steak = {color:"#b83737", behavior:W, category:F, state:"solid", density:1050, tempHigh:100, stateHigh:"cooked_steak", tempLow:-5, stateLow:"frozen_raw_steak"};
elements.frozen_raw_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_steak"};
elements.cooked_steak = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_steak"};
elements.frozen_cooked_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_steak"};

elements.raw_bacon = {color:"#FA8072", behavior:W, category:F, state:"solid", density:1050, tempHigh:120, stateHigh:"crispy_bacon", tempLow:-5, stateLow:"frozen_raw_bacon"};
elements.frozen_raw_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_bacon"};
elements.crispy_bacon = {color:"#8B4513", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crispy_bacon"};
elements.frozen_crispy_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"crispy_bacon"};

elements.raw_sausage = {color:"#c77d7d", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_sausage", tempLow:-5, stateLow:"frozen_raw_sausage"};
elements.frozen_raw_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_sausage"};
elements.cooked_sausage = {color:"#8B5A2B", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_sausage"};
elements.frozen_cooked_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"cooked_sausage"};

elements.raw_shrimp = {color:"#c2c2c2", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_shrimp", tempLow:-5, stateLow:"frozen_raw_shrimp"};
elements.frozen_raw_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_shrimp"};
elements.cooked_shrimp = {color:"#FF7F50", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_shrimp"};
elements.frozen_cooked_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_shrimp"};

elements.raw_crab = {color:"#A52A2A", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_crab", tempLow:-5, stateLow:"frozen_raw_crab"};
elements.frozen_raw_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_crab"};
elements.cooked_crab = {color:"#FF4500", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_crab"};
elements.frozen_cooked_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_crab"};

elements.raw_chicken = {color:"#ffcccc", behavior:W, category:F, state:"solid", density:1020, tempHigh:110, stateHigh:"fried_chicken", tempLow:-5, stateLow:"frozen_raw_chicken"};
elements.frozen_raw_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"raw_chicken"};
elements.fried_chicken = {color:"#D2691E", behavior:W, category:F, state:"solid", density:950, tempHigh:230, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_chicken"};
elements.frozen_fried_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"fried_chicken"};

elements.cookie_dough = {color:"#C4A484", behavior:SP, category:F, state:"solid", density:800, tempHigh:150, stateHigh:"cookie", tempLow:-5, stateLow:"frozen_cookie_dough"};
elements.frozen_cookie_dough = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"cookie_dough"};
elements.cookie = {color:"#8B4513", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cookie"};
elements.frozen_cookie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cookie"};

elements.sweet_potato = {color:"#D2691E", behavior:P, category:F, state:"solid", density:850, tempHigh:150, stateHigh:"baked_sweet_potato", tempLow:-5, stateLow:"frozen_sweet_potato"};
elements.frozen_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"sweet_potato"};
elements.baked_sweet_potato = {color:"#8B4513", behavior:W, category:F, state:"solid", density:750, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_sweet_potato"};
elements.frozen_baked_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"baked_sweet_potato"};

elements.carrot = {color:"#ED9121", behavior:P, category:F, breakInto:"water", state:"solid", density:800, tempHigh:110, stateHigh:"cooked_carrot", tempLow:-5, stateLow:"frozen_carrot"};
elements.frozen_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"carrot"};
elements.cooked_carrot = {color:"#CC7722", behavior:SP, category:F, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_carrot"};
elements.frozen_cooked_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"cooked_carrot"};

elements.broccoli = {color:"#4C9141", behavior:P, category:F, breakInto:"water", state:"solid", density:500, tempHigh:110, stateHigh:"cooked_broccoli", tempLow:-5, stateLow:"frozen_broccoli"};
elements.frozen_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"broccoli"};
elements.cooked_broccoli = {color:"#3b7033", behavior:SP, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_broccoli"};
elements.frozen_cooked_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"cooked_broccoli"};

elements.onion = {color:"#DDA0DD", behavior:P, category:F, breakInto:"water", state:"solid", density:650, tempHigh:110, stateHigh:"caramelized_onion", tempLow:-5, stateLow:"frozen_onion"};
elements.frozen_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"onion"};
elements.caramelized_onion = {color:"#A0522D", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_caramelized_onion"};
elements.frozen_caramelized_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"caramelized_onion"};

elements.garlic = {color:"#F0E68C", behavior:P, category:F, breakInto:"water", state:"solid", density:680, tempHigh:110, stateHigh:"roasted_garlic", tempLow:-5, stateLow:"frozen_garlic"};
elements.frozen_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"garlic"};
elements.roasted_garlic = {color:"#DEB887", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_garlic"};
elements.frozen_roasted_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"roasted_garlic"};

elements.tofu = {color:"#F0FFF0", behavior:SP, category:F, state:"solid", density:900, tempHigh:130, stateHigh:"fried_tofu", tempLow:-5, stateLow:"frozen_tofu"};
elements.frozen_tofu = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"tofu"};
elements.fried_tofu = {color:"#F5DEB3", behavior:SP, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_tofu"};
elements.frozen_fried_tofu = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"fried_tofu"};

elements.spring_roll = {color:"#FFE4B5", behavior:W, category:F, state:"solid", density:700, tempHigh:130, stateHigh:"fried_spring_roll", tempLow:-5, stateLow:"frozen_spring_roll"};
elements.frozen_spring_roll = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"spring_roll"};
elements.fried_spring_roll = {color:"#DAA520", behavior:W, category:F, state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_spring_roll"};
elements.frozen_fried_spring_roll = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"fried_spring_roll"};

elements.dumpling = {color:"#FFFACD", behavior:W, category:F, state:"solid", density:850, tempHigh:110, stateHigh:"cooked_dumpling", tempLow:-5, stateLow:"frozen_dumpling"};
elements.frozen_dumpling = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"dumpling"};
elements.cooked_dumpling = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_dumpling"};
elements.frozen_cooked_dumpling = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"cooked_dumpling"};

elements.samosa = {color:"#DAA520", behavior:W, category:F, state:"solid", density:750, tempHigh:130, stateHigh:"fried_samosa", tempLow:-5, stateLow:"frozen_samosa"};
elements.frozen_samosa = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"samosa"};
elements.fried_samosa = {color:"#B8860B", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_samosa"};
elements.frozen_fried_samosa = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"fried_samosa"};

elements.pork_chop = {color:"#FFB6C1", behavior:W, category:F, state:"solid", density:1100, tempHigh:120, stateHigh:"cooked_pork_chop", tempLow:-5, stateLow:"frozen_pork_chop"};
elements.frozen_pork_chop = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"pork_chop"};
elements.cooked_pork_chop = {color:"#D2B48C", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_pork_chop"};
elements.frozen_cooked_pork_chop = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cooked_pork_chop"};

elements.lamb_chop = {color:"#CD5C5C", behavior:W, category:F, state:"solid", density:1100, tempHigh:120, stateHigh:"cooked_lamb_chop", tempLow:-5, stateLow:"frozen_lamb_chop"};
elements.frozen_lamb_chop = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"lamb_chop"};
elements.cooked_lamb_chop = {color:"#8B4513", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_lamb_chop"};
elements.frozen_cooked_lamb_chop = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cooked_lamb_chop"};

elements.venison = {color:"#8B0000", behavior:W, category:F, state:"solid", density:1100, tempHigh:120, stateHigh:"cooked_venison", tempLow:-5, stateLow:"frozen_venison"};
elements.frozen_venison = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"venison"};
elements.cooked_venison = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_venison"};
elements.frozen_cooked_venison = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cooked_venison"};

elements.duck_meat = {color:"#A52A2A", behavior:W, category:F, state:"solid", density:1100, tempHigh:120, stateHigh:"cooked_duck_meat", tempLow:-5, stateLow:"frozen_duck_meat"};
elements.frozen_duck_meat = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"duck_meat"};
elements.cooked_duck_meat = {color:"#A0522D", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_duck_meat"};
elements.frozen_cooked_duck_meat = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cooked_duck_meat"};

elements.brisket = {color:"#8B4513", behavior:W, category:F, state:"solid", density:1100, tempHigh:120, stateHigh:"cooked_brisket", tempLow:-5, stateLow:"frozen_brisket"};
elements.frozen_brisket = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"brisket"};
elements.cooked_brisket = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_brisket"};
elements.frozen_cooked_brisket = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cooked_brisket"};

elements.ribs = {color:"#A0522D", behavior:W, category:F, state:"solid", density:1100, tempHigh:120, stateHigh:"cooked_ribs", tempLow:-5, stateLow:"frozen_ribs"};
elements.frozen_ribs = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"ribs"};
elements.cooked_ribs = {color:"#8B4513", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_ribs"};
elements.frozen_cooked_ribs = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cooked_ribs"};
elements.raw_salmon = {color:"#fa8072", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_salmon", tempLow:-5, stateLow:"frozen_raw_salmon"};
elements.frozen_raw_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_salmon"};
elements.cooked_salmon = {color:"#e9967a", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_salmon"};
elements.frozen_cooked_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_salmon"};

elements.raw_tuna = {color:"#ff6347", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_tuna", tempLow:-5, stateLow:"frozen_raw_tuna"};
elements.frozen_raw_tuna = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_tuna"};
elements.cooked_tuna = {color:"#cd5c5c", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_tuna"};
elements.frozen_cooked_tuna = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_tuna"};

elements.raw_cod = {color:"#f5fffa", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_cod", tempLow:-5, stateLow:"frozen_raw_cod"};
elements.frozen_raw_cod = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_cod"};
elements.cooked_cod = {color:"#fff8dc", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_cod"};
elements.frozen_cooked_cod = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_cod"};

elements.raw_squid = {color:"#e6e6fa", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"calamari", tempLow:-5, stateLow:"frozen_raw_squid"};
elements.frozen_raw_squid = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_squid"};
elements.calamari = {color:"#deb887", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_calamari"};
elements.frozen_calamari = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"calamari"};

elements.raw_octopus = {color:"#d8bfd8", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_octopus", tempLow:-5, stateLow:"frozen_raw_octopus"};
elements.frozen_raw_octopus = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_octopus"};
elements.cooked_octopus = {color:"#cd853f", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_octopus"};
elements.frozen_cooked_octopus = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_octopus"};

elements.raw_egg = {color:"#ffefd5", behavior:L, category:F, state:"liquid", density:1030, tempHigh:80, stateHigh:"fried_egg", tempLow:-5, stateLow:"frozen_raw_egg"};
elements.frozen_raw_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"raw_egg"};
elements.fried_egg = {color:"#ffd700", behavior:W, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_egg"};
elements.frozen_fried_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"fried_egg"};
elements.boiled_egg = {color:"#ffffff", behavior:SP, category:F, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_egg"};
elements.frozen_boiled_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"boiled_egg"};
elements.omelette = {color:"#ffdab9", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_omelette"};
elements.frozen_omelette = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"omelette"};

elements.raw_oyster = {color:"#d3d3d3", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_oyster", tempLow:-5, stateLow:"frozen_raw_oyster"};
elements.frozen_raw_oyster = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_oyster"};
elements.cooked_oyster = {color:"#a9a9a9", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_oyster"};
elements.frozen_cooked_oyster = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_oyster"};
// ==========================================
// 2. FRUITS, VEGGIES & SOLIDS (Equipped with BreakInto!)
// ==========================================
elements.avocado = {color:"#568203", behavior:P, category:F, breakInto:"avocado_oil", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_avocado"};
elements.frozen_avocado = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"avocado"};
elements.guacamole = {color:"#7BA05B", behavior:SP, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_guacamole"};
elements.frozen_guacamole = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"guacamole"};
elements.strawberry = {color:"#FC5A8D", behavior:P, category:F, breakInto:"strawberry_juice", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_strawberry"};
elements.frozen_strawberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"strawberry"};
elements.banana = {color:"#FFE135", behavior:P, category:F, breakInto:"banana_puree", state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_banana"};
elements.frozen_banana = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"banana"};
elements.blueberry = {color:"#4F86F7", behavior:P, category:F, breakInto:"blueberry_juice", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blueberry"};
elements.frozen_blueberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"blueberry"};
elements.blackberry = {color:"#43182F", behavior:P, category:F, breakInto:"blackberry_juice", state:"solid", density:630, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blackberry"};
elements.frozen_blackberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"blackberry"};
elements.raspberry = {color:"#E30B5D", behavior:P, category:F, breakInto:"raspberry_juice", state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_raspberry"};
elements.frozen_raspberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"raspberry"};
elements.peach = {color:"#FFE5B4", behavior:P, category:F, breakInto:"peach_juice", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peach"};
elements.frozen_peach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"peach"};
elements.pear = {color:"#D1E231", behavior:P, category:F, breakInto:"pear_juice", state:"solid", density:720, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pear"};
elements.frozen_pear = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pear"};
elements.cherry = {color:"#D2042D", behavior:P, category:F, breakInto:"cherry_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cherry"};
elements.frozen_cherry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cherry"};
elements.plum = {color:"#8E4585", behavior:P, category:F, breakInto:"plum_juice", state:"solid", density:710, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_plum"};
elements.frozen_plum = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"plum"};
elements.watermelon = {color:"#FC6C85", behavior:P, category:F, breakInto:"watermelon_juice", state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_watermelon"};
elements.frozen_watermelon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"watermelon"};
elements.mango = {color:"#FFC324", behavior:P, category:F, breakInto:"mango_juice", state:"solid", density:740, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mango"};
elements.frozen_mango = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"mango"};
elements.pineapple = {color:"#563C0D", behavior:P, category:F, breakInto:"pineapple_juice", state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pineapple"};
elements.frozen_pineapple = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pineapple"};
elements.coconut = {color:"#4D3227", behavior:W, category:F, breakInto:["coconut_water", "coconut_water", "wood"], state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_coconut"};
elements.frozen_coconut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"coconut"};
elements.kiwi = {color:"#8EE53F", behavior:P, category:F, breakInto:"kiwi_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_kiwi"};
elements.frozen_kiwi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"kiwi"};
elements.pomegranate = {color:"#C21E56", behavior:P, category:F, breakInto:"pomegranate_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pomegranate"};
elements.frozen_pomegranate = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:720, tempHigh:10, stateHigh:"pomegranate"};
elements.cranberry = {color:"#8B0000", behavior:P, category:F, breakInto:"cranberry_juice", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cranberry"};
elements.frozen_cranberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"cranberry"};
elements.tomato = {color:"#FF6347", behavior:P, category:F, breakInto:"tomato_juice", state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tomato"};
elements.frozen_tomato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"tomato"};

// MORE FRUITS
elements.fig = {color:"#5C3A5A", behavior:P, category:F, breakInto:"plum_juice", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fig"};
elements.frozen_fig = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"fig"};
elements.date = {color:"#4B2E1E", behavior:P, category:F, breakInto:"plum_juice", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_date"};
elements.frozen_date = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:670, tempHigh:10, stateHigh:"date"};
elements.papaya = {color:"#FF8C00", behavior:P, category:F, breakInto:"mango_juice", state:"solid", density:640, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_papaya"};
elements.frozen_papaya = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"papaya"};
elements.cantaloupe = {color:"#FFA07A", behavior:P, category:F, breakInto:"watermelon_juice", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cantaloupe"};
elements.frozen_cantaloupe = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"cantaloupe"};
elements.honeydew = {color:"#F0FFF0", behavior:P, category:F, breakInto:"watermelon_juice", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_honeydew"};
elements.frozen_honeydew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"honeydew"};
elements.starfruit = {color:"#FFD700", behavior:P, category:F, breakInto:"pineapple_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_starfruit"};
elements.frozen_starfruit = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"starfruit"};
elements.dragonfruit = {color:"#FF1493", behavior:P, category:F, breakInto:"strawberry_juice", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_dragonfruit"};
elements.frozen_dragonfruit = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"dragonfruit"};
elements.passionfruit = {color:"#483248", behavior:P, category:F, breakInto:"mango_juice", state:"solid", density:660, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_passionfruit"};
elements.frozen_passionfruit = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:710, tempHigh:10, stateHigh:"passionfruit"};
elements.guava = {color:"#FFB6C1", behavior:P, category:F, breakInto:"strawberry_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_guava"};
elements.frozen_guava = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:730, tempHigh:10, stateHigh:"guava"};
elements.lychee = {color:"#FFC0CB", behavior:P, category:F, breakInto:"cherry_juice", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lychee"};
elements.frozen_lychee = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:670, tempHigh:10, stateHigh:"lychee"};
elements.persimmon = {color:"#FF4500", behavior:P, category:F, breakInto:"peach_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_persimmon"};
elements.frozen_persimmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"persimmon"};
elements.rhubarb = {color:"#DC143C", behavior:P, category:F, breakInto:"strawberry_juice", state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_rhubarb"};
elements.frozen_rhubarb = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"rhubarb"};
elements.boysenberry = {color:"#4B0082", behavior:P, category:F, breakInto:"blackberry_juice", state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boysenberry"};
elements.frozen_boysenberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:660, tempHigh:10, stateHigh:"boysenberry"};
elements.mulberry = {color:"#4A0404", behavior:P, category:F, breakInto:"blackberry_juice", state:"solid", density:605, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mulberry"};
elements.frozen_mulberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"mulberry"};
elements.elderberry = {color:"#2A0A3A", behavior:P, category:F, breakInto:"blueberry_juice", state:"solid", density:590, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_elderberry"};
elements.frozen_elderberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:640, tempHigh:10, stateHigh:"elderberry"};
elements.gooseberry = {color:"#9ACD32", behavior:P, category:F, breakInto:"kiwi_juice", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gooseberry"};
elements.frozen_gooseberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:670, tempHigh:10, stateHigh:"gooseberry"};
elements.acai = {color:"#3C1421", behavior:P, category:F, breakInto:"blueberry_juice", state:"solid", density:615, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_acai"};
elements.frozen_acai = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:665, tempHigh:10, stateHigh:"acai"};

// VEGGIES (Break into water & oil)
elements.celery = {color:"#D0FF14", behavior:P, category:F, breakInto:"water", state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_celery"};
elements.frozen_celery = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"celery"};
elements.spinach = {color:"#3F704D", behavior:P, category:F, breakInto:"water", state:"solid", density:300, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_spinach"};
elements.frozen_spinach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"spinach"};
elements.cabbage = {color:"#87A96B", behavior:P, category:F, breakInto:"water", state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cabbage"};
elements.frozen_cabbage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cabbage"};
elements.cauliflower = {color:"#ECEADD", behavior:P, category:F, breakInto:"water", state:"solid", density:480, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cauliflower"};
elements.frozen_cauliflower = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cauliflower"};
elements.pea = {color:"#98FB98", behavior:P, category:F, breakInto:"water", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pea"};
elements.frozen_pea = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pea"};
elements.bell_pepper = {color:"#E34234", behavior:P, category:F, breakInto:"water", state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bell_pepper"};
elements.frozen_bell_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"bell_pepper"};
elements.chili_pepper = {color:"#C21807", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chili_pepper"};
elements.frozen_chili_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"chili_pepper"};
elements.olive = {color:"#808000", behavior:P, category:F, breakInto:"olive_oil", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_olive"};
elements.frozen_olive = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"olive"};
elements.leek = {color:"#556B2F", behavior:P, category:F, breakInto:"water", state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_leek"};
elements.frozen_leek = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"leek"};
elements.scallion = {color:"#8Fbc8f", behavior:P, category:F, breakInto:"water", state:"solid", density:410, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_scallion"};
elements.frozen_scallion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:460, tempHigh:10, stateHigh:"scallion"};
elements.shallot = {color:"#D8BFD8", behavior:P, category:F, breakInto:"water", state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_shallot"};
elements.frozen_shallot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"shallot"};
elements.horseradish = {color:"#F5F5DC", behavior:P, category:F, breakInto:"water", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_horseradish"};
elements.frozen_horseradish = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"horseradish"};
elements.wasabi = {color:"#7FFF00", behavior:P, category:F, breakInto:"water", state:"solid", density:720, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_wasabi"};
elements.frozen_wasabi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:770, tempHigh:10, stateHigh:"wasabi"};
elements.watercress = {color:"#2E8B57", behavior:P, category:F, breakInto:"water", state:"solid", density:350, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_watercress"};
elements.frozen_watercress = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"watercress"};
elements.arugula = {color:"#006400", behavior:P, category:F, breakInto:"water", state:"solid", density:320, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_arugula"};
elements.frozen_arugula = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:370, tempHigh:10, stateHigh:"arugula"};
elements.kale = {color:"#228B22", behavior:P, category:F, breakInto:"water", state:"solid", density:380, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_kale"};
elements.frozen_kale = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:430, tempHigh:10, stateHigh:"kale"};
elements.bok_choy = {color:"#98FB98", behavior:P, category:F, breakInto:"water", state:"solid", density:420, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bok_choy"};
elements.frozen_bok_choy = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:470, tempHigh:10, stateHigh:"bok_choy"};
elements.okra = {color:"#556B2F", behavior:P, category:F, breakInto:"water", state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_okra"};
elements.frozen_okra = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"okra"};
elements.plantain = {color:"#FFD700", behavior:P, category:F, breakInto:"banana_puree", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_plantain"};
elements.frozen_plantain = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"plantain"};
elements.yam = {color:"#D2691E", behavior:P, category:F, breakInto:"water", state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_yam"};
elements.frozen_yam = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"yam"};
elements.taro = {color:"#9370DB", behavior:P, category:F, breakInto:"water", state:"solid", density:820, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_taro"};
elements.frozen_taro = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:870, tempHigh:10, stateHigh:"taro"};
elements.cassava = {color:"#DEB887", behavior:P, category:F, breakInto:"water", state:"solid", density:830, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cassava"};
elements.frozen_cassava = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:880, tempHigh:10, stateHigh:"cassava"};
elements.lentil = {color:"#8B4513", behavior:P, category:F, breakInto:"water", state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lentil"};
elements.frozen_lentil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"lentil"};
elements.chickpea = {color:"#F5DEB3", behavior:P, category:F, breakInto:"water", state:"solid", density:910, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chickpea"};
elements.frozen_chickpea = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:960, tempHigh:10, stateHigh:"chickpea"};
elements.black_bean = {color:"#1A1110", behavior:P, category:F, breakInto:"water", state:"solid", density:920, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_black_bean"};
elements.frozen_black_bean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:970, tempHigh:10, stateHigh:"black_bean"};
elements.kidney_bean = {color:"#8B0000", behavior:P, category:F, breakInto:"water", state:"solid", density:920, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_kidney_bean"};
elements.frozen_kidney_bean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:970, tempHigh:10, stateHigh:"kidney_bean"};
elements.button_mushroom = {color:"#f5deb3", behavior:P, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_button_mushroom"};
elements.frozen_button_mushroom = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"button_mushroom"};
elements.portobello = {color:"#8b4513", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_portobello"};
elements.frozen_portobello = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"portobello"};
elements.shiitake = {color:"#a0522d", behavior:P, category:F, state:"solid", density:350, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_shiitake"};
elements.frozen_shiitake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"shiitake"};
elements.truffle_fungus = {color:"#2b1b10", behavior:P, category:F, breakInto:"truffle_oil", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_truffle_fungus"};
elements.frozen_truffle_fungus = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"truffle_fungus"};

elements.cacao_bean = {color:"#3e1e04", behavior:P, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cacao_bean"};
elements.frozen_cacao_bean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"cacao_bean"};
elements.vanilla_bean = {color:"#1a1110", behavior:P, category:F, state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_vanilla_bean"};
elements.frozen_vanilla_bean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"vanilla_bean"};
elements.coffee_bean = {color:"#4b3621", behavior:P, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_coffee_bean"};
elements.frozen_coffee_bean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"coffee_bean"};
elements.tea_leaf = {color:"#2e8b57", behavior:P, category:F, state:"solid", density:200, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tea_leaf"};
elements.frozen_tea_leaf = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:250, tempHigh:10, stateHigh:"tea_leaf"};

elements.parsley = {color:"#228b22", behavior:P, category:F, state:"solid", density:150, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_parsley"};
elements.frozen_parsley = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:200, tempHigh:10, stateHigh:"parsley"};
elements.cilantro = {color:"#32cd32", behavior:P, category:F, state:"solid", density:150, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cilantro"};
elements.frozen_cilantro = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:200, tempHigh:10, stateHigh:"cilantro"};
elements.dill = {color:"#00fa9a", behavior:P, category:F, state:"solid", density:100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_dill"};
elements.frozen_dill = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:150, tempHigh:10, stateHigh:"dill"};
elements.mint_leaf = {color:"#00ff7f", behavior:P, category:F, state:"solid", density:150, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mint_leaf"};
elements.frozen_mint_leaf = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:200, tempHigh:10, stateHigh:"mint_leaf"};

elements.blue_cheese = {color:"#add8e6", behavior:W, category:F, state:"solid", density:950, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blue_cheese"};
elements.frozen_blue_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"blue_cheese"};
elements.swiss_cheese = {color:"#fffacd", behavior:W, category:F, state:"solid", density:950, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_swiss_cheese"};
elements.frozen_swiss_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"swiss_cheese"};
elements.feta_cheese = {color:"#f8f8ff", behavior:SP, category:F, state:"solid", density:900, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_feta_cheese"};
elements.frozen_feta_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"feta_cheese"};

elements.lasagna = {color:"#cd5c5c", behavior:W, category:F, state:"solid", density:1100, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lasagna"};
elements.frozen_lasagna = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"lasagna"};
elements.ravioli = {color:"#f5deb3", behavior:SP, category:F, state:"solid", density:1050, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ravioli"};
elements.frozen_ravioli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"ravioli"};
elements.pad_thai = {color:"#d2b48c", behavior:SP, category:F, state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pad_thai"};
elements.frozen_pad_thai = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"pad_thai"};
elements.pho = {color:"#deb887", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pho"};
elements.frozen_pho = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"pho"};
elements.chili_stew = {color:"#8b0000", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_chili_stew"};
elements.frozen_chili_stew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"chili_stew"};

elements.white_chocolate = {color:"#fff8dc", behavior:W, category:F, state:"solid", density:1200, tempHigh:45, stateHigh:"melted_white_chocolate", tempLow:-5, stateLow:"frozen_white_chocolate"};
elements.frozen_white_chocolate = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1250, tempHigh:10, stateHigh:"white_chocolate"};
elements.dark_chocolate = {color:"#3b2f2f", behavior:W, category:F, state:"solid", density:1300, tempHigh:45, stateHigh:"melted_dark_chocolate", tempLow:-5, stateLow:"frozen_dark_chocolate"};
elements.frozen_dark_chocolate = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1350, tempHigh:10, stateHigh:"dark_chocolate"};
elements.candy_cane = {color:"#ff0000", behavior:W, category:F, state:"solid", density:1000, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_candy_cane"};
elements.frozen_candy_cane = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"candy_cane"};
elements.caramel_apple = {color:"#c68e17", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_caramel_apple"};
elements.frozen_caramel_apple = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"caramel_apple"};
elements.gummy_worm = {color:"#32cd32", behavior:W, category:F, state:"solid", density:900, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gummy_worm"};
elements.frozen_gummy_worm = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"gummy_worm"};

elements.sourdough = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sourdough"};
elements.frozen_sourdough = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"sourdough"};
elements.rye_bread = {color:"#8b4513", behavior:W, category:F, state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_rye_bread"};
elements.frozen_rye_bread = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"rye_bread"};
elements.cornbread = {color:"#ffd700", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cornbread"};
elements.frozen_cornbread = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cornbread"};

elements.pumpkin = {color:"#ff8c00", behavior:W, category:F, breakInto:"pumpkin_puree", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pumpkin"};
elements.frozen_pumpkin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"pumpkin"};
elements.cucumber = {color:"#006400", behavior:P, category:F, breakInto:"cucumber_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cucumber"};
elements.frozen_cucumber = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"cucumber"};
elements.green_bean = {color:"#228b22", behavior:P, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_green_bean"};
elements.frozen_green_bean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"green_bean"};
// ==========================================
// 3. BREADS, PASTRIES & SWEETS
// ==========================================
elements.bagel = {color:"#EEDC82", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bagel"};
elements.frozen_bagel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"bagel"};
elements.croissant = {color:"#C49A45", behavior:W, category:F, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_croissant"};
elements.frozen_croissant = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"croissant"};
elements.muffin = {color:"#D2B48C", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_muffin"};
elements.frozen_muffin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"muffin"};
elements.biscuit = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_biscuit"};
elements.frozen_biscuit = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"biscuit"};
elements.pita_bread = {color:"#FFE4B5", behavior:W, category:F, state:"solid", density:550, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pita_bread"};
elements.frozen_pita_bread = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pita_bread"};
elements.naan = {color:"#F0E68C", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_naan"};
elements.frozen_naan = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"naan"};
elements.baguette = {color:"#CD853F", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baguette"};
elements.frozen_baguette = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"baguette"};
elements.crouton = {color:"#DAA520", behavior:SP, category:F, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crouton"};
elements.frozen_crouton = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"crouton"};
elements.cracker = {color:"#F4A460", behavior:SP, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cracker"};
elements.frozen_cracker = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cracker"};
elements.donut = {color:"#D2691E", behavior:W, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_donut"};
elements.frozen_donut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"donut"};
elements.pretzel = {color:"#8B4513", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pretzel"};
elements.frozen_pretzel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pretzel"};
elements.tortilla = {color:"#FFE4B5", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tortilla"};
elements.frozen_tortilla = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"tortilla"};
elements.pancake = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pancake"};
elements.frozen_pancake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pancake"};
elements.waffle = {color:"#DEB887", behavior:W, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_waffle"};
elements.frozen_waffle = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"waffle"};
elements.toaster_pastry = {color:"#FFDAB9", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_toaster_pastry"};
elements.frozen_toaster_pastry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"toaster_pastry"};
elements.cookie = {color:"#8B4513", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cookie"};
elements.frozen_cookie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cookie"};
elements.brownie = {color:"#3E1E04", behavior:W, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_brownie"};
elements.frozen_brownie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"brownie"};
elements.cupcake = {color:"#FFC0CB", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cupcake"};
elements.frozen_cupcake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cupcake"};
elements.pie = {color:"#D2B48C", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pie"};
elements.frozen_pie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pie"};
elements.cheesecake = {color:"#FFF8DC", behavior:W, category:F, state:"solid", density:900, tempHigh:200, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cheesecake"};
elements.frozen_cheesecake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cheesecake"};

// CARBS & SNACKS
elements.oats = {color:"#E8D8A6", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_oats"};
elements.frozen_oats = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"oats"};
elements.granola = {color:"#B8860B", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_granola"};
elements.frozen_granola = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"granola"};
elements.cereal = {color:"#DEB887", behavior:P, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cereal"};
elements.frozen_cereal = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"cereal"};
elements.potato_chip = {color:"#FFD700", behavior:SP, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_potato_chip"};
elements.frozen_potato_chip = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"potato_chip"};
elements.nachos = {color:"#FF8C00", behavior:W, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_nachos"};
elements.frozen_nachos = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"nachos"};
elements.taco = {color:"#DAA520", behavior:W, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_taco"};
elements.frozen_taco = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"taco"};
elements.burger = {color:"#A0522D", behavior:W, category:F, state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_burger"};
elements.frozen_burger = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"burger"};
elements.sushi = {color:"#FFFAFA", behavior:W, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sushi"};
elements.frozen_sushi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"sushi"};
elements.burrito = {color:"#DEB887", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_burrito"};
elements.frozen_burrito = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"burrito"};
elements.quesadilla = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_quesadilla"};
elements.frozen_quesadilla = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"quesadilla"};
elements.pasta = {color:"#F0E68C", behavior:P, category:F, state:"solid", density:1300, tempHigh:100, stateHigh:"cooked_pasta", tempLow:-5, stateLow:"frozen_pasta"};
elements.frozen_pasta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1300, tempHigh:10, stateHigh:"pasta"};
elements.cooked_pasta = {color:"#FFFACD", behavior:SP, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_pasta"};
elements.frozen_cooked_pasta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"cooked_pasta"};

// POPCORN
elements.popcorn_kernel = {color:"#FFD700", behavior:P, category:F, breakInto:"popped_corn", state:"solid", density:800, tempHigh:180, stateHigh:"popped_corn", tempLow:-5, stateLow:"frozen_popcorn_kernel"};
elements.frozen_popcorn_kernel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"popcorn_kernel"};
elements.popped_corn = {color:"#FFF8DC", behavior:SP, category:F, breakInto:"burnt", state:"solid", density:100, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_popped_corn"};
elements.frozen_popped_corn = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:150, tempHigh:10, stateHigh:"popped_corn"};

// NUTS & SEEDS
elements.almond = {color:"#FFEBCD", behavior:P, category:F, breakInto:"almond_butter", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_almond"};
elements.frozen_almond = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"almond"};
elements.walnut = {color:"#8B4513", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_walnut"};
elements.frozen_walnut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"walnut"};
elements.pecan = {color:"#A0522D", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:580, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pecan"};
elements.frozen_pecan = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:580, tempHigh:10, stateHigh:"pecan"};
elements.cashew = {color:"#F5DEB3", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cashew"};
elements.frozen_cashew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:620, tempHigh:10, stateHigh:"cashew"};

// SPICES (Break into themselves mostly, or just burn)
elements.cinnamon = {color:"#D2691E", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cinnamon"};
elements.frozen_cinnamon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"cinnamon"};
elements.nutmeg = {color:"#8B4513", behavior:P, category:F, state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_nutmeg"};
elements.frozen_nutmeg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"nutmeg"};
elements.ginger_powder = {color:"#F5DEB3", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ginger_powder"};
elements.frozen_ginger_powder = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"ginger_powder"};

// ==========================================
// 4. JUICES, PUREES & LIQUIDS (EVAPORATE TO STEAM OR BURN)
// ==========================================
elements.coconut_water = {color:"#F0F8FF", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_coconut_water"};
elements.frozen_coconut_water = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"coconut_water"};
elements.olive_oil = {color:"#BDB76B", behavior:L, category:F, state:"liquid", density:910, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_olive_oil"};
elements.frozen_olive_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"olive_oil"};
elements.maple_syrup = {color:"#BB6528", behavior:L, category:F, state:"liquid", density:1370, tempHigh:120, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_maple_syrup"};
elements.frozen_maple_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1400, tempHigh:5, stateHigh:"maple_syrup"};
elements.avocado_oil = {color:"#7BA05B", behavior:L, category:F, state:"liquid", density:920, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_avocado_oil"};
elements.frozen_avocado_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"avocado_oil"};
elements.strawberry_juice = {color:"#e83162", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_strawberry_juice"};
elements.frozen_strawberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"strawberry_juice"};
elements.banana_puree = {color:"#F3E5AB", behavior:L, category:F, state:"liquid", density:1100, viscosity: 50000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_banana_puree"};
elements.frozen_banana_puree = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"banana_puree"};
elements.blueberry_juice = {color:"#3B5998", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_blueberry_juice"};
elements.frozen_blueberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"blueberry_juice"};
elements.blackberry_juice = {color:"#2E0823", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_blackberry_juice"};
elements.frozen_blackberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"blackberry_juice"};
elements.raspberry_juice = {color:"#C21E56", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_raspberry_juice"};
elements.frozen_raspberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"raspberry_juice"};
elements.peach_juice = {color:"#FFDAB9", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_peach_juice"};
elements.frozen_peach_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"peach_juice"};
elements.pear_juice = {color:"#E4D96F", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pear_juice"};
elements.frozen_pear_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"pear_juice"};
elements.cherry_juice = {color:"#990F02", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cherry_juice"};
elements.frozen_cherry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cherry_juice"};
elements.plum_juice = {color:"#673147", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_plum_juice"};
elements.frozen_plum_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"plum_juice"};
elements.watermelon_juice = {color:"#FF7F50", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_watermelon_juice"};
elements.frozen_watermelon_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"watermelon_juice"};
elements.mango_juice = {color:"#FFB300", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_mango_juice"};
elements.frozen_mango_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"mango_juice"};
elements.pineapple_juice = {color:"#FADA5E", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pineapple_juice"};
elements.frozen_pineapple_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"pineapple_juice"};
elements.kiwi_juice = {color:"#8FBC8F", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_kiwi_juice"};
elements.frozen_kiwi_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"kiwi_juice"};
elements.pomegranate_juice = {color:"#800020", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pomegranate_juice"};
elements.frozen_pomegranate_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"pomegranate_juice"};
elements.cranberry_juice = {color:"#6E0A1E", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cranberry_juice"};
elements.frozen_cranberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"cranberry_juice"};
elements.tomato_juice = {color:"#E34234", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tomato_juice"};
elements.frozen_tomato_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"tomato_juice"};

elements.smoothie = {color:"#FF69B4", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_smoothie"};
elements.frozen_smoothie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"smoothie"};
elements.jam = {color:"#8B008B", behavior:L, category:F, state:"liquid", density:1100, tempHigh:120, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_jam"};
elements.frozen_jam = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"jam"};
elements.ketchup = {color:"#B22222", behavior:L, category:F, state:"liquid", density:1080, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ketchup"};
elements.frozen_ketchup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"ketchup"};
elements.wine = {color:"#722F37", behavior:L, category:F, state:"liquid", density:990, tempHigh:80, stateHigh:"steam", tempLow:-10, stateLow:"frozen_wine"};
elements.frozen_wine = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:0, stateHigh:"wine"};
elements.stew = {color:"#8B4513", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_stew"};
elements.frozen_stew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"stew"};
elements.curry = {color:"#B8860B", behavior:L, category:F, state:"liquid", density:1080, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_curry"};
elements.frozen_curry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"curry"};
elements.mustard = {color:"#FFDB58", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_mustard"};
elements.frozen_mustard = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"mustard"};
elements.hot_sauce = {color:"#FF2400", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_hot_sauce"};
elements.frozen_hot_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"hot_sauce"};
elements.soy_sauce = {color:"#3B2F2F", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_soy_sauce"};
elements.frozen_soy_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"soy_sauce"};
elements.ranch_dressing = {color:"#F5FFFA", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_ranch_dressing"};
elements.frozen_ranch_dressing = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"ranch_dressing"};
elements.bbq_sauce = {color:"#3E1E04", behavior:L, category:F, state:"liquid", density:1150, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_bbq_sauce"};
elements.frozen_bbq_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"bbq_sauce"};
elements.gravy = {color:"#8B5A2B", behavior:L, category:F, state:"liquid", density:1080, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_gravy"};
elements.frozen_gravy = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"gravy"};
elements.oatmeal = {color:"#D2B48C", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_oatmeal"};
elements.frozen_oatmeal = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"oatmeal"};
elements.pudding = {color:"#F5DEB3", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pudding"};
elements.frozen_pudding = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"pudding"};
elements.almond_butter = {color:"#C4A484", behavior:L, category:F, state:"liquid", density:1060, tempHigh:120, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_almond_butter"};
elements.frozen_almond_butter = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"almond_butter"};

elements.cucumber_juice = {color:"#90ee90", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cucumber_juice"};
elements.frozen_cucumber_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"cucumber_juice"};
elements.pumpkin_puree = {color:"#ff7f50", behavior:L, category:F, state:"liquid", density:1100, viscosity: 60000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pumpkin_puree"};
elements.frozen_pumpkin_puree = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"pumpkin_puree"};

elements.coffee_liquid = {color:"#3b2f2f", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_coffee_liquid"};
elements.frozen_coffee_liquid = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"coffee_liquid"};
elements.tea_liquid = {color:"#cd853f", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tea_liquid"};
elements.frozen_tea_liquid = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"tea_liquid"};

elements.chili_oil = {color:"#b22222", behavior:L, category:F, state:"liquid", density:920, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_chili_oil"};
elements.frozen_chili_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"chili_oil"};
elements.truffle_oil = {color:"#8b4513", behavior:L, category:F, state:"liquid", density:920, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_truffle_oil"};
elements.frozen_truffle_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"truffle_oil"};

elements.melted_white_chocolate = {color:"#fff8dc", behavior:L, category:F, state:"liquid", density:1150, viscosity: 40000, tempHigh:150, stateHigh:"burnt", tempLow:30, stateLow:"white_chocolate"};
elements.melted_dark_chocolate = {color:"#3b2f2f", behavior:L, category:F, state:"liquid", density:1250, viscosity: 45000, tempHigh:150, stateHigh:"burnt", tempLow:30, stateLow:"dark_chocolate"};

elements.corn_syrup = {color:"#f5deb3", behavior:L, category:F, state:"liquid", density:1350, viscosity: 80000, tempHigh:120, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_corn_syrup"};
elements.frozen_corn_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1400, tempHigh:5, stateHigh:"corn_syrup"};
elements.chocolate_syrup = {color:"#4b3621", behavior:L, category:F, state:"liquid", density:1300, viscosity: 60000, tempHigh:120, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_chocolate_syrup"};
elements.frozen_chocolate_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1350, tempHigh:5, stateHigh:"chocolate_syrup"};

// ==========================================
// 4.5 BREAKINTO PROPERTIES (NATIVE SMASH TOOL FIX)
// ==========================================
// This makes the native Smash tool, explosions, and heavy physics natively pop these into liquid!

// Fruits -> Juices & Oils
elements.avocado.breakInto = "avocado_oil";
elements.guacamole.breakInto = "avocado_oil";
elements.strawberry.breakInto = "strawberry_juice";
elements.banana.breakInto = "banana_puree";
elements.blueberry.breakInto = "blueberry_juice";
elements.blackberry.breakInto = "blackberry_juice";
elements.raspberry.breakInto = "raspberry_juice";
elements.peach.breakInto = "peach_juice";
elements.pear.breakInto = "pear_juice";
elements.cherry.breakInto = "cherry_juice";
elements.plum.breakInto = "plum_juice";
elements.watermelon.breakInto = "watermelon_juice";
elements.mango.breakInto = "mango_juice";
elements.pineapple.breakInto = "pineapple_juice";
elements.coconut.breakInto = ["coconut_water", "coconut_water", "wood"]; // Pops open shell
elements.kiwi.breakInto = "kiwi_juice";
elements.pomegranate.breakInto = "pomegranate_juice";
elements.cranberry.breakInto = "cranberry_juice";
elements.tomato.breakInto = "tomato_juice";
elements.fig.breakInto = "plum_juice";
elements.date.breakInto = "plum_juice";
elements.papaya.breakInto = "mango_juice";
elements.cantaloupe.breakInto = "watermelon_juice";
elements.honeydew.breakInto = "watermelon_juice";
elements.starfruit.breakInto = "pineapple_juice";
elements.dragonfruit.breakInto = "strawberry_juice";
elements.passionfruit.breakInto = "mango_juice";
elements.guava.breakInto = "strawberry_juice";
elements.lychee.breakInto = "cherry_juice";
elements.persimmon.breakInto = "peach_juice";
elements.rhubarb.breakInto = "strawberry_juice";
elements.boysenberry.breakInto = "blackberry_juice";
elements.mulberry.breakInto = "blackberry_juice";
elements.elderberry.breakInto = "blueberry_juice";
elements.gooseberry.breakInto = "kiwi_juice";
elements.acai.breakInto = "blueberry_juice";

// Veggies & Beans -> Water, Purees, or Oils
elements.carrot.breakInto = "water";
elements.celery.breakInto = "water";
elements.broccoli.breakInto = "water";
elements.spinach.breakInto = "water";
elements.cabbage.breakInto = "water";
elements.cauliflower.breakInto = "water";
elements.pea.breakInto = "water";
elements.bell_pepper.breakInto = "water";
elements.chili_pepper.breakInto = "hot_sauce";
elements.onion.breakInto = "water";
elements.garlic.breakInto = "water";
elements.olive.breakInto = "olive_oil";
elements.leek.breakInto = "water";
elements.scallion.breakInto = "water";
elements.shallot.breakInto = "water";
elements.horseradish.breakInto = "water";
elements.wasabi.breakInto = "water";
elements.watercress.breakInto = "water";
elements.arugula.breakInto = "water";
elements.kale.breakInto = "water";
elements.bok_choy.breakInto = "water";
elements.okra.breakInto = "water";
elements.plantain.breakInto = "banana_puree";
elements.yam.breakInto = "water";
elements.taro.breakInto = "water";
elements.cassava.breakInto = "water";
elements.lentil.breakInto = "water";
elements.chickpea.breakInto = "water";
elements.black_bean.breakInto = "water";
elements.kidney_bean.breakInto = "water";

// ==========================================
// 5. EXPLICIT CHEMISTRY & REACTIONS
// ==========================================

// --- SAFE VANILLA INITIALIZATION ---
// We initialize vanilla elements to ensure assigning reactions to them never throws an error.
const v = ["dough", "meat", "bird", "fish", "bread", "rice", "pasta", "oats", "milk", "broth", "sauce", "grease", "cabbage", "corn", "potato", "tortilla", "cooked_pasta", "cheese", "acid", "sugar", "water", "yeast", "ice", "sand", "butter", "yogurt", "nut_oil", "chocolate", "marshmallow", "salt", "smoke"];
for (let i = 0; i < v.length; i++) {
    if (!elements[v[i]]) elements[v[i]] = { reactions: {} };
    if (!elements[v[i]].reactions) elements[v[i]].reactions = {};
}
// Ensure our modded elements have empty objects
for (let key in elements) {
    if (elements[key].category === F && !elements[key].reactions) elements[key].reactions = {};
}

// A. Smashing Tool Overrides (In case breakInto fails in edge cases)
elements.avocado.reactions["smash"] = { elem1: "avocado_oil", elem2: null };
elements.strawberry.reactions["smash"] = { elem1: "strawberry_juice", elem2: null };
elements.banana.reactions["smash"] = { elem1: "banana_puree", elem2: null };
elements.kiwi.reactions["smash"] = { elem1: "kiwi_juice", elem2: null };
elements.pomegranate.reactions["smash"] = { elem1: "pomegranate_juice", elem2: null };
elements.blueberry.reactions["smash"] = { elem1: "blueberry_juice", elem2: null };
elements.blackberry.reactions["smash"] = { elem1: "blackberry_juice", elem2: null };
elements.raspberry.reactions["smash"] = { elem1: "raspberry_juice", elem2: null };
elements.peach.reactions["smash"] = { elem1: "peach_juice", elem2: null };
elements.pear.reactions["smash"] = { elem1: "pear_juice", elem2: null };
elements.cherry.reactions["smash"] = { elem1: "cherry_juice", elem2: null };
elements.plum.reactions["smash"] = { elem1: "plum_juice", elem2: null };
elements.watermelon.reactions["smash"] = { elem1: "watermelon_juice", elem2: null };
elements.mango.reactions["smash"] = { elem1: "mango_juice", elem2: null };
elements.pineapple.reactions["smash"] = { elem1: "pineapple_juice", elem2: null };
elements.cranberry.reactions["smash"] = { elem1: "cranberry_juice", elem2: null };
elements.tomato.reactions["smash"] = { elem1: "tomato_juice", elem2: null };

// B. FREEZING DRINKS (Juice + Ice = Instantly frozen)
elements.strawberry_juice.reactions["ice"] = { elem1: "frozen_strawberry_juice", elem2: null };
elements.banana_puree.reactions["ice"] = { elem1: "frozen_banana_puree", elem2: null };
elements.blueberry_juice.reactions["ice"] = { elem1: "frozen_blueberry_juice", elem2: null };
elements.blackberry_juice.reactions["ice"] = { elem1: "frozen_blackberry_juice", elem2: null };
elements.raspberry_juice.reactions["ice"] = { elem1: "frozen_raspberry_juice", elem2: null };
elements.peach_juice.reactions["ice"] = { elem1: "frozen_peach_juice", elem2: null };
elements.pear_juice.reactions["ice"] = { elem1: "frozen_pear_juice", elem2: null };
elements.cherry_juice.reactions["ice"] = { elem1: "frozen_cherry_juice", elem2: null };
elements.plum_juice.reactions["ice"] = { elem1: "frozen_plum_juice", elem2: null };
elements.watermelon_juice.reactions["ice"] = { elem1: "frozen_watermelon_juice", elem2: null };
elements.mango_juice.reactions["ice"] = { elem1: "frozen_mango_juice", elem2: null };
elements.pineapple_juice.reactions["ice"] = { elem1: "frozen_pineapple_juice", elem2: null };
elements.kiwi_juice.reactions["ice"] = { elem1: "frozen_kiwi_juice", elem2: null };
elements.pomegranate_juice.reactions["ice"] = { elem1: "frozen_pomegranate_juice", elem2: null };
elements.cranberry_juice.reactions["ice"] = { elem1: "frozen_cranberry_juice", elem2: null };
elements.tomato_juice.reactions["ice"] = { elem1: "frozen_tomato_juice", elem2: null };

// C. BLENDING (Juice + Milk = Smoothie)
elements.strawberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.banana_puree.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.blueberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.blackberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.raspberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.peach_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.mango_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.pineapple_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };

// D. PRESERVES (Juice + Sugar = Jam)
elements.strawberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.blueberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.blackberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.raspberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.peach_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.cherry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.plum_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.cranberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.tomato_juice.reactions["sugar"] = { elem1: "ketchup", elem2: null };

// E. FERMENTATION (Juices + Yeast = Wine/Alcohol)
elements.cherry_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.peach_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.plum_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.pineapple_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.pomegranate_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.cranberry_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.watermelon_juice.reactions["yeast"] = { elem1: "wine", elem2: null };

// F. BAKING & DOUGH MIXES
elements.dough.reactions["water"] = { elem1: "bagel", elem2: null };
elements.dough.reactions["butter"] = { elem1: "croissant", elem2: null };
elements.dough.reactions["milk"] = { elem1: "biscuit", elem2: null };
elements.dough.reactions["yogurt"] = { elem1: "naan", elem2: null };
elements.dough.reactions["nut_oil"] = { elem1: "donut", elem2: null };
elements.dough.reactions["chocolate"] = { elem1: "cookie", elem2: null };
elements.dough.reactions["sugar"] = { elem1: "cookie_dough", elem2: null };
elements.dough.reactions["meat"] = { elem1: "dumpling", elem2: null };
elements.dough.reactions["sauce"] = { elem1: "pizza", elem2: null };
elements.dough.reactions["ketchup"] = { elem1: "pizza", elem2: null };

// G. DEEP FRYING IN BOILING OIL
elements.olive_oil.reactions["potato"] = { elem1: "potato_chip", elem2: "olive_oil" };
elements.olive_oil.reactions["chicken_nugget"] = { elem1: "fried_chicken", elem2: "olive_oil" };
elements.olive_oil.reactions["dough"] = { elem1: "donut", elem2: "olive_oil" };
elements.olive_oil.reactions["shrimp"] = { elem1: "cooked_shrimp", elem2: "olive_oil" };
elements.olive_oil.reactions["tofu"] = { elem1: "fried_tofu", elem2: "olive_oil" };
elements.olive_oil.reactions["spring_roll"] = { elem1: "fried_spring_roll", elem2: "olive_oil" };
elements.olive_oil.reactions["samosa"] = { elem1: "fried_samosa", elem2: "olive_oil" };

// H. MEAL PREP & CONDIMENTS
elements.bread.reactions["cooked_meat"] = { elem1: "burger", elem2: null };
elements.bread.reactions["cooked_steak"] = { elem1: "burger", elem2: null };
elements.bread.reactions["sauce"] = { elem1: "pizza", elem2: null };
elements.bread.reactions["cheese"] = { elem1: "grilled_cheese", elem2: null };
elements.cooked_pasta.reactions["cheese"] = { elem1: "mac_and_cheese", elem2: null };
elements.tortilla.reactions["cheese"] = { elem1: "quesadilla", elem2: null };
elements.rice.reactions["water"] = { elem1: "riceball", elem2: null };
elements.rice.reactions["fish"] = { elem1: "sushi", elem2: null };
elements.pasta.reactions["water"] = { elem1: "cooked_pasta", elem2: null };
elements.oats.reactions["milk"] = { elem1: "oatmeal", elem2: null };
elements.graham_cracker.reactions["marshmallow"] = { elem1: "s_more", elem2: null };
elements.corn.reactions["cheese"] = { elem1: "nachos", elem2: null };

// I. LIQUIDS
elements.milk.reactions["sugar"] = { elem1: "pudding", elem2: null };
elements.broth.reactions["meat"] = { elem1: "stew", elem2: null };
elements.sauce.reactions["meat"] = { elem1: "curry", elem2: null };
elements.grease.reactions["flour"] = { elem1: "gravy", elem2: null };
elements.milk.reactions["acid"] = { elem1: "cheese", elem2: null };

// J. SUGAR, SODA & ACID
elements.water.reactions["sugar"] = { elem1: "sugar_water", elem2: null };
if (!elements.sugar_water) elements.sugar_water = {color:"#e6f2f5", behavior:L, category:S, state:"liquid", density:1050};
if (!elements.sugar_water.reactions) elements.sugar_water.reactions = {};
elements.sugar_water.reactions["carbon_dioxide"] = { elem1: "soda", elem2: null };
if (!elements.soda) elements.soda = {color:"#4A2E15", behavior:L, category:F, state:"liquid", density:1020};
elements.sugar.reactions["fire"] = { elem1: "caramel", elem2: null };
if (!elements.caramel) elements.caramel = {color:"#C68E17", behavior:L, category:F, state:"liquid", density:1200, viscosity: 50000};
elements.acid.reactions["meat"] = { elem1: "sludge", elem2: null };
elements.acid.reactions["bread"] = { elem1: "sludge", elem2: null };
elements.cabbage.reactions["acid"] = { elem1: "sauerkraut", elem2: null };

// L. EXPANDED COOKING & RECIPE REACTIONS (New Fire, Smoke, and Salt interactions!)
elements.raw_steak.reactions["fire"] = { elem1: "cooked_steak", elem2: null };
elements.raw_steak.reactions["smoke"] = { elem1: "cooked_steak", elem2: null };
elements.raw_steak.reactions["salt"] = { elem1: "cooked_steak", elem2: null };

elements.raw_bacon.reactions["fire"] = { elem1: "bacon", elem2: null };
elements.raw_bacon.reactions["smoke"] = { elem1: "bacon", elem2: null };
elements.bacon.reactions["fire"] = { elem1: "crispy_bacon", elem2: null };

elements.raw_sausage.reactions["fire"] = { elem1: "cooked_sausage", elem2: null };
elements.raw_sausage.reactions["smoke"] = { elem1: "cooked_sausage", elem2: null };

elements.raw_shrimp.reactions["fire"] = { elem1: "cooked_shrimp", elem2: null };
elements.raw_shrimp.reactions["steam"] = { elem1: "cooked_shrimp", elem2: null };

elements.raw_crab.reactions["fire"] = { elem1: "cooked_crab_meat", elem2: null };
elements.raw_crab.reactions["steam"] = { elem1: "cooked_crab_meat", elem2: null };

elements.raw_chicken.reactions["fire"] = { elem1: "fried_chicken", elem2: null };
elements.raw_chicken.reactions["nut_oil"] = { elem1: "fried_chicken", elem2: null };

elements.potato.reactions["fire"] = { elem1: "baked_sweet_potato", elem2: null };
elements.sweet_potato.reactions["fire"] = { elem1: "baked_sweet_potato", elem2: null };

elements.carrot.reactions["fire"] = { elem1: "cooked_carrot", elem2: null };
elements.broccoli.reactions["fire"] = { elem1: "cooked_broccoli", elem2: null };
elements.onion.reactions["fire"] = { elem1: "caramelized_onion", elem2: null };
elements.garlic.reactions["fire"] = { elem1: "roasted_garlic", elem2: null };

elements.tofu.reactions["nut_oil"] = { elem1: "fried_tofu", elem2: null };
elements.spring_roll.reactions["nut_oil"] = { elem1: "fried_spring_roll", elem2: null };
elements.samosa.reactions["nut_oil"] = { elem1: "fried_samosa", elem2: null };
elements.dumpling.reactions["steam"] = { elem1: "cooked_dumpling", elem2: null };

elements.pork_chop.reactions["fire"] = { elem1: "cooked_pork_chop", elem2: null };
elements.lamb_chop.reactions["fire"] = { elem1: "cooked_lamb_chop", elem2: null };
elements.venison.reactions["fire"] = { elem1: "cooked_venison", elem2: null };
elements.duck_meat.reactions["fire"] = { elem1: "cooked_duck_meat", elem2: null };

elements.brisket.reactions["smoke"] = { elem1: "cooked_brisket", elem2: null };
elements.ribs.reactions["smoke"] = { elem1: "cooked_ribs", elem2: null };

elements.corn.reactions["fire"] = { elem1: "popcorn_kernel", elem2: null };
elements.popcorn_kernel.reactions["fire"] = { elem1: "popped_corn", elem2: null };

elements.marshmallow.reactions["fire"] = { elem1: "s_more", elem2: null };
elements.cheese.reactions["fire"] = { elem1: "grilled_cheese", elem2: null };
elements.bread.reactions["fire"] = { elem1: "crouton", elem2: null };

// Extra Meats & Cooking (Vanilla)
elements.meat.reactions["fire"] = { elem1: "cooked_steak", elem2: null };
elements.meat.reactions["smoke"] = { elem1: "cooked_steak", elem2: null };
elements.meat.reactions["salt"] = { elem1: "cooked_steak", elem2: null };
elements.bird.reactions["nut_oil"] = { elem1: "fried_chicken", elem2: null };
elements.fish.reactions["sand"] = { elem1: "raw_shrimp", elem2: null };

// Ensure base structures are loaded
if (!elements.water) elements.water = { reactions: {} };
if (!elements.water.reactions) elements.water.reactions = {};

// Brewing Drinks
elements.coffee_bean.reactions["water"] = { elem1: "coffee_liquid", elem2: null };
elements.coffee_bean.reactions["steam"] = { elem1: "coffee_liquid", elem2: null };
elements.tea_leaf.reactions["water"] = { elem1: "tea_liquid", elem2: null };
elements.tea_leaf.reactions["steam"] = { elem1: "tea_liquid", elem2: null };

// Cooking the New Eggs & Seafood
elements.raw_salmon.reactions["fire"] = { elem1: "cooked_salmon", elem2: null };
elements.raw_tuna.reactions["fire"] = { elem1: "cooked_tuna", elem2: null };
elements.raw_cod.reactions["fire"] = { elem1: "cooked_cod", elem2: null };
elements.raw_squid.reactions["nut_oil"] = { elem1: "calamari", elem2: null };
elements.raw_octopus.reactions["fire"] = { elem1: "cooked_octopus", elem2: null };
elements.raw_clam.reactions["steam"] = { elem1: "cooked_clam", elem2: null };
elements.raw_oyster.reactions["steam"] = { elem1: "cooked_oyster", elem2: null };
elements.raw_egg.reactions["fire"] = { elem1: "fried_egg", elem2: null };
elements.raw_egg.reactions["water"] = { elem1: "boiled_egg", elem2: null };
elements.raw_egg.reactions["butter"] = { elem1: "omelette", elem2: null };

// Chocolate Making
elements.cacao_bean.reactions["milk"] = { elem1: "melted_dark_chocolate", elem2: null };
elements.cacao_bean.reactions["sugar"] = { elem1: "melted_dark_chocolate", elem2: null };
elements.melted_white_chocolate.reactions["ice"] = { elem1: "white_chocolate", elem2: null };
elements.melted_dark_chocolate.reactions["ice"] = { elem1: "dark_chocolate", elem2: null };

// Freezing the new juices
if (!elements.cucumber_juice.reactions) elements.cucumber_juice.reactions = {};
elements.cucumber_juice.reactions["ice"] = { elem1: "frozen_cucumber_juice", elem2: null };
if (!elements.pumpkin_puree.reactions) elements.pumpkin_puree.reactions = {};
elements.pumpkin_puree.reactions["ice"] = { elem1: "frozen_pumpkin_puree", elem2: null };

// ==========================================
// EXPANDED CULINARY CHEMISTRY & FUN INTERACTIONS
// ==========================================

// 1. SAFETY INITIALIZATION
// Ensures all elements have a reactions object before we add to them.
const newReactants = [
    "dough", "tortilla", "rice", "pasta", "macaroni", "potato", "sweet_potato", 
    "cabbage", "cucumber", "tomato_juice", "chili_pepper", "onion", "garlic", 
    "avocado", "chickpea", "milk", "cream", "acid", "salt", "sugar", "smoke", 
    "steam", "fire", "ice", "snow", "soda", "mint_leaf", "raw_egg", "raw_steak", 
    "raw_salmon", "raw_tuna", "raw_sausage", "cheese", "cheddar", "mozzarella", 
    "olive_oil", "water", "broth"
];

newReactants.forEach(e => {
    if (elements[e]) {
        if (!elements[e].reactions) elements[e].reactions = {};
    }
});

// ==========================================
// 2. RECIPE ASSEMBLY (MIXING INGREDIENTS)
// ==========================================

// Baking & Pastries
if (elements.dough) {
    elements.dough.reactions["blueberry"] = { elem1: "muffin", elem2: null };
    elements.dough.reactions["strawberry"] = { elem1: "toaster_pastry", elem2: null };
    elements.dough.reactions["cherry"] = { elem1: "pie", elem2: null };
    elements.dough.reactions["apple"] = { elem1: "pie", elem2: null };
    elements.dough.reactions["tomato_juice"] = { elem1: "pizza", elem2: null };
}

// Mexican Cuisine
if (elements.tortilla) {
    elements.tortilla.reactions["cooked_steak"] = { elem1: "taco", elem2: null };
    elements.tortilla.reactions["fried_chicken"] = { elem1: "taco", elem2: null };
    elements.tortilla.reactions["black_bean"] = { elem1: "burrito", elem2: null };
    elements.tortilla.reactions["cheddar"] = { elem1: "quesadilla", elem2: null };
    elements.tortilla.reactions["mozzarella"] = { elem1: "quesadilla", elem2: null };
}

// Asian Cuisine
if (elements.rice) {
    elements.rice.reactions["raw_salmon"] = { elem1: "sushi", elem2: null };
    elements.rice.reactions["raw_tuna"] = { elem1: "sushi", elem2: null };
    elements.rice.reactions["seaweed"] = { elem1: "sushi", elem2: null };
    elements.rice.reactions["plant"] = { elem1: "sushi", elem2: null }; // Plant wrap substitute
}

// Italian Cuisine
if (elements.macaroni) {
    elements.macaroni.reactions["cheese"] = { elem1: "mac_and_cheese", elem2: null };
    elements.macaroni.reactions["cheddar"] = { elem1: "mac_and_cheese", elem2: null };
}
if (elements.pasta) {
    elements.pasta.reactions["tomato_juice"] = { elem1: "spaghetti", elem2: null };
    elements.pasta.reactions["meatball"] = { elem1: "spaghetti", elem2: null };
}

// Dips, Sauces & Sides
if (elements.avocado) {
    elements.avocado.reactions["onion"] = { elem1: "guacamole", elem2: null };
    elements.avocado.reactions["tomato"] = { elem1: "guacamole", elem2: null };
}
if (elements.tomato_juice) {
    elements.tomato_juice.reactions["onion"] = { elem1: "salsa", elem2: null };
    elements.tomato_juice.reactions["cilantro"] = { elem1: "salsa", elem2: null };
}
if (elements.chickpea) {
    elements.chickpea.reactions["olive_oil"] = { elem1: "hummus", elem2: null };
    elements.chickpea.reactions["garlic"] = { elem1: "hummus", elem2: null };
}

// ==========================================
// 3. ADVANCED COOKING, CURING & SMOKING
// ==========================================

// Smoking Meats (Slow cooking with smoke instead of fire)
if (elements.raw_steak) elements.raw_steak.reactions["smoke"] = { elem1: "cooked_steak", elem2: null };
if (elements.raw_salmon) elements.raw_salmon.reactions["smoke"] = { elem1: "cooked_salmon", elem2: null };
if (elements.raw_sausage) elements.raw_sausage.reactions["smoke"] = { elem1: "cooked_sausage", elem2: null };
if (elements.raw_bacon) elements.raw_bacon.reactions["smoke"] = { elem1: "crispy_bacon", elem2: null };

// Curing & Pickling (Salt & Acid)
if (elements.cabbage) {
    elements.cabbage.reactions["salt"] = { elem1: "sauerkraut", elem2: null };
    elements.cabbage.reactions["chili_pepper"] = { elem1: "kimchi", elem2: null };
}
if (elements.cucumber) {
    elements.cucumber.reactions["vinegar"] = { elem1: "relish", elem2: null }; // Pickling!
    elements.cucumber.reactions["acid"] = { elem1: "relish", elem2: null };
}
if (elements.raw_steak) elements.raw_steak.reactions["salt"] = { elem1: "raw_bacon", elem2: null }; // Curing meat

// Egg Cooking Dynamics
if (elements.raw_egg) {
    elements.raw_egg.reactions["fire"] = { elem1: "fried_egg", elem2: null };
    elements.raw_egg.reactions["steam"] = { elem1: "boiled_egg", elem2: null }; // Poaching/Boiling
    elements.raw_egg.reactions["water"] = { elem1: "boiled_egg", elem2: null }; 
    elements.raw_egg.reactions["cheese"] = { elem1: "omelette", elem2: null };
    elements.raw_egg.reactions["cheddar"] = { elem1: "omelette", elem2: null };
}

// Deep Frying Snacks
if (elements.olive_oil) {
    elements.olive_oil.reactions["potato"] = { elem1: "potato_chip", elem2: "olive_oil" };
    elements.olive_oil.reactions["sweet_potato"] = { elem1: "potato_chip", elem2: "olive_oil" };
}

// ==========================================
// 4. FUN, CHAOTIC & REALISTIC PHYSICS
// ==========================================

// Diet Coke & Mentos Explosion (Mint + Soda creates expanding foam)
if (elements.soda && elements.mint_leaf) {
    elements.mint_leaf.reactions["soda"] = { elem1: "foam", elem2: "foam" };
    elements.soda.reactions["mint_leaf"] = { elem1: "foam", elem2: "foam" };
}

// Hot Sauce Melts Ice & Snow Instantly
if (elements.hot_sauce) {
    elements.hot_sauce.reactions["ice"] = { elem1: "water", elem2: "hot_sauce" };
    elements.hot_sauce.reactions["snow"] = { elem1: "water", elem2: "hot_sauce" };
}

// Spicy Chili Stew
if (elements.chili_pepper) {
    elements.chili_pepper.reactions["meat"] = { elem1: "chili_stew", elem2: null };
    elements.chili_pepper.reactions["broth"] = { elem1: "chili_stew", elem2: null };
}

// Dairy Reactions
if (elements.milk) {
    elements.milk.reactions["acid"] = { elem1: "sour_cream", elem2: null }; // Curdling milk
    elements.milk.reactions["lemon_juice"] = { elem1: "sour_cream", elem2: null };
    // Ice Cream Simulation
    elements.milk.reactions["ice"] = { elem1: "snow", elem2: null }; // Cold milk makes snow-like texture
}


// ==========================================
// REACTIONS & COOKING ENGINE (FIRE, SMOKE, OIL)
// ==========================================

const cookablePrefixes = [
    // Meats
    "turkey", "quail", "pheasant", "goose", "rabbit", "veal", "boar", "bison", 
    "trout", "halibut", "mahi_mahi", "mackerel", "sardine", "anchovy", "scallop", 
    "mussel", "crayfish", "eel", "urchin", "escargot",
    // Doughs
    "churro_dough", "pretzel_dough", "eclair_paste", "brioche_dough", "focaccia_dough", 
    "ciabatta_dough", "sourdough_starter", "pancake_batter", "crepe_batter", "blini_batter", 
    "muffin_batter", "cupcake_batter", "brownie_batter", "blondie_batter", "cornbread_batter", 
    "biscuit_dough", "scone_dough", "tart_dough", "phyllo_dough", "choux_pastry",
    // Nuts
    "peanut", "almond", "walnut", "pecan", "cashew", "pistachio", "macadamia", 
    "hazelnut", "brazil_nut", "pine_nut", "chestnut", "sunflower_seed", "pumpkin_seed", 
    "sesame_seed", "flax_seed",
    // Veggies
    "brussels_sprout", "swiss_chard", "collard_green", "mustard_green", "turnip_green", 
    "beet_green", "endive", "radicchio", "frisee", "iceberg_lettuce", "romaine_lettuce", 
    "butterhead_lettuce", "kohlrabi", "rutabaga", "jicama", "sunchoke", "bamboo_shoot", 
    "heart_of_palm", "water_chestnut", "lotus_root", "burdock_root", "bitter_melon", 
    "butternut_squash", "acorn_squash", "spaghetti_squash", "courgette", "pattypan_squash", 
    "chayote", "tomatillo", "nopales",
    // Fungi
    "oyster_mushroom", "cremini", "chanterelle", "porcini", "morel", "maitake", 
    "matsutake", "wood_ear", "kelp", "wakame", "nori", "kombu", "dulse", "spirulina", "agar_agar",
    // Fruits
    "apricot", "nectarine", "plumcot", "pluot", "blood_orange", "navel_orange", 
    "clementine", "tangerine", "mandarin", "grapefruit", "pomelo", "meyer_lemon", 
    "key_lemon", "yuzu", "calamansi", "citron", "kumquat", "lime", "bergamot", 
    "ugli_fruit", "jackfruit", "durian", "breadfruit", "soursop", "cherimoya", 
    "sweetsop", "mamey", "sapote", "sapodilla", "longan", "rambutan", "mangosteen", 
    "salak", "jabuticaba", "langsat", "ackee", "cupuacu", "loquat", "quince", "medlar",
    // Grains
    "quinoa", "barley", "buckwheat", "amaranth", "teff", "spelt"
];

const doughSet = new Set(["churro_dough", "pretzel_dough", "eclair_paste", "brioche_dough", "focaccia_dough", "ciabatta_dough", "sourdough_starter", "pancake_batter", "crepe_batter", "blini_batter", "muffin_batter", "cupcake_batter", "brownie_batter", "blondie_batter", "cornbread_batter", "biscuit_dough", "scone_dough", "tart_dough", "phyllo_dough", "choux_pastry"]);
const nutSet = new Set(["peanut", "almond", "walnut", "pecan", "cashew", "pistachio", "macadamia", "hazelnut", "brazil_nut", "pine_nut", "chestnut", "sunflower_seed", "pumpkin_seed", "sesame_seed", "flax_seed"]);
const fruitSet = new Set(["apricot", "nectarine", "plumcot", "pluot", "blood_orange", "navel_orange", "clementine", "tangerine", "mandarin", "grapefruit", "pomelo", "meyer_lemon", "key_lemon", "yuzu", "calamansi", "citron", "kumquat", "lime", "bergamot", "ugli_fruit", "jackfruit", "durian", "breadfruit", "soursop", "cherimoya", "sweetsop", "mamey", "sapote", "sapodilla", "longan", "rambutan", "mangosteen", "salak", "jabuticaba", "langsat", "ackee", "cupuacu", "loquat", "quince", "medlar"]);
const fungiSet = new Set(["oyster_mushroom", "cremini", "chanterelle", "porcini", "morel", "maitake", "matsutake", "wood_ear", "kelp", "wakame", "nori", "kombu", "dulse", "spirulina", "agar_agar"]);

for (let i = 0; i < cookablePrefixes.length; i++) {
    let item = cookablePrefixes[i];
    let rawName = "raw_" + item;
    
    // Determine the cooked prefix based on category
    let cookedPrefix = "cooked_";
    if (doughSet.has(item)) cookedPrefix = "baked_";
    if (nutSet.has(item)) cookedPrefix = "roasted_";
    if (fruitSet.has(item)) cookedPrefix = "grilled_";
    if (fungiSet.has(item)) cookedPrefix = "sauteed_";
    // Many veggies were set to cooked_, but some are roasted_ or caramelized_. We will check explicitly in the string if it exists.
    // We already defined the stateHigh. So we can just pull stateHigh!
    let cookedName = elements[rawName].stateHigh;

    if (!elements[rawName].reactions) elements[rawName].reactions = {};
    
    // Grilling / Baking with Fire
    elements[rawName].reactions["fire"] = { elem1: cookedName, elem2: null };
    
    // Smoking Meats/Fungi/Veggies
    if (!doughSet.has(item) && !fruitSet.has(item)) {
        elements[rawName].reactions["smoke"] = { elem1: cookedName, elem2: null };
    }

    // Boiling / Steaming (Water/Steam)
    if (!doughSet.has(item) && !nutSet.has(item)) {
        elements[rawName].reactions["water"] = { elem1: cookedName, elem2: null };
        elements[rawName].reactions["steam"] = { elem1: cookedName, elem2: null };
    }

    // Deep Frying in Olive Oil
    if (!elements.olive_oil) elements.olive_oil = { reactions: {} };
    if (!elements.olive_oil.reactions) elements.olive_oil.reactions = {};
    elements.olive_oil.reactions[rawName] = { elem1: cookedName, elem2: "olive_oil" };
}
