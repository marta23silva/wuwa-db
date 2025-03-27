const fs = require("fs");
const path = require("path");

function loadCharacterData() {
  const data = {};
  const dirPath = path.join(__dirname, "..", "data", "characters");

  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach((file) => {
      if (file.endsWith(".json")) {
        const charName = file.replace(".json", "").toLowerCase();
        const filePath = path.join(dirPath, file);
        const rawData = fs.readFileSync(filePath, "utf8");
        data[charName] = JSON.parse(rawData);
      }
    });
    console.log(`✅ Loaded ${Object.keys(data).length} characters into memory.`);
  } catch (error) {
    console.error("Error loading character data:", error);
  }

  return data;
}

// Load data once at startup
const characterData = loadCharacterData();

module.exports = characterData;
