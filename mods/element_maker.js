// 1. A helper function to safely get and store the user's API key
function getOrPromptApiKey() {
    // Check if the browser already saved a key from a previous session
    let savedKey = localStorage.getItem("sandboxels_openrouter_key");
    
    if (!savedKey) {
        // If no key is found, ask the user for one
        savedKey = prompt("Welcome to the AI Mod!\n\nTo use this, you need your own OpenRouter API key. Please paste it below:\n(It will be saved locally in your browser.)");
        
        if (savedKey && savedKey.trim() !== "") {
            // Save it to the browser's local storage
            localStorage.setItem("sandboxels_openrouter_key", savedKey.trim());
        } else {
            alert("You need an API key to use this tool!");
            return null; // Return null if they canceled
        }
    }
    return savedKey;
}

// 2. Add a tool to let the user RESET their key if they typed it wrong
elements.reset_ai_key = {
    color: "#ff0000",
    category: "tools",
    desc: "Click to reset and delete your saved OpenRouter API key.",
    tool: function(pixel) {
        localStorage.removeItem("sandboxels_openrouter_key");
        alert("Your AI API key has been deleted from this browser. Use the AI Maker tool to enter a new one.");
    }
};

// ... inside your handleTrinityGeneration() function ...
async function handleTrinityGeneration() {
    // Get the key securely from local storage instead of hardcoding it!
    const apiKey = getOrPromptApiKey();
    
    // If they didn't enter a key, stop the function
    if (!apiKey) {
        isGeneratingElement = false;
        return; 
    }

    let userIdea = prompt("What element should Trinity create?");
    if (!userIdea || userIdea.trim() === "") return;
    
    // ... the rest of your fetch logic goes here, using the apiKey variable ...
