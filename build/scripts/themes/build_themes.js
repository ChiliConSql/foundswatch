// Imports
let sass = require('node-sass');
let fs = require('fs');

// Local imports
let helpers = require('./helpers');
let config = require('../config');
let util = require('../util');

// --- Begin script --- 

let themeScssDirNames = util.getDirNamesSync(config.themeSrcScssDir);

for (let index in themeScssDirNames) {
    helpers.compileThemeScss(themeScssDirNames[index], {compressed: false});
    helpers.compileThemeScss(themeScssDirNames[index], {compressed: true});
}