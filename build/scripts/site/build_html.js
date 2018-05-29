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

// --- Home index ---

// Render the home index template
let indexTemplate = util.readFileContentsSync(config.siteHtmlIndexTemplate);
let renderedIndex = mustache.render(indexTemplate, {themes : templateDirNames});

// Save rendered index file to dist
util.writeFileContentsSync(config.siteDistHomeIndexHtml, renderedIndex);

// --- Help ---

// Render the help template
let helpTemplate = util.readFileContentsSync(config.siteHtmlHelpTemplate);
let renderedHelpIndex = mustache.render(helpTemplate, {});

// Save rendered help file to dist
util.writeFileContentsSync(config.siteDistHelpIndexHtml, renderedHelpIndex);

// --- Themes ---
let themeTemplate = util.readFileContentsSync(config.siteHtmlThemeTemplate);

for(let index in templateDirNames) {

    let themeDirName = templateDirNames[index];

    let renderedThemeIndex = mustache.render(themeTemplate, {name: themeDirName});

    // Construct the filepath for saving
    let renderedThemeDir = config.siteDistDir + "/" + themeDirName;
    let renderedThemeIndexPath = renderedThemeDir + "/" + config.siteDistIndexFilename;

    // Save rendered theme file to dist
    util.writeFileContentsSync(renderedThemeIndexPath, renderedThemeIndex);
}
