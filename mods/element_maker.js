// AI Element Maker - Arcee Trinity Edition
// Generates Sandboxels elements using arcee-ai/trinity-large-preview:free

let isGeneratingElement = false;

// 1. Tool Creation
if (!elements.ai_maker) {
    elements.ai_maker = {
        color: ["#ffffff", "#00ff00", "#ff00ff"],
        category: "tools",
        state: "solid",
        desc: "Click the canvas to prompt Trinity AI to code a new element.",
        tool: function(pixel) {} 
    };
}

// 2. Click Event Listener
document.addEventListener("mousedown", function(e) {
    // Only trigger if our tool is selected and we aren't already waiting on the AI
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleTrinityGeneration();
        }
    }
});

// 3. Generation Logic
async function handleTrinityGeneration() {
    // Your active OpenRouter Key
    const apiKey = "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";
    
    let userIdea = prompt("What element should Trinity create?\n(e.g., 'A liquid that creates electricity when it touches water')");
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
                "HTTP-Referer": "https://sandboxels.r74n.com/",
                "X-Title": "Sandboxels Trinity Mod"
            },
            body: JSON.stringify({
                model: "arcee-ai/trinity-large-preview:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Create this element: ${userIdea}` }
                ],
                temperature: 0.2 // Kept low for high code accuracy
            })
        });

        // Error Handling for Authorization or Model issues
        if (response.status === 401) {
            throw new Error("401 Unauthorized: The API key is rejected. Ensure it is active on OpenRouter.");
        }

        const data = await response.json();
        
        if (data.error) {
            console.error("[AI Mod] OpenRouter Error:", data.error);
            alert(`API Error: ${data.error.message}`);
            return;
        }

        let code = data.choices[0].message.content.trim();
        
        // Clean up any markdown blocks if the AI includes them
        code = code.replace(/```javascript/gi, "")
                   .replace(/```js/gi, "")
                   .replace(/```/gi, "")
                   .trim();

        console.log("[AI Mod] Trinity Generated Code:\n", code);

        // Inject and Execute
        if (code.includes("elements.")) {
            window.eval(code);
            alert("Success! Trinity has added the element to your game.");
        } else {
            console.error("[AI Mod] AI returned text instead of code:", code);
            alert("The AI failed to generate valid code. Try a different prompt.");
        }

    } catch (error) {
        console.error("[AI Mod] Connection Error:", error);
        alert(error.message);
    } finally {
        isGeneratingElement = false;
        document.body.style.cursor = "default";
    }
}
