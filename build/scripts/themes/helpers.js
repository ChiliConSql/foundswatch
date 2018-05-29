// Imports
let fs = require('fs');
let path = require('path');
let shell = require('shelljs');
let sass = require('node-sass');

// Local imports
let config = require('../config');
let util = require('../util');

module.exports = {
    /*
     *  When compressed is true, node-sass uses outputStyle of "compressed", otherwise it uses "nested".
     */
    compileThemeScss: (themeName, options = {compressed: false}) => {

        let outputStyle = options.compressed ? "compressed" : "nested";
        let outputFileName = options.compressed ? config.themeMainMinCssFilename : config.themeMainCssFilename;

        let currentThemeDirName = themeName;
        let currentScssFilePath = config.themeSrcScssDir + "/" + currentThemeDirName + "/" + config.themeMainScssFilename;
        let currentThemeDistDir = config.themeDistDir + "/" + currentThemeDirName;
        let currentThemeDistFilePath = currentThemeDistDir + "/" + outputFileName;

        console.log(currentScssFilePath + " -> " + currentThemeDistFilePath);

        let sourceMap = options.compressed ? currentThemeDistFilePath : false;

        let result = sass.renderSync({
            file: currentScssFilePath,
            sourceMap: sourceMap,
            outputStyle: outputStyle
        });

        util.writeFileContentsSync(currentThemeDistFilePath, result.css);
    }
};