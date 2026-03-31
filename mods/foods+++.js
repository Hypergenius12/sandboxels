// ==========================================
// 200 FOODS ULTIMATE CULINARY EXPANSION
// Adds 200 non-vanilla foods and wires them into the game's chemistry!
// ==========================================

const cat = "food";

/* ==========================================
   PART 1: The Original 100 Custom Foods 
   ========================================== */

/* === 1-15: FRUITS & BERRIES === */
elements.avocado = { color: "#568203", behavior: behaviors.POWDER, category: cat, state: "solid", density: 800, reactions: { "rock": { elem1: "guacamole", elem2: "rock" } } };
elements.guacamole = { color: "#7BA05B", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.strawberry = { color: "#FC5A8D", behavior: behaviors.POWDER, category: cat, state: "solid", density: 600 };
elements.banana = { color: "#FFE135", behavior: behaviors.POWDER, category: cat, state: "solid", density: 750 };
elements.blueberry = { color: "#4F86F7", behavior: behaviors.POWDER, category: cat, state: "solid", density: 620 };
elements.blackberry = { color: "#43182F", behavior: behaviors.POWDER, category: cat, state: "solid", density: 630 };
elements.raspberry = { color: "#E30B5D", behavior: behaviors.POWDER, category: cat, state: "solid", density: 610 };
elements.peach = { color: "#FFE5B4", behavior: behaviors.POWDER, category: cat, state: "solid", density: 700 };
elements.pear = { color: "#D1E231", behavior: behaviors.POWDER, category: cat, state: "solid", density: 720 };
elements.cherry = { color: "#D2042D", behavior: behaviors.POWDER, category: cat, state: "solid", density: 680 };
elements.plum = { color: "#8E4585", behavior: behaviors.POWDER, category: cat, state: "solid", density: 710 };
elements.watermelon = { color: "#FC6C85", behavior: behaviors.POWDER, category: cat, state: "solid", density: 950 };
elements.mango = { color: "#FFC324", behavior: behaviors.POWDER, category: cat, state: "solid", density: 740 };
elements.pineapple = { color: "#563C0D", behavior: behaviors.POWDER, category: cat, state: "solid", density: 850 };
elements.coconut = { color: "#4D3227", behavior: behaviors.WALL, category: cat, state: "solid", density: 1100, reactions: { "rock": { elem1: "coconut_water", elem2: "rock" } } };

/* === 16-30: VEGETABLES, OILS & BASICS === */
elements.coconut_water = { color: "#F0F8FF", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1010 };
elements.maple_syrup = { color: "#BB6528", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1370, viscosity: 50000 };
elements.carrot = { color: "#ED9121", behavior: behaviors.POWDER, category: cat, state: "solid", density: 800 };
elements.celery = { color: "#D0FF14", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.broccoli = { color: "#4C9141", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500 };
elements.spinach = { color: "#3F704D", behavior: behaviors.POWDER, category: cat, state: "solid", density: 300 };
elements.cabbage = { color: "#87A96B", behavior: behaviors.POWDER, category: cat, state: "solid", density: 450 };
elements.cauliflower = { color: "#ECEADD", behavior: behaviors.POWDER, category: cat, state: "solid", density: 480 };
elements.pea = { color: "#98FB98", behavior: behaviors.POWDER, category: cat, state: "solid", density: 600 };
elements.bell_pepper = { color: "#E34234", behavior: behaviors.POWDER, category: cat, state: "solid", density: 550 };
elements.chili_pepper = { color: "#C21807", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500, reactions: { "vinegar": { elem1: "hot_sauce", elem2: null } } };
elements.onion = { color: "#DDA0DD", behavior: behaviors.POWDER, category: cat, state: "solid", density: 650 };
elements.garlic = { color: "#F0E68C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 680 };
elements.olive = { color: "#808000", behavior: behaviors.POWDER, category: cat, state: "solid", density: 700, reactions: { "rock": { elem1: "olive_oil", elem2: "rock" } } };
elements.olive_oil = { color: "#BDB76B", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 910, tempHigh: 300, stateHigh: "fire" };

/* === 31-45: BREADS & PASTRIES === */
elements.bagel = { color: "#EEDC82", behavior: behaviors.WALL, category: cat, state: "solid", density: 700 };
elements.croissant = { color: "#C49A45", behavior: behaviors.WALL, category: cat, state: "solid", density: 400 };
elements.muffin = { color: "#D2B48C", behavior: behaviors.WALL, category: cat, state: "solid", density: 600 };
elements.biscuit = { color: "#F5DEB3", behavior: behaviors.WALL, category: cat, state: "solid", density: 650 };
elements.pita_bread = { color: "#FFE4B5", behavior: behaviors.WALL, category: cat, state: "solid", density: 550 };
elements.naan = { color: "#F0E68C", behavior: behaviors.WALL, category: cat, state: "solid", density: 500 };
elements.baguette = { color: "#CD853F", behavior: behaviors.WALL, category: cat, state: "solid", density: 600 };
elements.crouton = { color: "#DAA520", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 400 };
elements.cracker = { color: "#F4A460", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 500 };
elements.donut = { color: "#D2691E", behavior: behaviors.WALL, category: cat, state: "solid", density: 450 };
elements.pretzel = { color: "#8B4513", behavior: behaviors.WALL, category: cat, state: "solid", density: 700 };
elements.tortilla = { color: "#FFE4B5", behavior: behaviors.WALL, category: cat, state: "solid", density: 600, reactions: { "cooked_meat": { elem1: "taco", elem2: null } } };
elements.pancake = { color: "#F5DEB3", behavior: behaviors.WALL, category: cat, state: "solid", density: 500 };
elements.waffle = { color: "#DEB887", behavior: behaviors.WALL, category: cat, state: "solid", density: 450 };
elements.toaster_pastry = { color: "#FFDAB9", behavior: behaviors.WALL, category: cat, state: "solid", density: 600 };

/* === 46-60: SWEETS, DESSERTS & SNACKS === */
elements.cookie = { color: "#8B4513", behavior: behaviors.WALL, category: cat, state: "solid", density: 700 };
elements.brownie = { color: "#3E1E04", behavior: behaviors.WALL, category: cat, state: "solid", density: 850 };
elements.cupcake = { color: "#FFC0CB", behavior: behaviors.WALL, category: cat, state: "solid", density: 500 };
elements.pie = { color: "#D2B48C", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.cheesecake = { color: "#FFF8DC", behavior: behaviors.WALL, category: cat, state: "solid", density: 900 };
elements.pudding = { color: "#F5DEB3", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1100, viscosity: 50000 };
elements.fudge = { color: "#2B1B10", behavior: behaviors.WALL, category: cat, state: "solid", density: 1200 };
elements.cotton_candy = { color: "#FFB7C5", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 100 };
elements.marshmallow = { color: "#FFFFFF", behavior: behaviors.WALL, category: cat, state: "solid", density: 200 };
elements.oats = { color: "#E8D8A6", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.oatmeal = { color: "#D2B48C", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 80000 };
elements.granola = { color: "#B8860B", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500 };
elements.cereal = { color: "#DEB887", behavior: behaviors.POWDER, category: cat, state: "solid", density: 300 };
elements.potato_chip = { color: "#FFD700", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 300 };
elements.nachos = { color: "#FF8C00", behavior: behaviors.WALL, category: cat, state: "solid", density: 500 };

/* === 61-80: MEATS, SEAFOOD & PROTEINS === */
elements.bacon = { color: "#FA8072", behavior: behaviors.WALL, category: cat, state: "solid", density: 1050, tempHigh: 120, stateHigh: "crispy_bacon" };
elements.crispy_bacon = { color: "#8B4513", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.sausage = { color: "#8B5A2B", behavior: behaviors.WALL, category: cat, state: "solid", density: 1000 };
elements.hotdog = { color: "#CD5C5C", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.tofu = { color: "#F0FFF0", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.steak = { color: "#8B0000", behavior: behaviors.WALL, category: cat, state: "solid", density: 1100 };
elements.meatball = { color: "#800000", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1000 };
elements.ham = { color: "#FFA07A", behavior: behaviors.WALL, category: cat, state: "solid", density: 1050 };
elements.turkey_meat = { color: "#CD853F", behavior: behaviors.WALL, category: cat, state: "solid", density: 1000 };
elements.fried_chicken = { color: "#D2691E", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.chicken_nugget = { color: "#F4A460", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 800 };
elements.pepperoni = { color: "#B22222", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.shrimp = { color: "#FF7F50", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1000 };
elements.crab_meat = { color: "#FF6347", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 950 };
elements.lobster_meat = { color: "#FF4500", behavior: behaviors.WALL, category: cat, state: "solid", density: 1050 };
elements.sushi = { color: "#FFFAFA", behavior: behaviors.WALL, category: cat, state: "solid", density: 1100 };
elements.burrito = { color: "#DEB887", behavior: behaviors.WALL, category: cat, state: "solid", density: 900 };
elements.quesadilla = { color: "#F5DEB3", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.spring_roll = { color: "#FFE4B5", behavior: behaviors.WALL, category: cat, state: "solid", density: 700 };
elements.dumpling = { color: "#FFFACD", behavior: behaviors.WALL, category: cat, state: "solid", density: 850 };

/* === 81-100: MEALS, CARBS & SAUCES === */
elements.samosa = { color: "#DAA520", behavior: behaviors.WALL, category: cat, state: "solid", density: 750 };
elements.taco = { color: "#DAA520", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.pasta = { color: "#F0E68C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 1300, reactions: { "water": { elem1: "spaghetti", elem2: null } } };
elements.spaghetti = { color: "#FFFACD", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1100 };
elements.pizza = { color: "#FF4500", behavior: behaviors.WALL, category: cat, state: "solid", density: 900 };
elements.burger = { color: "#A0522D", behavior: behaviors.WALL, category: cat, state: "solid", density: 850 };
elements.riceball = { color: "#FFFFFF", behavior: behaviors.WALL, category: cat, state: "solid", density: 1000 };
elements.noodle = { color: "#FFF8DC", behavior: behaviors.POWDER, category: cat, state: "solid", density: 800, reactions: { "broth": { elem1: "ramen", elem2: null } } };
elements.ramen = { color: "#F0E68C", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.fried_rice = { color: "#DAA520", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 950 };
elements.stew = { color: "#8B4513", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1100, viscosity: 10000 };
elements.curry = { color: "#B8860B", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1080, viscosity: 15000 };
elements.kebab = { color: "#A0522D", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.poutine = { color: "#D2B48C", behavior: behaviors.WALL, category: cat, state: "solid", density: 1000 };
elements.mustard = { color: "#FFDB58", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 20000 };
elements.hot_sauce = { color: "#FF2400", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1020, viscosity: 5000 };
elements.soy_sauce = { color: "#3B2F2F", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1100 };
elements.ranch_dressing = { color: "#F5FFFA", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 25000 };
elements.bbq_sauce = { color: "#3E1E04", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1150, viscosity: 30000 };
elements.gravy = { color: "#8B5A2B", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1080, viscosity: 20000 };


/* ==========================================
   PART 2: The New 100 Custom Foods (101-200)
   ========================================== */

/* === 101-110: NUTS & SEEDS === */
elements.almond = { color: "#FFEBCD", behavior: behaviors.POWDER, category: cat, state: "solid", density: 600 };
elements.walnut = { color: "#8B4513", behavior: behaviors.POWDER, category: cat, state: "solid", density: 550 };
elements.pecan = { color: "#A0522D", behavior: behaviors.POWDER, category: cat, state: "solid", density: 580 };
elements.cashew = { color: "#F5DEB3", behavior: behaviors.POWDER, category: cat, state: "solid", density: 620 };
elements.pistachio = { color: "#93C572", behavior: behaviors.POWDER, category: cat, state: "solid", density: 610 };
elements.macadamia = { color: "#FFF8DC", behavior: behaviors.POWDER, category: cat, state: "solid", density: 650 };
elements.sunflower_seed = { color: "#3B2F2F", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.chia_seed = { color: "#2B1B10", behavior: behaviors.POWDER, category: cat, state: "solid", density: 300 };
elements.flax_seed = { color: "#8B5A2B", behavior: behaviors.POWDER, category: cat, state: "solid", density: 350 };
elements.sesame_seed = { color: "#F0E68C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 320 };

/* === 111-120: VEGGIES & ROOTS === */
elements.asparagus = { color: "#7BA05B", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.artichoke = { color: "#8F9779", behavior: behaviors.POWDER, category: cat, state: "solid", density: 450 };
elements.eggplant = { color: "#483248", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500 };
elements.zucchini = { color: "#5C7148", behavior: behaviors.POWDER, category: cat, state: "solid", density: 480 };
elements.radish = { color: "#DC143C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 550 };
elements.turnip = { color: "#F5F5DC", behavior: behaviors.POWDER, category: cat, state: "solid", density: 600 };
elements.parsnip = { color: "#FFF8DC", behavior: behaviors.POWDER, category: cat, state: "solid", density: 620 };
elements.beet = { color: "#8A1538", behavior: behaviors.POWDER, category: cat, state: "solid", density: 700 };
elements.sweet_potato = { color: "#D2691E", behavior: behaviors.POWDER, category: cat, state: "solid", density: 750 };
elements.edamame = { color: "#9ACD32", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500 };

/* === 121-130: DAIRY ALTERNATIVES & CHEESES === */
elements.sour_cream = { color: "#FFFAFA", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1020, viscosity: 40000 };
elements.cream_cheese = { color: "#FFFDD0", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.cottage_cheese = { color: "#F8F8FF", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.brie = { color: "#F5DEB3", behavior: behaviors.WALL, category: cat, state: "solid", density: 850 };
elements.cheddar = { color: "#FF8C00", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.mozzarella = { color: "#FFFAF0", behavior: behaviors.WALL, category: cat, state: "solid", density: 920 };
elements.parmesan = { color: "#FFFACD", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1000 };
elements.gouda = { color: "#DAA520", behavior: behaviors.WALL, category: cat, state: "solid", density: 930 };
elements.soy_milk = { color: "#FFF8DC", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1010 };
elements.oat_milk = { color: "#F5DEB3", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1020 };

/* === 131-140: SPICES === */
elements.cinnamon = { color: "#D2691E", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.nutmeg = { color: "#8B4513", behavior: behaviors.POWDER, category: cat, state: "solid", density: 450 };
elements.ginger = { color: "#F5DEB3", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500 };
elements.turmeric = { color: "#FFD700", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.paprika = { color: "#FF4500", behavior: behaviors.POWDER, category: cat, state: "solid", density: 420 };
elements.black_pepper = { color: "#2F4F4F", behavior: behaviors.POWDER, category: cat, state: "solid", density: 450 };
elements.cumin = { color: "#B8860B", behavior: behaviors.POWDER, category: cat, state: "solid", density: 430 };
elements.oregano = { color: "#556B2F", behavior: behaviors.POWDER, category: cat, state: "solid", density: 300 };
elements.basil = { color: "#228B22", behavior: behaviors.POWDER, category: cat, state: "solid", density: 250 };
elements.thyme = { color: "#6B8E23", behavior: behaviors.POWDER, category: cat, state: "solid", density: 280 };

/* === 141-155: PANTRY STAPLES & SPREADS === */
elements.vanilla_extract = { color: "#3E1E04", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050 };
elements.powdered_sugar = { color: "#FFFFFF", behavior: behaviors.POWDER, category: cat, state: "solid", density: 400 };
elements.brown_sugar = { color: "#CD853F", behavior: behaviors.POWDER, category: cat, state: "solid", density: 700 };
elements.icing = { color: "#FFC0CB", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1100, viscosity: 60000 };
elements.sprinkles = { color: "#FF69B4", behavior: behaviors.POWDER, category: cat, state: "solid", density: 500 };
elements.cocoa_powder = { color: "#4B3621", behavior: behaviors.POWDER, category: cat, state: "solid", density: 550 };
elements.peanut_butter = { color: "#D2691E", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 80000 };
elements.almond_butter = { color: "#C4A484", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1060, viscosity: 75000 };
elements.jam = { color: "#8B008B", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1100, viscosity: 50000 };
elements.marmalade = { color: "#FF8C00", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1080, viscosity: 45000 };
elements.aioli = { color: "#FFFDD0", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1020, viscosity: 35000 };
elements.relish = { color: "#9ACD32", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1000 };
elements.salsa = { color: "#B22222", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 15000 };
elements.tzatziki = { color: "#F8F8FF", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1030, viscosity: 25000 };
elements.hummus = { color: "#D2B48C", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1070, viscosity: 60000 };

/* === 156-165: GRAINS & PASTA === */
elements.tahini = { color: "#F5DEB3", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1060, viscosity: 55000 };
elements.pesto = { color: "#228B22", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1040, viscosity: 30000 };
elements.macaroni = { color: "#FFD700", behavior: behaviors.POWDER, category: cat, state: "solid", density: 600 };
elements.penne = { color: "#F0E68C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 650 };
elements.couscous = { color: "#FFE4B5", behavior: behaviors.POWDER, category: cat, state: "solid", density: 700 };
elements.quinoa = { color: "#DEB887", behavior: behaviors.POWDER, category: cat, state: "solid", density: 680 };
elements.barley = { color: "#D2B48C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 720 };
elements.millet = { color: "#F5DEB3", behavior: behaviors.POWDER, category: cat, state: "solid", density: 710 };
elements.polenta = { color: "#FFD700", behavior: behaviors.POWDER, category: cat, state: "solid", density: 750 };
elements.grits = { color: "#FFF8DC", behavior: behaviors.POWDER, category: cat, state: "solid", density: 730 };

/* === 166-175: SWEETS & CANDY === */
elements.breadcrumbs = { color: "#D2B48C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 300 };
elements.taco_shell = { color: "#DAA520", behavior: behaviors.WALL, category: cat, state: "solid", density: 500 };
elements.gummy_bear = { color: "#FF69B4", behavior: behaviors.WALL, category: cat, state: "solid", density: 900 };
elements.jellybean = { color: "#FF4500", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 850 };
elements.lollipop = { color: "#FF1493", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.taffy = { color: "#FFB6C1", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.licorice = { color: "#000000", behavior: behaviors.WALL, category: cat, state: "solid", density: 880 };
elements.mint = { color: "#98FF98", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 700 };
elements.chewing_gum = { color: "#FFC0CB", behavior: behaviors.WALL, category: cat, state: "solid", density: 750 };
elements.truffle = { color: "#3B2F2F", behavior: behaviors.WALL, category: cat, state: "solid", density: 920 };

/* === 176-180: DRINKS === */
elements.matcha = { color: "#8F9779", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1010 };
elements.fruit_punch = { color: "#DC143C", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1030 };
elements.smoothie = { color: "#FF69B4", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 15000 };
elements.milkshake = { color: "#FFF0F5", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1060, viscosity: 20000 };
elements.boba = { color: "#D2B48C", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1040, viscosity: 10000 };

/* === 181-200: GLOBAL MEALS & DISHES === */
elements.empanada = { color: "#DAA520", behavior: behaviors.WALL, category: cat, state: "solid", density: 750 };
elements.calzone = { color: "#D2691E", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.quiche = { color: "#F0E68C", behavior: behaviors.WALL, category: cat, state: "solid", density: 700 };
elements.falafel = { color: "#8B5A2B", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 850 };
elements.shawarma = { color: "#A0522D", behavior: behaviors.WALL, category: cat, state: "solid", density: 900 };
elements.gyro = { color: "#D2B48C", behavior: behaviors.WALL, category: cat, state: "solid", density: 880 };
elements.taquito = { color: "#CD853F", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.tamale = { color: "#F5DEB3", behavior: behaviors.WALL, category: cat, state: "solid", density: 850 };
elements.enchilada = { color: "#B22222", behavior: behaviors.WALL, category: cat, state: "solid", density: 920 };
elements.paella = { color: "#FFD700", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 950 };
elements.risotto = { color: "#FFFACD", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 960 };
elements.jambalaya = { color: "#CD5C5C", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 980 };
elements.gumbo = { color: "#8B4513", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1090, viscosity: 12000 };
elements.chowder = { color: "#FFF8DC", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1080, viscosity: 15000 };
elements.bisque = { color: "#FF7F50", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1070, viscosity: 10000 };
elements.ceviche = { color: "#FFE4E1", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1000 };
elements.kimchi = { color: "#DC143C", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.sauerkraut = { color: "#F5F5DC", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 880 };
elements.miso = { color: "#D2B48C", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1060, viscosity: 20000 };
elements.gelato = { color: "#FFF0F5", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 950 };


/* ==========================================
   PART 3: THE CHEMISTRY ENGINE
   Wiring all 200 items into Sandboxels Native Elements!
   ========================================== */

// 1. Dough Reactions
if (!elements.dough.reactions) elements.dough.reactions = {};
elements.dough.reactions.water = { "elem1": "bagel", "elem2": null }; 
elements.dough.reactions.butter = { "elem1": "croissant", "elem2": null }; 
elements.dough.reactions.milk = { "elem1": "biscuit", "elem2": null }; 
elements.dough.reactions.yogurt = { "elem1": "naan", "elem2": null }; 
elements.dough.reactions.nut_oil = { "elem1": "donut", "elem2": null }; 
elements.dough.reactions.chocolate = { "elem1": "cookie", "elem2": null }; 
elements.dough.reactions.juice = { "elem1": "pie", "elem2": null }; 
elements.dough.reactions.candy = { "elem1": "toaster_pastry", "elem2": null }; 
elements.dough.reactions.meat = { "elem1": "dumpling", "elem2": null }; 
elements.dough.reactions.potato = { "elem1": "samosa", "elem2": null }; 
elements.dough.reactions.cooked_meat = { "elem1": "empanada", "elem2": null }; 
elements.dough.reactions.cheese = { "elem1": "calzone", "elem2": null }; 

// 2. Batter Reactions
if (!elements.batter.reactions) elements.batter.reactions = {};
elements.batter.reactions.chocolate = { "elem1": "brownie", "elem2": null }; 
elements.batter.reactions.sugar = { "elem1": "cupcake", "elem2": null }; 

// 3. Meat & Bird Reactions
if (!elements.meat.reactions) elements.meat.reactions = {};
elements.meat.reactions.fire = { "elem1": "steak", "elem2": null }; 
elements.meat.reactions.sauce = { "elem1": "meatball", "elem2": null }; 
elements.meat.reactions.salt = { "elem1": "ham", "elem2": null }; 
elements.meat.reactions.wood = { "elem1": "kebab", "elem2": null }; 
elements.meat.reactions.herb = { "elem1": "pepperoni", "elem2": null }; 
elements.meat.reactions.bread = { "elem1": "shawarma", "elem2": null }; 
elements.meat.reactions.pita_bread = { "elem1": "gyro", "elem2": null }; 

if (!elements.bird.reactions) elements.bird.reactions = {};
elements.bird.reactions.fire = { "elem1": "turkey_meat", "elem2": null }; 
elements.bird.reactions.nut_oil = { "elem1": "fried_chicken", "elem2": null }; 
elements.bird.reactions.bread = { "elem1": "chicken_nugget", "elem2": null }; 

// 4. Fish Reactions
if (!elements.fish.reactions) elements.fish.reactions = {};
elements.fish.reactions.sand = { "elem1": "shrimp", "elem2": null }; 
elements.fish.reactions.rock = { "elem1": "crab_meat", "elem2": null }; 
elements.fish.reactions.corn = { "elem1": "ceviche", "elem2": null }; 

// 5. Bread & Carbs Reactions
if (!elements.bread.reactions) elements.bread.reactions = {};
elements.bread.reactions.nut_oil = { "elem1": "crouton", "elem2": null }; 
elements.bread.reactions.bean = { "elem1": "burrito", "elem2": null }; 
elements.bread.reactions.cheese = { "elem1": "quesadilla", "elem2": null }; 
elements.bread.reactions.sauce = { "elem1": "pizza", "elem2": null }; 
elements.bread.reactions.cooked_meat = { "elem1": "burger", "elem2": null }; 

if (!elements.corn.reactions) elements.corn.reactions = {};
elements.corn.reactions.cheese = { "elem1": "nachos", "elem2": null }; 

if (!elements.potato.reactions) elements.potato.reactions = {};
elements.potato.reactions.nut_oil = { "elem1": "potato_chip", "elem2": null }; 

if (!elements.rice.reactions) elements.rice.reactions = {};
elements.rice.reactions.nut_oil = { "elem1": "fried_rice", "elem2": null }; 
elements.rice.reactions.water = { "elem1": "riceball", "elem2": null }; 
elements.rice.reactions.fish = { "elem1": "sushi", "elem2": null }; 
elements.rice.reactions.broth = { "elem1": "risotto", "elem2": null }; 

// Oats Custom 
elements.oats.reactions = { "milk": { "elem1": "oatmeal", "elem2": null }, "water": { "elem1": "oatmeal", "elem2": null }, "honey": { "elem1": "granola", "elem2": null } };

// 6. Sauces, Dairy & Liquids Reactions
if (!elements.cheese.reactions) elements.cheese.reactions = {};
elements.cheese.reactions.sugar = { "elem1": "cheesecake", "elem2": null }; 

if (!elements.milk.reactions) elements.milk.reactions = {};
elements.milk.reactions.sugar = { "elem1": "pudding", "elem2": null }; 
elements.milk.reactions.ice = { "elem1": "milkshake", "elem2": null }; 
// Using cell to mimic bacteria culturing cheese [cite: 268, 304]
elements.milk.reactions.cell = { "elem1": "brie", "elem2": null }; 
elements.milk.reactions.yeast = { "elem1": "gouda", "elem2": null }; 

if (!elements.sugar.reactions) elements.sugar.reactions = {};
elements.sugar.reactions.flash = { "elem1": "cotton_candy", "elem2": null }; 
elements.sugar.reactions.foam = { "elem1": "marshmallow", "elem2": null }; 
elements.sugar.reactions.water = { "elem1": "fruit_punch", "elem2": null }; 

if (!elements.broth.reactions) elements.broth.reactions = {};
elements.broth.reactions.meat = { "elem1": "stew", "elem2": null }; 

if (!elements.sauce.reactions) elements.sauce.reactions = {};
elements.sauce.reactions.meat = { "elem1": "curry", "elem2": null }; 

if (!elements.yogurt.reactions) elements.yogurt.reactions = {};
elements.yogurt.reactions.herb = { "elem1": "ranch_dressing", "elem2": null }; 

if (!elements.ketchup.reactions) elements.ketchup.reactions = {};
elements.ketchup.reactions.caramel = { "elem1": "bbq_sauce", "elem2": null }; 

if (!elements.grease.reactions) elements.grease.reactions = {};
elements.grease.reactions.flour = { "elem1": "gravy", "elem2": null }; 

// 7. Veggie Pickling & Fermentation
if (!elements.cabbage.reactions) elements.cabbage.reactions = {};
// Using vanilla vinegar to pickle/ferment [cite: 303]
elements.cabbage.reactions.vinegar = { "elem1": "sauerkraut", "elem2": null }; 

// 8. Water & Bean
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.plant = { "elem1": "soy_milk", "elem2": null };
