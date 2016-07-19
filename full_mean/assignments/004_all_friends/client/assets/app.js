//instantiate 
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'angular-momentjs']);


app.config(function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: 'views/all.html'
	})
	.when('/new', {
		templateUrl: 'views/new.html',
		controller: 'newController'
	})
	.when('/show/:id', {
		templateUrl: 'views/show.html'
	})
	.when('/edit/:id', {
		templateUrl: 'views/edit.html',
		controller: 'editController'
	})
	.otherwise({
		redirectTo: "/"
	});
})