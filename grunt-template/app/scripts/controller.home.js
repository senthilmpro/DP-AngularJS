/*
	Sample controller for home page
*/

app.controller('homeCtrl', ['$scope','settings', function($scope, settings) {

	// create awesome shit here

	$scope.defaults = settings.defaults;
	$scope.name = settings.defaults.name;
	
}]);