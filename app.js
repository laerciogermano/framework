"use strict";

var config = require("./config/global");

// /*  Modules */
var express = require("express");
var http = require("http");
var util = require("util");

/*  Instances  */
var app = express();
var server = http.createServer(app);

/*  Libs  */
var myApplication = require("./libs/app");

/*  Start application */
myApplication.start(app, config);

server.listen(config.port, config.host, function(){
	util.log(util.format("Server is running (%s:%s)", config.hostname, config.port));
});

