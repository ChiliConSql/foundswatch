let helpers = require('./helpers').themeHelpers;
let config = require('../config/config').config;
let sass = require('node-sass');
let fs = require('fs');

let themeScssDirNames = helpers.getThemeScssDirNames();

for (let index in themeScssDirNames) {
    let currentThemeDirName = themeScssDirNames[index];
    let currentScssFilePath = config.themeSrcScssDir + "/" + currentThemeDirName + "/" + config.themeMainScssFilename;
    let currentThemeDistDir = config.themeDistDir + "/" + currentThemeDirName;
    let currentThemeDistFilePath = currentThemeDistDir + "/" + config.themeMainCssFilename;

    console.log(currentScssFilePath + " -> " + currentThemeDistFilePath);

    let result = sass.renderSync({
        file: currentScssFilePath
    });

    if (!fs.existsSync(currentThemeDistDir)){
        fs.mkdirSync(currentThemeDistDir);
    }

    fs.writeFileSync(currentThemeDistFilePath, result.css);
}

