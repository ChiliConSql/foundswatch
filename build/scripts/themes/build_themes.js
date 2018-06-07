// Imports
let sass = require('node-sass');
let fs = require('fs');

// Local imports
let helpers = require('./helpers');
let config = require('../config');
let util = require('../util');

// --- Begin script --- 

let themeScssDirNames = util.getDirNamesSync(config.themeSrcScssDir);

let onlyCompileThemes = config.onlyCompileThemes;

if(onlyCompileThemes.length > 0)
{
    console.log("Only compiling: " + onlyCompileThemes);
}

for (let index in themeScssDirNames) {

    let currDirName = themeScssDirNames[index];
    if(onlyCompileThemes.length <= 0 || onlyCompileThemes.includes(currDirName))
    {
        helpers.compileThemeScss(currDirName, {compressed: false});
        helpers.compileThemeScss(currDirName, {compressed: true});
    }
}