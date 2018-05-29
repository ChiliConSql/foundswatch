// Imports
let fs = require('fs');
let mustache = require('mustache');

// Local imports
let helpers = require('./helpers');
let config = require('../config');

// --- Begin script --- 

console.log("Building HTML...");

let output = mustache.render("Test {{hi}}", {hi : "123"});

console.log(output);

console.log(helpers.getThemeTemplateDirNames());
