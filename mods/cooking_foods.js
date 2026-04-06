/* == Master Chef Mod - Complete Unified Edition (Fruit Juice Update) == */

// ==========================================
// 1. SMART ELEMENT INITIALIZER 
// ==========================================
function addFood(name, data) {
    if (!elements[name]) {
        if (data.state === "solid" && !data.tempHigh) {
            data.tempHigh = 250;
            data.stateHigh = "ash";
        }
        if (data.state === "liquid" && !data.tempLow) {
            data.tempLow = 0;
            data.stateLow = "ice";
        }
        if (data.behavior === behaviors.STURDYPOWDER && !data.breakInto) {
            data.breakInto = "crumb"; 
        }
        elements[name] = data;
    }
}

// ==========================================
// 2. RAW INGREDIENTS, SPICES & FRUITS
// ==========================================
// JUICES
addFood("strawberry_juice", { color: "#e83151", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1040 });
addFood("apple_juice", { color: "#dcb23d", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1040 });
addFood("lemon_juice", { color: "#fffacd", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1020 });

// FRUITS (Notice the breakInto property!)
addFood("strawberry", { color: "#ff3333", behavior: behaviors.POWDER, category: "food", state: "solid", density: 900, breakInto: "strawberry_juice" });
addFood("apple", { color: "#ff4d4d", behavior: behaviors.POWDER, category: "food", state: "solid", density: 950, breakInto: "apple_juice" });
addFood("lemon", { color: "#fff000", behavior: behaviors.POWDER, category: "food", state: "solid", density: 900, breakInto: "lemon_juice" });

// OTHER INGREDIENTS
addFood("onion", { color: "#e6e6fa", behavior: behaviors.POWDER, category: "food", state: "solid", density: 800, breakInto: "sauce" });
addFood("garlic", { color: "#f3eec3", behavior: behaviors.POWDER, category: "food", state: "solid", density: 800 });
addFood("mushroom", { color: "#d9c8b4", behavior: behaviors.POWDER, category: "food", state: "solid", density: 600 });
addFood("bacon_raw", { color: "#ff9999", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1000, tempHigh: 110, stateHigh: "bacon_cooked" });
addFood("bacon_cooked", { color: "#8b4513", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 950 });
addFood("pasta_raw", { color: "#ffebb5", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1200, breakInto: "flour" });
addFood("pasta_cooked", { color: "#f5d678", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 1100 });
addFood("olive_oil", { color: "#d4db84", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 910, viscosity: 100, burn: 60, burnTime: 300, tempHigh: 280, stateHigh: "fire" });
addFood("salmon", { color: "#fa8072", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1050, tempHigh: 100, stateHigh: "cookedmeat", breakInto: "blood" });
addFood("milk", { color: "#fdfff0", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1030 });
addFood("cream", { color: "#ffffe0", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1010, viscosity: 200 });
addFood("vanilla_extract", { color: "#4a3018", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 980 });
addFood("cocoa_powder", { color: "#5c3a21", behavior: behaviors.POWDER, category: "food", state: "solid", density: 500, breakInto: "dust" });
addFood("baking_soda", { color: "#ffffff", behavior: behaviors.POWDER, category: "food", state: "solid", density: 800, breakInto: "dust" });
addFood("vinegar", { color: "#e3e3c8", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1010 });
addFood("honey", { color: "#ffc300", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1420, viscosity: 50000 });
addFood("maple_syrup", { color: "#bb5d19", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1370, viscosity: 10000 });
addFood("cinnamon", { color: "#d2691e", behavior: behaviors.POWDER, category: "food", state: "solid", density: 600, breakInto: "dust" });
addFood("black_pepper", { color: "#363636", behavior: behaviors.POWDER, category: "food", state: "solid", density: 550, breakInto: "dust" });
addFood("chili_powder", { color: "#c42a2a", behavior: behaviors.POWDER, category: "food", state: "solid", density: 600, breakInto: "dust" });
addFood("tortilla", { color: "#f2e3c6", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 900 });
addFood("corn_chip", { color: "#e8c351", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 850 });
addFood("sausage_raw", { color: "#cc7a7a", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1050, tempHigh: 110, stateHigh: "sausage_cooked", breakInto: "blood" });
addFood("sausage_cooked", { color: "#8a4f4f", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 1000 });
addFood("chicken_raw", { color: "#ffccb3", behavior: behaviors.POWDER, category: "food", state: "solid", density: 1050, tempHigh: 120, stateHigh: "cookedmeat", breakInto: "blood" });

// ==========================================
// 3. APPLY BREAK PHYSICS TO VANILLA FOODS
// ==========================================
// Hooks into existing Sandboxels elements so they smash realistically too!
if (elements.grape) elements.grape.breakInto = "juice";
if (elements.tomato) elements.tomato.breakInto = "ketchup"; // Or you could use "sauce"
if (elements.potato) elements.potato.breakInto = "mashedpotato";
if (elements.corn) elements.corn.breakInto = "corn_seed";

// ==========================================
// 4. INTERMEDIARY FOODS & DISHES
// ==========================================
addFood("blt_base", { color: "#b36b3b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("blt_almost", { color: "#6bb33b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("pb_bread", { color: "#d6a45e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("meat_broth", { color: "#8a5c32", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1040, hidden: true });
addFood("bean_sauce", { color: "#9e3814", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1080, hidden: true });
addFood("sushi_rice", { color: "#e6f2eb", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("meat_taco", { color: "#c49a47", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("bean_burrito", { color: "#b5a37e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("alfredo_base", { color: "#faecc8", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("noodle_broth", { color: "#bda755", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", hidden: true });
addFood("eggy_bread", { color: "#ded18c", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("sausage_toast", { color: "#8a582b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("cinnamon_dough", { color: "#ba9f7b", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", tempHigh: 120, stateHigh: "baked_cinnamon_roll", hidden: true });
addFood("baked_cinnamon_roll", { color: "#9e7746", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true });
addFood("choco_icecream", { color: "#99736c", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", hidden: true, tempHigh: 30, stateHigh: "chocolate_milk" });

addFood("pizza_dough", { color: "#ffe4b5", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("pizza", { color: "#d9643a", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("salad", { color: "#4caf50", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", breakInto: "lettuce" });
addFood("dressed_salad", { color: "#7cbd6b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", breakInto: "lettuce" });
addFood("burger", { color: "#8b5a2b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("cheeseburger", { color: "#dca938", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("bacon_burger", { color: "#75461c", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("omelet", { color: "#ffd700", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("mushroom_soup", { color: "#a38d72", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1050 });
addFood("onion_soup", { color: "#c2a378", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1030 });
addFood("mac_and_cheese", { color: "#ffb90f", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("spaghetti_bolognese", { color: "#b22222", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("fried_rice", { color: "#e8c982", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("sushi", { color: "#ffffff", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("apple_pie", { color: "#e59c3a", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("strawberry_tart", { color: "#e86f68", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("garlic_bread", { color: "#e8d082", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("fries", { color: "#f4c63f", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid", breakInto: "mashedpotato" });
addFood("grilled_cheese", { color: "#e8a923", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("blt_sandwich", { color: "#d67c52", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("pbj_sandwich", { color: "#955c9e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("stew", { color: "#6b421a", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1100, viscosity: 500 });
addFood("chili", { color: "#7a270a", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1150, viscosity: 800 });
addFood("syrup", { color: "#8f571b", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1300, viscosity: 8000 });
addFood("caramel", { color: "#d68a22", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1200, viscosity: 10000 });
addFood("choco_strawberry", { color: "#4a2511", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("garlic_oil", { color: "#e3dd81", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 920, viscosity: 100 });
addFood("pancake_batter", { color: "#f5deb3", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1100, viscosity: 5000, tempHigh: 100, stateHigh: "pancake" });
addFood("pancake", { color: "#e0b876", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("waffle_batter", { color: "#f5deb3", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1150, viscosity: 8000, tempHigh: 110, stateHigh: "waffle" });
addFood("waffle", { color: "#d29c4b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("cookie_dough", { color: "#dcb274", behavior: behaviors.STURDYPOWDER, category: "food", state: "solid", density: 1200, tempHigh: 150, stateHigh: "cookie" });
addFood("cookie", { color: "#b38241", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("chocolate_chip_cookie", { color: "#9e6f31", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("brownie_batter", { color: "#4a2e15", behavior: behaviors.LIQUID, category: "food", state: "liquid", density: 1250, viscosity: 15000, tempHigh: 160, stateHigh: "brownie" });
addFood("brownie", { color: "#36200d", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("taco", { color: "#e3bc4b", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("burrito", { color: "#d6c9a9", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("nachos", { color: "#e8a923", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("hot_dog", { color: "#b86349", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("lemonade", { color: "#fdfd96", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1040 });
addFood("chocolate_milk", { color: "#8b5a2b", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1050 });
addFood("hot_chocolate", { color: "#6b4226", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1050 });
addFood("fettuccine_alfredo", { color: "#fcf5e3", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("quesadilla", { color: "#f0d381", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("french_toast", { color: "#c98f3e", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("cinnamon_roll", { color: "#d6ab72", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("chicken_noodle_soup", { color: "#d1bc6b", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1040 });
addFood("ice_cream_sundae", { color: "#f0dde2", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("breakfast_sandwich", { color: "#b57b45", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });
addFood("latte", { color: "#c29d78", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1020 });
addFood("iced_coffee", { color: "#543315", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1010 });
addFood("gravy", { color: "#704f2d", behavior: behaviors.LIQUID, category: "dishes", state: "liquid", density: 1080, viscosity: 2000 });
addFood("mashed_potatoes_gravy", { color: "#e8dca2", behavior: behaviors.STURDYPOWDER, category: "dishes", state: "solid" });

// ==========================================
// 5. SAFELY INITIALIZE DICTIONARIES
// ==========================================
const elementsToHook = [
    "water", "salt", "sugar", "flour", "broth", "egg", "yolk", "dough", "batter", 
    "butter", "cheese", "chocolate", "grape", "herb", "lettuce", "pickle", "tomato", 
    "sauce", "pumpkin", "corn", "potato", "bakedpotato", "mashedpotato", "yeast", 
    "bread", "toast", "rice", "coffee", "nut", "jelly", "yogurt", "icecream", "icing", 
    "beans", "meat", "cookedmeat", "ice", "curedmeat", "foam", "carbon_dioxide",
    "pizza_dough", "burger", "cheeseburger", "salad", "pasta_cooked", "spaghetti_bolognese",
    "blt_base", "blt_almost", "pb_bread", "meat_broth", "bean_sauce", "sushi_rice",
    "meat_taco", "bean_burrito", "alfredo_base", "noodle_broth", "eggy_bread", "sausage_toast",
    "baked_cinnamon_roll", "choco_icecream", "cookie_dough", "milk", "lemon_juice",
    "pancake", "waffle", "nachos", "pasta_raw", "olive_oil", "lemon", "baking_soda",
    "chicken_raw", "garlic", "onion", "mushroom", "strawberry_juice", "apple_juice"
];

elementsToHook.forEach(el => {
    if (elements[el] && !elements[el].reactions) elements[el].reactions = {};
});

// ==========================================
// 6. THE CHEMISTRY & REACTIONS LOGIC
// ==========================================

// --- Basic Cooking & Boiling ---
elements.pasta_raw.reactions.water = { elem1: "pasta_cooked", elem2: null, tempMin: 90, chance: 0.1 };
elements.salt.reactions.ice = { elem1: "water", elem2: "water", chance: 0.2 };
elements.salt.reactions.meat = { elem1: null, elem2: "curedmeat", chance: 0.1 };

// --- Frying & Oils ---
Object.assign(elements.olive_oil.reactions, {
    "potato": { elem1: "olive_oil", elem2: "fries", tempMin: 150, chance: 0.8 },
    "batter": { elem1: "olive_oil", elem2: "pancake", tempMin: 160, chance: 0.7 },
    "meat": { elem1: "olive_oil", elem2: "cookedmeat", tempMin: 140, chance: 0.8 },
    "bacon_raw": { elem1: "olive_oil", elem2: "bacon_cooked", tempMin: 140, chance: 0.8 },
    "water": { elem1: "fire", elem2: "steam", tempMin: 100, chance: 0.5 }
});

// --- Burgers, Sandwiches & Pizza ---
elements.dough.reactions.sauce = { elem1: "pizza_dough", elem2: null, chance: 0.5 };
elements.pizza_dough.reactions.cheese = { elem1: "pizza", elem2: null, chance: 0.5 };

elements.bread.reactions.cookedmeat = { elem1: "burger", elem2: null, chance: 0.3 };
elements.burger.reactions.cheese = { elem1: "cheeseburger", elem2: null, chance: 0.8 };
elements.burger.reactions.bacon_cooked = { elem1: "bacon_burger", elem2: null, chance: 0.5 };
elements.cheeseburger.reactions.bacon_cooked = { elem1: "bacon_burger", elem2: null, chance: 0.8 };

elements.bread.reactions.butter = { elem1: "toast", elem2: null, tempMin: 80, chance: 0.5 };
elements.toast.reactions.cheese = { elem1: "grilled_cheese", elem2: null, tempMin: 70, chance: 0.4 };
elements.toast.reactions.bacon_cooked = { elem1: "blt_base", elem2: null, chance: 0.5 };
elements.blt_base.reactions.lettuce = { elem1: "blt_almost", elem2: null, chance: 0.5 };
elements.blt_almost.reactions.tomato = { elem1: "blt_sandwich", elem2: null, chance: 1.0 };
elements.bread.reactions.nut = { elem1: "pb_bread", elem2: null, chance: 0.5 };
elements.pb_bread.reactions.jelly = { elem1: "pbj_sandwich", elem2: null, chance: 1.0 };
elements.bread.reactions.sausage_cooked = { elem1: "hot_dog", elem2: null, chance: 0.6 };
elements.toast.reactions.sausage_cooked = { elem1: "sausage_toast", elem2: null, chance: 0.5 };
elements.sausage_toast.reactions.egg = { elem1: "breakfast_sandwich", elem2: null, tempMin: 70, chance: 0.5 };
elements.bread.reactions.garlic = { elem1: "garlic_bread", elem2: null, tempMin: 50, chance: 0.2 };

// --- Salads & Soups ---
elements.lettuce.reactions.tomato = { elem1: "salad", elem2: null, chance: 0.2 };
elements.salad.reactions.onion = { elem1: "salad", elem2: null, chance: 0.3 }; 
elements.salad.reactions.olive_oil = { elem1: "dressed_salad", elem2: null, chance: 0.5 };
elements.broth.reactions.mushroom = { elem1: "mushroom_soup", elem2: null, chance: 0.2 };
elements.broth.reactions.onion = { elem1: "onion_soup", elem2: null, chance: 0.2 };
elements.broth.reactions.meat = { elem1: "meat_broth", elem2: null, tempMin: 90, chance: 0.2 };
elements.meat_broth.reactions.potato = { elem1: "stew", elem2: null, tempMin: 90, chance: 0.3 };
elements.sauce.reactions.beans = { elem1: "bean_sauce", elem2: null, tempMin: 80, chance: 0.3 };
elements.bean_sauce.reactions.cookedmeat = { elem1: "chili", elem2: null, tempMin: 80, chance: 0.5 };
elements.broth.reactions.pasta_cooked = { elem1: "noodle_broth", elem2: null, chance: 0.3 };
elements.noodle_broth.reactions.cookedmeat = { elem1: "chicken_noodle_soup", elem2: null, chance: 0.4 };
elements.broth.reactions.flour = { elem1: "gravy", elem2: null, tempMin: 80, chance: 0.2 }; 
elements.mashedpotato.reactions.gravy = { elem1: "mashed_potatoes_gravy", elem2: null, chance: 0.4 };

// --- Asian & Italian Cuisine ---
elements.rice.reactions.egg = { elem1: "fried_rice", elem2: null, tempMin: 80, chance: 0.2 }; 
elements.rice.reactions.herb = { elem1: "sushi_rice", elem2: null, chance: 0.4 }; 
elements.sushi_rice.reactions.salmon = { elem1: "sushi", elem2: null, chance: 0.5 };
elements.pasta_cooked.reactions.cheese = { elem1: "mac_and_cheese", elem2: null, chance: 0.3 };
elements.pasta_cooked.reactions.sauce = { elem1: "spaghetti_bolognese", elem2: null, chance: 0.3 };
elements.spaghetti_bolognese.reactions.cookedmeat = { elem1: "spaghetti_bolognese", elem2: null, chance: 0.5 }; 
elements.pasta_cooked.reactions.cream = { elem1: "alfredo_base", elem2: null, chance: 0.4 };
elements.alfredo_base.reactions.cheese = { elem1: "fettuccine_alfredo", elem2: null, chance: 0.6 };

// --- Tex-Mex Cuisine ---
elements.tortilla.reactions.cookedmeat = { elem1: "meat_taco", elem2: null, chance: 0.6 };
elements.meat_taco.reactions.cheese = { elem1: "taco", elem2: null, chance: 0.5 };
elements.meat_taco.reactions.lettuce = { elem1: "taco", elem2: null, chance: 0.5 };
elements.tortilla.reactions.beans = { elem1: "bean_burrito", elem2: null, chance: 0.6 };
elements.bean_burrito.reactions.cookedmeat = { elem1: "burrito", elem2: null, chance: 0.5 };
elements.bean_burrito.reactions.cheese = { elem1: "burrito", elem2: null, chance: 0.5 };
elements.corn_chip.reactions.cheese = { elem1: "nachos", elem2: null, tempMin: 60, chance: 0.4 }; 
elements.nachos.reactions.cookedmeat = { elem1: "nachos", elem2: null, color1: "#c28127", chance: 0.3 }; 
elements.tortilla.reactions.cheese = { elem1: "quesadilla", elem2: null, tempMin: 70, chance: 0.3 };

// --- Baking, Desserts & Breakfast ---
elements.dough.reactions.apple = { elem1: "apple_pie", elem2: null, tempMin: 100, chance: 0.1 }; 
elements.dough.reactions.strawberry = { elem1: "strawberry_tart", elem2: null, tempMin: 100, chance: 0.1 };
elements.sugar.reactions.water = { elem1: "syrup", elem2: null, tempMin: 100, chance: 0.2 };
elements.sugar.reactions.butter = { elem1: "caramel", elem2: null, tempMin: 110, chance: 0.1 };
elements.chocolate.reactions.strawberry = { elem1: "choco_strawberry", elem2: null, tempMax: 40, chance: 0.5 }; 
elements.dough.reactions.sugar = { elem1: "cookie_dough", elem2: null, chance: 0.4 };
elements.cookie_dough.reactions.chocolate = { elem1: "chocolate_chip_cookie", elem2: null, tempMin: 140, chance: 0.2 }; 
elements.cookie_dough.reactions.cinnamon = { elem1: "cookie_dough", elem2: null, color1: "#c29148", chance: 0.2 }; 
elements.batter.reactions.cocoa_powder = { elem1: "brownie_batter", elem2: null, chance: 0.5 };
elements.batter.reactions.milk = { elem1: "pancake_batter", elem2: null, chance: 0.3 };
elements.pancake_batter.reactions.butter = { elem1: "waffle_batter", elem2: null, chance: 0.2 }; 
elements.pancake.reactions.maple_syrup = { elem1: "pancake", elem2: null, color1: "#c49a52", chance: 0.5 }; 
elements.waffle.reactions.maple_syrup = { elem1: "waffle", elem2: null, color1: "#b37b3b", chance: 0.5 };
elements.bread.reactions.egg = { elem1: "eggy_bread", elem2: null, chance: 0.4 };
elements.eggy_bread.reactions.maple_syrup = { elem1: "french_toast", elem2: null, tempMin: 80, chance: 0.5 };
elements.dough.reactions.cinnamon = { elem1: "cinnamon_dough", elem2: null, chance: 0.4 };
elements.baked_cinnamon_roll.reactions.icing = { elem1: "cinnamon_roll", elem2: null, chance: 0.8 };
elements.icecream.reactions.chocolate = { elem1: "choco_icecream", elem2: null, chance: 0.5 };
elements.choco_icecream.reactions.strawberry = { elem1: "ice_cream_sundae", elem2: null, chance: 0.8 };
elements.egg.reactions.cheese = { elem1: "omelet", elem2: null, tempMin: 70, chance: 0.2 };

// --- Beverages & Mixers ---
// Make sure to add juice interactions!
elements.strawberry_juice.reactions.milk = { elem1: "milk", elem2: null, color1: "#ffb6c1", chance: 0.3 }; // Strawberry milk
elements.lemon.reactions.water = { elem1: "lemon_juice", elem2: "lemon_juice", chance: 0.05 }; 
elements.lemon_juice.reactions.sugar = { elem1: "lemonade", elem2: null, chance: 0.5 };
elements.lemonade.reactions.ice = { elem1: "lemonade", elem2: "lemonade", temp2: 0, chance: 0.1 }; 
elements.milk.reactions.chocolate = { elem1: "chocolate_milk", elem2: null, chance: 0.3 };
elements.milk.reactions.cocoa_powder = { elem1: "chocolate_milk", elem2: null, chance: 0.5 };
elements.chocolate_milk.reactions.fire = { elem1: "hot_chocolate", elem2: null, tempMin: 60, chance: 0.1 }; 
elements.coffee.reactions.milk = { elem1: "latte", elem2: null, chance: 0.4 };
elements.coffee.reactions.cream = { elem1: "latte", elem2: null, chance: 0.5 }; 
elements.coffee.reactions.ice = { elem1: "iced_coffee", elem2: "water", chance: 0.2 }; 
elements.milk.reactions.honey = { elem1: "milk", elem2: null, color1: "#faebd7", chance: 0.3 }; 

// --- Baking Soda Physics ---
elements.baking_soda.reactions.vinegar = { elem1: "foam", elem2: "carbon_dioxide", chance: 1.0 };
elements.baking_soda.reactions.lemon_juice = { elem1: "foam", elem2: "carbon_dioxide", chance: 1.0 };
elements.baking_soda.reactions.dough = { elem1: null, elem2: "dough", attr2: { "foam": 20 }, tempMin: 80, chance: 0.1 };

// --- Spices & Aromatics ---
elements.garlic.reactions.olive_oil = { elem1: null, elem2: "garlic_oil", tempMin: 60, chance: 0.1 };
elements.onion.reactions.olive_oil = { elem1: null, elem2: "garlic_oil", tempMin: 60, chance: 0.1 };
elements.mushroom.reactions.olive_oil = { elem1: null, elem2: "olive_oil", tempMin: 80, chance: 0.1 };

Object.assign(elements.chicken_raw.reactions, {
    "black_pepper": { elem1: "chicken_raw", elem2: null, color1: "#e3b6a1", chance: 0.2 },
    "chili_powder": { elem1: "chicken_raw", elem2: null, color1: "#e88e8e", chance: 0.2 }
});

elements.cookedmeat.reactions.black_pepper = { elem1: "cookedmeat", elem2: null, color1: "#5e3e2b", chance: 0.2 };
elements.cookedmeat.reactions.chili_powder = { elem1: "cookedmeat", elem2: null, color1: "#8a3131", chance: 0.2 };
