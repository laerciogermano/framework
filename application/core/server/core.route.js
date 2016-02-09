"use strict";

module.exports = function(app){
	app.get("/", function(req, res){
		res.render("core/server/views/index");
	});
};