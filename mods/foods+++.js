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


