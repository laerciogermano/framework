"use strict";

module.exports = {
  client: {
    lib: {
      css: [],
      js: [
        "public/bower_components/angular/angular.min.js",
        "public/bower_components/angular-route/angular-route.min.js"
      ]
    },
    css: "application/*/client/**/*.css",
    js: ["application/*/client/**/*.js"]
  },
  server: {
    models: "application/*/server/*.model*(.*).js",
    routes: "application/*/server/*.route*(.*).js",
    sockets: "application/*/server/*.socket*(.*).js",
    configs: "application/*/server/*.config*(.*).js",
    views: "application/*/server/views/*.html"
  }
};

