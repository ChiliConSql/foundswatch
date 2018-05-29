// Imports
let sass = require('node-sass');
let fs = require('fs');

// Local imports
let helpers = require('./helpers');
let config = require('../config');

// --- Begin script --- 

let themeScssDirNames = helpers.getThemeScssDirNames();

for (let index in themeScssDirNames) {
    helpers.compileThemeScss(themeScssDirNames[index], {compressed: false});
    helpers.compileThemeScss(themeScssDirNames[index], {compressed: true});
}