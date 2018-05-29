// Export
module.exports = new function () {

    // ==== GENERAL ==============================================================
    // Note: Directories should not end with a slash /.
    this.srcDir = "./src";
    this.distDir = "./dist";

    // ==== THEMES ===============================================================

    // ------ SOURCE -------------------------------------------------------------
    this.themeSrcScssDir = this.srcDir + "/themes/scss";
    this.themeMainScssFilename = "foundation.scss";
    this.themeMainCssFilename = "foundation.css";
    this.themeMainMinCssFilename = "foundation.min.css";

    // ------ DISTRIBUTION -------------------------------------------------------
    this.themeDistDir = this.distDir + "/themes";

    // ==== SITE =================================================================

    // ------ SOURCE -------------------------------------------------------------
    this.siteHtmlTemplatesDir = this.srcDir + "/site/html/templates";
    this.siteHtmlThemeTemplatesDir = this.siteHtmlTemplatesDir + "/themes";
    this.siteHtmlIndexTemplate = this.siteHtmlTemplatesDir + "/index.mustache";
    this.siteHtmlHelpTemplate = this.siteHtmlTemplatesDir + "/help.mustache";
    this.siteHtmlThemeTemplate = this.siteHtmlTemplatesDir + "/theme.mustache";

    // ------ DISTRIBUTION -------------------------------------------------------
    this.siteDistDir = this.distDir + "/site";
    this.siteDistIndexFilename = "index.html";
    this.siteDistHomeIndexHtml = this.siteDistDir + "/" + this.siteDistIndexFilename;
    this.siteDistHelpDir = this.distDir + "/help";
    this.siteDistHelpIndexHtml = this.siteDistHelpDir + "/" + this.siteDistIndexFilename;
}