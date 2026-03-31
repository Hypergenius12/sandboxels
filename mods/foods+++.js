// ==========================================
// 150 FOODS ULTIMATE - MANUAL EDITION
// 150 Foods, 150 Frozen States, Universal Burnt State, 0 Loops.
// ==========================================

const F = "food";
const S = "states";
const P = behaviors.POWDER;
const W = behaviors.WALL;
const L = behaviors.LIQUID;
const SP = behaviors.STURDYPOWDER;

// --- UNIVERSAL BURNT ELEMENT ---
// All solid foods turn into this when heated, and this turns to ash at 600C.
elements.burnt = {
    color: ["#2b1d14", "#1a110c", "#000000"],
    behavior: SP,
    category: S,
    state: "solid",
    density: 500,
    tempHigh: 600,
    stateHigh: "ash"
};

// ==========================================
// 1-50: FRUITS, VEGGIES & BASICS
// ==========================================
elements.avocado = {color:"#568203", behavior:P, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_avocado"};
elements.frozen_avocado = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"avocado"};

elements.guacamole = {color:"#7BA05B", behavior:SP, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_guacamole"};
elements.frozen_guacamole = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"guacamole"};

elements.strawberry = {color:"#FC5A8D", behavior:P, category:F, state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_strawberry"};
elements.frozen_strawberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"strawberry"};

elements.banana = {color:"#FFE135", behavior:P, category:F, state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_banana"};
elements.frozen_banana = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"banana"};

elements.blueberry = {color:"#4F86F7", behavior:P, category:F, state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blueberry"};
elements.frozen_blueberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"blueberry"};

elements.blackberry = {color:"#43182F", behavior:P, category:F, state:"solid", density:630, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_blackberry"};
elements.frozen_blackberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"blackberry"};

elements.raspberry = {color:"#E30B5D", behavior:P, category:F, state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_raspberry"};
elements.frozen_raspberry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"raspberry"};

elements.peach = {color:"#FFE5B4", behavior:P, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_peach"};
elements.frozen_peach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"peach"};

elements.pear = {color:"#D1E231", behavior:P, category:F, state:"solid", density:720, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pear"};
elements.frozen_pear = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pear"};

elements.cherry = {color:"#D2042D", behavior:P, category:F, state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cherry"};
elements.frozen_cherry = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cherry"};

elements.plum = {color:"#8E4585", behavior:P, category:F, state:"solid", density:710, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_plum"};
elements.frozen_plum = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"plum"};

elements.watermelon = {color:"#FC6C85", behavior:P, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_watermelon"};
elements.frozen_watermelon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"watermelon"};

elements.mango = {color:"#FFC324", behavior:P, category:F, state:"solid", density:740, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mango"};
elements.frozen_mango = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"mango"};

elements.pineapple = {color:"#563C0D", behavior:P, category:F, state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pineapple"};
elements.frozen_pineapple = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pineapple"};

elements.coconut = {color:"#4D3227", behavior:W, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_coconut"};
elements.frozen_coconut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"coconut"};

elements.coconut_water = {color:"#F0F8FF", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_coconut_water"};
elements.frozen_coconut_water = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"coconut_water"};

elements.maple_syrup = {color:"#BB6528", behavior:L, category:F, state:"liquid", density:1370, tempHigh:120, stateHigh:"burnt", tempLow:-10, stateLow:"frozen_maple_syrup"};
elements.frozen_maple_syrup = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1400, tempHigh:5, stateHigh:"maple_syrup"};

elements.carrot = {color:"#ED9121", behavior:P, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_carrot"};
elements.frozen_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"carrot"};

elements.celery = {color:"#D0FF14", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_celery"};
elements.frozen_celery = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"celery"};

elements.broccoli = {color:"#4C9141", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_broccoli"};
elements.frozen_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"broccoli"};

elements.spinach = {color:"#3F704D", behavior:P, category:F, state:"solid", density:300, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_spinach"};
elements.frozen_spinach = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"spinach"};

elements.cabbage = {color:"#87A96B", behavior:P, category:F, state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cabbage"};
elements.frozen_cabbage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cabbage"};

elements.cauliflower = {color:"#ECEADD", behavior:P, category:F, state:"solid", density:480, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cauliflower"};
elements.frozen_cauliflower = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"cauliflower"};

elements.pea = {color:"#98FB98", behavior:P, category:F, state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pea"};
elements.frozen_pea = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"pea"};

elements.bell_pepper = {color:"#E34234", behavior:P, category:F, state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_bell_pepper"};
elements.frozen_bell_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"bell_pepper"};

elements.chili_pepper = {color:"#C21807", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chili_pepper"};
elements.frozen_chili_pepper = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"chili_pepper"};

elements.onion = {color:"#DDA0DD", behavior:P, category:F, state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_onion"};
elements.frozen_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"onion"};

elements.garlic = {color:"#F0E68C", behavior:P, category:F, state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_garlic"};
elements.frozen_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"garlic"};

elements.olive = {color:"#808000", behavior:P, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_olive"};
elements.frozen_olive = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"olive"};

elements.olive_oil = {color:"#BDB76B", behavior:L, category:F, state:"liquid", density:910, tempHigh:250, stateHigh:"fire", tempLow:-5, stateLow:"frozen_olive_oil"};
elements.frozen_olive_oil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:5, stateHigh:"olive_oil"};

// ==========================================
// 31-70: BREADS, PASTRIES & SWEETS
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

elements.pudding = {color:"#F5DEB3", behavior:L, category:F, state:"liquid", density:1100, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pudding"};
elements.frozen_pudding = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"pudding"};

elements.fudge = {color:"#2B1B10", behavior:W, category:F, state:"solid", density:1200, tempHigh:100, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fudge"};
elements.frozen_fudge = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1200, tempHigh:10, stateHigh:"fudge"};

elements.cotton_candy = {color:"#FFB7C5", behavior:SP, category:F, state:"solid", density:100, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cotton_candy"};
elements.frozen_cotton_candy = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:100, tempHigh:10, stateHigh:"cotton_candy"};

elements.marshmallow = {color:"#FFFFFF", behavior:W, category:F, state:"solid", density:200, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_marshmallow"};
elements.frozen_marshmallow = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:250, tempHigh:10, stateHigh:"marshmallow"};

// ==========================================
// 71-100: MEATS, MEALS & CARBS
// ==========================================
elements.oats = {color:"#E8D8A6", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_oats"};
elements.frozen_oats = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"oats"};

elements.oatmeal = {color:"#D2B48C", behavior:L, category:F, state:"liquid", density:1050, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_oatmeal"};
elements.frozen_oatmeal = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"oatmeal"};

elements.granola = {color:"#B8860B", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_granola"};
elements.frozen_granola = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"granola"};

elements.cereal = {color:"#DEB887", behavior:P, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cereal"};
elements.frozen_cereal = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"cereal"};

elements.potato_chip = {color:"#FFD700", behavior:SP, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_potato_chip"};
elements.frozen_potato_chip = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"potato_chip"};

elements.nachos = {color:"#FF8C00", behavior:W, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_nachos"};
elements.frozen_nachos = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"nachos"};

elements.bacon = {color:"#FA8072", behavior:W, category:F, state:"solid", density:1050, tempHigh:150, stateHigh:"crispy_bacon", tempLow:-5, stateLow:"frozen_bacon"};
elements.frozen_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"bacon"};

elements.crispy_bacon = {color:"#8B4513", behavior:W, category:F, state:"solid", density:800, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crispy_bacon"};
elements.frozen_crispy_bacon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"crispy_bacon"};

elements.sausage = {color:"#8B5A2B", behavior:W, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sausage"};
elements.frozen_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"sausage"};

elements.hotdog = {color:"#CD5C5C", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_hotdog"};
elements.frozen_hotdog = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"hotdog"};

elements.tofu = {color:"#F0FFF0", behavior:SP, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_tofu"};
elements.frozen_tofu = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"tofu"};

elements.steak = {color:"#8B0000", behavior:W, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_steak"};
elements.frozen_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"steak"};

elements.meatball = {color:"#800000", behavior:SP, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_meatball"};
elements.frozen_meatball = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"meatball"};

elements.ham = {color:"#FFA07A", behavior:W, category:F, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ham"};
elements.frozen_ham = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"ham"};

elements.turkey_meat = {color:"#CD853F", behavior:W, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_turkey_meat"};
elements.frozen_turkey_meat = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"turkey_meat"};

elements.fried_chicken = {color:"#D2691E", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_chicken"};
elements.frozen_fried_chicken = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"fried_chicken"};

elements.chicken_nugget = {color:"#F4A460", behavior:SP, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chicken_nugget"};
elements.frozen_chicken_nugget = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"chicken_nugget"};

elements.pepperoni = {color:"#B22222", behavior:SP, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pepperoni"};
elements.frozen_pepperoni = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"pepperoni"};

elements.shrimp = {color:"#FF7F50", behavior:SP, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_shrimp"};
elements.frozen_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"shrimp"};

elements.crab_meat = {color:"#FF6347", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_crab_meat"};
elements.frozen_crab_meat = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"crab_meat"};

elements.lobster_meat = {color:"#FF4500", behavior:W, category:F, state:"solid", density:1050, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_lobster_meat"};
elements.frozen_lobster_meat = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1050, tempHigh:10, stateHigh:"lobster_meat"};

elements.sushi = {color:"#FFFAFA", behavior:W, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sushi"};
elements.frozen_sushi = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"sushi"};

elements.burrito = {color:"#DEB887", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_burrito"};
elements.frozen_burrito = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"burrito"};

elements.quesadilla = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_quesadilla"};
elements.frozen_quesadilla = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"quesadilla"};

elements.spring_roll = {color:"#FFE4B5", behavior:W, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_spring_roll"};
elements.frozen_spring_roll = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"spring_roll"};

elements.dumpling = {color:"#FFFACD", behavior:W, category:F, state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_dumpling"};
elements.frozen_dumpling = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"dumpling"};

elements.samosa = {color:"#DAA520", behavior:W, category:F, state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_samosa"};
elements.frozen_samosa = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"samosa"};

elements.taco = {color:"#DAA520", behavior:W, category:F, state:"solid", density:800, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_taco"};
elements.frozen_taco = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"taco"};

elements.pasta = {color:"#F0E68C", behavior:P, category:F, state:"solid", density:1300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pasta"};
elements.frozen_pasta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1300, tempHigh:10, stateHigh:"pasta"};

elements.spaghetti = {color:"#FFFACD", behavior:SP, category:F, state:"solid", density:1100, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_spaghetti"};
elements.frozen_spaghetti = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1100, tempHigh:10, stateHigh:"spaghetti"};

// ==========================================
// NEW CONTENT STARTS HERE
// ==========================================

// === 5. COOKED OVERRIDES ===
elements.carrot.tempHigh = 110; elements.carrot.stateHigh = "cooked_carrot";
elements.cooked_carrot = {color:"#CC7722", behavior:SP, category:F, state:"solid", density:750, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_carrot"};
elements.frozen_cooked_carrot = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:800, tempHigh:10, stateHigh:"cooked_carrot"};

elements.broccoli.tempHigh = 110; elements.broccoli.stateHigh = "cooked_broccoli";
elements.cooked_broccoli = {color:"#3b7033", behavior:SP, category:F, state:"solid", density:450, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_broccoli"};
elements.frozen_cooked_broccoli = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"cooked_broccoli"};

elements.onion.tempHigh = 110; elements.onion.stateHigh = "caramelized_onion";
elements.caramelized_onion = {color:"#A0522D", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_caramelized_onion"};
elements.frozen_caramelized_onion = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"caramelized_onion"};

elements.garlic.tempHigh = 110; elements.garlic.stateHigh = "roasted_garlic";
elements.roasted_garlic = {color:"#DEB887", behavior:SP, category:F, state:"solid", density:600, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_roasted_garlic"};
elements.frozen_roasted_garlic = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"roasted_garlic"};

elements.sausage.tempHigh = 110; elements.sausage.stateHigh = "cooked_sausage";
elements.cooked_sausage = {color:"#8B5A2B", behavior:W, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_sausage"};
elements.frozen_cooked_sausage = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"cooked_sausage"};

elements.steak.tempHigh = 110; elements.steak.stateHigh = "cooked_steak";
elements.cooked_steak = {color:"#5c3a21", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_steak"};
elements.frozen_cooked_steak = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_steak"};

elements.shrimp.tempHigh = 110; elements.shrimp.stateHigh = "cooked_shrimp";
elements.cooked_shrimp = {color:"#FF7F50", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_shrimp"};
elements.frozen_cooked_shrimp = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_shrimp"};

elements.crab_meat.tempHigh = 110; elements.crab_meat.stateHigh = "cooked_crab_meat";
elements.cooked_crab_meat = {color:"#FF4500", behavior:SP, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cooked_crab_meat"};
elements.frozen_cooked_crab_meat = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cooked_crab_meat"};

elements.tofu.tempHigh = 130; elements.tofu.stateHigh = "fried_tofu";
elements.fried_tofu = {color:"#F5DEB3", behavior:SP, category:F, state:"solid", density:850, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_tofu"};
elements.frozen_fried_tofu = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"fried_tofu"};

elements.spring_roll.tempHigh = 130; elements.spring_roll.stateHigh = "fried_spring_roll";
elements.fried_spring_roll = {color:"#DAA520", behavior:W, category:F, state:"solid", density:650, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_spring_roll"};
elements.frozen_fried_spring_roll = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"fried_spring_roll"};

elements.samosa.tempHigh = 130; elements.samosa.stateHigh = "fried_samosa";
elements.fried_samosa = {color:"#B8860B", behavior:W, category:F, state:"solid", density:700, tempHigh:240, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_fried_samosa"};
elements.frozen_fried_samosa = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"fried_samosa"};


// === 6. JUICES & PUREES ===
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


// === 7. 50 NEW FOODS (SPICES, NUTS, VEGGIES, MEALS) ===
elements.cinnamon = {color:"#D2691E", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cinnamon"};
elements.frozen_cinnamon = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"cinnamon"};
elements.nutmeg = {color:"#8B4513", behavior:P, category:F, state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_nutmeg"};
elements.frozen_nutmeg = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"nutmeg"};
elements.ginger_powder = {color:"#F5DEB3", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_ginger_powder"};
elements.frozen_ginger_powder = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"ginger_powder"};
elements.turmeric = {color:"#FFD700", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_turmeric"};
elements.frozen_turmeric = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"turmeric"};
elements.cumin = {color:"#B8860B", behavior:P, category:F, state:"solid", density:430, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cumin"};
elements.frozen_cumin = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:430, tempHigh:10, stateHigh:"cumin"};
elements.paprika = {color:"#FF4500", behavior:P, category:F, state:"solid", density:420, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_paprika"};
elements.frozen_paprika = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:420, tempHigh:10, stateHigh:"paprika"};
elements.oregano = {color:"#556B2F", behavior:P, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_oregano"};
elements.frozen_oregano = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:300, tempHigh:10, stateHigh:"oregano"};
elements.basil = {color:"#228B22", behavior:P, category:F, state:"solid", density:250, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_basil"};
elements.frozen_basil = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:250, tempHigh:10, stateHigh:"basil"};
elements.thyme = {color:"#6B8E23", behavior:P, category:F, state:"solid", density:280, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_thyme"};
elements.frozen_thyme = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:280, tempHigh:10, stateHigh:"thyme"};
elements.rosemary = {color:"#4A5D23", behavior:P, category:F, state:"solid", density:290, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_rosemary"};
elements.frozen_rosemary = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:290, tempHigh:10, stateHigh:"rosemary"};

elements.almond = {color:"#FFEBCD", behavior:P, category:F, state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_almond"};
elements.frozen_almond = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"almond"};
elements.walnut = {color:"#8B4513", behavior:P, category:F, state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_walnut"};
elements.frozen_walnut = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"walnut"};
elements.pecan = {color:"#A0522D", behavior:P, category:F, state:"solid", density:580, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pecan"};
elements.frozen_pecan = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:580, tempHigh:10, stateHigh:"pecan"};
elements.cashew = {color:"#F5DEB3", behavior:P, category:F, state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cashew"};
elements.frozen_cashew = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:620, tempHigh:10, stateHigh:"cashew"};
elements.pistachio = {color:"#93C572", behavior:P, category:F, state:"solid", density:610, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_pistachio"};
elements.frozen_pistachio = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:610, tempHigh:10, stateHigh:"pistachio"};
elements.macadamia = {color:"#FFF8DC", behavior:P, category:F, state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_macadamia"};
elements.frozen_macadamia = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"macadamia"};
elements.sunflower_seed = {color:"#3B2F2F", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sunflower_seed"};
elements.frozen_sunflower_seed = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"sunflower_seed"};
elements.chia_seed = {color:"#2B1B10", behavior:P, category:F, state:"solid", density:300, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_chia_seed"};
elements.frozen_chia_seed = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:300, tempHigh:10, stateHigh:"chia_seed"};
elements.flax_seed = {color:"#8B5A2B", behavior:P, category:F, state:"solid", density:350, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_flax_seed"};
elements.frozen_flax_seed = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:350, tempHigh:10, stateHigh:"flax_seed"};
elements.sesame_seed = {color:"#F0E68C", behavior:P, category:F, state:"solid", density:320, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_sesame_seed"};
elements.frozen_sesame_seed = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:320, tempHigh:10, stateHigh:"sesame_seed"};

elements.asparagus = {color:"#7BA05B", behavior:P, category:F, state:"solid", density:400, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_asparagus"};
elements.frozen_asparagus = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:400, tempHigh:10, stateHigh:"asparagus"};
elements.artichoke = {color:"#8F9779", behavior:P, category:F, state:"solid", density:450, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_artichoke"};
elements.frozen_artichoke = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:450, tempHigh:10, stateHigh:"artichoke"};
elements.eggplant = {color:"#483248", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_eggplant"};
elements.frozen_eggplant = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"eggplant"};
elements.zucchini = {color:"#5C7148", behavior:P, category:F, state:"solid", density:480, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_zucchini"};
elements.frozen_zucchini = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:480, tempHigh:10, stateHigh:"zucchini"};
elements.radish = {color:"#DC143C", behavior:P, category:F, state:"solid", density:550, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_radish"};
elements.frozen_radish = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:550, tempHigh:10, stateHigh:"radish"};
elements.turnip = {color:"#F5F5DC", behavior:P, category:F, state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_turnip"};
elements.frozen_turnip = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"turnip"};
elements.parsnip = {color:"#FFF8DC", behavior:P, category:F, state:"solid", density:620, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_parsnip"};
elements.frozen_parsnip = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:620, tempHigh:10, stateHigh:"parsnip"};
elements.beet = {color:"#8A1538", behavior:P, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_beet"};
elements.frozen_beet = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"beet"};
elements.edamame = {color:"#9ACD32", behavior:P, category:F, state:"solid", density:500, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_edamame"};
elements.frozen_edamame = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:500, tempHigh:10, stateHigh:"edamame"};

elements.sour_cream = {color:"#FFFAFA", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_sour_cream"};
elements.frozen_sour_cream = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"sour_cream"};
elements.cream_cheese = {color:"#FFFDD0", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cream_cheese"};
elements.frozen_cream_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cream_cheese"};
elements.cottage_cheese = {color:"#F8F8FF", behavior:SP, category:F, state:"solid", density:900, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cottage_cheese"};
elements.frozen_cottage_cheese = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"cottage_cheese"};
elements.brie = {color:"#F5DEB3", behavior:W, category:F, state:"solid", density:850, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_brie"};
elements.frozen_brie = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"brie"};
elements.cheddar = {color:"#FF8C00", behavior:W, category:F, state:"solid", density:950, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_cheddar"};
elements.frozen_cheddar = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:950, tempHigh:10, stateHigh:"cheddar"};
elements.mozzarella = {color:"#FFFAF0", behavior:W, category:F, state:"solid", density:920, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_mozzarella"};
elements.frozen_mozzarella = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:920, tempHigh:10, stateHigh:"mozzarella"};
elements.parmesan = {color:"#FFFACD", behavior:SP, category:F, state:"solid", density:1000, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_parmesan"};
elements.frozen_parmesan = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1000, tempHigh:10, stateHigh:"parmesan"};
elements.gouda = {color:"#DAA520", behavior:W, category:F, state:"solid", density:930, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gouda"};
elements.frozen_gouda = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:930, tempHigh:10, stateHigh:"gouda"};
elements.soy_milk = {color:"#FFF8DC", behavior:L, category:F, state:"liquid", density:1010, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_soy_milk"};
elements.frozen_soy_milk = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1010, tempHigh:10, stateHigh:"soy_milk"};
elements.oat_milk = {color:"#F5DEB3", behavior:L, category:F, state:"liquid", density:1020, tempHigh:100, stateHigh:"steam", tempLow:-5, stateLow:"frozen_oat_milk"};
elements.frozen_oat_milk = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:1020, tempHigh:10, stateHigh:"oat_milk"};

elements.macaroni = {color:"#FFD700", behavior:P, category:F, state:"solid", density:600, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_macaroni"};
elements.frozen_macaroni = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:600, tempHigh:10, stateHigh:"macaroni"};
elements.penne = {color:"#F0E68C", behavior:P, category:F, state:"solid", density:650, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_penne"};
elements.frozen_penne = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:650, tempHigh:10, stateHigh:"penne"};
elements.couscous = {color:"#FFE4B5", behavior:P, category:F, state:"solid", density:700, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_couscous"};
elements.frozen_couscous = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:700, tempHigh:10, stateHigh:"couscous"};
elements.quinoa = {color:"#DEB887", behavior:P, category:F, state:"solid", density:680, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_quinoa"};
elements.frozen_quinoa = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:680, tempHigh:10, stateHigh:"quinoa"};
elements.barley = {color:"#D2B48C", behavior:P, category:F, state:"solid", density:720, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_barley"};
elements.frozen_barley = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:720, tempHigh:10, stateHigh:"barley"};
elements.millet = {color:"#F5DEB3", behavior:P, category:F, state:"solid", density:710, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_millet"};
elements.frozen_millet = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:710, tempHigh:10, stateHigh:"millet"};
elements.polenta = {color:"#FFD700", behavior:P, category:F, state:"solid", density:750, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_polenta"};
elements.frozen_polenta = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:750, tempHigh:10, stateHigh:"polenta"};
elements.grits = {color:"#FFF8DC", behavior:P, category:F, state:"solid", density:730, tempHigh:220, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_grits"};
elements.frozen_grits = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:730, tempHigh:10, stateHigh:"grits"};

elements.gummy_bear = {color:"#FF69B4", behavior:W, category:F, state:"solid", density:900, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_gummy_bear"};
elements.frozen_gummy_bear = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:900, tempHigh:10, stateHigh:"gummy_bear"};
elements.jellybean = {color:"#FF4500", behavior:SP, category:F, state:"solid", density:850, tempHigh:150, stateHigh:"burnt", tempLow:-5, stateLow:"frozen_jellybean"};
elements.frozen_jellybean = {color:"#e0f7fa", behavior:W, category:S, state:"solid", density:850, tempHigh:10, stateHigh:"jellybean"};

// === 8. EXPANDED EXPLICIT CHEMISTRY ===
if (!elements.avocado.reactions) elements.avocado.reactions = {};
if (!elements.avocado_oil.reactions) elements.avocado_oil.reactions = {};
if (!elements.strawberry.reactions) elements.strawberry.reactions = {};
if (!elements.strawberry_juice.reactions) elements.strawberry_juice.reactions = {};
if (!elements.banana.reactions) elements.banana.reactions = {};
if (!elements.banana_puree.reactions) elements.banana_puree.reactions = {};
if (!elements.kiwi.reactions) elements.kiwi.reactions = {};
if (!elements.kiwi_juice.reactions) elements.kiwi_juice.reactions = {};
if (!elements.pomegranate.reactions) elements.pomegranate.reactions = {};
if (!elements.pomegranate_juice.reactions) elements.pomegranate_juice.reactions = {};
if (!elements.blueberry.reactions) elements.blueberry.reactions = {};
if (!elements.blueberry_juice.reactions) elements.blueberry_juice.reactions = {};
if (!elements.blackberry.reactions) elements.blackberry.reactions = {};
if (!elements.blackberry_juice.reactions) elements.blackberry_juice.reactions = {};
if (!elements.raspberry.reactions) elements.raspberry.reactions = {};
if (!elements.raspberry_juice.reactions) elements.raspberry_juice.reactions = {};
if (!elements.peach.reactions) elements.peach.reactions = {};
if (!elements.peach_juice.reactions) elements.peach_juice.reactions = {};
if (!elements.pear.reactions) elements.pear.reactions = {};
if (!elements.pear_juice.reactions) elements.pear_juice.reactions = {};
if (!elements.cherry.reactions) elements.cherry.reactions = {};
if (!elements.cherry_juice.reactions) elements.cherry_juice.reactions = {};
if (!elements.plum.reactions) elements.plum.reactions = {};
if (!elements.plum_juice.reactions) elements.plum_juice.reactions = {};
if (!elements.watermelon.reactions) elements.watermelon.reactions = {};
if (!elements.watermelon_juice.reactions) elements.watermelon_juice.reactions = {};
if (!elements.mango.reactions) elements.mango.reactions = {};
if (!elements.mango_juice.reactions) elements.mango_juice.reactions = {};
if (!elements.pineapple.reactions) elements.pineapple.reactions = {};
if (!elements.pineapple_juice.reactions) elements.pineapple_juice.reactions = {};
if (!elements.cranberry.reactions) elements.cranberry.reactions = {};
if (!elements.cranberry_juice.reactions) elements.cranberry_juice.reactions = {};
if (!elements.tomato.reactions) elements.tomato.reactions = {};
if (!elements.tomato_juice.reactions) elements.tomato_juice.reactions = {};

// A. Smashing Fruits into Juice (Drops Rock or Smash Tool on it, plus Anvil)
elements.avocado.reactions["rock"] = { elem1: "avocado_oil", elem2: "rock" };
elements.avocado.reactions["smash"] = { elem1: "avocado_oil", elem2: null };
elements.avocado.reactions["anvil"] = { elem1: "avocado_oil", elem2: "anvil" };

elements.strawberry.reactions["rock"] = { elem1: "strawberry_juice", elem2: "rock" };
elements.strawberry.reactions["smash"] = { elem1: "strawberry_juice", elem2: null };
elements.strawberry.reactions["anvil"] = { elem1: "strawberry_juice", elem2: "anvil" };

elements.banana.reactions["rock"] = { elem1: "banana_puree", elem2: "rock" };
elements.banana.reactions["smash"] = { elem1: "banana_puree", elem2: null };
elements.banana.reactions["anvil"] = { elem1: "banana_puree", elem2: "anvil" };

elements.kiwi.reactions["rock"] = { elem1: "kiwi_juice", elem2: "rock" };
elements.kiwi.reactions["smash"] = { elem1: "kiwi_juice", elem2: null };
elements.kiwi.reactions["anvil"] = { elem1: "kiwi_juice", elem2: "anvil" };

elements.pomegranate.reactions["rock"] = { elem1: "pomegranate_juice", elem2: "rock" };
elements.pomegranate.reactions["smash"] = { elem1: "pomegranate_juice", elem2: null };
elements.pomegranate.reactions["anvil"] = { elem1: "pomegranate_juice", elem2: "anvil" };

elements.blueberry.reactions["rock"] = { elem1: "blueberry_juice", elem2: "rock" };
elements.blueberry.reactions["smash"] = { elem1: "blueberry_juice", elem2: null };
elements.blueberry.reactions["anvil"] = { elem1: "blueberry_juice", elem2: "anvil" };

elements.blackberry.reactions["rock"] = { elem1: "blackberry_juice", elem2: "rock" };
elements.blackberry.reactions["smash"] = { elem1: "blackberry_juice", elem2: null };
elements.blackberry.reactions["anvil"] = { elem1: "blackberry_juice", elem2: "anvil" };

elements.raspberry.reactions["rock"] = { elem1: "raspberry_juice", elem2: "rock" };
elements.raspberry.reactions["smash"] = { elem1: "raspberry_juice", elem2: null };
elements.raspberry.reactions["anvil"] = { elem1: "raspberry_juice", elem2: "anvil" };

elements.peach.reactions["rock"] = { elem1: "peach_juice", elem2: "rock" };
elements.peach.reactions["smash"] = { elem1: "peach_juice", elem2: null };
elements.peach.reactions["anvil"] = { elem1: "peach_juice", elem2: "anvil" };

elements.pear.reactions["rock"] = { elem1: "pear_juice", elem2: "rock" };
elements.pear.reactions["smash"] = { elem1: "pear_juice", elem2: null };
elements.pear.reactions["anvil"] = { elem1: "pear_juice", elem2: "anvil" };

elements.cherry.reactions["rock"] = { elem1: "cherry_juice", elem2: "rock" };
elements.cherry.reactions["smash"] = { elem1: "cherry_juice", elem2: null };
elements.cherry.reactions["anvil"] = { elem1: "cherry_juice", elem2: "anvil" };

elements.plum.reactions["rock"] = { elem1: "plum_juice", elem2: "rock" };
elements.plum.reactions["smash"] = { elem1: "plum_juice", elem2: null };
elements.plum.reactions["anvil"] = { elem1: "plum_juice", elem2: "anvil" };

elements.watermelon.reactions["rock"] = { elem1: "watermelon_juice", elem2: "rock" };
elements.watermelon.reactions["smash"] = { elem1: "watermelon_juice", elem2: null };
elements.watermelon.reactions["anvil"] = { elem1: "watermelon_juice", elem2: "anvil" };

elements.mango.reactions["rock"] = { elem1: "mango_juice", elem2: "rock" };
elements.mango.reactions["smash"] = { elem1: "mango_juice", elem2: null };
elements.mango.reactions["anvil"] = { elem1: "mango_juice", elem2: "anvil" };

elements.pineapple.reactions["rock"] = { elem1: "pineapple_juice", elem2: "rock" };
elements.pineapple.reactions["smash"] = { elem1: "pineapple_juice", elem2: null };
elements.pineapple.reactions["anvil"] = { elem1: "pineapple_juice", elem2: "anvil" };

elements.cranberry.reactions["rock"] = { elem1: "cranberry_juice", elem2: "rock" };
elements.cranberry.reactions["smash"] = { elem1: "cranberry_juice", elem2: null };
elements.cranberry.reactions["anvil"] = { elem1: "cranberry_juice", elem2: "anvil" };

elements.tomato.reactions["rock"] = { elem1: "tomato_juice", elem2: "rock" };
elements.tomato.reactions["smash"] = { elem1: "tomato_juice", elem2: null };
elements.tomato.reactions["anvil"] = { elem1: "tomato_juice", elem2: "anvil" };

// B. Freezing Juices with Ice
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

// C. Juices + Milk = Smoothie
elements.strawberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.banana_puree.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.blueberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.blackberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.raspberry_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.peach_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.mango_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };
elements.pineapple_juice.reactions["milk"] = { elem1: "smoothie", elem2: null };

// D. Juices + Sugar = Jam
elements.strawberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.blueberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.blackberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.raspberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.peach_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.cherry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.plum_juice.reactions["sugar"] = { elem1: "jam", elem2: null };
elements.cranberry_juice.reactions["sugar"] = { elem1: "jam", elem2: null };

// E. Fermentation (Juices + Yeast = Wine/Alcohol)
if (!elements.yeast) elements.yeast = { reactions: {} };
if (!elements.yeast.reactions) elements.yeast.reactions = {};

elements.cherry_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.peach_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.plum_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.pineapple_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.pomegranate_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.cranberry_juice.reactions["yeast"] = { elem1: "wine", elem2: null };
elements.watermelon_juice.reactions["yeast"] = { elem1: "wine", elem2: null };

// F. Condiments & Snacks
elements.tomato_juice.reactions["sugar"] = { elem1: "ketchup", elem2: null };
if (!elements.corn) elements.corn = { reactions: {} };
if (!elements.corn.reactions) elements.corn.reactions = {};
if (!elements.cheese) elements.cheese = { reactions: {} };
if (!elements.cheese.reactions) elements.cheese.reactions = {};
elements.corn.reactions["cheese"] = { elem1: "nachos", elem2: null };

if (!elements.potato) elements.potato = { reactions: {} };
if (!elements.potato.reactions) elements.potato.reactions = {};
elements.potato.reactions["olive_oil"] = { elem1: "potato_chip", elem2: null };

// G. Baking & Dough Mixes
if (!elements.dough) elements.dough = { reactions: {} };
if (!elements.dough.reactions) elements.dough.reactions = {};
elements.dough.reactions["water"] = { elem1: "bagel", elem2: null };
elements.dough.reactions["butter"] = { elem1: "croissant", elem2: null };
elements.dough.reactions["milk"] = { elem1: "biscuit", elem2: null };
elements.dough.reactions["yogurt"] = { elem1: "naan", elem2: null };
elements.dough.reactions["nut_oil"] = { elem1: "donut", elem2: null };
elements.dough.reactions["chocolate"] = { elem1: "cookie", elem2: null };

// H. Cooking Meat
if (!elements.meat) elements.meat = { reactions: {} };
if (!elements.meat.reactions) elements.meat.reactions = {};
if (!elements.bird) elements.bird = { reactions: {} };
if (!elements.bird.reactions) elements.bird.reactions = {};
if (!elements.fish) elements.fish = { reactions: {} };
if (!elements.fish.reactions) elements.fish.reactions = {};

elements.meat.reactions["fire"] = { elem1: "cooked_steak", elem2: null };
elements.meat.reactions["sauce"] = { elem1: "meatball", elem2: null };
elements.bird.reactions["nut_oil"] = { elem1: "fried_chicken", elem2: null };
elements.fish.reactions["sand"] = { elem1: "raw_shrimp", elem2: null };

// I. Meals
if (!elements.bread) elements.bread = { reactions: {} };
if (!elements.bread.reactions) elements.bread.reactions = {};
if (!elements.rice) elements.rice = { reactions: {} };
if (!elements.rice.reactions) elements.rice.reactions = {};
if (!elements.pasta) elements.pasta = { reactions: {} };
if (!elements.pasta.reactions) elements.pasta.reactions = {};
if (!elements.cooked_pasta) elements.cooked_pasta = { reactions: {} };
if (!elements.cooked_pasta.reactions) elements.cooked_pasta.reactions = {};
if (!elements.tortilla) elements.tortilla = { reactions: {} };
if (!elements.tortilla.reactions) elements.tortilla.reactions = {};
if (!elements.oats) elements.oats = { reactions: {} };
if (!elements.oats.reactions) elements.oats.reactions = {};
if (!elements.graham_cracker) elements.graham_cracker = { reactions: {} };
if (!elements.graham_cracker.reactions) elements.graham_cracker.reactions = {};

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

// J. Liquids
if (!elements.milk) elements.milk = { reactions: {} };
if (!elements.milk.reactions) elements.milk.reactions = {};
if (!elements.broth) elements.broth = { reactions: {} };
if (!elements.broth.reactions) elements.broth.reactions = {};
if (!elements.sauce) elements.sauce = { reactions: {} };
if (!elements.sauce.reactions) elements.sauce.reactions = {};
if (!elements.grease) elements.grease = { reactions: {} };
if (!elements.grease.reactions) elements.grease.reactions = {};

elements.milk.reactions["sugar"] = { elem1: "pudding", elem2: null };
elements.broth.reactions["meat"] = { elem1: "stew", elem2: null };
elements.sauce.reactions["meat"] = { elem1: "curry", elem2: null };
elements.grease.reactions["flour"] = { elem1: "gravy", elem2: null };
