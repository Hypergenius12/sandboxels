// logic_expansion.js
// Adds Logic Gates, Switches, Displays, and a Truth Computer Builder Tool

/* == INTERACTIVE COMPONENTS == */

// Interactive Switch: Click to toggle power.
elements.logic_switch = {
    color: "#880000",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    onClicked: function(pixel) { // Triggers when the user manually clicks the coordinate [cite: 138]
        if (pixel.color === "#880000") { // OFF -> ON
            pixel.color = "#00FF00";
            pixel.charge = 1;
        } else { // ON -> OFF
            pixel.color = "#880000";
            delete pixel.charge;
        }
    },
    tick: function(pixel) {
        if (pixel.color === "#00FF00") {
            pixel.charge = 1; // Maintain charge saturation 
            // Push charge to adjacent vanilla wires
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let n = getPixel(pixel.x + i, pixel.y + j); // Safely retrieve neighboring pixels [cite: 133]
                    if (n && n.element === "wire") {
                        n.charge = 1;
                    }
                }
            }
        }
    }
};

// Logic Display: Glows cyan when powered by an adjacent charged element.
elements.logic_display = {
    color: "#222222",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let powered = false;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                let n = getPixel(pixel.x + i, pixel.y + j);
                if (n && n.charge && n.element !== "logic_display") {
                    powered = true;
                    break;
                }
            }
            if (powered) break;
        }
        
        if (powered) {
            pixel.color = "#00FFFF"; // Bright Cyan when receiving charge
        } else {
            pixel.color = "#222222"; // Dark Gray when inactive
        }
    }
};

/* == DIRECTIONAL LOGIC GATES == */
// To prevent cellular automata feedback loops, these gates read from the Left/Right and output to the Top.

// AND Gate: Requires BOTH Left and Right to be powered.
elements.and_gate = {
    color: "#004400",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let left = getPixel(pixel.x - 1, pixel.y);
        let right = getPixel(pixel.x + 1, pixel.y);
        let top = getPixel(pixel.x, pixel.y - 1);
        
        let l_on = left && left.charge;
        let r_on = right && right.charge;
        
        if (l_on && r_on) {
            pixel.color = "#00FF00";
            if (top && top.element === "wire") top.charge = 1;
        } else {
            pixel.color = "#004400";
        }
    }
};

// OR Gate: Requires EITHER Left or Right to be powered.
elements.or_gate = {
    color: "#666600",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let left = getPixel(pixel.x - 1, pixel.y);
        let right = getPixel(pixel.x + 1, pixel.y);
        let top = getPixel(pixel.x, pixel.y - 1);
        
        let l_on = left && left.charge;
        let r_on = right && right.charge;
        
        if (l_on || r_on) {
            pixel.color = "#FFFF00";
            if (top && top.element === "wire") top.charge = 1;
        } else {
            pixel.color = "#666600";
        }
    }
};

// XOR Gate: Requires EXACTLY ONE input (Left or Right) to be powered.
elements.xor_gate = {
    color: "#006666",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let left = getPixel(pixel.x - 1, pixel.y);
        let right = getPixel(pixel.x + 1, pixel.y);
        let top = getPixel(pixel.x, pixel.y - 1);
        
        let l_on = left && left.charge;
        let r_on = right && right.charge;
        
        if ((l_on && !r_on) || (!l_on && r_on)) {
            pixel.color = "#00FFFF";
            if (top && top.element === "wire") top.charge = 1;
        } else {
            pixel.color = "#006666";
        }
    }
};

// NOT Gate (Inverter): Reads from Bottom, Outputs to Top. Active when input is OFF.
elements.not_gate = {
    color: "#660066",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let bottom = getPixel(pixel.x, pixel.y + 1);
        let top = getPixel(pixel.x, pixel.y - 1);
        
        let b_on = bottom && bottom.charge;
        
        if (!b_on) {
            pixel.color = "#FF00FF";
            if (top && top.element === "wire") top.charge = 1;
        } else {
            pixel.color = "#660066";
        }
    }
};

// Diode: Prevents backflow. Reads from Left, Outputs to Right.
elements.diode = {
    color: "#333333",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let left = getPixel(pixel.x - 1, pixel.y);
        let right = getPixel(pixel.x + 1, pixel.y);
        
        if (left && left.charge) {
            pixel.color = "#EEEEEE";
            if (right && right.element === "wire") right.charge = 1;
        } else {
            pixel.color = "#333333";
        }
    }
};

/* == THE TRUTH COMPUTER BUILDER == */

// Truth Core: The central processor for the spawned computer. Evaluates logic dynamically.
elements.truth_core = {
    color: "#0000FF",
    category: "machines",
    state: "solid",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        let left = getPixel(pixel.x - 1, pixel.y);
        let right = getPixel(pixel.x + 1, pixel.y);
        let top = getPixel(pixel.x, pixel.y - 1);
        
        let l_on = left && left.charge;
        let r_on = right && right.charge;
        
        if (l_on && r_on) {
            pixel.color = "#00FF00"; // Green: Both inputs active
            if (top) top.charge = 1;
        } else if (l_on || r_on) {
            pixel.color = "#FFFF00"; // Yellow: One input active
            if (top) top.charge = 1;
        } else {
            pixel.color = "#FF0000"; // Red: No inputs
        }
    }
};

// Spawn Computer Tool: Instantly constructs a functional machine on click[cite: 199, 200].
elements.spawn_computer = {
    color: "#AAAAAA",
    category: "machines",
    tool: function(pixel) { // Replaces standard block placement with a procedural algorithm [cite: 199]
        let cx = pixel.x;
        let cy = pixel.y;
        
        // 1. Construct the Monitor Screen
        for (let i = -3; i <= 3; i++) {
            for (let j = -3; j <= 3; j++) {
                if (Math.abs(i) === 3 || Math.abs(j) === 3) {
                    tryCreate("metal", cx + i, cy + j, true); // The 'true' flag forcefully overwrites existing pixels [cite: 134]
                } else {
                    tryCreate("logic_display", cx + i, cy + j, true);
                }
            }
        }
        
        // 2. Computer Stand & Output Wiring
        tryCreate("metal", cx, cy + 4, true);
        tryCreate("wire", cx, cy + 5, true);
        tryCreate("wire", cx, cy + 6, true);
        
        // 3. Central Processing Unit (Truth Core)
        tryCreate("truth_core", cx, cy + 7, true);
        
        // 4. Wiring and Input Switches
        tryCreate("wire", cx - 1, cy + 7, true);
        tryCreate("wire", cx - 2, cy + 8, true);
        tryCreate("logic_switch", cx - 2, cy + 9, true); // Left Toggle Switch
        
        tryCreate("wire", cx + 1, cy + 7, true);
        tryCreate("wire", cx + 2, cy + 8, true);
        tryCreate("logic_switch", cx + 2, cy + 9, true); // Right Toggle Switch
    }
};
