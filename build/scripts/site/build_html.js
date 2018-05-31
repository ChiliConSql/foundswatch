// Imports
let fs = require('fs');
let mustache = require('mustache');

// Local imports
let helpers = require('./helpers');
let config = require('../config');
let util = require('../util');

// ==== Begin script ====

console.log("Building HTML...");

let themeTemplateViews = helpers.getThemeTemplateViews();

// ------- Home index -------
// Render the home index template

let themeNames = themeTemplateViews.map((view) => {
    return view.name;
})

let indexTemplate = util.readFileContentsSync(config.siteHtmlIndexTemplate);
let renderedIndex = mustache.render(indexTemplate, {themeViews : themeTemplateViews, root: "."});

// Save rendered index file to dist
util.writeFileContentsSync(config.siteDistHomeIndexHtml, renderedIndex);

// ------- Help -------
// Render the help template
let helpTemplate = util.readFileContentsSync(config.siteHtmlHelpTemplate);
let renderedHelpIndex = mustache.render(helpTemplate, {themeViews : themeTemplateViews, root: ".."});

// Save rendered help file to dist
util.writeFileContentsSync(config.siteDistHelpIndexHtml, renderedHelpIndex);

// ------- Themes -------
let themeTemplate = util.readFileContentsSync(config.siteHtmlThemeTemplate);

for(let index in themeTemplateViews) {

    let themeView = themeTemplateViews[index];
    // Make all theme views accessible (so we can link to them)
    themeView.themeViews = themeTemplateViews;

    themeView.root = "..";

    let renderedThemeIndex = mustache.render(themeTemplate, themeView);

    // Construct the filepath for saving
    let renderedThemeDir = config.siteDistDir + "/" + themeView.dir;
    let renderedThemeIndexPath = renderedThemeDir + "/" + config.siteDistIndexFilename;

    // Save rendered theme file to dist
    util.writeFileContentsSync(renderedThemeIndexPath, renderedThemeIndex);
}
