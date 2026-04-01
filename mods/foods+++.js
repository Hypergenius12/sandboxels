// ==========================================
// ULTIMATE CULINARY MOD - BOILED, FRIED, & RAW UPDATE
// Realistic Cooking | Native Smashing | 0 Crashes
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
// 1. MEATS & SEAFOOD (Raw, Grilled, Boiled, Fried)
// ==========================================
elements.raw_steak = {color:"#b83737", behavior:W, category:F, state:"solid", density:1050, tempHigh:100, stateHigh:"steak", tempLow:-5, stateLow:"frozen_raw_steak"};
elements.frozen_raw_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_steak"};
elements.steak = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_steak"};
elements.frozen_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"steak"};
elements.boiled_steak = {color:"#7a5240", behavior:W, category:S, state:"solid", density:980, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_steak"};
elements.frozen_boiled_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"boiled_steak"};
elements.fried_steak = {color:"#3d2314", behavior:SP, category:S, state:"solid", density:920, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_steak"};
elements.frozen_fried_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:920, tempHigh:10, stateHigh:"fried_steak"};

elements.raw_chicken = {color:"#ffcccc", behavior:W, category:F, state:"solid", density:1020, tempHigh:110, stateHigh:"chicken", tempLow:-5, stateLow:"frozen_raw_chicken"};
elements.frozen_raw_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"raw_chicken"};
elements.chicken = {color:"#d2a679", behavior:W, category:F, state:"solid", density:950, tempHigh:230, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chicken"};
elements.frozen_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"chicken"};
elements.boiled_chicken = {color:"#e6dac3", behavior:W, category:S, state:"solid", density:980, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_chicken"};
elements.frozen_boiled_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"boiled_chicken"};
elements.fried_chicken = {color:"#c67f2b", behavior:SP, category:S, state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_chicken"};
elements.frozen_fried_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"fried_chicken"};

elements.raw_pork = {color:"#ffb6c1", behavior:W, category:F, state:"solid", density:1040, tempHigh:110, stateHigh:"pork", tempLow:-5, stateLow:"frozen_raw_pork"};
elements.frozen_raw_pork = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"raw_pork"};
elements.pork = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:960, tempHigh:230, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pork"};
elements.frozen_pork = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:960, tempHigh:10, stateHigh:"pork"};
elements.boiled_pork = {color:"#e0cebc", behavior:W, category:S, state:"solid", density:990, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_pork"};
elements.frozen_boiled_pork = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:990, tempHigh:10, stateHigh:"boiled_pork"};
elements.fried_pork = {color:"#b86d1d", behavior:SP, category:S, state:"solid", density:910, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_pork"};
elements.frozen_fried_pork = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:910, tempHigh:10, stateHigh:"fried_pork"};

elements.raw_bacon = {color:"#fa8072", behavior:W, category:F, state:"solid", density:1050, tempHigh:120, stateHigh:"bacon", tempLow:-5, stateLow:"frozen_raw_bacon"};
elements.frozen_raw_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"raw_bacon"};
elements.bacon = {color:"#8b4513", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bacon"};
elements.frozen_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"bacon"};
elements.boiled_bacon = {color:"#a57c65", behavior:W, category:S, state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_bacon"};
elements.frozen_boiled_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"boiled_bacon"};
elements.fried_bacon = {color:"#4a2106", behavior:SP, category:S, state:"solid", density:750, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_bacon"};
elements.frozen_fried_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"fried_bacon"};

elements.raw_sausage = {color:"#c77d7d", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"sausage", tempLow:-5, stateLow:"frozen_raw_sausage"};
elements.frozen_raw_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_sausage"};
elements.sausage = {color:"#8b5a2b", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sausage"};
elements.frozen_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"sausage"};
elements.boiled_sausage = {color:"#a37956", behavior:W, category:S, state:"solid", density:930, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_sausage"};
elements.frozen_boiled_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:930, tempHigh:10, stateHigh:"boiled_sausage"};
elements.fried_sausage = {color:"#543011", behavior:SP, category:S, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_sausage"};
elements.frozen_fried_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"fried_sausage"};

elements.raw_salmon = {color:"#ff7e67", behavior:W, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"salmon", tempLow:-5, stateLow:"frozen_raw_salmon"};
elements.frozen_raw_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_salmon"};
elements.salmon = {color:"#f8b8a8", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_salmon"};
elements.frozen_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"salmon"};
elements.boiled_salmon = {color:"#fad8d1", behavior:W, category:S, state:"solid", density:980, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_salmon"};
elements.frozen_boiled_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"boiled_salmon"};
elements.fried_salmon = {color:"#b55b45", behavior:SP, category:S, state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_salmon"};
elements.frozen_fried_salmon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"fried_salmon"};

elements.raw_shrimp = {color:"#d9d9d9", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"shrimp", tempLow:-5, stateLow:"frozen_raw_shrimp"};
elements.frozen_raw_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_shrimp"};
elements.shrimp = {color:"#FF7F50", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_shrimp"};
elements.frozen_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"shrimp"};
elements.boiled_shrimp = {color:"#ffb094", behavior:SP, category:S, state:"solid", density:980, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_shrimp"};
elements.frozen_boiled_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"boiled_shrimp"};
elements.fried_shrimp = {color:"#c45127", behavior:SP, category:S, state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_shrimp"};
elements.frozen_fried_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"fried_shrimp"};

elements.raw_crab = {color:"#a52a2a", behavior:SP, category:F, state:"solid", density:1000, tempHigh:100, stateHigh:"crab", tempLow:-5, stateLow:"frozen_raw_crab"};
elements.frozen_raw_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"raw_crab"};
elements.crab = {color:"#ff4500", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crab"};
elements.frozen_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"crab"};
elements.boiled_crab = {color:"#ff8152", behavior:SP, category:S, state:"solid", density:980, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_crab"};
elements.frozen_boiled_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:980, tempHigh:10, stateHigh:"boiled_crab"};
elements.fried_crab = {color:"#b52a00", behavior:SP, category:S, state:"solid", density:900, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_crab"};
elements.frozen_fried_crab = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"fried_crab"};

elements.raw_egg = {color:"#ffefd5", behavior:L, category:F, state:"liquid", density:1030, tempHigh:80, stateHigh:"fried_egg", tempLow:-5, stateLow:"frozen_raw_egg", breakInto:"water"};
elements.frozen_raw_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"raw_egg"};
elements.fried_egg = {color:"#ffffff", behavior:W, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_egg"};
elements.frozen_fried_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"fried_egg"};
elements.boiled_egg = {color:"#fdf5e6", behavior:SP, category:S, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_egg"};
elements.frozen_boiled_egg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"boiled_egg"};
elements.omelette = {color:"#ffd700", behavior:W, category:S, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_omelette"};
elements.frozen_omelette = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"omelette"};

// ==========================================
// 2. VEGETABLES & POTATOES (Boiled, Fried, Baked)
// ==========================================
elements.potato = {color:"#deb887", behavior:P, category:F, breakInto:"water", state:"solid", density:850, tempHigh:110, stateHigh:"baked_potato", tempLow:-5, stateLow:"frozen_potato"};
elements.frozen_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"potato"};
elements.baked_potato = {color:"#8B4513", behavior:W, category:S, state:"solid", density:750, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_potato"};
elements.frozen_baked_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"baked_potato"};
elements.boiled_potato = {color:"#e6cdad", behavior:W, category:S, state:"solid", density:880, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_potato"};
elements.frozen_boiled_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:880, tempHigh:10, stateHigh:"boiled_potato"};
elements.fried_potato = {color:"#c48f3b", behavior:SP, category:S, state:"solid", density:700, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_potato"};
elements.frozen_fried_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"fried_potato"};

elements.sweet_potato = {color:"#D2691E", behavior:P, category:F, breakInto:"water", state:"solid", density:850, tempHigh:150, stateHigh:"baked_sweet_potato", tempLow:-5, stateLow:"frozen_sweet_potato"};
elements.frozen_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"sweet_potato"};
elements.baked_sweet_potato = {color:"#8B4513", behavior:W, category:S, state:"solid", density:750, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baked_sweet_potato"};
elements.frozen_baked_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"baked_sweet_potato"};
elements.boiled_sweet_potato = {color:"#e39054", behavior:W, category:S, state:"solid", density:880, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_sweet_potato"};
elements.frozen_boiled_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:880, tempHigh:10, stateHigh:"boiled_sweet_potato"};
elements.fried_sweet_potato = {color:"#a34807", behavior:SP, category:S, state:"solid", density:700, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_sweet_potato"};
elements.frozen_fried_sweet_potato = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"fried_sweet_potato"};

elements.carrot = {color:"#ed9121", behavior:P, category:F, breakInto:"carrot_juice", state:"solid", density:800, tempHigh:110, stateHigh:"cooked_carrot", tempLow:-5, stateLow:"frozen_carrot"};
elements.frozen_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"carrot"};
elements.cooked_carrot = {color:"#cc7722", behavior:SP, category:S, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_carrot"};
elements.frozen_cooked_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cooked_carrot"};
elements.boiled_carrot = {color:"#f2b05e", behavior:W, category:S, state:"solid", density:820, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_carrot"};
elements.frozen_boiled_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:820, tempHigh:10, stateHigh:"boiled_carrot"};
elements.fried_carrot = {color:"#a35a0f", behavior:SP, category:S, state:"solid", density:700, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_carrot"};
elements.frozen_fried_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"fried_carrot"};

elements.broccoli = {color:"#4c9141", behavior:P, category:F, breakInto:"water", state:"solid", density:500, tempHigh:110, stateHigh:"cooked_broccoli", tempLow:-5, stateLow:"frozen_broccoli"};
elements.frozen_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"broccoli"};
elements.cooked_broccoli = {color:"#3b7033", behavior:SP, category:S, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_broccoli"};
elements.frozen_cooked_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"cooked_broccoli"};
elements.boiled_broccoli = {color:"#72a36a", behavior:W, category:S, state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_broccoli"};
elements.frozen_boiled_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"boiled_broccoli"};
elements.fried_broccoli = {color:"#295422", behavior:SP, category:S, state:"solid", density:400, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_broccoli"};
elements.frozen_fried_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"fried_broccoli"};

elements.onion = {color:"#dda0dd", behavior:P, category:F, breakInto:"water", state:"solid", density:650, tempHigh:110, stateHigh:"caramelized_onion", tempLow:-5, stateLow:"frozen_onion"};
elements.frozen_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"onion"};
elements.caramelized_onion = {color:"#a0522d", behavior:SP, category:S, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_caramelized_onion"};
elements.frozen_caramelized_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"caramelized_onion"};
elements.boiled_onion = {color:"#e3c3e3", behavior:W, category:S, state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_onion"};
elements.frozen_boiled_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"boiled_onion"};
elements.fried_onion = {color:"#c2844e", behavior:SP, category:S, state:"solid", density:550, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_onion"};
elements.frozen_fried_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"fried_onion"};

elements.garlic = {color:"#f0e68c", behavior:P, category:F, breakInto:"water", state:"solid", density:680, tempHigh:110, stateHigh:"roasted_garlic", tempLow:-5, stateLow:"frozen_garlic"};
elements.frozen_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"garlic"};
elements.roasted_garlic = {color:"#deb887", behavior:SP, category:S, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_garlic"};
elements.frozen_roasted_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"roasted_garlic"};
elements.boiled_garlic = {color:"#f5eed1", behavior:W, category:S, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_garlic"};
elements.frozen_boiled_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"boiled_garlic"};
elements.fried_garlic = {color:"#b58d55", behavior:SP, category:S, state:"solid", density:550, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_garlic"};
elements.frozen_fried_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"fried_garlic"};

elements.cabbage = {color:"#87a96b", behavior:P, category:F, breakInto:"water", state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cabbage"};
elements.frozen_cabbage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"cabbage"};
elements.boiled_cabbage = {color:"#abc297", behavior:W, category:S, state:"solid", density:480, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_cabbage"};
elements.frozen_boiled_cabbage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:480, tempHigh:10, stateHigh:"boiled_cabbage"};
elements.fried_cabbage = {color:"#5b7545", behavior:SP, category:S, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_cabbage"};
elements.frozen_fried_cabbage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"fried_cabbage"};

// Remaining Veggies (Native Smashing)
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

// ==========================================
// 3. FRUITS (Native BreakInto Juices)
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
elements.frozen_blackberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:630, tempHigh:10, stateHigh:"blackberry"};
elements.raspberry = {color:"#E30B5D", behavior:P, category:F, breakInto:"raspberry_juice", state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_raspberry"};
elements.frozen_raspberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:610, tempHigh:10, stateHigh:"raspberry"};
elements.grape = {color:"#6f2da8", behavior:P, category:F, breakInto:"grape_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grape"};
elements.frozen_grape = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"grape"};
elements.watermelon = {color:"#fc6c85", behavior:P, category:F, breakInto:"watermelon_juice", state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_watermelon"};
elements.frozen_watermelon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"watermelon"};
elements.peach = {color:"#ffe5b4", behavior:P, category:F, breakInto:"peach_juice", state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peach"};
elements.frozen_peach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"peach"};
elements.cherry = {color:"#d2042d", behavior:P, category:F, breakInto:"cherry_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cherry"};
elements.frozen_cherry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"cherry"};
elements.plum = {color:"#8E4585", behavior:P, category:F, breakInto:"plum_juice", state:"solid", density:710, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_plum"};
elements.frozen_plum = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:710, tempHigh:10, stateHigh:"plum"};
elements.pineapple = {color:"#fada5e", behavior:P, category:F, breakInto:"pineapple_juice", state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pineapple"};
elements.frozen_pineapple = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"pineapple"};
elements.mango = {color:"#ffc324", behavior:P, category:F, breakInto:"mango_juice", state:"solid", density:740, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mango"};
elements.frozen_mango = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:740, tempHigh:10, stateHigh:"mango"};
elements.coconut = {color:"#4d3227", behavior:W, category:F, breakInto:["coconut_water", "coconut_water", "wood"], state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_coconut"};
elements.frozen_coconut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"coconut"};
elements.kiwi = {color:"#8EE53F", behavior:P, category:F, breakInto:"kiwi_juice", state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_kiwi"};
elements.frozen_kiwi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"kiwi"};
elements.pomegranate = {color:"#C21E56", behavior:P, category:F, breakInto:"pomegranate_juice", state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pomegranate"};
elements.frozen_pomegranate = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"pomegranate"};
elements.cranberry = {color:"#8B0000", behavior:P, category:F, breakInto:"cranberry_juice", state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cranberry"};
elements.frozen_cranberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"cranberry"};
elements.avocado = {color:"#568203", behavior:P, category:F, breakInto:"avocado_oil", state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_avocado"};
elements.frozen_avocado = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"avocado"};

// ==========================================
// 4. DOUGHS, BREADS & CARBS (Boiled & Fried support)
// ==========================================
elements.dough = {color:"#f5deb3", behavior:SP, category:F, breakInto:"water", state:"solid", density:850, tempHigh:110, stateHigh:"bread", tempLow:-5, stateLow:"frozen_dough"};
elements.frozen_dough = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"dough"};
elements.bread = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bread"};
elements.frozen_bread = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"bread"};
elements.boiled_dough = {color:"#ffefd5", behavior:SP, category:S, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_boiled_dough"}; // Dumpling style
elements.frozen_boiled_dough = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"boiled_dough"};
elements.fried_dough = {color:"#daa520", behavior:SP, category:S, state:"solid", density:800, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_dough"}; // Funnel cake / donut
elements.frozen_fried_dough = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"fried_dough"};

elements.bagel = {color:"#eedc82", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bagel"};
elements.frozen_bagel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"bagel"};
elements.croissant = {color:"#c49a45", behavior:W, category:F, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_croissant"};
elements.frozen_croissant = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"croissant"};
elements.muffin = {color:"#d2b48c", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_muffin"};
elements.frozen_muffin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"muffin"};
elements.biscuit = {color:"#f5deb3", behavior:W, category:F, state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_biscuit"};
elements.frozen_biscuit = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"biscuit"};
elements.pita_bread = {color:"#FFE4B5", behavior:W, category:F, state:"solid", density:550, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pita_bread"};
elements.frozen_pita_bread = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"pita_bread"};
elements.naan = {color:"#F0E68C", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_naan"};
elements.frozen_naan = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"naan"};
elements.baguette = {color:"#CD853F", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_baguette"};
elements.frozen_baguette = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"baguette"};
elements.crouton = {color:"#DAA520", behavior:SP, category:F, state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crouton"};
elements.frozen_crouton = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"crouton"};
elements.cracker = {color:"#F4A460", behavior:SP, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cracker"};
elements.frozen_cracker = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"cracker"};
elements.pretzel = {color:"#8B4513", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pretzel"};
elements.frozen_pretzel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"pretzel"};
elements.tortilla = {color:"#FFE4B5", behavior:W, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tortilla"};
elements.frozen_tortilla = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"tortilla"};
elements.pancake = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:500, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pancake"};
elements.frozen_pancake = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"pancake"};
elements.waffle = {color:"#DEB887", behavior:W, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_waffle"};
elements.frozen_waffle = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"waffle"};

// Pastas
elements.pasta = {color:"#F0E68C", behavior:P, category:F, state:"solid", density:1300, tempHigh:100, stateHigh:"cooked_pasta", tempLow:-5, stateLow:"frozen_pasta"};
elements.frozen_pasta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1300, tempHigh:10, stateHigh:"pasta"};
elements.cooked_pasta = {color:"#FFFACD", behavior:SP, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_pasta"};
elements.frozen_cooked_pasta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"cooked_pasta"};
elements.mac_and_cheese = {color:"#FFB600", behavior:SP, category:F, state:"solid", density:1200, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mac_and_cheese"};
elements.frozen_mac_and_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1200, tempHigh:10, stateHigh:"mac_and_cheese"};

// Popcorn
elements.popcorn_kernel = {color:"#FFD700", behavior:P, category:F, breakInto:"popped_corn", state:"solid", density:800, tempHigh:180, stateHigh:"popped_corn", tempLow:-5, stateLow:"frozen_popcorn_kernel"};
elements.frozen_popcorn_kernel = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"popcorn_kernel"};
elements.popped_corn = {color:"#FFF8DC", behavior:SP, category:F, breakInto:"burnt", state:"solid", density:100, tempHigh:250, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_popped_corn"};
elements.frozen_popped_corn = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:100, tempHigh:10, stateHigh:"popped_corn"};

// ==========================================
// 5. NUTS, SPICES & OTHERS
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
// 6. DAIRY & CHEESES
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
// 7. PREPARED MEALS & DISHES
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

// ==========================================
// 8. LIQUIDS, JUICES & OILS (Evaporate / Burn)
// ==========================================
elements.apple_juice = {color:"#d2691e", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_apple_juice"};
elements.frozen_apple_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"apple_juice"};
elements.orange_juice = {color:"#ffd700", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_orange_juice"};
elements.frozen_orange_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"orange_juice"};
elements.lemon_juice = {color:"#fffacd", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_lemon_juice"};
elements.frozen_lemon_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"lemon_juice"};
elements.lime_juice = {color:"#ccffcc", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_lime_juice"};
elements.frozen_lime_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"lime_juice"};
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
elements.grape_juice = {color:"#4b0082", behavior:L, category:F, state:"liquid", density:1060, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_grape_juice"};
elements.frozen_grape_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1060, tempHigh:10, stateHigh:"grape_juice"};
elements.tomato_juice = {color:"#E34234", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_tomato_juice"};
elements.frozen_tomato_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"tomato_juice"};
elements.carrot_juice = {color:"#ff8c00", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_carrot_juice"};
elements.frozen_carrot_juice = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"carrot_juice"};

elements.coconut_water = {color:"#F0F8FF", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_coconut_water"};
elements.frozen_coconut_water = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"coconut_water"};
elements.olive_oil = {color:"#BDB76B", behavior:L, category:F, state:"liquid", density:910, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_olive_oil"};
elements.frozen_olive_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"olive_oil"};
elements.avocado_oil = {color:"#7BA05B", behavior:L, category:F, state:"liquid", density:920, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_avocado_oil"};
elements.frozen_avocado_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"avocado_oil"};
elements.peanut_butter = {color:"#d2691e", behavior:L, category:F, state:"liquid", density:1050, viscosity: 80000, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peanut_butter"};
elements.frozen_peanut_butter = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"peanut_butter"};
elements.maple_syrup = {color:"#BB6528", behavior:L, category:F, state:"liquid", density:1370, viscosity: 50000, tempHigh:150, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_maple_syrup"};
elements.frozen_maple_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1370, tempHigh:5, stateHigh:"maple_syrup"};
elements.soy_sauce = {color:"#3B2F2F", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_soy_sauce"};
elements.frozen_soy_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"soy_sauce"};
elements.hot_sauce = {color:"#FF2400", behavior:L, category:F, state:"liquid", density:1020, viscosity: 5000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_hot_sauce"};
elements.frozen_hot_sauce = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"hot_sauce"};
elements.mustard = {color:"#FFDB58", behavior:L, category:F, state:"liquid", density:1050, viscosity: 20000, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_mustard"};
elements.frozen_mustard = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"mustard"};

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
elements.gravy = {color:"#8B5A2B", behavior:L, category:F, state:"liquid", density:1080, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_gravy"};
elements.frozen_gravy = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1080, tempHigh:10, stateHigh:"gravy"};

elements.apple_cider = {color:"#d2691e", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_apple_cider"};
elements.frozen_apple_cider = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"apple_cider"};
elements.cola = {color:"#1a1110", behavior:L, category:F, state:"liquid", density:1040, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_cola"};
elements.frozen_cola = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1040, tempHigh:10, stateHigh:"cola"};
elements.orange_soda = {color:"#ff8c00", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_orange_soda"};
elements.frozen_orange_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"orange_soda"};
elements.grape_soda = {color:"#8a2be2", behavior:L, category:F, state:"liquid", density:1030, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_grape_soda"};
elements.frozen_grape_soda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1030, tempHigh:10, stateHigh:"grape_soda"};

// ==========================================
// 9. NATIVE SMASH TOOL PROPERTIES (breakInto)
// ==========================================
// Fruits
elements.apple.breakInto = "apple_juice";
elements.banana.breakInto = "banana_puree";
elements.orange.breakInto = "orange_juice";
elements.lemon.breakInto = "lemon_juice";
elements.lime.breakInto = "lime_juice";
elements.strawberry.breakInto = "strawberry_juice";
elements.blueberry.breakInto = "blueberry_juice";
elements.blackberry.breakInto = "blackberry_juice";
elements.raspberry.breakInto = "raspberry_juice";
elements.grape.breakInto = "grape_juice";
elements.watermelon.breakInto = "watermelon_juice";
elements.peach.breakInto = "peach_juice";
elements.cherry.breakInto = "cherry_juice";
elements.pineapple.breakInto = "pineapple_juice";
elements.mango.breakInto = "mango_juice";
elements.coconut.breakInto = ["coconut_water", "coconut_water", "wood"];
elements.kiwi.breakInto = "kiwi_juice";
elements.pomegranate.breakInto = "pomegranate_juice";
elements.cranberry.breakInto = "cranberry_juice";
elements.avocado.breakInto = "avocado_oil";
elements.tomato.breakInto = "tomato_juice";

// Veggies
elements.carrot.breakInto = "carrot_juice";
elements.broccoli.breakInto = "water";
elements.onion.breakInto = "water";
elements.garlic.breakInto = "water";
elements.lettuce.breakInto = "water";
elements.spinach.breakInto = "water";
elements.celery.breakInto = "water";
elements.bell_pepper.breakInto = "water";
elements.chili_pepper.breakInto = "hot_sauce";
elements.olive.breakInto = "olive_oil";
elements.cucumber.breakInto = "water";
elements.zucchini.breakInto = "water";
elements.eggplant.breakInto = "water";
elements.pumpkin.breakInto = "water";
elements.mushroom.breakInto = "water";
elements.cabbage.breakInto = "water";

// Nuts & Others
elements.peanut.breakInto = "peanut_butter";
elements.almond.breakInto = "nut_oil";
elements.walnut.breakInto = "nut_oil";
elements.pecan.breakInto = "nut_oil";
elements.cashew.breakInto = "nut_oil";
elements.raw_egg.breakInto = "water";
elements.popcorn_kernel.breakInto = "popped_corn";

// ==========================================
// 10. SAFE CHEMISTRY & COOKING ENGINE
// ==========================================

// --- SAFE VANILLA INITIALIZATION ---
// We initialize vanilla elements to ensure assigning reactions to them never throws an error.
const v = ["dough", "meat", "bird", "fish", "bread", "rice", "pasta", "oats", "milk", "broth", "sauce", "grease", "cabbage", "corn", "potato", "tortilla", "cheese", "acid", "sugar", "water", "yeast", "ice", "sand", "butter", "yogurt", "nut_oil", "chocolate", "marshmallow", "salt", "smoke", "fire", "steam", "snow"];
for (let i = 0; i < v.length; i++) {
    if (!elements[v[i]]) elements[v[i]] = { reactions: {} };
    if (!elements[v[i]].reactions) elements[v[i]].reactions = {};
}
// Ensure our modded elements have empty reaction objects
for (let key in elements) {
    if (elements[key].category === F && !elements[key].reactions) elements[key].reactions = {};
}

// --- BOILING AND FRYING MECHANICS (WARM WATER AND WARM OIL) ---
function addCook(raw, grilled, boiled, fried) {
    // Boiling with warm water / soup
    elements[raw].reactions["water"] = { elem1: boiled, tempMin: 80 };
    elements[raw].reactions["broth"] = { elem1: boiled, tempMin: 80 };
    // Frying in hot oil / grease
    elements[raw].reactions["olive_oil"] = { elem1: fried, tempMin: 150 };
    elements[raw].reactions["avocado_oil"] = { elem1: fried, tempMin: 150 };
    elements[raw].reactions["grease"] = { elem1: fried, tempMin: 150 };
    // Grilling directly with fire
    elements[raw].reactions["fire"] = { elem1: grilled, tempMin: 100 };
}

// Meat Variations
addCook("raw_steak", "steak", "boiled_steak", "fried_steak");
addCook("raw_chicken", "chicken", "boiled_chicken", "fried_chicken");
addCook("raw_pork", "pork", "boiled_pork", "fried_pork");
addCook("raw_bacon", "bacon", "boiled_bacon", "fried_bacon");
addCook("raw_sausage", "sausage", "boiled_sausage", "fried_sausage");
addCook("raw_salmon", "salmon", "boiled_salmon", "fried_salmon");
addCook("raw_shrimp", "shrimp", "boiled_shrimp", "fried_shrimp");
addCook("raw_crab", "crab", "boiled_crab", "fried_crab");

// Veggie & Dough Variations
addCook("potato", "baked_potato", "boiled_potato", "fried_potato");
addCook("sweet_potato", "baked_sweet_potato", "boiled_sweet_potato", "fried_sweet_potato");
addCook("carrot", "cooked_carrot", "boiled_carrot", "fried_carrot");
addCook("broccoli", "cooked_broccoli", "boiled_broccoli", "fried_broccoli");
addCook("onion", "caramelized_onion", "boiled_onion", "fried_onion");
addCook("garlic", "roasted_garlic", "boiled_garlic", "fried_garlic");
addCook("cabbage", "cooked_cabbage", "boiled_cabbage", "fried_cabbage");
addCook("dough", "bread", "boiled_dough", "fried_dough");

// --- A. FREEZING DRINKS (Juice + Ice = Instantly frozen) ---
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

// --- B. BLENDING (Juice + Milk = Smoothie) ---
elements.strawberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.banana_puree.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.blueberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.peach_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.mango_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.pineapple_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };

// --- C. PRESERVES (Juice + Sugar = Jam) ---
elements.strawberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.blueberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.peach_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.cherry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.grape_juice.reactions["sugar"] = { elem1: "jam", elem2: null };

// --- D. FERMENTATION (Juices + Yeast = Wine/Alcohol) ---
elements.cherry_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.peach_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.pineapple_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.watermelon_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.grape_juice.reactions["yeast"] = { elem1: "wine", elem2: null };

// --- E. BAKING & DOUGH MIXES ---
elements.dough.reactions["water"] = { elem1: "bagel", elem2: null };
elements.dough.reactions["butter"] = { elem1: "croissant", elem2: null };
elements.dough.reactions["milk"] = { elem1: "biscuit", elem2: null };
elements.dough.reactions["yogurt"] = { elem1: "naan", elem2: null };
elements.dough.reactions["nut_oil"] = { elem1: "donut", elem2: null };
elements.dough.reactions["chocolate"] = { elem1: "cookie", elem2: null };
elements.dough.reactions["sugar"] = { elem1: "cookie_dough", elem2: null };
elements.dough.reactions["tomato_juice"] = { elem1: "pizza", elem2: null };
elements.cookie_dough.reactions["fire"] = { elem1: "cookie", elem2: null };

// --- F. MEAL PREP & CONDIMENTS ---
elements.bread.reactions["steak"] = { elem1: "burger", elem2: null };
elements.bread.reactions["cheese"] = { elem1: "grilled_cheese", elem2: null };
elements.cooked_pasta.reactions["cheese"] = { elem1: "mac_and_cheese", elem2: null };
elements.tortilla.reactions["steak"] = { elem1: "taco", elem2: null };
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
elements.tomato_juice.reactions["sugar"] = { elem1: "ketchup", elem2: null };

// --- G. SMOKING & CURING MEATS ---
elements.raw_steak.reactions["smoke"] = { elem1: "steak", elem2: null }; 
elements.raw_steak.reactions["salt"] = { elem1: "raw_bacon", elem2: null }; 
elements.raw_bacon.reactions["smoke"] = { elem1: "bacon", elem2: null };
elements.raw_sausage.reactions["smoke"] = { elem1: "sausage", elem2: null };
elements.raw_salmon.reactions["smoke"] = { elem1: "salmon", elem2: null };

// --- H. EGG PHYSICS ---
elements.raw_egg.reactions["fire"] = { elem1: "fried_egg", elem2: null };
elements.raw_egg.reactions["water"] = { elem1: "boiled_egg", tempMin: 80 };
elements.raw_egg.reactions["cheese"] = { elem1: "omelette", tempMin: 100 };

// --- I. FUN CHAOTIC CHEMISTRY ---
// Mentos & Diet Coke (Foam Explosion!)
elements.cola.reactions["mint_leaf"] = { elem1: "foam", elem2: "foam" };
// Hot Sauce Melts Ice Instantly
elements.hot_sauce.reactions["ice"] = { elem1: "water", elem2: "hot_sauce" };
elements.hot_sauce.reactions["snow"] = { elem1: "water", elem2: "hot_sauce" };
// Spicy Chili Stew
elements.chili_pepper.reactions["meat"] = { elem1: "stew", elem2: null };
// Curdling Milk
elements.milk.reactions["acid"] = { elem1: "sour_cream", elem2: null };
elements.milk.reactions["lemon_juice"] = { elem1: "sour_cream", elem2: null };
// Milk Freezes to Snow
elements.milk.reactions["ice"] = { elem1: "snow", elem2: null };

// ==========================================
// 11. MINCED, MASHED & GROUND VARIANTS (Smash Tool Expansion)
// Paste at the very bottom of your file!
// ==========================================

// --- NEW GROUND & MINCED ELEMENTS ---
elements.ground_beef = {color:"#a83232", behavior:behaviors.POWDER, category:"food", state:"solid", density:1000, tempHigh:100, stateHigh:"burger", tempLow:-5, stateLow:"frozen_ground_beef"};
elements.frozen_ground_beef = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:1000, tempHigh:10, stateHigh:"ground_beef"};

elements.ground_pork = {color:"#e89b9b", behavior:behaviors.POWDER, category:"food", state:"solid", density:990, tempHigh:100, stateHigh:"sausage", tempLow:-5, stateLow:"frozen_ground_pork"};
elements.frozen_ground_pork = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:990, tempHigh:10, stateHigh:"ground_pork"};

elements.ground_chicken = {color:"#f5c2c2", behavior:behaviors.POWDER, category:"food", state:"solid", density:980, tempHigh:100, stateHigh:"chicken_nugget", tempLow:-5, stateLow:"frozen_ground_chicken"};
elements.frozen_ground_chicken = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"ground_chicken"};

elements.ground_turkey = {color:"#e3aa9a", behavior:behaviors.POWDER, category:"food", state:"solid", density:980, tempHigh:100, stateHigh:"meatball", tempLow:-5, stateLow:"frozen_ground_turkey"};
elements.frozen_ground_turkey = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:980, tempHigh:10, stateHigh:"ground_turkey"};

elements.breadcrumbs = {color:"#d2b48c", behavior:behaviors.POWDER, category:"food", state:"solid", density:400, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_breadcrumbs"};
elements.frozen_breadcrumbs = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:400, tempHigh:10, stateHigh:"breadcrumbs"};

elements.minced_garlic = {color:"#f0e68c", behavior:behaviors.POWDER, category:"food", state:"solid", density:650, tempHigh:110, stateHigh:"roasted_garlic", tempLow:-5, stateLow:"frozen_minced_garlic"};
elements.frozen_minced_garlic = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:650, tempHigh:10, stateHigh:"minced_garlic"};

elements.minced_onion = {color:"#dda0dd", behavior:behaviors.POWDER, category:"food", state:"solid", density:620, tempHigh:110, stateHigh:"caramelized_onion", tempLow:-5, stateLow:"frozen_minced_onion"};
elements.frozen_minced_onion = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:620, tempHigh:10, stateHigh:"minced_onion"};

elements.tomato_paste = {color:"#8b0000", behavior:behaviors.STURDYPOWDER, category:"food", state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tomato_paste"};
elements.frozen_tomato_paste = {color:"#e0f7fa", behavior:behaviors.WALL, category:"states", state:"solid", density:850, tempHigh:10, stateHigh:"tomato_paste"};

// --- OVERRIDING BREAKINTO PROPERTIES ---
// Meats smash into ground meats
elements.raw_steak.breakInto = "ground_beef";
elements.raw_pork.breakInto = "ground_pork";
elements.raw_chicken.breakInto = "ground_chicken";
elements.turkey_meat.breakInto = "ground_turkey";
if (elements.raw_turkey) elements.raw_turkey.breakInto = "ground_turkey";
    
// Breads & Crackers smash into Breadcrumbs
elements.bread.breakInto = "breadcrumbs";
elements.cracker.breakInto = "breadcrumbs";
elements.bagel.breakInto = "breadcrumbs";
elements.croissant.breakInto = "breadcrumbs";
elements.biscuit.breakInto = "breadcrumbs";
elements.baguette.breakInto = "breadcrumbs";
elements.crouton.breakInto = "breadcrumbs";

// Veggies & Fruits get more realistic smashes
elements.potato.breakInto = "mashed_potato";
elements.boiled_potato.breakInto = "mashed_potato";
elements.avocado.breakInto = "guacamole"; // Better than avocado oil!
if (elements.chickpea) elements.chickpea.breakInto = "hummus";
elements.garlic.breakInto = "minced_garlic";
elements.onion.breakInto = "minced_onion";
elements.tomato.breakInto = ["tomato_juice", "tomato_paste"]; // Splatters into both!

// Raw Fish smashes into Sushi (Sushi grade preparation!)
elements.raw_salmon.breakInto = "sushi";
elements.raw_tuna.breakInto = "sushi";

// --- NEW REACTIONS FOR GROUND INGREDIENTS ---
if (!elements.ground_beef.reactions) elements.ground_beef.reactions = {};
elements.ground_beef.reactions["fire"] = { elem1: "burger", elem2: null };
elements.ground_beef.reactions["bread"] = { elem1: "burger", elem2: null };
    
if (!elements.ground_pork.reactions) elements.ground_pork.reactions = {};
elements.ground_pork.reactions["fire"] = { elem1: "sausage", elem2: null };

if (!elements.ground_chicken.reactions) elements.ground_chicken.reactions = {};
elements.ground_chicken.reactions["fire"] = { elem1: "chicken_nugget", elem2: null };
elements.ground_chicken.reactions["olive_oil"] = { elem1: "fried_chicken", elem2: null };

if (!elements.breadcrumbs.reactions) elements.breadcrumbs.reactions = {};
elements.breadcrumbs.reactions["raw_chicken"] = { elem1: "chicken_nugget", elem2: null }; // Breading chicken!
elements.breadcrumbs.reactions["raw_shrimp"] = { elem1: "fried_shrimp", elem2: null }; // Breading shrimp!
    
if (!elements.mashed_potato.reactions) elements.mashed_potato.reactions = {};
elements.mashed_potato.reactions["olive_oil"] = { elem1: "hash_brown", elem2: null };
elements.mashed_potato.reactions["fire"] = { elem1: "tater_tot", elem2: null };

if (!elements.tomato_paste.reactions) elements.tomato_paste.reactions = {};
elements.tomato_paste.reactions["water"] = { elem1: "tomato_juice", elem2: null };
elements.tomato_paste.reactions["sugar"] = { elem1: "ketchup", elem2: null };
elements.tomato_paste.reactions["onion"] = { elem1: "pizza", elem2: null }; // Paste + onion = pizza sauce base!

// ==========================================
// PHASE 2: THE ULTIMATE REACTIONS ENGINE
// Paste this at the absolute bottom of your file!
// ==========================================

// --- SAFE INITIALIZATION ENGINE ---
// This ensures that assigning reactions to vanilla elements never crashes the game.
const vanillaElements = [
    "dough", "meat", "bird", "fish", "bread", "rice", "pasta", "oats", "milk", 
    "broth", "sauce", "grease", "cabbage", "corn", "potato", "tortilla", "cheese", 
    "acid", "sugar", "water", "yeast", "ice", "sand", "butter", "yogurt", "nut_oil", 
    "chocolate", "marshmallow", "salt", "smoke", "fire", "steam", "snow", "vinegar"
];

for (let i = 0; i < vanillaElements.length; i++) {
    if (!elements[vanillaElements[i]]) elements[vanillaElements[i]] = { reactions: {} };
    if (!elements[vanillaElements[i]].reactions) elements[vanillaElements[i]].reactions = {};
}

// Ensure all modded food elements have empty reaction objects
for (let key in elements) {
    if (elements[key].category === "food" && !elements[key].reactions) {
        elements[key].reactions = {};
    }
}

// Helper function for crash-proof reaction assignments
function safeAddReaction(elem1, elem2, result1, result2 = null) {
    if (elements[elem1]) {
        if (!elements[elem1].reactions) elements[elem1].reactions = {};
        elements[elem1].reactions[elem2] = { elem1: result1, elem2: result2 };
    }
}

// ==========================================
// 1. COOKING, SMOKING & CURING MEATS
// ==========================================
// Fire (Grilling)
safeAddReaction("raw_squab", "fire", "cooked_squab");
safeAddReaction("raw_guinea_fowl", "fire", "cooked_guinea_fowl");
safeAddReaction("raw_grouse", "fire", "cooked_grouse");
safeAddReaction("raw_partridge", "fire", "cooked_partridge");
safeAddReaction("raw_woodcock", "fire", "cooked_woodcock");
safeAddReaction("raw_ostrich", "fire", "cooked_ostrich");
safeAddReaction("raw_emu", "fire", "cooked_emu");
safeAddReaction("raw_alligator", "fire", "cooked_alligator");
safeAddReaction("raw_kangaroo", "fire", "cooked_kangaroo");
safeAddReaction("raw_camel", "fire", "cooked_camel");
safeAddReaction("raw_steak", "fire", "cooked_steak");
safeAddReaction("raw_chicken", "fire", "cooked_chicken");
safeAddReaction("raw_pork", "fire", "cooked_pork");
safeAddReaction("raw_bacon", "fire", "crispy_bacon");
safeAddReaction("raw_sausage", "fire", "cooked_sausage");
safeAddReaction("raw_salmon", "fire", "cooked_salmon");
safeAddReaction("raw_tuna", "fire", "cooked_tuna");
safeAddReaction("raw_shrimp", "fire", "cooked_shrimp");
safeAddReaction("raw_crab", "fire", "cooked_crab");

// Smoke (Slow Smoking)
safeAddReaction("raw_steak", "smoke", "cooked_steak");
safeAddReaction("raw_bacon", "smoke", "crispy_bacon");
safeAddReaction("raw_sausage", "smoke", "cooked_sausage");
safeAddReaction("raw_salmon", "smoke", "cooked_salmon");
safeAddReaction("raw_brisket", "smoke", "cooked_brisket");
safeAddReaction("raw_ribs", "smoke", "cooked_ribs");
safeAddReaction("raw_ostrich", "smoke", "cooked_ostrich");
safeAddReaction("raw_camel", "smoke", "cooked_camel");
safeAddReaction("raw_pork", "smoke", "cooked_pork");

// Salt (Curing)
safeAddReaction("raw_steak", "salt", "raw_bacon");
safeAddReaction("raw_pork", "salt", "raw_bacon");
safeAddReaction("raw_salmon", "salt", "cooked_salmon");
safeAddReaction("raw_ostrich", "salt", "cooked_ostrich");
safeAddReaction("cabbage", "salt", "sauerkraut");

// ==========================================
// 2. EGGS & BREAKFAST
// ==========================================
safeAddReaction("raw_egg", "fire", "fried_egg");
safeAddReaction("raw_egg", "steam", "boiled_egg");
safeAddReaction("raw_egg", "water", "boiled_egg");
safeAddReaction("raw_egg", "cheese", "omelette");
safeAddReaction("raw_egg", "cheddar", "omelette");
safeAddReaction("raw_egg", "provolone", "omelette");
safeAddReaction("raw_egg", "spinach", "omelette");
safeAddReaction("dough", "water", "bagel");
safeAddReaction("dough", "butter_stick", "croissant");
safeAddReaction("dough", "butter", "croissant");
safeAddReaction("dough", "milk", "biscuit");
safeAddReaction("dough", "buttermilk", "biscuit");
safeAddReaction("dough", "nut_oil", "donut");

// ==========================================
// 3. DEEP FRYING (BOILING OIL)
// ==========================================
safeAddReaction("olive_oil", "potato", "french_fries", "olive_oil");
safeAddReaction("olive_oil", "sweet_potato", "potato_chip", "olive_oil");
safeAddReaction("olive_oil", "onion", "onion_ring", "olive_oil");
safeAddReaction("olive_oil", "cheese_curd", "mozzarella_stick", "olive_oil");
safeAddReaction("olive_oil", "mozzarella", "mozzarella_stick", "olive_oil");
safeAddReaction("olive_oil", "raw_chicken", "hot_wings", "olive_oil");
safeAddReaction("olive_oil", "dough", "donut", "olive_oil");
safeAddReaction("olive_oil", "raw_shrimp", "cooked_shrimp", "olive_oil");
safeAddReaction("olive_oil", "chickpea", "falafel", "olive_oil");
safeAddReaction("olive_oil", "mashed_potato", "tater_tot", "olive_oil");
safeAddReaction("olive_oil", "sausage", "corndog", "olive_oil");

// ==========================================
// 4. MEAL PREP & RECIPE ASSEMBLY
// ==========================================
// Pasta & Cheese
safeAddReaction("macaroni", "cheese", "mac_and_cheese");
safeAddReaction("macaroni", "cheddar", "mac_and_cheese");
safeAddReaction("macaroni", "gruyere", "mac_and_cheese");
safeAddReaction("pasta", "tomato_juice", "spaghetti");
safeAddReaction("pasta", "meatball", "spaghetti");
safeAddReaction("pasta", "ricotta", "lasagna");
safeAddReaction("dough", "ricotta", "ravioli");

// Mexican
safeAddReaction("tortilla", "cooked_steak", "taco");
safeAddReaction("tortilla", "cooked_chicken", "taco");
safeAddReaction("tortilla", "black_bean", "burrito");
safeAddReaction("tortilla", "refried_beans", "burrito");
safeAddReaction("tortilla", "cheese", "quesadilla");
safeAddReaction("tortilla", "cheddar", "quesadilla");
safeAddReaction("corn", "cheese", "nachos");
safeAddReaction("avocado", "onion", "guacamole");
safeAddReaction("tomato", "onion", "salsa");
safeAddReaction("tomato_juice", "onion", "salsa");

// Asian
safeAddReaction("rice", "raw_salmon", "sushi");
safeAddReaction("rice", "raw_tuna", "sushi");
safeAddReaction("rice", "seaweed", "sushi");
safeAddReaction("rice", "olive_oil", "fried_rice");
safeAddReaction("broth", "pasta", "pho");

// Sandwiches & Burgers
safeAddReaction("bread", "cooked_steak", "burger");
safeAddReaction("bread", "cooked_camel", "burger");
safeAddReaction("bread", "cheese", "grilled_cheese");
safeAddReaction("bread", "provolone", "grilled_cheese");
safeAddReaction("bread", "cooked_brisket", "brisket_sandwich");

// Middle Eastern / Mediterranean
safeAddReaction("chickpea", "olive_oil", "hummus");
safeAddReaction("eggplant", "olive_oil", "baba_ganoush");
safeAddReaction("yogurt", "cucumber", "tzatziki");
safeAddReaction("bread", "falafel", "shawarma");

// ==========================================
// 5. BAKING & DESSERTS
// ==========================================
safeAddReaction("dough", "sugar", "cookie_dough");
safeAddReaction("cookie_dough", "fire", "cookie");
safeAddReaction("cookie_dough", "chocolate_bar", "cookie");
safeAddReaction("dough", "chocolate_bar", "brownie");
safeAddReaction("dough", "blueberry", "muffin");
safeAddReaction("dough", "strawberry", "toaster_pastry");
safeAddReaction("dough", "cherry", "pie");
safeAddReaction("dough", "apple", "pie");
safeAddReaction("dough", "apple_juice", "apple_strudel");
safeAddReaction("dough", "peach", "peach_cobbler");
safeAddReaction("dough", "cinnamon", "churro_bite");
safeAddReaction("dough", "cream_cheese", "cheesecake");

safeAddReaction("heavy_cream", "sugar", "panna_cotta");
safeAddReaction("milk", "sugar", "gelato");
safeAddReaction("yogurt", "ice", "frozen_yogurt");
safeAddReaction("cookie", "gelato", "ice_cream_sandwich");
safeAddReaction("banana", "gelato", "banana_split");
safeAddReaction("melted_dark_chocolate", "heavy_cream", "mousse");
safeAddReaction("graham_cracker", "marshmallow", "s_more");

// ==========================================
// 6. FREEZING DRINKS
// ==========================================
const freezeJuices = [
    "apple_juice", "orange_juice", "lemon_juice", "lime_juice", "strawberry_juice", 
    "banana_puree", "blueberry_juice", "blackberry_juice", "raspberry_juice", 
    "peach_juice", "cherry_juice", "watermelon_juice", "mango_juice", "pineapple_juice", 
    "grape_juice", "tomato_juice", "cranberry_juice", "pomegranate_juice", "kiwi_juice"
];

freezeJuices.forEach(j => {
    safeAddReaction(j, "ice", "frozen_" + j);
});

// Sorbet & Sherbet
safeAddReaction("strawberry_juice", "snow", "sorbet");
safeAddReaction("mango_juice", "snow", "sorbet");
safeAddReaction("orange_juice", "milk", "sherbet");

// ==========================================
// 7. BLENDING (SMOOTHIES & JAMS)
// ==========================================
const blendJuices = [
    "strawberry_juice", "banana_puree", "blueberry_juice", "blackberry_juice", 
    "raspberry_juice", "peach_juice", "mango_juice", "pineapple_juice"
];

blendJuices.forEach(j => {
    safeAddReaction(j, "milk", "smoothie");
    safeAddReaction(j, "yogurt", "smoothie");
    safeAddReaction(j, "sugar", "jam");
});

safeAddReaction("tomato_juice", "sugar", "ketchup");
safeAddReaction("tomato_juice", "vinegar", "ketchup");

// ==========================================
// 8. BREWING DRINKS & SODAS
// ==========================================
// Coffee & Tea
safeAddReaction("coffee_bean", "water", "cold_brew");
safeAddReaction("coffee_bean", "steam", "espresso");
safeAddReaction("espresso", "milk", "cappuccino");
safeAddReaction("espresso", "heavy_cream", "macchiato");
safeAddReaction("tea_leaf", "water", "tea_liquid");
safeAddReaction("tea_leaf", "steam", "tea_liquid");
safeAddReaction("tea_liquid", "milk", "chai_tea");

// Alcohol
safeAddReaction("apple_juice", "yeast", "apple_cider");
safeAddReaction("pear_juice", "yeast", "pear_cider");
safeAddReaction("grape_juice", "yeast", "wine");
safeAddReaction("cherry_juice", "yeast", "wine");
safeAddReaction("plum_juice", "yeast", "wine");

// Sodas
safeAddReaction("lemon_juice", "sugar_water", "lemon_lime_soda");
safeAddReaction("orange_juice", "carbon_dioxide", "orange_soda");
safeAddReaction("grape_juice", "carbon_dioxide", "grape_soda");
safeAddReaction("water", "carbon_dioxide", "seltzer");

// ==========================================
// 9. FUN, CHAOTIC & PHYSICS INTERACTIONS
// ==========================================
// Mentos & Diet Coke (Foam Explosion!)
safeAddReaction("cola", "mint_leaf", "foam", "foam");
safeAddReaction("mint_leaf", "cola", "foam", "foam");
safeAddReaction("soda", "mint_leaf", "foam", "foam");

// Root Beer Floats
safeAddReaction("root_beer", "gelato", "foam");
safeAddReaction("gelato", "root_beer", "foam");

// Hot Sauce Melts Ice Instantly
safeAddReaction("hot_sauce", "ice", "water", "hot_sauce");
safeAddReaction("hot_sauce", "snow", "water", "hot_sauce");

// Spicy Chili Stew
safeAddReaction("chili_pepper", "meat", "chili_stew");
safeAddReaction("chili_pepper", "broth", "chili_stew");
safeAddReaction("carolina_reaper", "broth", "chili_stew");

// Curdling Milk & Dairy Physics
safeAddReaction("milk", "acid", "sour_cream");
safeAddReaction("milk", "lemon_juice", "sour_cream");
safeAddReaction("milk", "vinegar", "buttermilk");
safeAddReaction("milk", "ice", "snow"); // Cold milk freezes nicely

// Chocolate Melting
safeAddReaction("chocolate_bar", "fire", "chocolate_syrup");
safeAddReaction("white_chocolate", "fire", "melted_white_chocolate");
safeAddReaction("dark_chocolate", "fire", "melted_dark_chocolate");

// Marshmallow Roasting
safeAddReaction("marshmallow", "fire", "burnt"); // Careful not to burn it!
