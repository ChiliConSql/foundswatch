// NOT CALLED DIRECTLY
// Import with require();
let themeHelpers = {}
exports.themeHelpers = themeHelpers;

let fs = require('fs');
let path = require("path");
let sass = require('node-sass');

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

/* 
    outputStyle possible values: nested, expanded, compact, compressed
*/
themeHelpers.compileScss = (themeName, compressed = false) => {

    let outputStyle = compressed ? "compressed" : "nested";
    let outputFileName = compressed ? config.themeMainMinCssFilename : config.themeMainCssFilename;

    let currentThemeDirName = themeName;
    let currentScssFilePath = config.themeSrcScssDir + "/" + currentThemeDirName + "/" + config.themeMainScssFilename;
    let currentThemeDistDir = config.themeDistDir + "/" + currentThemeDirName;
    let currentThemeDistFilePath = currentThemeDistDir + "/" + outputFileName;

    console.log(currentScssFilePath + " -> " + currentThemeDistFilePath);
    
    let sourceMap = compressed ? currentThemeDistFilePath : false;

    let result = sass.renderSync({
        file: currentScssFilePath,
        sourceMap: sourceMap,
        outputStyle: outputStyle
    });

    // Writing will fail if the dirs don't exist
    if (!fs.existsSync(currentThemeDistDir)) {
        fs.mkdirSync(currentThemeDistDir);
    }

    fs.writeFileSync(currentThemeDistFilePath, result.css);
}