// ==========================================
// 100 FOODS (300 ELEMENTS) - 100% MANUAL EDITION
// No loops, no factory functions, no arrays.
// ==========================================

// --- FRUITS & VEGGIES ---
elements.avocado={color:"#568203",behavior:behaviors.POWDER,category:"food",state:"solid",density:800,tempHigh:220,stateHigh:"burnt_avocado",tempLow:-5,stateLow:"frozen_avocado"};
elements.burnt_avocado={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_avocado={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"avocado"};

elements.guacamole={color:"#7BA05B",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:900,tempHigh:220,stateHigh:"burnt_guacamole",tempLow:-5,stateLow:"frozen_guacamole"};
elements.burnt_guacamole={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_guacamole={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"guacamole"};

elements.strawberry={color:"#FC5A8D",behavior:behaviors.POWDER,category:"food",state:"solid",density:600,tempHigh:220,stateHigh:"burnt_strawberry",tempLow:-5,stateLow:"frozen_strawberry"};
elements.burnt_strawberry={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_strawberry={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"strawberry"};

elements.banana={color:"#FFE135",behavior:behaviors.POWDER,category:"food",state:"solid",density:750,tempHigh:220,stateHigh:"burnt_banana",tempLow:-5,stateLow:"frozen_banana"};
elements.burnt_banana={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_banana={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"banana"};

elements.blueberry={color:"#4F86F7",behavior:behaviors.POWDER,category:"food",state:"solid",density:620,tempHigh:220,stateHigh:"burnt_blueberry",tempLow:-5,stateLow:"frozen_blueberry"};
elements.burnt_blueberry={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_blueberry={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"blueberry"};

elements.peach={color:"#FFE5B4",behavior:behaviors.POWDER,category:"food",state:"solid",density:700,tempHigh:220,stateHigh:"burnt_peach",tempLow:-5,stateLow:"frozen_peach"};
elements.burnt_peach={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_peach={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"peach"};

elements.cherry={color:"#D2042D",behavior:behaviors.POWDER,category:"food",state:"solid",density:680,tempHigh:220,stateHigh:"burnt_cherry",tempLow:-5,stateLow:"frozen_cherry"};
elements.burnt_cherry={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_cherry={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"cherry"};

elements.watermelon={color:"#FC6C85",behavior:behaviors.POWDER,category:"food",state:"solid",density:950,tempHigh:220,stateHigh:"burnt_watermelon",tempLow:-5,stateLow:"frozen_watermelon"};
elements.burnt_watermelon={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_watermelon={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"watermelon"};

elements.coconut={color:"#4D3227",behavior:behaviors.WALL,category:"food",state:"solid",density:1100,tempHigh:220,stateHigh:"burnt_coconut",tempLow:-5,stateLow:"frozen_coconut"};
elements.burnt_coconut={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_coconut={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"coconut"};

elements.coconut_water={color:"#F0F8FF",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1010,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_coconut_water"};
elements.frozen_coconut_water={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"coconut_water"};

elements.carrot={color:"#ED9121",behavior:behaviors.POWDER,category:"food",state:"solid",density:800,tempHigh:220,stateHigh:"burnt_carrot",tempLow:-5,stateLow:"frozen_carrot"};
elements.burnt_carrot={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_carrot={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"carrot"};

elements.broccoli={color:"#4C9141",behavior:behaviors.POWDER,category:"food",state:"solid",density:500,tempHigh:220,stateHigh:"burnt_broccoli",tempLow:-5,stateLow:"frozen_broccoli"};
elements.burnt_broccoli={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_broccoli={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"broccoli"};

elements.cabbage={color:"#87A96B",behavior:behaviors.POWDER,category:"food",state:"solid",density:450,tempHigh:220,stateHigh:"burnt_cabbage",tempLow:-5,stateLow:"frozen_cabbage"};
elements.burnt_cabbage={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_cabbage={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"cabbage"};

elements.onion={color:"#DDA0DD",behavior:behaviors.POWDER,category:"food",state:"solid",density:650,tempHigh:220,stateHigh:"burnt_onion",tempLow:-5,stateLow:"frozen_onion"};
elements.burnt_onion={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_onion={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"onion"};

elements.garlic={color:"#F0E68C",behavior:behaviors.POWDER,category:"food",state:"solid",density:680,tempHigh:220,stateHigh:"burnt_garlic",tempLow:-5,stateLow:"frozen_garlic"};
elements.burnt_garlic={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_garlic={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"garlic"};

elements.olive={color:"#808000",behavior:behaviors.POWDER,category:"food",state:"solid",density:700,tempHigh:220,stateHigh:"burnt_olive",tempLow:-5,stateLow:"frozen_olive"};
elements.burnt_olive={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_olive={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"olive"};

elements.olive_oil={color:"#BDB76B",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:910,tempHigh:300,stateHigh:"fire",tempLow:-5,stateLow:"frozen_olive_oil"};
elements.frozen_olive_oil={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"olive_oil"};

elements.chili_pepper={color:"#C21807",behavior:behaviors.POWDER,category:"food",state:"solid",density:500,tempHigh:220,stateHigh:"burnt_chili_pepper",tempLow:-5,stateLow:"frozen_chili_pepper"};
elements.burnt_chili_pepper={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_chili_pepper={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"chili_pepper"};

// --- BREADS & PASTRIES ---
elements.bagel={color:"#EEDC82",behavior:behaviors.WALL,category:"food",state:"solid",density:700,tempHigh:220,stateHigh:"burnt_bagel",tempLow:-5,stateLow:"frozen_bagel"};
elements.burnt_bagel={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_bagel={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"bagel"};

elements.croissant={color:"#C49A45",behavior:behaviors.WALL,category:"food",state:"solid",density:400,tempHigh:220,stateHigh:"burnt_croissant",tempLow:-5,stateLow:"frozen_croissant"};
elements.burnt_croissant={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_croissant={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"croissant"};

elements.biscuit={color:"#F5DEB3",behavior:behaviors.WALL,category:"food",state:"solid",density:650,tempHigh:220,stateHigh:"burnt_biscuit",tempLow:-5,stateLow:"frozen_biscuit"};
elements.burnt_biscuit={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_biscuit={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"biscuit"};

elements.naan={color:"#F0E68C",behavior:behaviors.WALL,category:"food",state:"solid",density:500,tempHigh:220,stateHigh:"burnt_naan",tempLow:-5,stateLow:"frozen_naan"};
elements.burnt_naan={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_naan={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"naan"};

elements.crouton={color:"#DAA520",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:400,tempHigh:220,stateHigh:"burnt_crouton",tempLow:-5,stateLow:"frozen_crouton"};
elements.burnt_crouton={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_crouton={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"crouton"};

elements.donut={color:"#D2691E",behavior:behaviors.WALL,category:"food",state:"solid",density:450,tempHigh:220,stateHigh:"burnt_donut",tempLow:-5,stateLow:"frozen_donut"};
elements.burnt_donut={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_donut={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"donut"};

elements.pretzel={color:"#8B4513",behavior:behaviors.WALL,category:"food",state:"solid",density:700,tempHigh:220,stateHigh:"burnt_pretzel",tempLow:-5,stateLow:"frozen_pretzel"};
elements.burnt_pretzel={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pretzel={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pretzel"};

elements.tortilla={color:"#FFE4B5",behavior:behaviors.WALL,category:"food",state:"solid",density:600,tempHigh:220,stateHigh:"burnt_tortilla",tempLow:-5,stateLow:"frozen_tortilla"};
elements.burnt_tortilla={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_tortilla={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"tortilla"};

elements.pancake={color:"#F5DEB3",behavior:behaviors.WALL,category:"food",state:"solid",density:500,tempHigh:220,stateHigh:"burnt_pancake",tempLow:-5,stateLow:"frozen_pancake"};
elements.burnt_pancake={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pancake={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pancake"};

elements.waffle={color:"#DEB887",behavior:behaviors.WALL,category:"food",state:"solid",density:450,tempHigh:220,stateHigh:"burnt_waffle",tempLow:-5,stateLow:"frozen_waffle"};
elements.burnt_waffle={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_waffle={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"waffle"};

// --- SWEETS & DESSERTS ---
elements.cookie={color:"#8B4513",behavior:behaviors.WALL,category:"food",state:"solid",density:700,tempHigh:220,stateHigh:"burnt_cookie",tempLow:-5,stateLow:"frozen_cookie"};
elements.burnt_cookie={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_cookie={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"cookie"};

elements.brownie={color:"#3E1E04",behavior:behaviors.WALL,category:"food",state:"solid",density:850,tempHigh:220,stateHigh:"burnt_brownie",tempLow:-5,stateLow:"frozen_brownie"};
elements.burnt_brownie={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_brownie={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"brownie"};

elements.pie={color:"#D2B48C",behavior:behaviors.WALL,category:"food",state:"solid",density:800,tempHigh:220,stateHigh:"burnt_pie",tempLow:-5,stateLow:"frozen_pie"};
elements.burnt_pie={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pie={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pie"};

elements.cheesecake={color:"#FFF8DC",behavior:behaviors.WALL,category:"food",state:"solid",density:900,tempHigh:220,stateHigh:"burnt_cheesecake",tempLow:-5,stateLow:"frozen_cheesecake"};
elements.burnt_cheesecake={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_cheesecake={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"cheesecake"};

elements.pudding={color:"#F5DEB3",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1100,tempHigh:100,stateHigh:"burnt_pudding",tempLow:-5,stateLow:"frozen_pudding"};
elements.burnt_pudding={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pudding={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pudding"};

elements.fudge={color:"#2B1B10",behavior:behaviors.WALL,category:"food",state:"solid",density:1200,tempHigh:220,stateHigh:"burnt_fudge",tempLow:-5,stateLow:"frozen_fudge"};
elements.burnt_fudge={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_fudge={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"fudge"};

elements.marshmallow={color:"#FFFFFF",behavior:behaviors.WALL,category:"food",state:"solid",density:200,tempHigh:220,stateHigh:"burnt_marshmallow",tempLow:-5,stateLow:"frozen_marshmallow"};
elements.burnt_marshmallow={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_marshmallow={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"marshmallow"};

elements.cotton_candy={color:"#FFB7C5",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:100,tempHigh:220,stateHigh:"burnt_cotton_candy",tempLow:-5,stateLow:"frozen_cotton_candy"};
elements.burnt_cotton_candy={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_cotton_candy={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"cotton_candy"};

// --- PROTEINS & MEATS ---
elements.bacon={color:"#FA8072",behavior:behaviors.WALL,category:"food",state:"solid",density:1050,tempHigh:220,stateHigh:"burnt_bacon",tempLow:-5,stateLow:"frozen_bacon"};
elements.burnt_bacon={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_bacon={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"bacon"};

elements.sausage={color:"#8B5A2B",behavior:behaviors.WALL,category:"food",state:"solid",density:1000,tempHigh:220,stateHigh:"burnt_sausage",tempLow:-5,stateLow:"frozen_sausage"};
elements.burnt_sausage={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_sausage={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"sausage"};

elements.tofu={color:"#F0FFF0",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:900,tempHigh:220,stateHigh:"burnt_tofu",tempLow:-5,stateLow:"frozen_tofu"};
elements.burnt_tofu={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_tofu={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"tofu"};

elements.steak={color:"#8B0000",behavior:behaviors.WALL,category:"food",state:"solid",density:1100,tempHigh:220,stateHigh:"burnt_steak",tempLow:-5,stateLow:"frozen_steak"};
elements.burnt_steak={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_steak={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"steak"};

elements.meatball={color:"#800000",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:1000,tempHigh:220,stateHigh:"burnt_meatball",tempLow:-5,stateLow:"frozen_meatball"};
elements.burnt_meatball={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_meatball={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"meatball"};

elements.fried_chicken={color:"#D2691E",behavior:behaviors.WALL,category:"food",state:"solid",density:950,tempHigh:220,stateHigh:"burnt_fried_chicken",tempLow:-5,stateLow:"frozen_fried_chicken"};
elements.burnt_fried_chicken={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_fried_chicken={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"fried_chicken"};

elements.pepperoni={color:"#B22222",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:900,tempHigh:220,stateHigh:"burnt_pepperoni",tempLow:-5,stateLow:"frozen_pepperoni"};
elements.burnt_pepperoni={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pepperoni={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pepperoni"};

elements.shrimp={color:"#FF7F50",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:1000,tempHigh:220,stateHigh:"burnt_shrimp",tempLow:-5,stateLow:"frozen_shrimp"};
elements.burnt_shrimp={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_shrimp={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"shrimp"};

elements.sushi={color:"#FFFAFA",behavior:behaviors.WALL,category:"food",state:"solid",density:1100,tempHigh:220,stateHigh:"burnt_sushi",tempLow:-5,stateLow:"frozen_sushi"};
elements.burnt_sushi={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_sushi={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"sushi"};

// --- MEALS, PASTAS & SAUCES ---
elements.taco={color:"#DAA520",behavior:behaviors.WALL,category:"food",state:"solid",density:800,tempHigh:220,stateHigh:"burnt_taco",tempLow:-5,stateLow:"frozen_taco"};
elements.burnt_taco={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_taco={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"taco"};

elements.pasta={color:"#F0E68C",behavior:behaviors.POWDER,category:"food",state:"solid",density:1300,tempHigh:220,stateHigh:"burnt_pasta",tempLow:-5,stateLow:"frozen_pasta"};
elements.burnt_pasta={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pasta={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pasta"};

elements.spaghetti={color:"#FFFACD",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:1100,tempHigh:220,stateHigh:"burnt_spaghetti",tempLow:-5,stateLow:"frozen_spaghetti"};
elements.burnt_spaghetti={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_spaghetti={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"spaghetti"};

elements.pizza={color:"#FF4500",behavior:behaviors.WALL,category:"food",state:"solid",density:900,tempHigh:220,stateHigh:"burnt_pizza",tempLow:-5,stateLow:"frozen_pizza"};
elements.burnt_pizza={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_pizza={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"pizza"};

elements.burger={color:"#A0522D",behavior:behaviors.WALL,category:"food",state:"solid",density:850,tempHigh:220,stateHigh:"burnt_burger",tempLow:-5,stateLow:"frozen_burger"};
elements.burnt_burger={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_burger={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"burger"};

elements.riceball={color:"#FFFFFF",behavior:behaviors.WALL,category:"food",state:"solid",density:1000,tempHigh:220,stateHigh:"burnt_riceball",tempLow:-5,stateLow:"frozen_riceball"};
elements.burnt_riceball={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_riceball={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"riceball"};

elements.ramen={color:"#F0E68C",behavior:behaviors.STURDYPOWDER,category:"food",state:"solid",density:900,tempHigh:220,stateHigh:"burnt_ramen",tempLow:-5,stateLow:"frozen_ramen"};
elements.burnt_ramen={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_ramen={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"ramen"};

elements.stew={color:"#8B4513",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1100,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_stew"};
elements.frozen_stew={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"stew"};

elements.curry={color:"#B8860B",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1080,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_curry"};
elements.frozen_curry={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"curry"};

elements.mustard={color:"#FFDB58",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1050,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_mustard"};
elements.frozen_mustard={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"mustard"};

elements.hot_sauce={color:"#FF2400",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1020,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_hot_sauce"};
elements.frozen_hot_sauce={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"hot_sauce"};

elements.soy_sauce={color:"#3B2F2F",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1100,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_soy_sauce"};
elements.frozen_soy_sauce={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"soy_sauce"};

elements.gravy={color:"#8B5A2B",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1080,tempHigh:100,stateHigh:"steam",tempLow:-5,stateLow:"frozen_gravy"};
elements.frozen_gravy={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"gravy"};

elements.oats={color:"#E8D8A6",behavior:behaviors.POWDER,category:"food",state:"solid",density:400,tempHigh:220,stateHigh:"burnt_oats",tempLow:-5,stateLow:"frozen_oats"};
elements.burnt_oats={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_oats={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"oats"};

elements.oatmeal={color:"#D2B48C",behavior:behaviors.LIQUID,category:"food",state:"liquid",density:1050,tempHigh:100,stateHigh:"burnt_oatmeal",tempLow:-5,stateLow:"frozen_oatmeal"};
elements.burnt_oatmeal={color:"#3b2818",behavior:behaviors.STURDYPOWDER,category:"states",state:"solid",density:600,tempHigh:600,stateHigh:"ash"};
elements.frozen_oatmeal={color:"#e0f7fa",behavior:behaviors.WALL,category:"states",state:"solid",density:750,tempHigh:10,stateHigh:"oatmeal"};


// ==========================================
// MANUAL REACTION BINDINGS
// Fully safe, no loops used.
// ==========================================

// Ensure base objects exist safely
if (!elements.dough) elements.dough = { reactions: {} };
if (!elements.dough.reactions) elements.dough.reactions = {};

if (!elements.meat) elements.meat = { reactions: {} };
if (!elements.meat.reactions) elements.meat.reactions = {};

if (!elements.bird) elements.bird = { reactions: {} };
if (!elements.bird.reactions) elements.bird.reactions = {};

if (!elements.fish) elements.fish = { reactions: {} };
if (!elements.fish.reactions) elements.fish.reactions = {};

if (!elements.bread) elements.bread = { reactions: {} };
if (!elements.bread.reactions) elements.bread.reactions = {};

if (!elements.rice) elements.rice = { reactions: {} };
if (!elements.rice.reactions) elements.rice.reactions = {};

if (!elements.milk) elements.milk = { reactions: {} };
if (!elements.milk.reactions) elements.milk.reactions = {};

if (!elements.sugar) elements.sugar = { reactions: {} };
if (!elements.sugar.reactions) elements.sugar.reactions = {};

if (!elements.broth) elements.broth = { reactions: {} };
if (!elements.broth.reactions) elements.broth.reactions = {};

if (!elements.sauce) elements.sauce = { reactions: {} };
if (!elements.sauce.reactions) elements.sauce.reactions = {};

if (!elements.grease) elements.grease = { reactions: {} };
if (!elements.grease.reactions) elements.grease.reactions = {};

if (!elements.cabbage.reactions) elements.cabbage.reactions = {};
if (!elements.pasta.reactions) elements.pasta.reactions = {};
if (!elements.oats.reactions) elements.oats.reactions = {};
if (!elements.avocado.reactions) elements.avocado.reactions = {};
if (!elements.strawberry.reactions) elements.strawberry.reactions = {};
if (!elements.banana.reactions) elements.banana.reactions = {};

// Manual Smashing (Fruits/Veggies hit with rock)
elements.avocado.reactions["rock"] = { elem1: "juice", elem2: "rock" };
elements.strawberry.reactions["rock"] = { elem1: "juice", elem2: "rock" };
elements.banana.reactions["rock"] = { elem1: "juice", elem2: "rock" };

// Manual Baking (Dough combinations)
elements.dough.reactions["water"] = { elem1: "bagel", elem2: null };
elements.dough.reactions["butter"] = { elem1: "croissant", elem2: null };
elements.dough.reactions["milk"] = { elem1: "biscuit", elem2: null };
elements.dough.reactions["yogurt"] = { elem1: "naan", elem2: null };
elements.dough.reactions["nut_oil"] = { elem1: "donut", elem2: null };
elements.dough.reactions["chocolate"] = { elem1: "cookie", elem2: null };

// Manual Meat Cooking
elements.meat.reactions["fire"] = { elem1: "steak", elem2: null };
elements.meat.reactions["sauce"] = { elem1: "meatball", elem2: null };
elements.bird.reactions["nut_oil"] = { elem1: "fried_chicken", elem2: null };
elements.fish.reactions["sand"] = { elem1: "shrimp", elem2: null };

// Manual Meal Prep
elements.bread.reactions["cooked_meat"] = { elem1: "burger", elem2: null };
elements.bread.reactions["sauce"] = { elem1: "pizza", elem2: null };
elements.rice.reactions["water"] = { elem1: "riceball", elem2: null };
elements.rice.reactions["fish"] = { elem1: "sushi", elem2: null };
elements.pasta.reactions["water"] = { elem1: "spaghetti", elem2: null };
elements.oats.reactions["milk"] = { elem1: "oatmeal", elem2: null };

// Manual Liquids & Sauces
elements.milk.reactions["sugar"] = { elem1: "pudding", elem2: null };
elements.broth.reactions["meat"] = { elem1: "stew", elem2: null };
elements.sauce.reactions["meat"] = { elem1: "curry", elem2: null };
elements.grease.reactions["flour"] = { elem1: "gravy", elem2: null };
