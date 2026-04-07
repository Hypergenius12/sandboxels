// AI Element Maker - Professional Template Edition
// Uses GPT-OSS-120B with a deep technical schematic for Sandboxels.

let isGeneratingElement = false;

elements.ai_maker = {
    color: ["#00ff00", "#ffffff", "#0000ff"],
    category: "tools",
    state: "solid",
    desc: "Click the canvas to prompt a Reasoning AI with a full technical template.",
    tool: function(pixel) {} 
};

document.addEventListener("mousedown", function(e) {
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleAIGeneration();
        }
    }
});

async function handleAIGeneration() {
    let userIdea = prompt("Describe your element in detail:\n(Example: 'A heavy purple liquid that sinks in water, freezes into a bouncy solid at -10C, and turns wood into gold on contact')");
    
    if (!userIdea || userIdea.trim() === "") return;

    isGeneratingElement = true;
    console.log(`[AI Mod] Sending Template + Idea to GPT-OSS-120B...`);
    document.body.style.cursor = "wait"; 

    const apiKey = "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";
    
    // THE LARGE CODE TEMPLATE & INSTRUCTIONS
    const systemPrompt = `You are the Sandboxels Element Engine. Your goal is to output raw JavaScript that appends a complex element to the 'elements' object.

### TECHNICAL SPECIFICATION:
1. MOVE LOGIC: Use 'behaviors.POWDER' (gravity), 'behaviors.LIQUID' (flow), 'behaviors.GAS' (float/expand), or 'behaviors.WALL' (static).
2. REACTIONS: 
   - Format: "target_element": { elem1: "new_self", elem2: "new_target", chance: 0.05 }
   - Setting an elem to null deletes it.
3. HEAT PHYSICS:
   - 'tempHigh' (Celsius) triggers 'stateHigh' (Element Name).
   - 'tempLow' (Celsius) triggers 'stateLow' (Element Name).
4. PROPERTIES:
   - 'density': Higher numbers sink (Water is 1000).
   - 'viscosity': For liquids, higher means slower flow.
   - 'conduct': 0 to 1 (Electricity).
   - 'burn', 'burnTime', 'burnInto'.

### CODE TEMPLATE (MODIFIES THIS):
elements.unique_name = {
    color: "#hex",
    behavior: behaviors.TYPE,
    category: "category_name",
    state: "solid/liquid/gas",
    density: 1000,
    reactions: {
        "water": { elem1: null, elem2: "ice", chance: 0.1 }
    },
    tempHigh: 100,
    stateHigh: "gas_version",
    tempLow: 0,
    stateLow: "solid_version"
};

CRITICAL: Output ONLY the code. No markdown. No backticks. No talk.`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://sandboxels.r74n.com/",
                "X-Title": "Sandboxels AI Mod Template"
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-120b:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `GENERATE ELEMENT CODE FOR: ${userIdea}` }
                ],
                temperature: 0.2 // Very low temperature ensures it follows the template strictly
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error("[AI Mod] API Error:", data.error);
            alert(`Error: ${data.error.message}`);
            return;
        }

        let code = data.choices[0].message.content.trim();
        
        // Clean any code blocks the AI might have used despite instructions
        code = code.replace(/```javascript/gi, "").replace(/```js/gi, "").replace(/```/gi, "").trim();

        console.log("[AI Mod] Generated Code:\n", code);

        try {
            window.eval(code);
            alert("New element synthesized and added to the menu!");
        } catch (evalError) {
            console.error("[AI Mod] Eval Error:", evalError);
            alert("The AI generated code with a syntax error. See console for details.");
        }

    } catch (error) {
        console.error("[AI Mod] Network Error:", error);
    } finally {
        isGeneratingElement = false;
        document.body.style.cursor = "default";
    }
}
