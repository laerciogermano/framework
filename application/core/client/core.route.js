"use strict";

angular.module("app").config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		controller: 'CoreController',
		templateUrl: '/application/core/client/views/index.html'
	});
});

