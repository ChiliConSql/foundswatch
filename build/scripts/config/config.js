let config = {};
exports.config = config;

// ==== GENERAL ==============================================================
// Note: Directories should not end with a slash /.
config.srcDir = "./src";
config.stagingDir = "./staging";
config.distDir = "./dist";

// ==== THEMES ===============================================================

// ------ SOURCE -------------------------------------------------------------
config.themeSrcScssDir = config.srcDir + "/themes/scss";
config.themeMainScssFilename = "foundation.scss";
config.themeMainCssFilename = "foundation.css";
config.themeMainMinCssFilename = "foundation.min.css";

// ------ BUILD STAGING ------------------------------------------------------
config.themeStagingDir = config.stagingDir + "/themes";

// ------ DISTRIBUTION -------------------------------------------------------
config.themeDistDir = config.distDir + "/themes";

// ==== SITE =================================================================

