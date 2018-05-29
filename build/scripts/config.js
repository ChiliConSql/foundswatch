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

    // ------ DISTRIBUTION -------------------------------------------------------
}