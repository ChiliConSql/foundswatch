// Imports
let fs = require('fs');
let mustache = require('mustache');

// Local imports
let helpers = require('./helpers');
let config = require('../config');
let util = require('../util');

// --- Begin script --- 

console.log("Building HTML...");

let templateDirNames = helpers.getThemeTemplateDirNames();
let indexTemplate = util.readFileContentsSync(config.siteHtmlIndexTemplate);
let renderedIndex = mustache.render(indexTemplate, {themes : templateDirNames});

// Save rendered index file to dist
util.writeFileContentsSync(config.siteDistHomeIndexHtml, renderedIndex);
