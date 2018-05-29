// Imports
let fs = require('fs');
let shell = require('shelljs');
let path = require('path');

let encoding = "utf8";

// Export
module.exports = {

    getDirNamesSync: (dirPath) => {
        let nameArray = [];
        let items = fs.readdirSync(dirPath);
        for (let i = 0; i < items.length; i++) {
            let currItem = items[i];
            let currPath = dirPath + "/" + currItem;
            if(fs.lstatSync(currPath).isDirectory()) {
                nameArray.push(items[i]);
            }
        }
        return nameArray;
    },

    writeFileContentsSync: (filePath, contents) => {

        let dirname = path.dirname(filePath);

        // Writing will normally fail if the dirs don't exist.
        // Create the full dir path before writing.
        if (!fs.existsSync(dirname)) {
            shell.mkdir('-p', dirname);
        }

        fs.writeFileSync(filePath, contents);
    },

    readFileContentsSync: (filePath) => {
        return fs.readFileSync(filePath, encoding);
    }
}