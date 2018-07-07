// Imports
let fs = require('fs');
let mustache = require('mustache');

// Local imports
let helpers = require('./helpers');
let config = require('../config');
let util = require('../util');

// ==== Begin script ====

console.log("Building HTML...");

let footer = util.readFileContentsSync(config.siteHtmlFooterPartial);
let analytics = util.readFileContentsSync(config.siteHtmlAnalyticsPartial);
let partials = {footer: footer, analytics: analytics};

let themeTemplateViews = helpers.getThemeTemplateViews();

// ------- Home index -------
// Render the home index template

let themeNames = themeTemplateViews.map((view) => {
    return view.name;
})

let indexTemplate = util.readFileContentsSync(config.siteHtmlIndexTemplate);
let renderedIndex = mustache.render(indexTemplate, {themeViews : themeTemplateViews, root: "."}, partials);

// Save rendered index file to dist
util.writeFileContentsSync(config.siteDistHomeIndexHtml, renderedIndex);

// ------- Help -------
// Render the help template
let helpTemplate = util.readFileContentsSync(config.siteHtmlHelpTemplate);
let renderedHelpIndex = mustache.render(helpTemplate, {themeViews : themeTemplateViews, root: ".."}, partials);

// Save rendered help file to dist
util.writeFileContentsSync(config.siteDistHelpIndexHtml, renderedHelpIndex);

// ------- Themes -------
let themeTemplate = util.readFileContentsSync(config.siteHtmlThemeTemplate);
let thumbnailTemplate = util.readFileContentsSync(config.siteHtmlThumbnailTemplate);

for(let index in themeTemplateViews) {

    let themeView = themeTemplateViews[index];
    // Make all theme views accessible (so we can link to them)
    themeView.themeViews = themeTemplateViews;

    themeView.root = "..";

    let renderedThemeIndex = mustache.render(themeTemplate, themeView, partials);
    let renderedThumbnailPage = mustache.render(thumbnailTemplate, themeView, partials);

    // Construct the filepath for saving
    let renderedThemeDir = config.siteDistDir + "/" + themeView.dir;
    let renderedThemeIndexPath = renderedThemeDir + "/" + config.siteDistIndexFilename;
    let renderedThumbnailPath = renderedThemeDir + "/" + config.siteDistThumbnailFilename;

    // Save rendered theme files to dist
    util.writeFileContentsSync(renderedThemeIndexPath, renderedThemeIndex);
    util.writeFileContentsSync(renderedThumbnailPath, renderedThumbnailPage);
}
