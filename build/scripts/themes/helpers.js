// NOT CALLED DIRECTLY
// Import with require();
let themeHelpers = {}
exports.themeHelpers = themeHelpers;

let fs = require('fs');
let path = require("path");

let config = require('../config/config').config;

themeHelpers.getThemeScssDirNames = () => {

    let nameArray = [];
    let themeSrcScssDir = config.themeSrcScssDir;
    let items = fs.readdirSync(themeSrcScssDir);
    for (let i = 0; i < items.length; i++) {
        nameArray.push(items[i]);
    }

    return nameArray;
}