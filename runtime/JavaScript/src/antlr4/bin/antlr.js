#!/usr/bin/env node
'use strict';

var path = require('path');
var fs = require('fs');
var spawn = require('child_process').spawn;

var antlr = spawn('java', ['-jar', path.join(__dirname, 'antlr.jar')].concat(
	process.argv.slice(2)
), {
	stdio: 'inherit'
});