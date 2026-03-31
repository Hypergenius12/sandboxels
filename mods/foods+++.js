// ==========================================
// 50 NEW Foods Expansion Mod for Sandboxels
// Strictly uses pre-existing vanilla elements for reactions!
// ==========================================

const cat = "food";

/* === 1-15: FRUITS & SWEETS === */
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

/* === 31-40: MEATS, PROTEINS & CONDIMENTS === */
elements.bacon = { color: "#FA8072", behavior: behaviors.WALL, category: cat, state: "solid", density: 1050, tempHigh: 120, stateHigh: "crispy_bacon" };
elements.crispy_bacon = { color: "#8B4513", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.sausage = { color: "#8B5A2B", behavior: behaviors.WALL, category: cat, state: "solid", density: 1000 };
elements.hotdog = { color: "#CD5C5C", behavior: behaviors.WALL, category: cat, state: "solid", density: 950 };
elements.tofu = { color: "#F0FFF0", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 900 };
elements.sushi = { color: "#FFFAFA", behavior: behaviors.WALL, category: cat, state: "solid", density: 1100 };
elements.mustard = { color: "#FFDB58", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1050, viscosity: 20000 };
elements.hot_sauce = { color: "#FF2400", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1020, viscosity: 5000 };
elements.soy_sauce = { color: "#3B2F2F", behavior: behaviors.LIQUID, category: cat, state: "liquid", density: 1100 };
elements.tortilla = { color: "#FFE4B5", behavior: behaviors.WALL, category: cat, state: "solid", density: 600, reactions: { "cooked_meat": { elem1: "taco", elem2: null } } };

/* === 41-50: PREPARED MEALS & CARBS === */
elements.taco = { color: "#DAA520", behavior: behaviors.WALL, category: cat, state: "solid", density: 800 };
elements.pancake = { color: "#F5DEB3", behavior: behaviors.WALL, category: cat, state: "solid", density: 500 };
elements.waffle = { color: "#DEB887", behavior: behaviors.WALL, category: cat, state: "solid", density: 450 };
elements.pasta = { color: "#F0E68C", behavior: behaviors.POWDER, category: cat, state: "solid", density: 1300, reactions: { "water": { elem1: "spaghetti", elem2: null } } };
elements.spaghetti = { color: "#FFFACD", behavior: behaviors.STURDYPOWDER, category: cat, state: "solid", density: 1100 };
elements.pizza = { color: "#FF4500", behavior: behaviors.WALL, category: cat, state: "solid", density: 900 };
elements.burger = { color: "#A0522D", behavior: behaviors.WALL, category: cat, state: "solid", density: 850 };
elements.riceball = { color: "#FFFFFF", behavior: behaviors.WALL, category: cat, state: "solid", density: 1000 };
elements.pretzel = { color: "#8B4513", behavior: behaviors.WALL, category: cat, state: "solid", density: 700 };
elements.cereal = { color: "#DEB887", behavior: behaviors.POWDER, category: cat, state: "solid", density: 300 };

/* === CROSS-MOD/VANILLA REACTIONS === */
// Adding reactions to vanilla elements so they interact with our new foods!
if (!elements.bread.reactions) elements.bread.reactions = {};
// Bread + Sauce = Pizza Base
elements.bread.reactions.sauce = { "elem1":"pizza", "elem2":null };
// Bread + Cooked Meat = Burger
elements.bread.reactions.cooked_meat = { "elem1":"burger", "elem2":null };

if (!elements.rice.reactions) elements.rice.reactions = {};
// Rice + Water = Riceball
elements.rice.reactions.water = { "elem1":"riceball", "elem2":null };
// Rice + Fish = Sushi
elements.rice.reactions.fish = { "elem1":"sushi", "elem2":null };
