const fs = require("fs");
//const fs = require("fs/promises"); /* For async calls */
const path = require("path");
const { WUTHERING_WAVES_IMAGE_BASE_URL } = require("./constants");

/* Loads all character files */
function loadAllCharacterData() {
  const data = {};
  const dirPath = path.join(__dirname, "..", "data", "characters");

  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach((file) => {
      if (file.endsWith(".json")) {
        const charName = file.replace(".json", "").toLowerCase();
        const filePath = path.join(dirPath, file);
        const rawData = fs.readFileSync(filePath, "utf8");
        let character = JSON.parse(rawData);

        if(character.images) {
          Object.keys(character.images).forEach(key => {
            character.images[key] = WUTHERING_WAVES_IMAGE_BASE_URL + character.images[key];
          });
        }

        data[charName] = character;
      }
    });
    console.log(`✅ Loaded ${Object.keys(data).length} characters into memory.`);
  } catch (error) {
    console.error("Error loading character data:", error);
  }
  return data;
}

/* Loads only the requested character */
/*
async function loadCharacterData(characterName) {
  const dirPath = path.join(__dirname, "..", "data", "characters", `${characterName}.json`);
  const rawData = await fs.readFile(dirPath, "utf8");
  return JSON.parse(rawData);;
}
  */

const allCharacterData  = loadAllCharacterData();
/* const characterData     = loadCharacterData(); */

module.exports = {
  allCharacterData,
  /* characterData */
};