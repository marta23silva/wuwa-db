const { getCharacter, getCharacterList } = require("./character");

/* Get character example when getting only one file */
/* 
(async() => {
  await getCharacter("Aalto");
})();
*/

module.exports = {
  character: getCharacter,
  characterList: getCharacterList
};