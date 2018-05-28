let helpers = require('./helpers').themeHelpers;
let config = require('../config/config').config;
let sass = require('node-sass');
let fs = require('fs');

let themeScssDirNames = helpers.getThemeScssDirNames();

for (let index in themeScssDirNames) {
    helpers.compileScss(themeScssDirNames[index], false);
    helpers.compileScss(themeScssDirNames[index], true);
}