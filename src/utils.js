function capitalizeFirstLetter(word) {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

module.exports = {
    capitalizeFirstLetter
};