// Advanced AI Element Maker Mod
// Injects new elements with complex Sandboxels properties and reactions via OpenRouter.

let isGeneratingElement = false;

elements.ai_maker = {
    color: ["#ff0055", "#aa00ff", "#00eeff"],
    category: "tools",
    state: "solid",
    desc: "Click the canvas to prompt the AI for a complex element with reactions.",
    tool: function(pixel) {} 
};

document.addEventListener("mousedown", function(e) {
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleAdvancedAIGeneration();
        }
    }
});

async function handleAdvancedAIGeneration() {
    let userIdea = prompt("What element should the AI create?\n(e.g., 'A radioactive liquid that turns metal into rust and explodes at 500 degrees')");
    
    if (!userIdea || userIdea.trim() === "") return;

    isGeneratingElement = true;
    console.log(`[AI Mod] Requesting: ${userIdea}...`);
    document.body.style.cursor = "wait"; 

    const apiKey = "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";
    
    // The "Mega-Prompt" - This teaches the AI exactly how Sandboxels works
    const systemPrompt = `You are a strict, expert programmatic element generator for the JavaScript cellular automata game 'Sandboxels'.
The user will give you a concept. You must write a SINGLE valid JavaScript object assignment that appends to the global 'elements' object.

CRITICAL RULES:
1. Provide ONLY raw valid JavaScript code. NO markdown formatting, NO backticks, NO explanations.
2. The element name must be lowercase, use underscores for spaces, and MUST NOT be a common word that might overwrite a vanilla element (e.g., use 'acid_slime' instead of 'acid').
3. Use the global 'behaviors' object for movement: behaviors.POWDER, behaviors.LIQUID, behaviors.GAS, behaviors.WALL.
4. If the prompt implies interactions, use the 'reactions' object. Format: "other_element": { elem1: "new_this_pixel", elem2: "new_other_pixel", chance: 0.1 } (use null to delete).
5. If the prompt implies temperature changes, use 'tempHigh', 'stateHigh' (what it turns into), 'tempLow', and 'stateLow'.
6. Include relevant properties like 'density' (kg/m3), 'viscosity', 'conduct' (0 to 1), 'burn', 'burnTime'.

EXAMPLE OUTPUT FOR "Volatile Ice":
elements.volatile_ice = {
    color: ["#ccffff", "#aaddff"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 900,
    temp: -20,
    tempHigh: 10,
    stateHigh: "fire",
    reactions: {
        "water": { elem1: null, elem2: "ice", chance: 0.5 },
        "fire": { elem1: "explosion", elem2: null }
    }
};`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // Upgraded the model here for better coding capabilities, though 3.1 is still good
                model: "meta-llama/llama-3.1-8b-instruct:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Create a complex element based on this idea: ${userIdea}` }
                ],
                temperature: 0.4 // Lower temperature for more accurate JavaScript syntax
            })
        });

        const data = await response.json();
        
        if (!data.choices || !data.choices[0]) throw new Error("Invalid response from OpenRouter");

        let code = data.choices[0].message.content.trim();
        
        // Aggressive sanitization to ensure the eval() works even if the AI tries to chat
        code = code.replace(/^```javascript/i, "").replace(/^```js/i, "").replace(/^```/i, "").replace(/```$/i, "").trim();

        // Extract the element name to show the user
        let elementNameMatch = code.match(/elements\.([a-zA-Z0-9_]+)\s*=/);
        let elementName = elementNameMatch ? elementNameMatch[1] : "unknown_element";

        console.log(`[AI Mod] AI Generated Code for '${elementName}':\n`, code);

        try {
            // Execute the code to add it to the game
            window.eval(code);
            alert(`Success! Created: ${elementName}\nCheck the console (F12) to see its reactions and properties.`);
        } catch (evalError) {
            console.error("[AI Mod] The AI generated invalid JavaScript syntax:", evalError);
            console.error("Faulty code:", code);
            alert("The AI made a syntax error! Check the console (F12) to see what it messed up.");
        }

    } catch (error) {
        console.error("[AI Mod] API Error:", error);
        alert("Failed to reach the AI API. Check your connection or API key.");
    } finally {
        isGeneratingElement = false;
        document.body.style.cursor = "default";
    }
}
