const { getCharacter, getCharacterList } = require("./character");
const { getWeapon, getWeaponList } = require("./weapon");

/* Get character example when getting only one file */
/* 
(async() => {
  await getCharacter("Aalto");
})();
*/

module.exports = {
  character: getCharacter,
  characterList: getCharacterList,
  weapon: getWeapon,
  weaponList: getWeaponList
};