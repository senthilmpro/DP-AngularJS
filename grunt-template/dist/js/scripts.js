

var app = angular.module('urlApp',[]);
// contains global settings for the application

app.service('settings', function(){
	
	var defaults = {
		name : "URL-Manager",
		created : new Date(),
		threads : 1,
		author : "senthilmpro"
	}

	return {
		defaults : defaults
	}
});
/*
	Sample controller for home page
*/

app.controller('homeCtrl', ['$scope','settings', function($scope, settings) {

	// create awesome shit here

	$scope.defaults = settings.defaults;
	$scope.name = settings.defaults.name;
	
}]);