// ==========================================
// 100 Foods Ultimate Expansion Mod
// Adds 100 new, non-vanilla foods and wires them into the game's chemistry!
// ==========================================

const cat = "food";

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


/* === CROSS-MOD & VANILLA REACTIONS BINDING === */
// Binding all the new foods cleanly to the existing Sandboxels vanilla elements

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

if (!elements.bird.reactions) elements.bird.reactions = {};
elements.bird.reactions.fire = { "elem1": "turkey_meat", "elem2": null }; 
elements.bird.reactions.nut_oil = { "elem1": "fried_chicken", "elem2": null }; 
elements.bird.reactions.bread = { "elem1": "chicken_nugget", "elem2": null }; 

// 4. Fish Reactions
if (!elements.fish.reactions) elements.fish.reactions = {};
elements.fish.reactions.sand = { "elem1": "shrimp", "elem2": null }; 
elements.fish.reactions.rock = { "elem1": "crab_meat", "elem2": null }; 

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

elements.oats.reactions = { "milk": { "elem1": "oatmeal", "elem2": null }, "water": { "elem1": "oatmeal", "elem2": null }, "honey": { "elem1": "granola", "elem2": null } };

// 6. Sauces, Dairy & Liquids Reactions
if (!elements.cheese.reactions) elements.cheese.reactions = {};
elements.cheese.reactions.sugar = { "elem1": "cheesecake", "elem2": null }; 

if (!elements.milk.reactions) elements.milk.reactions = {};
elements.milk.reactions.sugar = { "elem1": "pudding", "elem2": null }; 

if (!elements.sugar.reactions) elements.sugar.reactions = {};
elements.sugar.reactions.flash = { "elem1": "cotton_candy", "elem2": null }; 
elements.sugar.reactions.foam = { "elem1": "marshmallow", "elem2": null }; 

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
