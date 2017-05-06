angular.module('WorldOfCelts', ['ngRoute']);

angular.module('WorldOfCelts').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	});
});