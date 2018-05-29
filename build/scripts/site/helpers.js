// Imports
let fs = require('fs');
var shell = require('shelljs');
let sass = require('node-sass');

// Local imports
let util = require('../util');
let config = require('../config');

// Export
module.exports = {

    getThemeTemplateDirNames: () => {
        let siteHtmlThemeTemplatesDir = config.siteHtmlThemeTemplatesDir;
        return util.getDirNamesSync(siteHtmlThemeTemplatesDir);
    }

};