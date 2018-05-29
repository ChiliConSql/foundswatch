// Imports
let fs = require('fs');
var shell = require('shelljs');
let sass = require('node-sass');

// Local imports
let util = require('../util');
let config = require('../config');

// Export
module.exports = {

    // getThemeTemplateDirNames: () => {
    //     let siteHtmlThemeTemplatesDir = config.siteHtmlThemeTemplatesDir;
    //     return util.getDirNamesSync(siteHtmlThemeTemplatesDir);
    // },

    getThemeTemplateViews: () => {
        let views = [];
        let siteHtmlThemeTemplatesDir = config.siteHtmlThemeTemplatesDir;
        let fileNames = fs.readdirSync(siteHtmlThemeTemplatesDir);
        for(let index in fileNames) {
            let currFileName = fileNames[index];
            if(/^.*[.]json$/.test(currFileName)) {
                let currFilePath = siteHtmlThemeTemplatesDir + "/" + currFileName;
                let currFileContents = util.readFileContentsSync(currFilePath);
                let currJsonObject = JSON.parse(currFileContents);
                views.push(currJsonObject);
            }
        }
        return views;
    }
};