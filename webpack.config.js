const path = require('path')
const fs = require('fs');
const shell = require('shelljs');

const ENTRY_FILE_PATH = './src/site/js/index.js';
const OUTPUT_FILENAME = 'bundle.js';
const OUTPUT_DIR = './dist/site/js';

// Path resolution will fail if the dist dir doesn't exist.
// Create the full dir path before writing.
if (!fs.existsSync(OUTPUT_DIR)) {
    shell.mkdir('-p', OUTPUT_DIR);
}

// Webpack requires an absolute path. Now that it exists, resolve it.
let outputAbsolutePath = path.resolve(__dirname, OUTPUT_DIR);
// Uncomment to confirm correct path resolution
// console.log("Resolved path: " + outputPath);

module.exports = {
    entry: ENTRY_FILE_PATH,
    output: {
        filename: OUTPUT_FILENAME,
        path: outputAbsolutePath
    },
    mode: "none"
};