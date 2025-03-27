const characterData = require("./loader");

function getCharacter(name) {
  const key = name.toLowerCase();
  return characterData[key] || null;
}

module.exports = {
  getCharacter
};