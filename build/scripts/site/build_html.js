let helpers = require('./helpers').themeHelpers;
let config = require('../config').config;
let sass = require('node-sass');
let fs = require('fs');
let mustache = require('mustache');

console.log("Building HTML...");

console.log("Mustache: " + mustache);
