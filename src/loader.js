const fs = require("fs");
const path = require("path");
const { WUTHERING_WAVES_IMAGE_BASE_URL } = require("./constants");
const { capitalizeFirstLetter } = require("./utils");

/* Loads all character files */
function loadAllCharacterData() {
  const data = {};
  const dirPath = path.join(__dirname, "..", "data", "characters");

  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach((file) => {
      if (file.endsWith(".json") && file!=="character_name_overrides.json") {
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

function listAllCharacters() {
  const dirPath = path.join(__dirname, "..", "data", "characters");
  const overrideCharDir = path.join(dirPath, "character_name_overrides.json");
  const overrides = JSON.parse(fs.readFileSync(overrideCharDir, "utf8"));

  const characterFiles = fs.readdirSync(dirPath).filter(file => file.endsWith(".json") && file!=="character_name_overrides.json");
  return characterFiles.map(file => {
    const baseName = path.basename(file, ".json");
    return overrides[file] || capitalizeFirstLetter(baseName.replace(/_/g, " "));
  })
}

/* Loads all weapon files */
function loadAllWeaponData() {
  const data = {};
  const dirPath = path.join(__dirname, "..", "data", "weapons");

  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach((file) => {
      if(file.endsWith(".json") && file!=="weapon_name_overrides.json") {
        const weaponName = file.replace(".json", "").toLowerCase();
        const filePath = path.join(dirPath, file);
        const rawData = fs.readFileSync(filePath, "utf8");
        let weapon = JSON.parse(rawData);

        if(weapon.images) {
          Object.keys(weapon.images).forEach(key => {
            weapon.images[key] = WUTHERING_WAVES_IMAGE_BASE_URL + weapon.images[key];
          });
        }

        data[weaponName] = weapon;
      }
    });
    console.log(`✅ Loaded ${Object.keys(data).length} weapons into memory.`);
  } catch (error) {
    console.error("Error loading weapon data:", error);
  }
  return data;
}

function listAllWeapons() {
  const dirPath = path.join(__dirname, "..", "data", "weapons");
  const overrideWeaponDir = path.join(dirPath, "weapon_name_overrides.json");
  const overrides = JSON.parse(fs.readFileSync(overrideWeaponDir, "utf8"));

  const weaponFiles = fs.readdirSync(dirPath).filter(file => file.endsWith(".json") && file!=="weapon_name_overrides.json");
  return weaponFiles.map(file => {
    const baseName = path.basename(file, ".json");
    return overrides[file] || capitalizeFirstLetter(baseName.replace(/_/g, " "));
  })
}

const allCharacterData  = loadAllCharacterData();
const characterList = listAllCharacters();
const allWeaponData = loadAllWeaponData();
const weaponList = listAllWeapons();

module.exports = {
  allCharacterData,
  characterList,
  allWeaponData,
  weaponList
};