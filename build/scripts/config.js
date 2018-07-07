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
    // Restrict building to specific themes (speeds up development)
    this.onlyCompileThemes = ['tokyo'];

    // ------ DISTRIBUTION -------------------------------------------------------
    this.themeDistDir = this.distDir + "/themes";

    // ==== SITE =================================================================

    // ------ SOURCE -------------------------------------------------------------
    this.siteHtmlTemplatesDir = this.srcDir + "/site/html/templates";
    this.siteHtmlThemeTemplatesDir = this.siteHtmlTemplatesDir + "/themes";
    this.siteHtmlIndexTemplate = this.siteHtmlTemplatesDir + "/index.mustache";
    this.siteHtmlFooterPartial = this.siteHtmlTemplatesDir + "/_footer.mustache";
    this.siteHtmlAnalyticsPartial = this.siteHtmlTemplatesDir + "/_analytics.mustache";
    this.siteHtmlHelpTemplate = this.siteHtmlTemplatesDir + "/help.mustache";
    this.siteHtmlThemeTemplate = this.siteHtmlTemplatesDir + "/theme.mustache";
    this.siteHtmlThumbnailTemplate = this.siteHtmlTemplatesDir + "/thumbnail.mustache";

    // ------ DISTRIBUTION -------------------------------------------------------
    this.siteDistDir = this.distDir + "/site";
    this.siteDistIndexFilename = "index.html";
    this.siteDistThumbnailFilename = "thumbnail.html";
    this.siteDistHomeIndexHtml = this.siteDistDir + "/" + this.siteDistIndexFilename;
    this.siteDistHelpDir = this.siteDistDir + "/help";
    this.siteDistHelpIndexHtml = this.siteDistHelpDir + "/" + this.siteDistIndexFilename;
}