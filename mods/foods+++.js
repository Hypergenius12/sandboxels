// ==========================================
// THE ULTIMATE CULINARY MOD - 100% MANUAL EDITION
// Perfectly Sorted | Accurate Colors | Common Foods | Native Smashing
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
// 1. MEATS, POULTRY & SEAFOOD (Raw -> Cooked)
// ==========================================
elements.raw_steak = {color:"#b83737", behavior:W, category:F, state:"solid", density:1050, tempHigh:100, stateHigh:"cooked_steak", tempLow:-5, stateLow:"frozen_raw_steak"};
elements.frozen_raw_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_steak"};
elements.cooked_steak = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_steak"};
elements.frozen_cooked_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_steak"};

elements.raw_chicken = {color:"#ffcccc", behavior:W, category:F, state:"solid", density:1020, tempHigh:110, stateHigh:"cooked_chicken", tempLow:-5, stateLow:"frozen_raw_chicken"};
elements.frozen_raw_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"raw_chicken"};
elements.cooked_chicken = {color:"#d2a679", behavior:W, category:F, state:"solid", density:950, tempHigh:230, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_chicken"};
elements.frozen_cooked_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_chicken"};

elements.raw_pork = {color:"#ffb6c1", behavior:W, category:F, state:"solid", density:1040, tempHigh:110, stateHigh:"cooked_pork", tempLow:-5, stateLow:"frozen_raw_pork"};
elements.frozen_raw_pork = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"raw_pork"};
elements.cooked_pork = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:960, tempHigh:230, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_pork"};
elements.frozen_cooked_pork = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:960, tempHigh:10, stateHigh:"cooked_pork"};

elements.raw_bacon = {color:"#fa8072", behavior:W, category:F, state:"solid", density:1050, tempHigh:120, stateHigh:"crispy_bacon", tempLow:-5, stateLow:"frozen_raw_bacon"};
elements.frozen_raw_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_bacon"};
elements.crispy_bacon = {color:"#8b4513", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crispy_bacon"};
elements.frozen_crispy_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"crispy_bacon"};

elements.raw_sausage = {color:"#c77d7d", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_sausage", tempLow:-5, stateLow:"frozen_raw_sausage"};
elements.frozen_raw_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_sausage"};
elements.cooked_sausage = {color:"#8b5a2b", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_sausage"};
elements.frozen_cooked_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"cooked_sausage"};

elements.raw_salmon = {color:"#ff7e67", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_salmon", tempLow:-5, stateLow:"frozen_raw_salmon"};
elements.frozen_raw_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_salmon"};
elements.cooked_salmon = {color:"#f8b8a8", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_salmon"};
elements.frozen_cooked_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_salmon"};

elements.raw_tuna = {color:"#ff6347", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_tuna", tempLow:-5, stateLow:"frozen_raw_tuna"};
elements.frozen_raw_tuna = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_tuna"};
elements.cooked_tuna = {color:"#cd5c5c", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_tuna"};
elements.frozen_cooked_tuna = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_tuna"};

elements.raw_shrimp = {color:"#d9d9d9", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_shrimp", tempLow:-5, stateLow:"frozen_raw_shrimp"};
elements.frozen_raw_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_shrimp"};
elements.cooked_shrimp = {color:"#ff7f50", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_shrimp"};
elements.frozen_cooked_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_shrimp"};

elements.raw_crab = {color:"#a52a2a", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"cooked_crab", tempLow:-5, stateLow:"frozen_raw_crab"};
elements.frozen_raw_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_crab"};
elements.cooked_crab = {color:"#ff4500", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_crab"};
elements.frozen_cooked_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_crab"};

elements.raw_squab = {color:"#d98880", behavior:W, category:F, state:"solid", density:1010, tempHigh:110, stateHigh:"cooked_squab", tempLow:-5, stateLow:"frozen_raw_squab"};
elements.frozen_raw_squab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"raw_squab"};
elements.cooked_squab = {color:"#a65c5c", behavior:W, category:F, state:"solid", density:940, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_squab"};
elements.frozen_cooked_squab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:940, tempHigh:10, stateHigh:"cooked_squab"};

elements.raw_guinea_fowl = {color:"#e6b3b3", behavior:W, category:F, state:"solid", density:1020, tempHigh:110, stateHigh:"cooked_guinea_fowl", tempLow:-5, stateLow:"frozen_raw_guinea_fowl"};
elements.frozen_raw_guinea_fowl = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"raw_guinea_fowl"};
elements.cooked_guinea_fowl = {color:"#b37777", behavior:W, category:F, state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_guinea_fowl"};
elements.frozen_cooked_guinea_fowl = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_guinea_fowl"};

elements.raw_grouse = {color:"#cc7a7a", behavior:W, category:F, state:"solid", density:1030, tempHigh:110, stateHigh:"cooked_grouse", tempLow:-5, stateLow:"frozen_raw_grouse"};
elements.frozen_raw_grouse = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"raw_grouse"};
elements.cooked_grouse = {color:"#994d4d", behavior:W, category:F, state:"solid", density:960, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_grouse"};
elements.frozen_cooked_grouse = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:960, tempHigh:10, stateHigh:"cooked_grouse"};

elements.raw_partridge = {color:"#d99090", behavior:W, category:F, state:"solid", density:1025, tempHigh:110, stateHigh:"cooked_partridge", tempLow:-5, stateLow:"frozen_raw_partridge"};
elements.frozen_raw_partridge = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1025, tempHigh:10, stateHigh:"raw_partridge"};
elements.cooked_partridge = {color:"#a65959", behavior:W, category:F, state:"solid", density:955, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_partridge"};
elements.frozen_cooked_partridge = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:955, tempHigh:10, stateHigh:"cooked_partridge"};

elements.raw_woodcock = {color:"#e09999", behavior:W, category:F, state:"solid", density:1015, tempHigh:110, stateHigh:"cooked_woodcock", tempLow:-5, stateLow:"frozen_raw_woodcock"};
elements.frozen_raw_woodcock = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1015, tempHigh:10, stateHigh:"raw_woodcock"};
elements.cooked_woodcock = {color:"#b36666", behavior:W, category:F, state:"solid", density:945, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_woodcock"};
elements.frozen_cooked_woodcock = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:945, tempHigh:10, stateHigh:"cooked_woodcock"};

elements.raw_ostrich = {color:"#a32e2e", behavior:W, category:F, state:"solid", density:1060, tempHigh:110, stateHigh:"cooked_ostrich", tempLow:-5, stateLow:"frozen_raw_ostrich"};
elements.frozen_raw_ostrich = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"raw_ostrich"};
elements.cooked_ostrich = {color:"#661a1a", behavior:W, category:F, state:"solid", density:990, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_ostrich"};
elements.frozen_cooked_ostrich = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:990, tempHigh:10, stateHigh:"cooked_ostrich"};

elements.raw_emu = {color:"#b84d4d", behavior:W, category:F, state:"solid", density:1050, tempHigh:110, stateHigh:"cooked_emu", tempLow:-5, stateLow:"frozen_raw_emu"};
elements.frozen_raw_emu = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_emu"};
elements.cooked_emu = {color:"#802b2b", behavior:W, category:F, state:"solid", density:980, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_emu"};
elements.frozen_cooked_emu = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"cooked_emu"};

elements.raw_alligator = {color:"#e6e6fa", behavior:W, category:F, state:"solid", density:1080, tempHigh:110, stateHigh:"cooked_alligator", tempLow:-5, stateLow:"frozen_raw_alligator"};
elements.frozen_raw_alligator = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"raw_alligator"};
elements.cooked_alligator = {color:"#b0c4de", behavior:W, category:F, state:"solid", density:1010, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_alligator"};
elements.frozen_cooked_alligator = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"cooked_alligator"};

elements.raw_kangaroo = {color:"#cd5c5c", behavior:W, category:F, state:"solid", density:1070, tempHigh:110, stateHigh:"cooked_kangaroo", tempLow:-5, stateLow:"frozen_raw_kangaroo"};
elements.frozen_raw_kangaroo = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1070, tempHigh:10, stateHigh:"raw_kangaroo"};
elements.cooked_kangaroo = {color:"#8b0000", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_kangaroo"};
elements.frozen_cooked_kangaroo = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"cooked_kangaroo"};

elements.raw_camel = {color:"#a0522d", behavior:W, category:F, state:"solid", density:1090, tempHigh:110, stateHigh:"cooked_camel", tempLow:-5, stateLow:"frozen_raw_camel"};
elements.frozen_raw_camel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1090, tempHigh:10, stateHigh:"raw_camel"};
elements.cooked_camel = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:1020, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_camel"};
elements.frozen_cooked_camel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"cooked_camel"};

elements.raw_egg = {color:"#ffefd5", behavior:L, category:F, breakInto:"water", state:"liquid", density:1030, tempHigh:80, stateHigh:"fried_egg", tempLow:-5, stateLow:"frozen_raw_egg"};
elements.frozen_raw_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"raw_egg"};
elements.fried_egg = {color:"#ffffff", behavior:W, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_egg"};
elements.frozen_fried_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"fried_egg"};
elements.boiled_egg = {color:"#fdf5e6", behavior:SP, category:F, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_egg"};
elements.frozen_boiled_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"boiled_egg"};
elements.omelette = {color:"#ffd700", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_omelette"};
elements.frozen_omelette = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"omelette"};

// ==========================================
// 2. FRUITS (Natively smash into Juices)
// ==========================================
elements.apple = {color:"#ff0800", behavior:P, category:F, breakInto:"apple_juice", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_apple"};
elements.frozen_apple = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"apple"};
elements.banana = {color:"#ffe135", behavior:P, category:F, breakInto:"banana_puree", state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_banana"};
elements.frozen_banana = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"banana"};
elements.orange = {color:"#ffa500", behavior:P, category:F, breakInto:"orange_juice", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_orange"};
elements.frozen_orange = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"orange"};
elements.lemon = {color:"#fff700", behavior:P, category:F, breakInto:"lemon_juice", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lemon"};
elements.frozen_lemon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"lemon"};
elements.lime = {color:"#32cd32", behavior:P, category:F, breakInto:"lime_juice", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lime"};
elements.frozen_lime = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"lime"};
elements.strawberry = {color:"#fc5a8d", behavior:P, category:F, breakInto:"strawberry_juice", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_strawberry"};
elements.frozen_strawberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"strawberry"};
elements.blueberry = {color:"#4f86f7", behavior:P, category:F, breakInto:"blueberry_juice", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blueberry"};
elements.frozen_blueberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:620, tempHigh:10, stateHigh:"blueberry"};
elements.blackberry = {color:"#43182F", behavior:P, category:F, breakInto:"blackberry_juice", state:"solid", density:630, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blackberry"};
elements.frozen_blackberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"blackberry"};
elements.raspberry = {color:"#E30B5D", behavior:P, category:F, breakInto:"raspberry_juice", state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_raspberry"};
elements.frozen_raspberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"raspberry"};
elements.grape = {color:"#6f2da8", behavior:P, category:F, breakInto:"grape_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grape"};
elements.frozen_grape = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"grape"};
elements.watermelon = {color:"#fc6c85", behavior:P, category:F, breakInto:"watermelon_juice", state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_watermelon"};
elements.frozen_watermelon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"watermelon"};
elements.peach = {color:"#ffe5b4", behavior:P, category:F, breakInto:"peach_juice", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peach"};
elements.frozen_peach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"peach"};
elements.cherry = {color:"#d2042d", behavior:P, category:F, breakInto:"cherry_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cherry"};
elements.frozen_cherry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"cherry"};
elements.plum = {color:"#8E4585", behavior:P, category:F, breakInto:"plum_juice", state:"solid", density:710, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_plum"};
elements.frozen_plum = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"plum"};
elements.pineapple = {color:"#fada5e", behavior:P, category:F, breakInto:"pineapple_juice", state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pineapple"};
elements.frozen_pineapple = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"pineapple"};
elements.mango = {color:"#ffc324", behavior:P, category:F, breakInto:"mango_juice", state:"solid", density:740, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mango"};
elements.frozen_mango = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:740, tempHigh:10, stateHigh:"mango"};
elements.coconut = {color:"#4d3227", behavior:W, category:F, breakInto:["coconut_water", "coconut_water", "wood"], state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_coconut"};
elements.frozen_coconut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"coconut"};
elements.kiwi = {color:"#8EE53F", behavior:P, category:F, breakInto:"kiwi_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_kiwi"};
elements.frozen_kiwi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"kiwi"};
elements.pomegranate = {color:"#C21E56", behavior:P, category:F, breakInto:"pomegranate_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pomegranate"};
elements.frozen_pomegranate = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:720, tempHigh:10, stateHigh:"pomegranate"};
elements.cranberry = {color:"#8B0000", behavior:P, category:F, breakInto:"cranberry_juice", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cranberry"};
elements.frozen_cranberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"cranberry"};
elements.avocado = {color:"#568203", behavior:P, category:F, breakInto:"avocado_oil", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_avocado"};
elements.frozen_avocado = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"avocado"};

// ==========================================
// 3. VEGETABLES (Base -> Cooked, Break into water/juice natively)
// ==========================================
elements.carrot = {color:"#ed9121", behavior:P, category:F, breakInto:"carrot_juice", state:"solid", density:800, tempHigh:110, stateHigh:"cooked_carrot", tempLow:-5, stateLow:"frozen_carrot"};
elements.frozen_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"carrot"};
elements.cooked_carrot = {color:"#cc7722", behavior:SP, category:F, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_carrot"};
elements.frozen_cooked_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cooked_carrot"};

elements.broccoli = {color:"#4c9141", behavior:P, category:F, breakInto:"water", state:"solid", density:500, tempHigh:110, stateHigh:"cooked_broccoli", tempLow:-5, stateLow:"frozen_broccoli"};
elements.frozen_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"broccoli"};
elements.cooked_broccoli = {color:"#3b7033", behavior:SP, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_broccoli"};
elements.frozen_cooked_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"cooked_broccoli"};

elements.onion = {color:"#dda0dd", behavior:P, category:F, breakInto:"water", state:"solid", density:650, tempHigh:110, stateHigh:"caramelized_onion", tempLow:-5, stateLow:"frozen_onion"};
elements.frozen_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"onion"};
elements.caramelized_onion = {color:"#a0522d", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_caramelized_onion"};
elements.frozen_caramelized_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"caramelized_onion"};

elements.garlic = {color:"#f0e68c", behavior:P, category:F, breakInto:"water", state:"solid", density:680, tempHigh:110, stateHigh:"roasted_garlic", tempLow:-5, stateLow:"frozen_garlic"};
elements.frozen_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"garlic"};
elements.roasted_garlic = {color:"#deb887", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_garlic"};
elements.frozen_roasted_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"roasted_garlic"};

elements.tomato = {color:"#ff6347", behavior:P, category:F, breakInto:"tomato_juice", state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tomato"};
elements.frozen_tomato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"tomato"};

elements.lettuce = {color:"#87a96b", behavior:P, category:F, breakInto:"water", state:"solid", density:300, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lettuce"};
elements.frozen_lettuce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:300, tempHigh:10, stateHigh:"lettuce"};

elements.spinach = {color:"#3f704d", behavior:P, category:F, breakInto:"water", state:"solid", density:350, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_spinach"};
elements.frozen_spinach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"spinach"};

elements.celery = {color:"#d0ff14", behavior:P, category:F, breakInto:"water", state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_celery"};
elements.frozen_celery = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"celery"};

elements.bell_pepper = {color:"#e34234", behavior:P, category:F, breakInto:"water", state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bell_pepper"};
elements.frozen_bell_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"bell_pepper"};

elements.chili_pepper = {color:"#c21807", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chili_pepper"};
elements.frozen_chili_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"chili_pepper"};

elements.olive = {color:"#808000", behavior:P, category:F, breakInto:"olive_oil", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_olive"};
elements.frozen_olive = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"olive"};

elements.cucumber = {color:"#006400", behavior:P, category:F, breakInto:"water", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cucumber"};
elements.frozen_cucumber = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"cucumber"};

elements.zucchini = {color:"#5c7148", behavior:P, category:F, breakInto:"water", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_zucchini"};
elements.frozen_zucchini = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"zucchini"};

elements.eggplant = {color:"#483248", behavior:P, category:F, breakInto:"water", state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_eggplant"};
elements.frozen_eggplant = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"eggplant"};

elements.pumpkin = {color:"#ff8c00", behavior:W, category:F, breakInto:"water", state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pumpkin"};
elements.frozen_pumpkin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"pumpkin"};

elements.mushroom = {color:"#f5deb3", behavior:P, category:F, breakInto:"water", state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mushroom"};
elements.frozen_mushroom = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"mushroom"};

elements.cabbage = {color:"#87a96b", behavior:P, category:F, breakInto:"water", state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cabbage"};
elements.frozen_cabbage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"cabbage"};

elements.potato = {color:"#deb887", behavior:P, category:F, breakInto:"water", state:"solid", density:850, tempHigh:110, stateHigh:"baked_potato", tempLow:-5, stateLow:"frozen_potato"};
elements.frozen_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"potato"};
elements.baked_potato = {color:"#8B4513", behavior:W, category:F, state:"solid", density:750, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_potato"};
elements.frozen_baked_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"baked_potato"};

elements.sweet_potato = {color:"#D2691E", behavior:P, category:F, breakInto:"water", state:"solid", density:850, tempHigh:150, stateHigh:"baked_sweet_potato", tempLow:-5, stateLow:"frozen_sweet_potato"};
elements.frozen_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"sweet_potato"};
elements.baked_sweet_potato = {color:"#8B4513", behavior:W, category:F, state:"solid", density:750, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_sweet_potato"};
elements.frozen_baked_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"baked_sweet_potato"};

// Piment / Peppers
elements.caper = {color:"#556b2f", behavior:P, category:F, breakInto:"water", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_caper"};
elements.frozen_caper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"caper"};
elements.gherkin = {color:"#228b22", behavior:P, category:F, breakInto:"water", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gherkin"};
elements.frozen_gherkin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"gherkin"};
elements.serrano = {color:"#008000", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_serrano"};
elements.frozen_serrano = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"serrano"};
elements.poblano = {color:"#006400", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:520, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_poblano"};
elements.frozen_poblano = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:520, tempHigh:10, stateHigh:"poblano"};
elements.scotch_bonnet = {color:"#ffa500", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:480, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_scotch_bonnet"};
elements.frozen_scotch_bonnet = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:480, tempHigh:10, stateHigh:"scotch_bonnet"};
elements.carolina_reaper = {color:"#ff0000", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_carolina_reaper"};
elements.frozen_carolina_reaper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"carolina_reaper"};
elements.shishito = {color:"#9acd32", behavior:P, category:F, breakInto:"water", state:"solid", density:490, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_shishito"};
elements.frozen_shishito = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:490, tempHigh:10, stateHigh:"shishito"};
elements.peppadew = {color:"#dc143c", behavior:P, category:F, breakInto:"water", state:"solid", density:510, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peppadew"};
elements.frozen_peppadew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:510, tempHigh:10, stateHigh:"peppadew"};
elements.padron = {color:"#6b8e23", behavior:P, category:F, breakInto:"water", state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_padron"};
elements.frozen_padron = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"padron"};
elements.sweet_pepper = {color:"#ff8c00", behavior:P, category:F, breakInto:"water", state:"solid", density:530, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sweet_pepper"};
elements.frozen_sweet_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:530, tempHigh:10, stateHigh:"sweet_pepper"};
elements.sport_pepper = {color:"#7cfc00", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:480, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sport_pepper"};
elements.frozen_sport_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:480, tempHigh:10, stateHigh:"sport_pepper"};
elements.cherry_pepper = {color:"#b22222", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:510, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cherry_pepper"};
elements.frozen_cherry_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:510, tempHigh:10, stateHigh:"cherry_pepper"};
elements.banana_pepper = {color:"#ffd700", behavior:P, category:F, breakInto:"water", state:"solid", density:520, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_banana_pepper"};
elements.frozen_banana_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:520, tempHigh:10, stateHigh:"banana_pepper"};
elements.fresno_pepper = {color:"#ff4500", behavior:P, category:F, breakInto:"hot_sauce", state:"solid", density:490, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fresno_pepper"};
elements.frozen_fresno_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:490, tempHigh:10, stateHigh:"fresno_pepper"};
elements.pimento = {color:"#cd5c5c", behavior:P, category:F, breakInto:"water", state:"solid", density:540, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pimento"};
elements.frozen_pimento = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:540, tempHigh:10, stateHigh:"pimento"};

// ==========================================
// 4. NUTS & SPICES (Break into oils or burn)
// ==========================================
elements.peanut = {color:"#d2b48c", behavior:P, category:F, breakInto:"peanut_butter", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peanut"};
elements.frozen_peanut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"peanut"};
elements.almond = {color:"#ffebcd", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_almond"};
elements.frozen_almond = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:610, tempHigh:10, stateHigh:"almond"};
elements.walnut = {color:"#8b4513", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_walnut"};
elements.frozen_walnut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"walnut"};
elements.pecan = {color:"#a0522d", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:580, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pecan"};
elements.frozen_pecan = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:580, tempHigh:10, stateHigh:"pecan"};
elements.cashew = {color:"#f5deb3", behavior:P, category:F, breakInto:"nut_oil", state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cashew"};
elements.frozen_cashew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:620, tempHigh:10, stateHigh:"cashew"};

elements.cinnamon = {color:"#d2691e", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cinnamon"};
elements.frozen_cinnamon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"cinnamon"};
elements.nutmeg = {color:"#8b4513", behavior:P, category:F, state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_nutmeg"};
elements.frozen_nutmeg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"nutmeg"};
elements.black_pepper = {color:"#2f4f4f", behavior:P, category:F, state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_black_pepper"};
elements.frozen_black_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"black_pepper"};
elements.paprika = {color:"#ff4500", behavior:P, category:F, state:"solid", density:420, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_paprika"};
elements.frozen_paprika = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:420, tempHigh:10, stateHigh:"paprika"};
elements.ginger_powder = {color:"#f5deb3", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ginger_powder"};
elements.frozen_ginger_powder = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"ginger_powder"};

// ==========================================
// 5. DAIRY & CHEESES
// ==========================================
elements.provolone = {color:"#fffff0", behavior:W, category:F, state:"solid", density:950, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_provolone"};
elements.frozen_provolone = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"provolone"};
elements.camembert = {color:"#fffacd", behavior:SP, category:F, state:"solid", density:920, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_camembert"};
elements.frozen_camembert = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:920, tempHigh:10, stateHigh:"camembert"};
elements.ricotta = {color:"#f8f8ff", behavior:SP, category:F, state:"solid", density:1000, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ricotta"};
elements.frozen_ricotta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"ricotta"};
elements.halloumi = {color:"#fff8dc", behavior:W, category:F, state:"solid", density:960, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_halloumi"};
elements.frozen_halloumi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:960, tempHigh:10, stateHigh:"halloumi"};
elements.paneer = {color:"#ffefd5", behavior:W, category:F, state:"solid", density:940, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_paneer"};
elements.frozen_paneer = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:940, tempHigh:10, stateHigh:"paneer"};
elements.mascarpone = {color:"#fffaf0", behavior:SP, category:F, state:"solid", density:1020, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mascarpone"};
elements.frozen_mascarpone = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"mascarpone"};
elements.roquefort = {color:"#b0e0e6", behavior:W, category:F, state:"solid", density:950, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roquefort"};
elements.frozen_roquefort = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"roquefort"};
elements.gorgonzola = {color:"#add8e6", behavior:SP, category:F, state:"solid", density:960, tempHigh:180, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gorgonzola"};
elements.frozen_gorgonzola = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:960, tempHigh:10, stateHigh:"gorgonzola"};
elements.gruyere = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:980, tempHigh:200, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gruyere"};
elements.frozen_gruyere = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"gruyere"};
elements.pecorino = {color:"#ffdead", behavior:W, category:F, state:"solid", density:1010, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pecorino"};
elements.frozen_pecorino = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"pecorino"};

elements.butter_stick = {color:"#fafad2", behavior:W, category:F, state:"solid", density:910, tempHigh:35, stateHigh:"grease", tempLow:-5, stateLow:"frozen_butter_stick"};
elements.frozen_butter_stick = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:910, tempHigh:10, stateHigh:"butter_stick"};
elements.heavy_cream = {color:"#fffff0", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_heavy_cream"};
elements.frozen_heavy_cream = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"heavy_cream"};
elements.buttermilk = {color:"#fdf5e6", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_buttermilk"};
elements.frozen_buttermilk = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"buttermilk"};
elements.condensed_milk = {color:"#ffe4b5", behavior:L, category:F, state:"liquid", density:1300, viscosity: 60000, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_condensed_milk"};
elements.frozen_condensed_milk = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1300, tempHigh:10, stateHigh:"condensed_milk"};

// ==========================================
// 6. BAKED GOODS & SWEETS
// ==========================================
elements.bagel = {color:"#eedc82", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bagel"};
elements.frozen_bagel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"bagel"};
elements.croissant = {color:"#c49a45", behavior:W, category:F, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_croissant"};
elements.frozen_croissant = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"croissant"};
elements.muffin = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_muffin"};
elements.frozen_muffin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"muffin"};
elements.biscuit = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_biscuit"};
elements.frozen_biscuit = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"biscuit"};
elements.pretzel = {color:"#8b4513", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pretzel"};
elements.frozen_pretzel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"pretzel"};
elements.pancake = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pancake"};
elements.frozen_pancake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"pancake"};
elements.waffle = {color:"#deb887", behavior:W, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_waffle"};
elements.frozen_waffle = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"waffle"};
elements.cookie = {color:"#8b4513", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cookie"};
elements.frozen_cookie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"cookie"};
elements.brownie = {color:"#3e1e04", behavior:W, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_brownie"};
elements.frozen_brownie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"brownie"};
elements.pie = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pie"};
elements.frozen_pie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"pie"};
elements.donut = {color:"#d2691e", behavior:W, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_donut"};
elements.frozen_donut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"donut"};
elements.cake = {color:"#f4a460", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cake"};
elements.frozen_cake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"cake"};
elements.cupcake = {color:"#ffc0cb", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cupcake"};
elements.frozen_cupcake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"cupcake"};
elements.macaron = {color:"#ffb6c1", behavior:W, category:F, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_macaron"};
elements.frozen_macaron = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"macaron"};
elements.fudge = {color:"#2b1b10", behavior:W, category:F, state:"solid", density:1200, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fudge"};
elements.frozen_fudge = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1200, tempHigh:10, stateHigh:"fudge"};
elements.cotton_candy = {color:"#ffb7c5", behavior:SP, category:F, breakInto:"sugar", state:"solid", density:100, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cotton_candy"};
elements.frozen_cotton_candy = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:100, tempHigh:10, stateHigh:"cotton_candy"};
elements.chocolate_bar = {color:"#3b2f2f", behavior:W, category:F, state:"solid", density:1300, tempHigh:45, stateHigh:"chocolate_syrup", tempLow:-5, stateLow:"frozen_chocolate_bar"};
elements.frozen_chocolate_bar = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1300, tempHigh:10, stateHigh:"chocolate_bar"};
elements.gummy_bear = {color:"#ff69b4", behavior:W, category:F, state:"solid", density:900, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gummy_bear"};
elements.frozen_gummy_bear = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"gummy_bear"};

elements.truffle_candy = {color:"#3b2f2f", behavior:W, category:F, state:"solid", density:1100, tempHigh:40, stateHigh:"chocolate_syrup", tempLow:-5, stateLow:"frozen_truffle_candy"};
elements.frozen_truffle_candy = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"truffle_candy"};
elements.bonbon = {color:"#ff69b4", behavior:W, category:F, state:"solid", density:1000, tempHigh:45, stateHigh:"chocolate_syrup", tempLow:-5, stateLow:"frozen_bonbon"};
elements.frozen_bonbon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"bonbon"};
elements.gelato = {color:"#fff0f5", behavior:SP, category:F, state:"solid", density:950, tempHigh:10, stateHigh:"milk", tempLow:-10, stateLow:"frozen_gelato"};
elements.frozen_gelato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:0, stateHigh:"gelato"};
elements.sorbet = {color:"#ff7f50", behavior:SP, category:F, state:"solid", density:900, tempHigh:5, stateHigh:"water", tempLow:-10, stateLow:"frozen_sorbet"};
elements.frozen_sorbet = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:0, stateHigh:"sorbet"};
elements.sherbet = {color:"#ffa07a", behavior:SP, category:F, state:"solid", density:920, tempHigh:5, stateHigh:"water", tempLow:-10, stateLow:"frozen_sherbet"};
elements.frozen_sherbet = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:920, tempHigh:0, stateHigh:"sherbet"};
elements.frozen_yogurt = {color:"#fffff0", behavior:SP, category:F, state:"solid", density:950, tempHigh:10, stateHigh:"yogurt", tempLow:-15, stateLow:"ice"};
elements.popsicle = {color:"#ff1493", behavior:W, category:F, state:"solid", density:900, tempHigh:5, stateHigh:"water", tempLow:-10, stateLow:"ice"};
elements.ice_cream_sandwich = {color:"#3e1e04", behavior:W, category:F, state:"solid", density:800, tempHigh:15, stateHigh:"cookie", tempLow:-10, stateLow:"frozen_ice_cream_sandwich"};
elements.frozen_ice_cream_sandwich = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:0, stateHigh:"ice_cream_sandwich"};
elements.sundae = {color:"#ffb6c1", behavior:SP, category:F, state:"solid", density:950, tempHigh:15, stateHigh:"milk", tempLow:-10, stateLow:"frozen_sundae"};
elements.frozen_sundae = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:0, stateHigh:"sundae"};
elements.banana_split = {color:"#ffe4b5", behavior:SP, category:F, state:"solid", density:900, tempHigh:15, stateHigh:"banana_puree", tempLow:-10, stateLow:"frozen_banana_split"};
elements.frozen_banana_split = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:0, stateHigh:"banana_split"};
elements.parfait = {color:"#ffebcd", behavior:SP, category:F, state:"solid", density:980, tempHigh:20, stateHigh:"yogurt", tempLow:-10, stateLow:"frozen_parfait"};
elements.frozen_parfait = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:0, stateHigh:"parfait"};
elements.mousse = {color:"#5c3a21", behavior:SP, category:F, state:"solid", density:600, tempHigh:40, stateHigh:"chocolate_syrup", tempLow:-5, stateLow:"frozen_mousse"};
elements.frozen_mousse = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"mousse"};
elements.souffle = {color:"#f5deb3", behavior:SP, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_souffle"};
elements.frozen_souffle = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"souffle"};
elements.panna_cotta = {color:"#fffff0", behavior:SP, category:F, state:"solid", density:1050, tempHigh:60, stateHigh:"heavy_cream", tempLow:-5, stateLow:"frozen_panna_cotta"};
elements.frozen_panna_cotta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"panna_cotta"};
elements.fruit_tart = {color:"#ff8c00", behavior:W, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fruit_tart"};
elements.frozen_fruit_tart = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"fruit_tart"};
elements.galette = {color:"#d2691e", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_galette"};
elements.frozen_galette = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"galette"};
elements.peach_cobbler = {color:"#ffdab9", behavior:SP, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peach_cobbler"};
elements.frozen_peach_cobbler = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"peach_cobbler"};
elements.apple_crisp = {color:"#deb887", behavior:SP, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_apple_crisp"};
elements.frozen_apple_crisp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"apple_crisp"};
elements.apple_strudel = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_apple_strudel"};
elements.frozen_apple_strudel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"apple_strudel"};
elements.churro_bite = {color:"#d2691e", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_churro_bite"};
elements.frozen_churro_bite = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"churro_bite"};

// ==========================================
// 7. MEALS, PREPARED FOODS & SIDES
// ==========================================
elements.pizza = {color:"#ff4500", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pizza"};
elements.frozen_pizza = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"pizza"};
elements.burger = {color:"#a0522d", behavior:W, category:F, state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_burger"};
elements.frozen_burger = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"burger"};
elements.hotdog = {color:"#cd5c5c", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_hotdog"};
elements.frozen_hotdog = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"hotdog"};
elements.taco = {color:"#daa520", behavior:W, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_taco"};
elements.frozen_taco = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"taco"};
elements.burrito = {color:"#deb887", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_burrito"};
elements.frozen_burrito = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"burrito"};
elements.quesadilla = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_quesadilla"};
elements.frozen_quesadilla = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"quesadilla"};
elements.sushi = {color:"#fffafa", behavior:W, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sushi"};
elements.frozen_sushi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"sushi"};
elements.fried_rice = {color:"#daa520", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_rice"};
elements.frozen_fried_rice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"fried_rice"};
elements.mac_and_cheese = {color:"#ffb600", behavior:SP, category:F, state:"solid", density:1200, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mac_and_cheese"};
elements.frozen_mac_and_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1200, tempHigh:10, stateHigh:"mac_and_cheese"};
elements.spaghetti = {color:"#fffacd", behavior:SP, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_spaghetti"};
elements.frozen_spaghetti = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"spaghetti"};
elements.lasagna = {color:"#cd5c5c", behavior:W, category:F, state:"solid", density:1100, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lasagna"};
elements.frozen_lasagna = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"lasagna"};
elements.soup = {color:"#d2b48c", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_soup"};
elements.frozen_soup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"soup"};
elements.stew = {color:"#8b4513", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_stew"};
elements.frozen_stew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"stew"};
elements.curry = {color:"#b8860b", behavior:L, category:F, state:"liquid", density:1080, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_curry"};
elements.frozen_curry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"curry"};

elements.shawarma = {color:"#a0522d", behavior:W, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_shawarma"};
elements.frozen_shawarma = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"shawarma"};
elements.falafel = {color:"#8b5a2b", behavior:SP, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_falafel"};
elements.frozen_falafel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"falafel"};
elements.gyro = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:880, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gyro"};
elements.frozen_gyro = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:880, tempHigh:10, stateHigh:"gyro"};
elements.kebab_skewer = {color:"#8b0000", behavior:W, category:F, state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_kebab_skewer"};
elements.frozen_kebab_skewer = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"kebab_skewer"};
elements.meatloaf = {color:"#8b4513", behavior:W, category:F, state:"solid", density:1000, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_meatloaf"};
elements.frozen_meatloaf = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"meatloaf"};
elements.brisket_sandwich = {color:"#cd853f", behavior:W, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_brisket_sandwich"};
elements.frozen_brisket_sandwich = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"brisket_sandwich"};
elements.hot_wings = {color:"#ff4500", behavior:SP, category:F, state:"solid", density:950, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_hot_wings"};
elements.frozen_hot_wings = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"hot_wings"};
elements.corndog = {color:"#daa520", behavior:W, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_corndog"};
elements.frozen_corndog = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"corndog"};
elements.chili_dog = {color:"#b22222", behavior:W, category:F, state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chili_dog"};
elements.frozen_chili_dog = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"chili_dog"};
elements.onion_ring = {color:"#f5deb3", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_onion_ring"};
elements.frozen_onion_ring = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"onion_ring"};
elements.mozzarella_stick = {color:"#deb887", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mozzarella_stick"};
elements.frozen_mozzarella_stick = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"mozzarella_stick"};
elements.cheese_curd = {color:"#ffffe0", behavior:SP, category:F, state:"solid", density:900, tempHigh:200, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cheese_curd"};
elements.frozen_cheese_curd = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"cheese_curd"};
elements.hash_brown = {color:"#ffd700", behavior:SP, category:F, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_hash_brown"};
elements.frozen_hash_brown = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"hash_brown"};
elements.tater_tot = {color:"#d2b48c", behavior:SP, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tater_tot"};
elements.frozen_tater_tot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"tater_tot"};
elements.mashed_potato = {color:"#fff8dc", behavior:SP, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mashed_potato"};
elements.frozen_mashed_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"mashed_potato"};
elements.baked_beans = {color:"#a0522d", behavior:SP, category:F, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_beans"};
elements.frozen_baked_beans = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"baked_beans"};
elements.refried_beans = {color:"#8b4513", behavior:SP, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_refried_beans"};
elements.frozen_refried_beans = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"refried_beans"};
elements.hummus = {color:"#e6c280", behavior:SP, category:F, state:"solid", density:1080, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_hummus"};
elements.frozen_hummus = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"hummus"};
elements.tzatziki = {color:"#f0fff0", behavior:L, category:F, state:"liquid", density:1050, viscosity: 20000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tzatziki"};
elements.frozen_tzatziki = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"tzatziki"};
elements.baba_ganoush = {color:"#dcdcdc", behavior:SP, category:F, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baba_ganoush"};
elements.frozen_baba_ganoush = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"baba_ganoush"};

// ==========================================
// 8. LIQUIDS, JUICES, OILS & SODAS
// ==========================================
elements.strawberry_juice = {color:"#e83162", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_strawberry_juice"};
elements.frozen_strawberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"strawberry_juice"};
elements.banana_puree = {color:"#f3e5ab", behavior:L, category:F, state:"liquid", density:1100, viscosity: 50000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_banana_puree"};
elements.frozen_banana_puree = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"banana_puree"};
elements.blueberry_juice = {color:"#3b5998", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_blueberry_juice"};
elements.frozen_blueberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"blueberry_juice"};
elements.blackberry_juice = {color:"#2E0823", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_blackberry_juice"};
elements.frozen_blackberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"blackberry_juice"};
elements.raspberry_juice = {color:"#C21E56", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_raspberry_juice"};
elements.frozen_raspberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"raspberry_juice"};
elements.peach_juice = {color:"#ffdab9", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_peach_juice"};
elements.frozen_peach_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"peach_juice"};
elements.cherry_juice = {color:"#990f02", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cherry_juice"};
elements.frozen_cherry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"cherry_juice"};
elements.plum_juice = {color:"#673147", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_plum_juice"};
elements.frozen_plum_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"plum_juice"};
elements.watermelon_juice = {color:"#ff7f50", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_watermelon_juice"};
elements.frozen_watermelon_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"watermelon_juice"};
elements.mango_juice = {color:"#ffb300", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_mango_juice"};
elements.frozen_mango_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"mango_juice"};
elements.pineapple_juice = {color:"#fada5e", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pineapple_juice"};
elements.frozen_pineapple_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"pineapple_juice"};
elements.lemon_juice = {color:"#fffacd", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_lemon_juice"};
elements.frozen_lemon_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"lemon_juice"};
elements.orange_juice = {color:"#ffd700", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_orange_juice"};
elements.frozen_orange_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"orange_juice"};
elements.tomato_juice = {color:"#e34234", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tomato_juice"};
elements.frozen_tomato_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"tomato_juice"};
elements.carrot_juice = {color:"#ff8c00", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_carrot_juice"};
elements.frozen_carrot_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"carrot_juice"};
elements.grape_juice = {color:"#4b0082", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_grape_juice"};
elements.frozen_grape_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"grape_juice"};
elements.kiwi_juice = {color:"#8FBC8F", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_kiwi_juice"};
elements.frozen_kiwi_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"kiwi_juice"};
elements.pomegranate_juice = {color:"#800020", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pomegranate_juice"};
elements.frozen_pomegranate_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"pomegranate_juice"};
elements.cranberry_juice = {color:"#6E0A1E", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cranberry_juice"};
elements.frozen_cranberry_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"cranberry_juice"};

elements.coconut_water = {color:"#f0f8ff", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_coconut_water"};
elements.frozen_coconut_water = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"coconut_water"};
elements.olive_oil = {color:"#bdb76b", behavior:L, category:F, state:"liquid", density:910, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_olive_oil"};
elements.frozen_olive_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:910, tempHigh:5, stateHigh:"olive_oil"};
elements.avocado_oil = {color:"#7ba05b", behavior:L, category:F, state:"liquid", density:920, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_avocado_oil"};
elements.frozen_avocado_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:920, tempHigh:5, stateHigh:"avocado_oil"};
elements.peanut_butter = {color:"#d2691e", behavior:L, category:F, state:"liquid", density:1050, viscosity: 80000, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peanut_butter"};
elements.frozen_peanut_butter = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"peanut_butter"};

elements.maple_syrup = {color:"#bb6528", behavior:L, category:F, state:"liquid", density:1370, viscosity: 50000, tempHigh:150, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_maple_syrup"};
elements.frozen_maple_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1370, tempHigh:5, stateHigh:"maple_syrup"};
elements.soy_sauce = {color:"#3b2f2f", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_soy_sauce"};
elements.frozen_soy_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"soy_sauce"};
elements.hot_sauce = {color:"#ff2400", behavior:L, category:F, state:"liquid", density:1020, viscosity: 5000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_hot_sauce"};
elements.frozen_hot_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"hot_sauce"};
elements.mustard = {color:"#ffdb58", behavior:L, category:F, state:"liquid", density:1050, viscosity: 20000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_mustard"};
elements.frozen_mustard = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"mustard"};
elements.bbq_sauce = {color:"#3e1e04", behavior:L, category:F, state:"liquid", density:1150, viscosity: 30000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_bbq_sauce"};
elements.frozen_bbq_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1150, tempHigh:10, stateHigh:"bbq_sauce"};
elements.ranch_dressing = {color:"#f5fffa", behavior:L, category:F, state:"liquid", density:1050, viscosity: 25000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_ranch_dressing"};
elements.frozen_ranch_dressing = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"ranch_dressing"};

elements.apple_cider = {color:"#d2691e", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_apple_cider"};
elements.frozen_apple_cider = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"apple_cider"};
elements.pear_cider = {color:"#e4d96f", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_pear_cider"};
elements.frozen_pear_cider = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"pear_cider"};
elements.ginger_ale = {color:"#ffd700", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_ginger_ale"};
elements.frozen_ginger_ale = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"ginger_ale"};
elements.root_beer = {color:"#3e1e04", behavior:L, category:F, state:"liquid", density:1035, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_root_beer"};
elements.frozen_root_beer = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1035, tempHigh:10, stateHigh:"root_beer"};
elements.cream_soda = {color:"#ffefd5", behavior:L, category:F, state:"liquid", density:1025, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cream_soda"};
elements.frozen_cream_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1025, tempHigh:10, stateHigh:"cream_soda"};
elements.cola = {color:"#1a1110", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cola"};
elements.frozen_cola = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"cola"};
elements.lemon_lime_soda = {color:"#e0ffffe0", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_lemon_lime_soda"};
elements.frozen_lemon_lime_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"lemon_lime_soda"};
elements.orange_soda = {color:"#ff8c00", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_orange_soda"};
elements.frozen_orange_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"orange_soda"};
elements.grape_soda = {color:"#8a2be2", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_grape_soda"};
elements.frozen_grape_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"grape_soda"};
elements.tonic_water = {color:"#f0ffff", behavior:L, category:F, state:"liquid", density:1005, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tonic_water"};
elements.frozen_tonic_water = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1005, tempHigh:10, stateHigh:"tonic_water"};
elements.club_soda = {color:"#e0ffff", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_club_soda"};
elements.frozen_club_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"club_soda"};
elements.seltzer = {color:"#f5fffa", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_seltzer"};
elements.frozen_seltzer = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"seltzer"};
elements.sparkling_water = {color:"#e6e6fa", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_sparkling_water"};
elements.frozen_sparkling_water = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"sparkling_water"};
elements.espresso = {color:"#2b1b10", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_espresso"};
elements.frozen_espresso = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"espresso"};
elements.cappuccino = {color:"#d2b48c", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cappuccino"};
elements.frozen_cappuccino = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"cappuccino"};
elements.macchiato = {color:"#8b4513", behavior:L, category:F, state:"liquid", density:1015, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_macchiato"};
elements.frozen_macchiato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1015, tempHigh:10, stateHigh:"macchiato"};
elements.flat_white = {color:"#deb887", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_flat_white"};
elements.frozen_flat_white = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"flat_white"};
elements.cold_brew = {color:"#3e1e04", behavior:L, category:F, state:"liquid", density:1005, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cold_brew"};
elements.frozen_cold_brew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1005, tempHigh:10, stateHigh:"cold_brew"};
elements.matcha_latte = {color:"#8fbc8f", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_matcha_latte"};
elements.frozen_matcha_latte = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"matcha_latte"};
elements.chai_tea = {color:"#cd853f", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_chai_tea"};
elements.frozen_chai_tea = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"chai_tea"};

elements.coffee_liquid = {color:"#3b2f2f", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_coffee_liquid"};
elements.frozen_coffee_liquid = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"coffee_liquid"};
elements.tea_liquid = {color:"#cd853f", behavior:L, category:F, state:"liquid", density:1000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tea_liquid"};
elements.frozen_tea_liquid = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"tea_liquid"};

elements.chocolate_syrup = {color:"#4b3621", behavior:L, category:F, state:"liquid", density:1300, viscosity: 60000, tempHigh:120, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_chocolate_syrup"};
elements.frozen_chocolate_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1350, tempHigh:5, stateHigh:"chocolate_syrup"};
elements.smoothie = {color:"#ff69b4", behavior:L, category:F, state:"liquid", density:1050, viscosity: 15000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_smoothie"};
elements.frozen_smoothie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"smoothie"};
elements.wine = {color:"#722f37", behavior:L, category:F, state:"liquid", density:990, tempHigh:80, stateHigh:"steam", tempLow:-10, stateLow:"frozen_wine"};
elements.frozen_wine = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:990, tempHigh:0, stateHigh:"wine"};
elements.jam = {color:"#8b008b", behavior:L, category:F, state:"liquid", density:1100, tempHigh:120, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_jam"};
elements.frozen_jam = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"jam"};
elements.ketchup = {color:"#b22222", behavior:L, category:F, state:"liquid", density:1080, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ketchup"};
elements.frozen_ketchup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"ketchup"};

// ==========================================
// 9. NATIVE SMASH TOOL PROPERTIES
// ==========================================
// The breakInto property allows the native Smash tool and heavy objects to crush foods into liquid!
elements.strawberry.breakInto = "strawberry_juice";
elements.banana.breakInto = "banana_puree";
elements.blueberry.breakInto = "blueberry_juice";
elements.blackberry.breakInto = "blackberry_juice";
elements.raspberry.breakInto = "raspberry_juice";
elements.peach.breakInto = "peach_juice";
elements.cherry.breakInto = "cherry_juice";
elements.watermelon.breakInto = "watermelon_juice";
elements.mango.breakInto = "mango_juice";
elements.pineapple.breakInto = "pineapple_juice";
elements.coconut.breakInto = ["coconut_water", "coconut_water", "wood"];
elements.kiwi.breakInto = "kiwi_juice";
elements.lemon.breakInto = "lemon_juice";
elements.lime.breakInto = "lime_juice";
elements.orange.breakInto = "orange_juice";
elements.plum.breakInto = "plum_juice";
elements.pomegranate.breakInto = "pomegranate_juice";
elements.cranberry.breakInto = "cranberry_juice";
elements.avocado.breakInto = "avocado_oil";
elements.grape.breakInto = "grape_juice";
elements.apple.breakInto = "apple_juice";
elements.tomato.breakInto = "tomato_juice";
elements.carrot.breakInto = "carrot_juice";

elements.broccoli.breakInto = "water";
elements.onion.breakInto = "water";
elements.garlic.breakInto = "water";
elements.celery.breakInto = "water";
elements.spinach.breakInto = "water";
elements.lettuce.breakInto = "water";
elements.cabbage.breakInto = "water";
elements.bell_pepper.breakInto = "water";
elements.chili_pepper.breakInto = "hot_sauce";
elements.olive.breakInto = "olive_oil";
elements.cucumber.breakInto = "water";
elements.zucchini.breakInto = "water";
elements.eggplant.breakInto = "water";
elements.pumpkin.breakInto = "water";
elements.mushroom.breakInto = "water";

elements.peanut.breakInto = "peanut_butter";
elements.almond.breakInto = "nut_oil";
elements.walnut.breakInto = "nut_oil";
elements.pecan.breakInto = "nut_oil";
elements.cashew.breakInto = "nut_oil";
elements.raw_egg.breakInto = "water";

// ==========================================
// 10. SAFE CHEMISTRY & COOKING ENGINE
// ==========================================

// --- SAFE VANILLA INITIALIZATION ---
// We initialize vanilla elements to ensure assigning reactions to them never throws an error.
const v = ["dough", "meat", "bird", "fish", "bread", "rice", "pasta", "oats", "milk", "broth", "sauce", "grease", "cabbage", "corn", "potato", "tortilla", "cooked_pasta", "cheese", "acid", "sugar", "water", "yeast", "ice", "sand", "butter", "yogurt", "nut_oil", "chocolate", "marshmallow", "salt", "smoke", "fire", "steam", "snow"];
for (let i = 0; i < v.length; i++) {
    if (!elements[v[i]]) elements[v[i]] = { reactions: {} };
    if (!elements[v[i]].reactions) elements[v[i]].reactions = {};
}
// Ensure our modded elements have empty reaction objects
for (let key in elements) {
    if (elements[key].category === F && !elements[key].reactions) elements[key].reactions = {};
}

// A. FREEZING DRINKS (Juice + Ice = Instantly frozen)
elements.strawberry_juice.reactions["ice"] = { elem1: "frozen_strawberry_juice", elem2: null };
elements.banana_puree.reactions["ice"] = { elem1: "frozen_banana_puree", elem2: null };
elements.blueberry_juice.reactions["ice"] = { elem1: "frozen_blueberry_juice", elem2: null };
elements.peach_juice.reactions["ice"] = { elem1: "frozen_peach_juice", elem2: null };
elements.cherry_juice.reactions["ice"] = { elem1: "frozen_cherry_juice", elem2: null };
elements.watermelon_juice.reactions["ice"] = { elem1: "frozen_watermelon_juice", elem2: null };
elements.mango_juice.reactions["ice"] = { elem1: "frozen_mango_juice", elem2: null };
elements.pineapple_juice.reactions["ice"] = { elem1: "frozen_pineapple_juice", elem2: null };
elements.lemon_juice.reactions["ice"] = { elem1: "frozen_lemon_juice", elem2: null };
elements.orange_juice.reactions["ice"] = { elem1: "frozen_orange_juice", elem2: null };
elements.tomato_juice.reactions["ice"] = { elem1: "frozen_tomato_juice", elem2: null };
elements.grape_juice.reactions["ice"] = { elem1: "frozen_grape_juice", elem2: null };

// B. BLENDING (Juice + Milk = Smoothie)
elements.strawberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.banana_puree.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.blueberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.peach_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.mango_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.pineapple_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };

// C. PRESERVES (Juice + Sugar = Jam)
elements.strawberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.blueberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.peach_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.cherry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.grape_juice.reactions["sugar"] = { elem1: "jam", elem2: null };

// D. FERMENTATION (Juices + Yeast = Wine/Alcohol)
elements.cherry_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.peach_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.pineapple_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.watermelon_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.grape_juice.reactions["yeast"] = { elem1: "wine", elem2: null };

// E. BAKING & DOUGH MIXES
elements.dough.reactions["water"] = { elem1: "bagel", elem2: null };
elements.dough.reactions["butter"] = { elem1: "croissant", elem2: null };
elements.dough.reactions["milk"] = { elem1: "biscuit", elem2: null };
elements.dough.reactions["yogurt"] = { elem1: "naan", elem2: null };
elements.dough.reactions["nut_oil"] = { elem1: "donut", elem2: null };
elements.dough.reactions["chocolate"] = { elem1: "cookie", elem2: null };
elements.dough.reactions["sugar"] = { elem1: "cookie_dough", elem2: null };
elements.dough.reactions["tomato_juice"] = { elem1: "pizza", elem2: null };
elements.dough.reactions["blueberry"] = { elem1: "muffin", elem2: null };
elements.dough.reactions["strawberry"] = { elem1: "toaster_pastry", elem2: null };
elements.dough.reactions["cherry"] = { elem1: "pie", elem2: null };
elements.cookie_dough.reactions["fire"] = { elem1: "cookie", elem2: null };

// F. DEEP FRYING IN BOILING OIL
elements.olive_oil.reactions["potato"] = { elem1: "potato_chip", elem2: "olive_oil" };
elements.olive_oil.reactions["sweet_potato"] = { elem1: "potato_chip", elem2: "olive_oil" };
elements.olive_oil.reactions["dough"] = { elem1: "donut", elem2: "olive_oil" };
elements.olive_oil.reactions["raw_shrimp"] = { elem1: "cooked_shrimp", elem2: "olive_oil" };

// G. MEAL PREP & CONDIMENTS
elements.bread.reactions["cooked_steak"] = { elem1: "burger", elem2: null };
elements.bread.reactions["cheese"] = { elem1: "grilled_cheese", elem2: null };
elements.cooked_pasta.reactions["cheese"] = { elem1: "mac_and_cheese", elem2: null };
elements.tortilla.reactions["cooked_steak"] = { elem1: "taco", elem2: null };
elements.tortilla.reactions["cheese"] = { elem1: "quesadilla", elem2: null };
elements.rice.reactions["water"] = { elem1: "riceball", elem2: null };
elements.rice.reactions["raw_salmon"] = { elem1: "sushi", elem2: null };
elements.rice.reactions["raw_tuna"] = { elem1: "sushi", elem2: null };
elements.pasta.reactions["water"] = { elem1: "cooked_pasta", elem2: null };
elements.pasta.reactions["tomato_juice"] = { elem1: "spaghetti", elem2: null };
elements.pasta.reactions["meatball"] = { elem1: "spaghetti", elem2: null };
elements.oats.reactions["milk"] = { elem1: "oatmeal", elem2: null };
elements.graham_cracker.reactions["marshmallow"] = { elem1: "s_more", elem2: null };
elements.corn.reactions["cheese"] = { elem1: "nachos", elem2: null };
elements.avocado.reactions["onion"] = { elem1: "guacamole", elem2: null };
elements.tomato_juice.reactions["onion"] = { elem1: "salsa", elem2: null };

// H. COOKING, CURING & SMOKING MEATS
elements.raw_steak.reactions["fire"] = { elem1: "cooked_steak", elem2: null };
elements.raw_steak.reactions["smoke"] = { elem1: "cooked_steak", elem2: null }; // Smoking
elements.raw_steak.reactions["salt"] = { elem1: "raw_bacon", elem2: null }; // Curing
elements.raw_bacon.reactions["fire"] = { elem1: "crispy_bacon", elem2: null };
elements.raw_bacon.reactions["smoke"] = { elem1: "crispy_bacon", elem2: null };
elements.raw_sausage.reactions["fire"] = { elem1: "cooked_sausage", elem2: null };
elements.raw_sausage.reactions["smoke"] = { elem1: "cooked_sausage", elem2: null };
elements.raw_chicken.reactions["fire"] = { elem1: "cooked_chicken", elem2: null };
elements.raw_pork.reactions["fire"] = { elem1: "cooked_pork", elem2: null };
elements.raw_salmon.reactions["fire"] = { elem1: "cooked_salmon", elem2: null };
elements.raw_salmon.reactions["smoke"] = { elem1: "cooked_salmon", elem2: null };
elements.raw_tuna.reactions["fire"] = { elem1: "cooked_tuna", elem2: null };
elements.raw_shrimp.reactions["fire"] = { elem1: "cooked_shrimp", elem2: null };
elements.raw_shrimp.reactions["steam"] = { elem1: "cooked_shrimp", elem2: null }; // Boiling
elements.raw_crab.reactions["fire"] = { elem1: "cooked_crab", elem2: null };
elements.raw_crab.reactions["steam"] = { elem1: "cooked_crab", elem2: null };
elements.raw_egg.reactions["fire"] = { elem1: "fried_egg", elem2: null };
elements.raw_egg.reactions["water"] = { elem1: "boiled_egg", elem2: null }; // Boiling
elements.raw_egg.reactions["cheese"] = { elem1: "omelette", elem2: null };

// Vanilla meat overrides
elements.meat.reactions["fire"] = { elem1: "cooked_steak", elem2: null };
elements.meat.reactions["smoke"] = { elem1: "cooked_steak", elem2: null };
elements.meat.reactions["salt"] = { elem1: "raw_bacon", elem2: null };
elements.bird.reactions["fire"] = { elem1: "cooked_chicken", elem2: null };
elements.bird.reactions["nut_oil"] = { elem1: "fried_chicken", elem2: null };

// I. FUN CHAOTIC CHEMISTRY
// Mentos & Diet Coke Explosion
elements.cola.reactions["mint_leaf"] = { elem1: "foam", elem2: "foam" };
elements.mint_leaf.reactions["cola"] = { elem1: "foam", elem2: "foam" };

// Hot Sauce Melts Ice Instantly
elements.hot_sauce.reactions["ice"] = { elem1: "water", elem2: "hot_sauce" };
elements.hot_sauce.reactions["snow"] = { elem1: "water", elem2: "hot_sauce" };

// Spicy Chili Stew
elements.chili_pepper.reactions["meat"] = { elem1: "stew", elem2: null };

// Curdling Milk & Sour Cream
elements.milk.reactions["acid"] = { elem1: "sour_cream", elem2: null };
elements.milk.reactions["lemon_juice"] = { elem1: "sour_cream", elem2: null };
