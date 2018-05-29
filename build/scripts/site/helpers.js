// NOT CALLED DIRECTLY
// Import with require();
let helpers = {}
exports.helpers = helpers;

let fs = require('fs');
var shell = require('shelljs');
let sass = require('node-sass');
let config = require('../config').config;

helpers.getThemeScssDirNames = () => {

    let nameArray = [];
    let themeSrcScssDir = config.themeSrcScssDir;
    let items = fs.readdirSync(themeSrcScssDir);
    for (let i = 0; i < items.length; i++) {
        nameArray.push(items[i]);
    }

    return nameArray;
}


/*
 *  When compressed is true, node-sass uses outputStyle of "compressed", otherwise it uses "nested".
 */
helpers.compileScss = (themeName, compressed = false) => {

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
        shell.mkdir('-p', currentThemeDistDir);
    }

    fs.writeFileSync(currentThemeDistFilePath, result.css);
}