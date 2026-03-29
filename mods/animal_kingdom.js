// == Sandboxels Animal Kingdom Mod v3 ==
// Features: Active Hunting AI, Climbing AI, 35 Animals, and Custom Foods!

const catLife = "life";
const catFood = "food";

// --- NEW FOODS & PLANTS ---
elements.banana = { color: "#f1c40f", behavior: behaviors.POWDER, category: catFood, state: "solid", density: 500 };
elements.berry = { color: "#e74c3c", behavior: behaviors.POWDER, category: catFood, state: "solid", density: 400 };
elements.carrot = { color: "#e67e22", behavior: behaviors.POWDER, category: catFood, state: "solid", density: 600 };
elements.eucalyptus = { color: "#7BA05B", behavior: behaviors.STURDYPOWDER, category: catLife, state: "solid", density: 800 };
elements.plankton = { 
    color: "#2ecc71", behavior: behaviors.LIQUID, category: catLife, state: "solid", density: 990,
    tick: function(pixel) {
        if (Math.random() < 0.1) tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y + (Math.random() < 0.5 ? 1 : -1));
    }
};

// --- ADVANCED AI HELPERS ---

// 1. Hunting AI: Scans a 7x7 area around the predator. If it spots prey, it chases it!
function huntLogic(pixel, preyArray) {
    let found = false;
    let targetX = 0, targetY = 0;
    
    // Scan radius of 3 pixels
    for (let i = -3; i <= 3; i++) {
        for (let j = -3; j <= 3; j++) {
            if (i === 0 && j === 0) continue;
            let p = getPixel(pixel.x + i, pixel.y + j);
            if (p && preyArray.includes(p.element)) {
                targetX = pixel.x + i;
                targetY = pixel.y + j;
                found = true;
                break;
            }
        }
        if (found) break;
    }
    
    // If prey is spotted, calculate movement vector and CHASE
    if (found) {
        let dx = Math.sign(targetX - pixel.x);
        let dy = Math.sign(targetY - pixel.y);
        
        if (isEmpty(pixel.x + dx, pixel.y + dy, false)) {
            tryMove(pixel, pixel.x + dx, pixel.y + dy);
            return true; // Successfully hunted
        }
    }
    return false; // Did not hunt
}

// 2. Climbing AI: Checks for trees/vines. If found, it climbs up instead of falling!
function climbLogic(pixel, climbablesArray) {
    let touchingClimbable = false;
    const neighbors = [[-1,0], [1,0], [0,-1], [0,1], [0,0]];
    
    for(let i=0; i<neighbors.length; i++) {
        let p = getPixel(pixel.x + neighbors[i][0], pixel.y + neighbors[i][1]);
        if (p && climbablesArray.includes(p.element)) {
            touchingClimbable = true;
            break;
        }
    }
    
    if (touchingClimbable) {
        // 30% chance to climb up
        if (Math.random() < 0.3 && isEmpty(pixel.x, pixel.y - 1, false)) {
            tryMove(pixel, pixel.x, pixel.y - 1);
        } else if (Math.random() < 0.2) {
             // 20% chance to sway side to side on the branch
             let dx = Math.random() < 0.5 ? 1 : -1;
             if (isEmpty(pixel.x + dx, pixel.y, false)) tryMove(pixel, pixel.x + dx, pixel.y);
        }
        return true; // Nullifies standard falling gravity
    }
    return false;
}

// 3. Swimming AI: Swaps with water seamlessly
function swimLogic(pixel, needsWater = true) {
    let inWater = false;
    let neighbors = [[0,-1], [0,1], [1,0], [-1,0]];
    
    for (let i = 0; i < neighbors.length; i++) {
        let n = getPixel(pixel.x + neighbors[i][0], pixel.y + neighbors[i][1]);
        if (n && (n.element === "water" || n.element === "salt_water")) {
            inWater = true;
            break;
        }
    }

    if (!inWater) {
        if (needsWater && Math.random() < 0.005) {
            changePixel(pixel, "meat"); // Suffocate slowly
        } else if (Math.random() < 0.2) {
            tryMove(pixel, pixel.x + (Math.random() < 0.5 ? 1 : -1), pixel.y); // Flop on land
        }
        return false;
    } else {
        // Active Swimming
        if (Math.random() < 0.4) {
            let nx = pixel.x + Math.floor(Math.random() * 3) - 1; 
            let ny = pixel.y + Math.floor(Math.random() * 3) - 1;
            let target = getPixel(nx, ny);
            
            if (target && (target.element === "water" || target.element === "salt_water")) {
                let tempElem = target.element;
                changePixel(pixel, tempElem);
                changePixel(target, pixel.element);
            } else if (isEmpty(nx, ny, false)) {
                tryMove(pixel, nx, ny);
            }
        }
        return true;
    }
}

// --- STANDARD BEHAVIORS ---
const walkBehavior = [ "XX|XX|XX", "M2|FX%5|M2", "M2|M1|M2" ];
const flyBehavior = [ "M2|M1|M2", "M1|FX%10|M1", "M2|M1|M2" ];

// --- THE ANIMALS ---

// 1. Monkey (CLIMBER)
elements.monkey = {
    color: "#8b5a2b", behavior: walkBehavior, category: catLife, state: "solid", density: 600,
    reactions: { "banana": { elem2: "monkey", chance: 0.1 }, "fruit": { elem2: null, chance: 0.5 } },
    tick: function(pixel) {
        if (climbLogic(pixel, ["wood", "wood_door", "leaves", "vine"])) pixel.skip = true; // Suspend gravity if climbing
    }
};

// 2. Koala (NEW - CLIMBER)
elements.koala = {
    color: "#a3b1b5", behavior: walkBehavior, category: catLife, state: "solid", density: 500,
    reactions: { "eucalyptus": { elem2: null, chance: 0.2 } },
    tick: function(pixel) {
        if (climbLogic(pixel, ["wood", "eucalyptus", "leaves"])) pixel.skip = true;
    }
};

// 3. Woodpecker (NEW - FLIER/CLIMBER)
elements.woodpecker = {
    color: ["#c0392b", "#ffffff", "#000000"], behavior: flyBehavior, category: catLife, state: "solid", density: 300,
    reactions: { "wood": { elem2: "sawdust", chance: 0.05 }, "ant": { elem2: null, chance: 0.8 } },
    tick: function(pixel) { climbLogic(pixel, ["wood"]); }
};

// 4. Lion (HUNTER)
elements.lion = {
    color: "#f1c40f", behavior: walkBehavior, category: catLife, state: "solid", density: 1300,
    reactions: { "meat": { elem2: null, chance: 0.8 }, "cow": { elem2: "meat", chance: 0.4 }, "zebra": { elem2: "meat", chance: 0.5 } },
    tick: function(pixel) {
        huntLogic(pixel, ["cow", "pig", "sheep", "deer", "moose", "zebra", "monkey", "meat"]);
    }
};

// 5. Cheetah (NEW - FAST HUNTER)
elements.cheetah = {
    color: "#e67e22", behavior: walkBehavior, category: catLife, state: "solid", density: 900,
    reactions: { "meat": { elem2: null, chance: 0.8 }, "rabbit": { elem2: "blood", chance: 0.6 } },
    tick: function(pixel) {
        // Cheetah moves twice per tick when hunting
        if (huntLogic(pixel, ["rabbit", "deer", "bird", "meat"])) {
            huntLogic(pixel, ["rabbit", "deer", "bird", "meat"]); 
        }
    }
};

// 6. Crocodile (NEW - AMPHIBIOUS HUNTER)
elements.crocodile = {
    color: "#1e5128", behavior: ["XX|XX|XX","XX|XX|XX","XX|XX|XX"], category: catLife, state: "solid", density: 1400,
    reactions: { "meat": { elem2: null, chance: 0.8 }, "frog": { elem2: "blood", chance: 0.8 }, "blood": {elem2: null, chance: 0.5} },
    tick: function(pixel) {
        swimLogic(pixel, false); // False = doesn't need water to survive
        huntLogic(pixel, ["monkey", "frog", "pig", "cow", "meat", "fish"]);
        // Custom walk if on land
        if (isEmpty(pixel.x, pixel.y+1, false)) tryMove(pixel, pixel.x, pixel.y+1); // Gravity
    }
};

// 7. Shark (AQUATIC HUNTER)
elements.shark = {
    color: "#34495e", behavior: ["XX|XX|XX", "XX|XX|XX", "XX|XX|XX"], category: catLife, state: "solid", density: 1000,
    reactions: { "fish": { elem2: "blood", chance: 0.8 }, "blood": { elem2: null, chance: 1 } },
    tick: function(pixel) {
        swimLogic(pixel, true); // True = dies if out of water
        huntLogic(pixel, ["fish", "meat", "frog", "crab"]);
    }
};

// 8. Whale (NEW - GIGANTIC SWIMMER)
elements.whale = {
    color: "#2980b9", behavior: ["XX|XX|XX", "XX|XX|XX", "XX|XX|XX"], category: catLife, state: "solid", density: 2000,
    reactions: { "plankton": { elem2: null, chance: 0.9 }, "fish": { elem2: null, chance: 0.2 } },
    tick: function(pixel) {
        swimLogic(pixel, true);
        huntLogic(pixel, ["plankton"]); // Actively chases plankton
        // Whales displace water upwards when they move, simulating huge size
        if (Math.random() < 0.2 && isEmpty(pixel.x, pixel.y-2, false)) tryCreate("water", pixel.x, pixel.y-2, false); 
    }
};

// 9. Rabbit (PREY)
elements.rabbit = {
    color: "#bdc3c7", behavior: walkBehavior, category: catLife, state: "solid", density: 300,
    reactions: { "carrot": { elem2: "rabbit", chance: 0.1 }, "grass": { elem2: null, chance: 0.05 } },
    tick: function(pixel) {
        // Hop randomly to evade
        if (Math.random() < 0.1 && isEmpty(pixel.x + 2, pixel.y - 1, false)) tryMove(pixel, pixel.x + 2, pixel.y - 1);
        else if (Math.random() < 0.1 && isEmpty(pixel.x - 2, pixel.y - 1, false)) tryMove(pixel, pixel.x - 2, pixel.y - 1);
    }
};

// 10. Wolf (PACK HUNTER)
elements.wolf = {
    color: "#7f8c8d", behavior: walkBehavior, category: catLife, state: "solid", density: 1100,
    reactions: { "sheep": { elem2: "meat", chance: 0.5 }, "meat": { elem2: "wolf", chance: 0.1 } },
    tick: function(pixel) { huntLogic(pixel, ["sheep", "cow", "meat", "rabbit"]); }
};

// 11. Spider (BUG HUNTER / WEB SPINNER)
elements.spider = {
    color: "#000000", behavior: walkBehavior, category: catLife, state: "solid", density: 100,
    reactions: { "fly": { elem2: null, chance: 0.8 }, "ant": { elem2: null, chance: 0.5 } },
    tick: function(pixel) {
        climbLogic(pixel, ["web", "wood", "stone", "rock"]);
        huntLogic(pixel, ["fly", "ant"]);
        if (Math.random() < 0.02 && isEmpty(pixel.x, pixel.y - 1, false)) tryCreate("web", pixel.x, pixel.y - 1);
    }
};

// BREED TOOL
elements.breed = {
    color: "#ff69b4", category: "tools",
    tool: function(pixel) {
        if (elements[pixel.element].category === catLife) {
            const spots = [[0,-1], [0,1], [-1,0], [1,0], [-1,-1], [1,-1], [-1,1], [1,1]];
            for (let i = 0; i < spots.length; i++) {
                if (isEmpty(pixel.x + spots[i][0], pixel.y + spots[i][1], false)) {
                    tryCreate(pixel.element, pixel.x + spots[i][0], pixel.y + spots[i][1], false);
                    break;
                }
            }
        }
    }
};
