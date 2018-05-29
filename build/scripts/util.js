// Imports
let fs = require('fs');
var shell = require('shelljs');
var path = require('path');

// Export
module.exports = {

    getDirNamesSync: (dirPath) => {
        let nameArray = [];
        let items = fs.readdirSync(dirPath);
        for (let i = 0; i < items.length; i++) {
            nameArray.push(items[i]);
        }
        return nameArray;
    },

    writeFileContentsSync: (filePath, contents) => {

        let dirname = path.dirname(filePath);

        // Writing will fail if the dirs don't exist
        if (!fs.existsSync(dirname)) {
            shell.mkdir('-p', dirname);
        }

        fs.writeFileSync(filePath, contents);
    }
}