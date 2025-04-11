const { allCharacterData, /* characterData */ } = require("./loader");

/* Returns the selected character from all the loaded characters */
function getCharacter(name) {
  const key = name.toLowerCase();
  return allCharacterData[key] || null;
}

/* Load each file based on input */
/*
async function getCharacter(name) {
  return await loadCharacterData(name);
}
*/

module.exports = {
  getCharacter
};