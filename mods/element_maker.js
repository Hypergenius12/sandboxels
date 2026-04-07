// AI Element Maker - GPT-OSS-120B (Updated Key)
// Tool to generate complex Sandboxels elements using reasoning AI.

let isGeneratingElement = false;

// 1. Tool Definition
if (!elements.ai_maker) {
    elements.ai_maker = {
        color: ["#ff0055", "#00ffcc", "#ffff00"],
        category: "tools",
        state: "solid",
        desc: "Click the canvas to describe an element and have AI code it into the game.",
        tool: function(pixel) {} 
    };
}

// 2. Click Listener
document.addEventListener("mousedown", function(e) {
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleAIGeneration();
        }
    }
});

// 3. Core Generation Function
async function handleAIGeneration() {
    // YOUR NEW KEY
    const apiKey = "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";
    
    let userIdea = prompt("Describe your new element:\n(e.g. 'A heavy gas that turns water into steam and wood into charcoal')");
    if (!userIdea || userIdea.trim() === "") return;

    isGeneratingElement = true;
    document.body.style.cursor = "wait"; 
    console.log(`[AI Mod] Contacting GPT-OSS-120B for: "${userIdea}"...`);

    const systemPrompt = `You are a Sandboxels expert developer.
Task: Create a new element based on user input. 
Output ONLY raw JavaScript code adding to the 'elements' object. 
NO markdown, NO backticks, NO "Here is your code".

Rules:
- Movement: behaviors.POWDER, behaviors.LIQUID, behaviors.GAS, behaviors.WALL.
- Reactions: "target": { elem1: "new_self", elem2: "new_target", chance: 0.1 } (null deletes).
- Heat: tempHigh/stateHigh, tempLow/stateLow.
- Density: Water is 1000. 

Example:
elements.custom_slime = {
    color: "#00ff00",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    reactions: { "dirt": { elem1: null, elem2: "mud" } }
};`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://sandboxels.r74n.com/",
                "X-Title": "Sandboxels AI Mod Creator"
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-120b:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Create this element: ${userIdea}` }
                ],
                temperature: 0.2
            })
        });

        if (response.status === 401) {
            throw new Error("401 Unauthorized: The API key is still being rejected. Check if the key has been fully activated or if there are spaces in the string.");
        }

        const data = await response.json();
        
        if (data.error) {
            console.error("[AI Mod] OpenRouter Error:", data.error);
            alert(`API Error: ${data.error.message}`);
            return;
        }

        let code = data.choices[0].message.content.trim();
        
        // Aggressive code cleaning
        code = code.replace(/```javascript/gi, "")
                   .replace(/```js/gi, "")
                   .replace(/```/gi, "")
                   .split("```")[0] // Take only what's inside the first block if it exists
                   .trim();

        console.log("[AI Mod] Generated Code:\n", code);

        if (code.includes("elements.")) {
            window.eval(code);
            alert("Success! Your element has been synthesized. Find it in its category or by searching.");
        } else {
            console.error("[AI Mod] Invalid output from AI:", code);
            alert("The AI didn't return valid code. Check the console (F12) to see its response.");
        }

    } catch (error) {
        console.error("[AI Mod] Error:", error);
        alert(error.message);
    } finally {
        isGeneratingElement = false;
        document.body.style.cursor = "default";
    }
}
