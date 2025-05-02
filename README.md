# wuwa-db

A lightweight, unofficial database for [Wuthering Waves](https://wutheringwaves.kurogames.com/), inspired by [`genshin-db`](https://www.npmjs.com/package/genshin-db).
<p>This package provides structured character data for use in bots, apps, and tools.</p>

## 📦 Installation

If you're using this locally or in another project:

```bash
npm install /path/to/wuwa-db
# or if published to npm in the future:
# npm install wuwa-db
```

## 🛠️ Usage
```js
const wuwa = require("wuwa-db");

const aalto = wuwa.character("aalto");
console.log(aalto.name);         // "Aalto"
console.log(aalto.images.card);  // Full card image URL
```

## 📁 Features
+ 🧍 Character data (info, abilities, resonance chain, outfits, etc.)
+ 🖼️ Image URLs (such as character card, icon, model, etc.)
+ 🗃️ JSON-driven and easy to extend

## 📋 TODO List
 + Add support for weapons
 + Add support for echoes / bosses / materials (maybeeee)
 + Better error handling (e.g., invalid character name)
 + Add unit tests and CI setup

## 📄 License
This project is licensed under the [MIT License](LICENSE).
