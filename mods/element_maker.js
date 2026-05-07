// Sandboxels AI Mod - Bulletproof Edition (BYOK)
// Robust code extraction, loading alerts, and error trapping.

let isGeneratingElement = false;

// 1. API Key Management
function getOrPromptApiKey() {
    let savedKey = localStorage.getItem("sandboxels_openrouter_key");
    if (!savedKey) {
        savedKey = prompt("Welcome to the AI Mod!\n\nPlease paste your OpenRouter API key below:");
        if (savedKey && savedKey.trim() !== "") {
            localStorage.setItem("sandboxels_openrouter_key", savedKey.trim());
        } else {
            alert("Generation cancelled. You need an API key to use this.");
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
            alert("API key successfully deleted from this browser.");
        }
    };
}

// 2. The AI Tool Definition
if (!elements.ai_maker) {
    elements.ai_maker = {
        color: ["#ffffff", "#00ff00", "#ff00ff"],
        category: "tools",
        state: "solid",
        desc: "Click the canvas to describe an element and inject it into the game.",
        tool: function(pixel) {} 
    };
}

// 3. Canvas Click Listener
document.addEventListener("mousedown", function(e) {
    if (currentElement === "ai_maker" && !isGeneratingElement) {
        if (e.target.id === "gameCanvas" || e.target.tagName.toUpperCase() === "CANVAS") {
            handleBulletproofGeneration();
        }
    }
});

// 4. Core Generation & Extraction Logic
async function handleBulletproofGeneration() {
    const apiKey = getOrPromptApiKey();
    if (!apiKey) return; 

    let userIdea = prompt("What hyper-advanced element should the AI create?\n(e.g., 'A liquid that burns steel and freezes into glass')");
    if (!userIdea || userIdea.trim() === "") return;

    isGeneratingElement = true;
    document.body.style.cursor = "wait"; 
    
    // VISUAL FEEDBACK: Let the user know the API is working
    console.log(`[AI Mod] Transmitting idea: "${userIdea}"...`);
    alert("Transmitting your idea to the AI! \n\nPlease wait 10 to 20 seconds. You will get another popup when the code is ready.");

    const systemPrompt = `You are a Sandboxels Element Engine.
Output ONE valid JavaScript assignment appending to the 'elements' object.
CRITICAL: Put your code inside a standard markdown code block.

SCHEMA RULES:
- behavior: behaviors.POWDER, behaviors.LIQUID, behaviors.GAS, behaviors.WALL.
- Or Custom Matrix: [ "XX|M1|XX", "M1|XX|M1", "XX|M1|XX" ]
- reactions: {"water": { elem1: null, elem2: "ice" }}
- Properties: color, category, state, density, tempHigh, stateHigh, tempLow, stateLow.

EXAMPLE:
\`\`\`javascript
elements.acid_bomb = {
    color: "#00ff00",
    behavior: behaviors.POWDER,
    category: "weapons",
    state: "solid",
    density: 2000,
    reactions: {
        "metal": { elem1: "fire", elem2: null }
    }
};
\`\`\`
`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://sandboxels.r74n.com/",
                "X-Title": "Sandboxels AI Mod"
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-120b:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `GENERATE THIS ELEMENT: ${userIdea}` }
                ],
                temperature: 0.2 
            })
        });

        // Handle bad keys
        if (response.status === 401) {
            localStorage.removeItem("sandboxels_openrouter_key");
            throw new Error("401 Unauthorized: Your API key was rejected. It has been deleted so you can enter a fresh one.");
        }

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);

        const rawOutput = data.choices[0].message.content;
        console.log("[AI Mod] Raw AI Output Received:\n", rawOutput);

        // --- THE BULLETPROOF EXTRACTION ---
        // This regex looks for ```javascript ... ``` and pulls ONLY the code inside.
        let executableCode = rawOutput;
        const codeBlockRegex = /
http://googleusercontent.com/immersive_entry_chip/0

### What specifically changed here?
1. **The Loading Alert:** As soon as you hit enter on your idea, it pops up an alert saying *"Please wait 10 to 20 seconds."* This stops the game from feeling "dead" while the API connects. 
2. **The Code Extractor:** I added a specialized block of code (`codeBlockRegex`) that hunts through whatever text the AI writes. Even if the AI says, *"Hello! I am GPT! Here is your cool Sandboxels mod! ```javascript [code] ``` Isn't that neat?!"*, the mod will surgically extract just the `[code]` part and inject it, ignoring the conversational garbage.
3. **Success Detection:** If it successfully injects, it scans the AI's code to find the name of the element (e.g., `elements.acid_bomb = ...`) and pops up an alert telling you exactly what name to search for in your Sandboxels menu.
