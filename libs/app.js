"use strict";

var express = require("./express");

// initialize all app
module.exports.start = function start(app, config){
	express.init(app, config);
};