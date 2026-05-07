// Sandboxels AI Mod - Bring Your Own Key (BYOK) Edition
// Uses the Arcee Trinity Large model via OpenRouter to generate elements dynamically.

let isGeneratingElement = false;

// ==========================================
// 1. API Key Management (BYOK System)
// ==========================================
function getOrPromptApiKey() {
    // Attempt to load the key from the browser's local storage
    let savedKey = localStorage.getItem("sandboxels_openrouter_key");
    
    if (!savedKey) {
        // If not found, prompt the user to provide their own key
        savedKey = prompt("Welcome to the AI Mod!\n\nTo use this tool, you must provide your own OpenRouter API key. Please paste it below:\n(It will be safely saved locally in your browser.)");
        
        if (savedKey && savedKey.trim() !== "") {
            localStorage.setItem("sandboxels_openrouter_key", savedKey.trim());
        } else {
            alert("Generation cancelled. You need an API key to use the AI tool.");
            return null;
        }
    }
    return savedKey;
}

// Tool to allow the user to delete/change their saved API key
if (!elements.reset_ai_key) {
    elements.reset_ai_key = {
        color: "#ff0000",
        category: "tools",
        state: "solid",
        desc: "Click the canvas to DELETE your saved OpenRouter API Key from this browser.",
        tool: function(pixel) {
            localStorage.removeItem("sandboxels_openrouter_key");
            alert("Your AI API key has been securely deleted. The next time you use the AI Maker, you will be asked to enter a new one.");
        }
    };
}


// ==========================================
// 2. The AI Maker Tool Definition
// ==========================================
if (!elements.ai_maker) {
    elements.ai_maker = {
        color: ["#ffffff", "#00ff00", "#ff00ff"],
        category: "tools",
        state: "solid",
        desc: "Click the canvas to prompt Trinity AI to code a new element.",
        tool: function(pixel) {} 
    };
}

// Intercept mouse clicks on the canvas
document.addEventListener("mousedown", function(e) {
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        // Ensure they are clicking the actual game canvas and not the UI
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleTrinityGeneration();
        }
    }
});


// ==========================================
// 3. Core Generation Logic
// ==========================================
async function handleTrinityGeneration() {
    // Safely get the API key using our BYOK function
    const apiKey = getOrPromptApiKey();
    if (!apiKey) return; // Stop if the user cancelled the prompt

    let userIdea = prompt("What element should Trinity AI create?\n(e.g., 'A liquid that creates electricity when it touches water')");
    if (!userIdea || userIdea.trim() === "") return;

    isGeneratingElement = true;
    document.body.style.cursor = "wait"; 
    console.log(`[AI Mod] Requesting Trinity-Large to create: ${userIdea}`);

    const systemPrompt = `You are a professional Sandboxels mod developer. 
Your task is to output ONLY raw JavaScript code to add a new element to the global 'elements' object. 

RULES:
1. No markdown, no backticks, no text explanations.
2. Use 'behaviors.POWDER', 'behaviors.LIQUID', 'behaviors.GAS', or 'behaviors.WALL'.
3. Include 'reactions' if the idea suggests interactions (e.g., "water": { elem1: null, elem2: "ice" }).
4. Use 'tempHigh/stateHigh' for melting or 'tempLow/stateLow' for freezing.
5. Use 'density' (Water is 1000).

TEMPLATE:
elements.element_name = {
    color: "#hex",
    behavior: behaviors.TYPE,
    category: "category_name",
    state: "liquid/solid/gas",
    density: 1000,
    reactions: {}
};`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://sandboxels.r74n.com/", // Required by free OpenRouter models
                "X-Title": "Sandboxels AI Mod"
            },
            body: JSON.stringify({
                model: "arcee-ai/trinity-large-preview:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Create this element: ${userIdea}` }
                ],
                temperature: 0.2 // Strict temperature for valid coding syntax
            })
        });

        // Handle invalid API keys specifically
        if (response.status === 401) {
            localStorage.removeItem("sandboxels_openrouter_key"); // Automatically delete the bad key
            throw new Error("401 Unauthorized: Your API key was rejected. It has been removed from your browser. Please generate a new one and try again.");
        }

        const data = await response.json();
        
        // Handle other API errors (like rate limits)
        if (data.error) {
            console.error("[AI Mod] OpenRouter Error:", data.error);
            alert(`API Error: ${data.error.message}`);
            return;
        }

        let code = data.choices[0].message.content.trim();
        
        // Aggressively clean up markdown if the AI includes it
        code = code.replace(/```javascript/gi, "")
                   .replace(/```js/gi, "")
                   .replace(/```/gi, "")
                   .trim();

        console.log("[AI Mod] Trinity Generated Code:\n", code);

        // Security / Sanity check before executing
        if (code.includes("elements.")) {
            window.eval(code);
            alert("Success! The AI has added the element to your game. Check the categories or search bar.");
        } else {
            console.error("[AI Mod] AI returned text instead of code:", code);
            alert("The AI failed to generate valid JavaScript code. Please try rephrasing your prompt.");
        }

    } catch (error) {
        console.error("[AI Mod] Connection Error:", error);
        alert(error.message);
    } finally {
        isGeneratingElement = false;
        document.body.style.cursor = "default";
    }
}
