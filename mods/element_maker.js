// Sandboxels AI Mod - Master Engineer Edition (BYOK)
// Uses Arcee Trinity Large with an exhaustive technical schematic of the Sandboxels engine.

let isGeneratingElement = false;

function getOrPromptApiKey() {
    let savedKey = localStorage.getItem("sandboxels_openrouter_key");
    if (!savedKey) {
        savedKey = prompt("Welcome to the AI Mod!\n\nPlease paste your OpenRouter API key below:");
        if (savedKey && savedKey.trim() !== "") {
            localStorage.setItem("sandboxels_openrouter_key", savedKey.trim());
        } else {
            alert("Generation cancelled. API key required.");
            return null;
        }
    }
    return savedKey;
}

if (!elements.reset_ai_key) {
    elements.reset_ai_key = {
        color: "#ff0000",
        category: "tools",
        desc: "Click to DELETE your saved OpenRouter API Key.",
        tool: function(pixel) {
            localStorage.removeItem("sandboxels_openrouter_key");
            alert("API key deleted.");
        }
    };
}

if (!elements.ai_maker) {
    elements.ai_maker = {
        color: ["#ffffff", "#00ff00", "#ff00ff"],
        category: "tools",
        state: "solid",
        desc: "Click to prompt Trinity AI with the Master Sandboxels Schematic.",
        tool: function(pixel) {} 
    };
}

document.addEventListener("mousedown", function(e) {
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleMasterAIGeneration();
        }
    }
});

async function handleMasterAIGeneration() {
    const apiKey = getOrPromptApiKey();
    if (!apiKey) return; 

    let userIdea = prompt("What hyper-advanced element should the AI create?\n(e.g., 'A virus that eats sand, conducts electricity, and turns into an explosion at 50 degrees')");
    if (!userIdea || userIdea.trim() === "") return;

    isGeneratingElement = true;
    document.body.style.cursor = "wait"; 
    console.log(`[AI Mod] Transmitting Master Schematic to Trinity-Large...`);

    // THE MASTER SCHEMATIC PROMPT
    const systemPrompt = `You are the Master Sandboxels Element Engineer.
Your ONLY output must be valid, raw JavaScript code that appends ONE new element to the 'elements' object[cite: 64, 65].
NO MARKDOWN. NO BACKTICKS. NO EXPLANATIONS.

### 1. CORE PROPERTIES SCHEMA
- 'color': Hex string or Array of hex strings (e.g., ["#ff0000", "#aa0000"])[cite: 69].
- 'category': "solids", "liquids", "gases", "powders", "weapons", "life", or custom[cite: 70].
- 'state': "solid", "liquid", "gas"[cite: 71].
- 'density': Float (Water is 1000). Denser objects sink[cite: 71].
- 'hardness': Float (Resistance to shattering)[cite: 73].
- 'insulate': Boolean (true disables heat transfer)[cite: 73].

### 2. THERMODYNAMICS
- 'tempHigh': Celsius trigger for ascending phase[cite: 73].
- 'stateHigh': Element name it morphs into at tempHigh[cite: 73].
- 'tempLow' / 'stateLow': Descending/freezing phase transition[cite: 73].

### 3. KINEMATIC BEHAVIORS
Option A: Predefined -> behavior: behaviors.POWDER, behaviors.LIQUID, behaviors.GAS, behaviors.WALL[cite: 81].
Option B: Custom Matrix -> Array of 3 strings (Top, Middle, Bottom). Pixel is center.
Codes: M1 (primary move), M2 (secondary), SW (swap), CR (create), DL (delete), CH (change), HT (heat), CO (cool), XX (null).
Example Gravity Powder: [ "XX|XX|XX", "XX|XX|XX", "M2|M1|M2" ][cite: 82, 85, 88].

### 4. REACTION DICTIONARY STOICHIOMETRY
Nested object mapping foreign contact elements to results. 'elem1' is the host, 'elem2' is the foreign pixel. null = delete.
Format: "water": { elem1: "sugar_water", elem2: null }[cite: 145, 148].
Conditionals: 
- 'chance': Float 0.0 to 1.0 (execution probability)[cite: 152].
- 'tempMin', 'tempMax': Restricts reaction to temperature range[cite: 153, 154].
- 'charged': true (requires electricity)[cite: 156].
- 'burning1', 'burning2': true (requires fire state)[cite: 158].
Attribute mapping: 'temp1'/'temp2' applies heat spikes, 'color1'/'color2' tints products[cite: 163, 164].

### 5. ADVANCED TICK FUNCTIONS (OPTIONAL)
Use 'tick: function(pixel) {}' for complex logic[cite: 112].
Pixel properties: pixel.x, pixel.y, pixel.temp, pixel.element, pixel.charge, pixel.burning[cite: 114].
API Helpers:
- getPixel(x, y) [cite: 132]
- tryCreate(element, x, y) [cite: 133]
- tryDelete(x, y) [cite: 135]
- changePixel(element, x, y) [cite: 136]

EXAMPLE OUTPUT FORMAT:
elements.super_virus = {
    color: ["#00ff00", "#00aa00"],
    behavior: [ "XX|M1|XX", "M1|XX|M1", "XX|M1|XX" ],
    category: "life",
    state: "solid",
    density: 1200,
    tempHigh: 100,
    stateHigh: "fire",
    reactions: {
        "sand": { elem1: null, elem2: "super_virus", chance: 0.1 },
        "water": { elem1: "super_virus", elem2: "acid", temp1: 50 }
    },
    tick: function(pixel) {
        if (pixel.temp > 50 && Math.random() < 0.05) {
            tryCreate("explosion", pixel.x, pixel.y);
        }
    }
};`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://sandboxels.r74n.com/",
                "X-Title": "Sandboxels Master AI Mod"
            },
            body: JSON.stringify({
                model: "arcee-ai/trinity-large-preview:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `GENERATE: ${userIdea}` }
                ],
                temperature: 0.2 
            })
        });

        if (response.status === 401) {
            localStorage.removeItem("sandboxels_openrouter_key");
            throw new Error("401 Unauthorized: Your API key was rejected. It has been removed. Try a new one.");
        }

        const data = await response.json();
        
        if (data.error) {
            console.error("[AI Mod] Server Error:", data.error);
            alert(`API Error: ${data.error.message}`);
            return;
        }

        let code = data.choices[0].message.content.trim();
        
        // Strip markdown
        code = code.replace(/```javascript/gi, "").replace(/```js/gi, "").replace(/```/gi, "").trim();

        console.log("[AI Mod] Master Code Output:\n", code);

        if (code.includes("elements.")) {
            window.eval(code);
            alert("Master Element Synthesized successfully!");
        } else {
            console.error("[AI Mod] Invalid logic generated:", code);
            alert("The AI generated invalid syntax. Check the F12 console.");
        }

    } catch (error) {
        console.error("[AI Mod] Execution Error:", error);
        alert(error.message);
    } finally {
        isGeneratingElement = false;
        document.body.style.cursor = "default";
    }
}
