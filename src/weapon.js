const { allWeaponData, weaponList } = require("./loader");

/* Returns the selected weapon from all the loaded weapons */
function getWeapon(name) {
    const key = name.toLowerCase();
    return allWeaponData[key] || null;
}

function getWeaponList() {
    return weaponList;
}

module.exports = {
    getWeapon,
    getWeaponList
};