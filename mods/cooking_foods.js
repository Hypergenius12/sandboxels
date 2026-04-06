/* == Master Chef Expansion Mod == */
// Adds new raw ingredients, complex multi-step reactions, and a dedicated "Dishes" tab.

// ==========================================
// 1. NEW INGREDIENTS (Category: Food / Liquids)
// ==========================================

elements.onion = {
    color: "#e6e6fa",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 800,
};

elements.garlic = {
    color: "#f3eec3",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 800,
};

elements.mushroom = {
    color: "#d9c8b4",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 600,
};

elements.bacon_raw = {
    color: "#ff9999",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 1000,
    tempHigh: 110,
    stateHigh: "bacon_cooked" // Thermodynamic transition into cooked bacon
};

elements.bacon_cooked = {
    color: "#8b4513",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 950,
};

elements.pasta_raw = {
    color: "#ffebb5",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 1200,
};

elements.pasta_cooked = {
    color: "#f5d678",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 1100,
};

elements.strawberry = {
    color: "#ff3333",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 900,
};

elements.apple = {
    color: "#ff4d4d",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 950,
};

elements.olive_oil = {
    color: "#d4db84",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 910,
    viscosity: 100,
    burn: 60,
    burnTime: 300,
};

elements.salmon = {
    color: "#fa8072",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 1050,
    tempHigh: 100,
    stateHigh: "cookedmeat"
};

// ==========================================
// 2. NEW DISHES (Dynamically creates "dishes" tab)
// ==========================================

elements.pizza_dough = {
    color: "#ffe4b5",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.pizza = {
    color: "#d9643a",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.salad = {
    color: "#4caf50",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.dressed_salad = {
    color: "#7cbd6b",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.burger = {
    color: "#8b5a2b",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.bacon_burger = {
    color: "#75461c",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.omelet = {
    color: "#ffd700",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.mushroom_soup = {
    color: "#a38d72",
    behavior: behaviors.LIQUID,
    category: "dishes",
    state: "liquid",
    density: 1050,
};

elements.onion_soup = {
    color: "#c2a378",
    behavior: behaviors.LIQUID,
    category: "dishes",
    state: "liquid",
    density: 1030,
};

elements.mac_and_cheese = {
    color: "#ffb90f",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.spaghetti_bolognese = {
    color: "#b22222",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.fried_rice = {
    color: "#e8c982",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.sushi = {
    color: "#ffffff",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.apple_pie = {
    color: "#e59c3a",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.strawberry_tart = {
    color: "#e86f68",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.garlic_bread = {
    color: "#e8d082",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

elements.fries = {
    color: "#f4c63f",
    behavior: behaviors.STURDYPOWDER,
    category: "dishes",
    state: "solid",
};

// ==========================================
// 3. REACTIONS & CHEMISTRY
// ==========================================

// Safe initialization for all vanilla elements we are appending reactions to
const vanillaElementsToHook = [
    "water", "dough", "bread", "cheese", "lettuce", "broth", 
    "egg", "rice", "potato", "sauce", "cookedmeat", "tomato", "sugar"
];

vanillaElementsToHook.forEach(el => {
    if (elements[el] && !elements[el].reactions) {
        elements[el].reactions = {};
    }
});

// Boiling Pasta
elements.pasta_raw.reactions = {
    "water": { elem1: "pasta_cooked", elem2: null, tempMin: 90, chance: 0.1 } // Requires boiling water
};

// Pizza Making (Dough + Sauce -> Pizza Dough -> + Cheese -> Pizza)
elements.dough.reactions.sauce = { elem1: "pizza_dough", elem2: null, chance: 0.5 };
elements.pizza_dough.reactions.cheese = { elem1: "pizza", elem2: null, chance: 0.5 };

// Burger Making (Bread + CookedMeat -> Burger -> + Bacon -> Bacon Burger)
elements.bread.reactions.cookedmeat = { elem1: "burger", elem2: null, chance: 0.3 };
elements.burger.reactions.bacon_cooked = { elem1: "bacon_burger", elem2: null, chance: 0.5 };

// Salads
elements.lettuce.reactions.tomato = { elem1: "salad", elem2: null, chance: 0.2 };
elements.salad.reactions.onion = { elem1: "salad", elem2: null, chance: 0.3 }; // Mixes in
elements.salad.reactions.olive_oil = { elem1: "dressed_salad", elem2: null, chance: 0.5 };

// Soups
elements.broth.reactions.mushroom = { elem1: "mushroom_soup", elem2: null, chance: 0.2 };
elements.broth.reactions.onion = { elem1: "onion_soup", elem2: null, chance: 0.2 };

// Egg Dishes
elements.egg.reactions.cheese = { elem1: "omelet", elem2: null, tempMin: 70, chance: 0.2 }; // Needs heat to cook

// Pasta Dishes
elements.pasta_cooked.reactions.cheese = { elem1: "mac_and_cheese", elem2: null, chance: 0.3 };
elements.pasta_cooked.reactions.sauce = { elem1: "spaghetti_bolognese", elem2: null, chance: 0.3 };
elements.spaghetti_bolognese.reactions.cookedmeat = { elem1: "spaghetti_bolognese", elem2: null, chance: 0.5 }; // Absorbs meat

// Asian Cuisine
elements.rice.reactions.egg = { elem1: "fried_rice", elem2: null, tempMin: 80, chance: 0.2 }; // Wok-fried
elements.rice.reactions.salmon = { elem1: "sushi", elem2: null, chance: 0.2 };

// Baking & Desserts
elements.dough.reactions.apple = { elem1: "apple_pie", elem2: null, tempMin: 100, chance: 0.1 }; // Bakes into pie
elements.dough.reactions.strawberry = { elem1: "strawberry_tart", elem2: null, tempMin: 100, chance: 0.1 };

// Sides
elements.bread.reactions.garlic = { elem1: "garlic_bread", elem2: null, tempMin: 50, chance: 0.2 }; // Toasted garlic bread
elements.potato.reactions.olive_oil = { elem1: "fries", elem2: null, tempMin: 120, chance: 0.1 }; // Deep fried

// Flavor enhancers (Mushrooms, Onions, Garlic dissolve into certain foods to represent cooking them in)
elements.mushroom.reactions = {
    "olive_oil": { elem1: null, elem2: "olive_oil", tempMin: 80, chance: 0.1 } // Sautéed
};
elements.garlic.reactions = {
    "olive_oil": { elem1: null, elem2: "olive_oil", tempMin: 80, chance: 0.1 }
};
// ==========================================
// 4. EXPANDED REALISTIC REACTIONS & MULTI-STAGE CRAFTING
// ==========================================

// Safely initialize the reaction dictionaries for all vanilla foods we plan to touch
const extendedVanilla = [
    "water", "salt", "sugar", "flour", "broth", "egg", "yolk", "dough", "batter", 
    "butter", "cheese", "chocolate", "grape", "herb", "lettuce", "pickle", "tomato", 
    "sauce", "pumpkin", "corn", "potato", "bakedpotato", "mashedpotato", "yeast", 
    "bread", "toast", "rice", "coffeebean", "coffeeground", "nut", "jelly", "yogurt", 
    "icecream", "icing", "beans", "meat", "cookedmeat", "ice", "curedmeat"
];

extendedVanilla.forEach(el => {
    if (elements[el] && !elements[el].reactions) {
        elements[el].reactions = {};
    }
});

// --- Advanced Frying & Oil Physics ---
// Hot oil cooks things instantly but hitting it with water triggers a violent grease fire
elements.olive_oil.reactions.potato = { elem1: "olive_oil", elem2: "fries", tempMin: 150, chance: 0.8 };
elements.olive_oil.reactions.batter = { elem1: "olive_oil", elem2: "bakedbatter", tempMin: 160, chance: 0.7 };
elements.olive_oil.reactions.meat = { elem1: "olive_oil", elem2: "cookedmeat", tempMin: 140, chance: 0.8 };
elements.olive_oil.reactions.bacon_raw = { elem1: "olive_oil", elem2: "bacon_cooked", tempMin: 140, chance: 0.8 };
elements.olive_oil.reactions.water = { elem1: "fire", elem2: "steam", tempMin: 100, chance: 0.5 }; 

// --- The Ultimate Sandwich & Burger Builder ---
// Butter melts into toast
elements.bread.reactions.butter = { elem1: "toast", elem2: null, tempMin: 80, chance: 0.5 };

// Burger Evolution
elements.burger.reactions.cheese = { elem1: "cheeseburger", elem2: null, chance: 0.8 };
elements.cheeseburger = { color: "#dca938", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
if (!elements.cheeseburger.reactions) elements.cheeseburger.reactions = {};
elements.cheeseburger.reactions.bacon_cooked = { elem1: "bacon_burger", elem2: null, chance: 0.8 };

// Grilled Cheese
elements.toast.reactions.cheese = { elem1: "grilled_cheese", elem2: null, tempMin: 70, chance: 0.4 };
elements.grilled_cheese = { color: "#e8a923", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };

// Multi-Stage BLT Sandwich
elements.toast.reactions.bacon_cooked = { elem1: "blt_base", elem2: null, chance: 0.5 };
elements.blt_base = { color: "#b36b3b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.blt_base.reactions) elements.blt_base.reactions = {};
elements.blt_base.reactions.lettuce = { elem1: "blt_almost", elem2: null, chance: 0.5 };
elements.blt_almost = { color: "#6bb33b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.blt_almost.reactions) elements.blt_almost.reactions = {};
elements.blt_almost.reactions.tomato = { elem1: "blt_sandwich", elem2: null, chance: 1.0 };
elements.blt_sandwich = { color: "#d67c52", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };

// Peanut Butter & Jelly Sandwich
elements.bread.reactions.nutbutter = { elem1: "pb_bread", elem2: null, chance: 0.5 };
elements.pb_bread = { color: "#d6a45e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.pb_bread.reactions) elements.pb_bread.reactions = {};
elements.pb_bread.reactions.jelly = { elem1: "pbj_sandwich", elem2: null, chance: 1.0 };
elements.pbj_sandwich = { color: "#955c9e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };

// --- Advanced Soups & Stews ---
// Stew: Broth + Meat + Potato
elements.broth.reactions.meat = { elem1: "meat_broth", elem2: null, tempMin: 90, chance: 0.2 };
elements.meat_broth = { color: "#8a5c32", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1040, hidden: true };
if (!elements.meat_broth.reactions) elements.meat_broth.reactions = {};
elements.meat_broth.reactions.potato = { elem1: "stew", elem2: null, tempMin: 90, chance: 0.3 };
elements.stew = { color: "#6b421a", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1100, viscosity: 500 };

// Chili: Tomato Sauce + Beans + Meat
elements.sauce.reactions.beans = { elem1: "bean_sauce", elem2: null, tempMin: 80, chance: 0.3 };
elements.bean_sauce = { color: "#9e3814", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1080, hidden: true };
if (!elements.bean_sauce.reactions) elements.bean_sauce.reactions = {};
elements.bean_sauce.reactions.cookedmeat = { elem1: "chili", elem2: null, tempMin: 80, chance: 0.5 };
elements.chili = { color: "#7a270a", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1150, viscosity: 800 };

// --- Sushi Mechanics ---
// Herb acts as the Nori/Seaweed wrap for the rice
elements.rice.reactions.herb = { elem1: "sushi_rice", elem2: null, chance: 0.4 }; 
elements.sushi_rice = { color: "#e6f2eb", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.sushi_rice.reactions) elements.sushi_rice.reactions = {};
elements.sushi_rice.reactions.salmon = { elem1: "sushi", elem2: null, chance: 0.5 };

// --- Baking, Sweets & Realism ---
// Caramelizing Sugar over high heat
elements.sugar.reactions.water = { elem1: "syrup", elem2: null, tempMin: 100, chance: 0.2 };
elements.sugar.reactions.butter = { elem1: "caramel", elem2: null, tempMin: 110, chance: 0.1 };
elements.caramel = { color: "#d68a22", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1200, viscosity: 10000 };

// Chocolate-Covered Strawberries (Requires low heat, otherwise the chocolate burns)
elements.chocolate.reactions.strawberry = { elem1: "choco_strawberry", elem2: null, tempMax: 40, chance: 0.5 }; 
elements.choco_strawberry = { color: "#4a2511", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };

// Salt physics (melts ice rapidly and cures meat)
elements.salt.reactions.ice = { elem1: "water", elem2: "water", chance: 0.2 };
elements.salt.reactions.meat = { elem1: null, elem2: "curedmeat", chance: 0.1 };

// Aromatics flavor the oil, vanishing into it
elements.garlic.reactions.olive_oil = { elem1: null, elem2: "garlic_oil", tempMin: 60, chance: 0.1 };
elements.onion.reactions.olive_oil = { elem1: null, elem2: "garlic_oil", tempMin: 60, chance: 0.1 };
elements.garlic_oil = { color: "#e3dd81", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 920, viscosity: 100 };

// ==========================================
// 5. MASTER CHEF MASSIVE EXPANSION PACK
// Spices, Baking Chemistry, Breakfast, Tex-Mex, & Beverages
// ==========================================

// --- NEW RAW INGREDIENTS & SPICES ---
elements.milk = { color: "#fdfff0", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1030 };
elements.cream = { color: "#ffffe0", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1010, viscosity: 200 };
elements.vanilla_extract = { color: "#4a3018", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 980 };
elements.cocoa_powder = { color: "#5c3a21", behavior: behaviors.POWDER, category: "food", state: "solid", density: 500 };
elements.baking_soda = { color: "#ffffff", behavior: behaviors.POWDER, category: "food", state: "solid", density: 800 };
elements.vinegar = { color: "#e3e3c8", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1010 };
elements.lemon = { color: "#fff000", behavior: behaviors.POWDER, category: "food", state: "solid", density: 900 };
elements.lemon_juice = { color: "#fffacd", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1020 };
elements.honey = { color: "#ffc300", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1420, viscosity: 50000 };
elements.maple_syrup = { color: "#bb5d19", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1370, viscosity: 10000 };
elements.cinnamon = { color: "#d2691e", behavior: behaviors.POWDER, category: "food", state: "solid", density: 600 };
elements.black_pepper = { color: "#363636", behavior: behaviors.POWDER, category: "food", state: "solid", density: 550 };
elements.chili_powder = { color: "#c42a2a", behavior: behaviors.POWDER, category: "food", state: "solid", density: 600 };
elements.tortilla = { color: "#f2e3c6", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 900 };
elements.corn_chip = { color: "#e8c351", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 850 };
elements.sausage_raw = { color: "#cc7a7a", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1050, tempHigh: 110, stateHigh: "sausage_cooked" };
elements.sausage_cooked = { color: "#8a4f4f", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 1000 };

// --- NEW DISHES & INTERMEDIATES ---
elements.pancake_batter = { color: "#f5deb3", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1100, viscosity: 5000, tempHigh: 100, stateHigh: "pancake" };
elements.pancake = { color: "#e0b876", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.waffle_batter = { color: "#f5deb3", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1150, viscosity: 8000, tempHigh: 110, stateHigh: "waffle" };
elements.waffle = { color: "#d29c4b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.cookie_dough = { color: "#dcb274", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 1200, tempHigh: 150, stateHigh: "cookie" };
elements.cookie = { color: "#b38241", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.chocolate_chip_cookie = { color: "#9e6f31", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.brownie_batter = { color: "#4a2e15", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1250, viscosity: 15000, tempHigh: 160, stateHigh: "brownie" };
elements.brownie = { color: "#36200d", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.taco = { color: "#e3bc4b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.burrito = { color: "#d6c9a9", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.nachos = { color: "#e8a923", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.hot_dog = { color: "#b86349", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.lemonade = { color: "#fdfd96", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1040 };
elements.chocolate_milk = { color: "#8b5a2b", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1050 };
elements.hot_chocolate = { color: "#6b4226", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1050 };

// --- ENSURE VANILLA DICTIONARIES EXIST ---
const expansionVanilla = [
    "water", "sugar", "flour", "egg", "butter", "cheese", "chocolate", "meat", 
    "cookedmeat", "potato", "bread", "beans", "lettuce", "tomato", "ice", "foam", "carbon_dioxide"
];
expansionVanilla.forEach(el => {
    if (elements[el] && !elements[el].reactions) elements[el].reactions = {};
});

// --- ADVANCED CHEMISTRY: BAKING SODA & LEAVENING ---
// Baking soda + Vinegar creates a violent foaming reaction that releases CO2
elements.baking_soda.reactions.vinegar = { elem1: "foam", elem2: "carbon_dioxide", chance: 1.0 };
elements.baking_soda.reactions.lemon_juice = { elem1: "foam", elem2: "carbon_dioxide", chance: 1.0 };
// Baking soda in batter heated up releases CO2 to simulate bread rising (creates bubbles in the food)
elements.baking_soda.reactions.dough = { elem1: null, elem2: "dough", attr2: { "foam": 20 }, tempMin: 80, chance: 0.1 };

// --- BEVERAGE CRAFTING ---
// Squeezing lemons
elements.lemon.reactions.water = { elem1: "lemon_juice", elem2: "lemon_juice", chance: 0.05 }; 
// Making Lemonade
elements.lemon_juice.reactions.sugar = { elem1: "lemonade", elem2: null, chance: 0.5 };
elements.lemonade.reactions.ice = { elem1: "lemonade", elem2: "lemonade", temp2: 0, chance: 0.1 }; // Cools it down
// Dairy Drinks
elements.milk.reactions.chocolate = { elem1: "chocolate_milk", elem2: null, chance: 0.3 };
elements.milk.reactions.cocoa_powder = { elem1: "chocolate_milk", elem2: null, chance: 0.5 };
elements.chocolate_milk.reactions.fire = { elem1: "hot_chocolate", elem2: null, tempMin: 60, chance: 0.1 }; // Heat converts it

// --- THE BAKERY & PASTRIES ---
// Cookie Architecture
elements.dough.reactions.sugar = { elem1: "cookie_dough", elem2: null, chance: 0.4 };
elements.cookie_dough.reactions.chocolate = { elem1: "chocolate_chip_cookie", elem2: null, tempMin: 140, chance: 0.2 }; // Bakes with chips
// Brownie Architecture
elements.batter.reactions.cocoa_powder = { elem1: "brownie_batter", elem2: null, chance: 0.5 };
// Pancake & Waffle Architecture
elements.batter.reactions.milk = { elem1: "pancake_batter", elem2: null, chance: 0.3 };
elements.pancake_batter.reactions.butter = { elem1: "waffle_batter", elem2: null, chance: 0.2 }; // Richer batter
// Syrup & Breakfast Toppings
elements.pancake.reactions.maple_syrup = { elem1: "pancake", elem2: null, color1: "#c49a52", chance: 0.5 }; // Syrup absorbs into pancake
elements.waffle.reactions.maple_syrup = { elem1: "waffle", elem2: null, color1: "#b37b3b", chance: 0.5 };

// --- TEX-MEX CUISINE ---
// Tacos (Tortilla + Meat -> Meat Taco -> + Cheese/Lettuce -> Taco)
elements.tortilla.reactions.cookedmeat = { elem1: "meat_taco", elem2: null, chance: 0.6 };
elements.meat_taco = { color: "#c49a47", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.meat_taco.reactions) elements.meat_taco.reactions = {};
elements.meat_taco.reactions.cheese = { elem1: "taco", elem2: null, chance: 0.5 };
elements.meat_taco.reactions.lettuce = { elem1: "taco", elem2: null, chance: 0.5 };

// Burritos (Tortilla + Beans -> Bean Burrito -> + Meat -> Beef Burrito)
elements.tortilla.reactions.beans = { elem1: "bean_burrito", elem2: null, chance: 0.6 };
elements.bean_burrito = { color: "#b5a37e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.bean_burrito.reactions) elements.bean_burrito.reactions = {};
elements.bean_burrito.reactions.cookedmeat = { elem1: "burrito", elem2: null, chance: 0.5 };
elements.bean_burrito.reactions.cheese = { elem1: "burrito", elem2: null, chance: 0.5 };

// Nachos (Chips + Melted Cheese + Meat)
elements.corn_chip.reactions.cheese = { elem1: "nachos", elem2: null, tempMin: 60, chance: 0.4 }; // Cheese must melt
elements.nachos.reactions.cookedmeat = { elem1: "nachos", elem2: null, color1: "#c28127", chance: 0.3 }; // Absorbs meat, gets darker

// --- CARNIVAL & FAST FOOD ---
// Hot Dog (Bread + Cooked Sausage)
elements.bread.reactions.sausage_cooked = { elem1: "hot_dog", elem2: null, chance: 0.6 };

// --- SPICE ENHANCEMENTS (Flavoring system) ---
// Spices vanish into meats and liquids, subtly changing their color to represent being seasoned
elements.chicken_raw = { color: "#ffccb3", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1050, tempHigh: 120, stateHigh: "cookedmeat" };
elements.chicken_raw.reactions = {
    "black_pepper": { elem1: "chicken_raw", elem2: null, color1: "#e3b6a1", chance: 0.2 },
    "chili_powder": { elem1: "chicken_raw", elem2: null, color1: "#e88e8e", chance: 0.2 }
};
elements.cookedmeat.reactions.black_pepper = { elem1: "cookedmeat", elem2: null, color1: "#5e3e2b", chance: 0.2 };
elements.cookedmeat.reactions.chili_powder = { elem1: "cookedmeat", elem2: null, color1: "#8a3131", chance: 0.2 };

// Sweet Spices into desserts
elements.cookie_dough.reactions.cinnamon = { elem1: "cookie_dough", elem2: null, color1: "#c29148", chance: 0.2 }; // Snickerdoodle prep
elements.milk.reactions.honey = { elem1: "milk", elem2: null, color1: "#faebd7", chance: 0.3 }; // Honey milk
// ==========================================
// 6. MASTER CHEF EXTRA DISHES EXPANSION
// Italian, Café Drinks, Breakfast Classics & Desserts
// ==========================================

// --- NEW FINAL DISHES & DRINKS ---
elements.fettuccine_alfredo = { color: "#fcf5e3", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.quesadilla = { color: "#f0d381", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.french_toast = { color: "#c98f3e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.cinnamon_roll = { color: "#d6ab72", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.chicken_noodle_soup = { color: "#d1bc6b", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1040 };
elements.ice_cream_sundae = { color: "#f0dde2", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.breakfast_sandwich = { color: "#b57b45", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };
elements.latte = { color: "#c29d78", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1020 };
elements.iced_coffee = { color: "#543315", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1010 };
elements.gravy = { color: "#704f2d", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1080, viscosity: 2000 };
elements.mashed_potatoes_gravy = { color: "#e8dca2", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" };

// --- ENSURE VANILLA DICTIONARIES EXIST ---
const extraVanilla = [
    "coffee", "mashedpotato", "icecream", "icing"
];
extraVanilla.forEach(el => {
    if (elements[el] && !elements[el].reactions) elements[el].reactions = {};
});

// --- ITALIAN & SAVORY ---
// Fettuccine Alfredo (Pasta + Cream/Butter/Cheese)
elements.pasta_cooked.reactions.cream = { elem1: "alfredo_base", elem2: null, chance: 0.4 };
elements.alfredo_base = { color: "#faecc8", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.alfredo_base.reactions) elements.alfredo_base.reactions = {};
elements.alfredo_base.reactions.cheese = { elem1: "fettuccine_alfredo", elem2: null, chance: 0.6 }; // Adds cheese to finish

// Quesadilla (Tortilla + Cheese + Heat)
elements.tortilla.reactions.cheese = { elem1: "quesadilla", elem2: null, tempMin: 70, chance: 0.3 }; // Must melt the cheese

// Chicken Noodle Soup (Broth + Pasta + Cooked Meat/Chicken)
elements.broth.reactions.pasta_cooked = { elem1: "noodle_broth", elem2: null, chance: 0.3 };
elements.noodle_broth = { color: "#bda755", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", hidden: true };
if (!elements.noodle_broth.reactions) elements.noodle_broth.reactions = {};
elements.noodle_broth.reactions.cookedmeat = { elem1: "chicken_noodle_soup", elem2: null, chance: 0.4 };

// Gravy & Mashed Potatoes
elements.broth.reactions.flour = { elem1: "gravy", elem2: null, tempMin: 80, chance: 0.2 }; // Thickening broth into gravy
elements.mashedpotato.reactions.gravy = { elem1: "mashed_potatoes_gravy", elem2: null, chance: 0.4 };

// --- BREAKFAST CLASSICS ---
// French Toast (Bread soaked in Egg, cooked, topped with Syrup)
elements.bread.reactions.egg = { elem1: "eggy_bread", elem2: null, chance: 0.4 };
elements.eggy_bread = { color: "#ded18c", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.eggy_bread.reactions) elements.eggy_bread.reactions = {};
elements.eggy_bread.reactions.maple_syrup = { elem1: "french_toast", elem2: null, tempMin: 80, chance: 0.5 }; // Must be cooked!

// Breakfast Sausage Sandwich (Toast + Sausage + Egg)
elements.toast.reactions.sausage_cooked = { elem1: "sausage_toast", elem2: null, chance: 0.5 };
elements.sausage_toast = { color: "#8a582b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.sausage_toast.reactions) elements.sausage_toast.reactions = {};
elements.sausage_toast.reactions.egg = { elem1: "breakfast_sandwich", elem2: null, tempMin: 70, chance: 0.5 };

// Cinnamon Rolls (Dough + Cinnamon -> Baked -> + Icing)
elements.dough.reactions.cinnamon = { elem1: "cinnamon_dough", elem2: null, chance: 0.4 };
elements.cinnamon_dough = { color: "#ba9f7b", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", tempHigh: 120, stateHigh: "baked_cinnamon_roll", hidden: true };
elements.baked_cinnamon_roll = { color: "#9e7746", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.baked_cinnamon_roll.reactions) elements.baked_cinnamon_roll.reactions = {};
elements.baked_cinnamon_roll.reactions.icing = { elem1: "cinnamon_roll", elem2: null, chance: 0.8 };

// --- CAFÉ DRINKS & DESSERTS ---
// Lattes (Coffee + Milk)
elements.coffee.reactions.milk = { elem1: "latte", elem2: null, chance: 0.4 };
elements.coffee.reactions.cream = { elem1: "latte", elem2: null, chance: 0.5 }; // Cream works too

// Iced Coffee (Coffee + Ice)
elements.coffee.reactions.ice = { elem1: "iced_coffee", elem2: "water", chance: 0.2 }; // Melts ice slightly

// Ultimate Ice Cream Sundae (Ice cream + Chocolate Syrup/Caramel + Strawberry)
elements.icecream.reactions.chocolate = { elem1: "choco_icecream", elem2: null, chance: 0.5 };
elements.choco_icecream = { color: "#99736c", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true };
if (!elements.choco_icecream.reactions) elements.choco_icecream.reactions = {};
elements.choco_icecream.reactions.strawberry = { elem1: "ice_cream_sundae", elem2: null, chance: 0.8 };
