const fs = require("fs/promises"); /* For async calls */

/* Loads only the requested character */
async function loadCharacterData(characterName) {
  const dirPath = path.join(__dirname, "..", "data", "characters", `${characterName}.json`);
  const rawData = await fs.readFile(dirPath, "utf8");
  return JSON.parse(rawData);;
}

const characterData = loadCharacterData();

module.exports = {
    characterData
};