var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider.when('/new', {
		templateUrl: 'partials/new.html'
	})
	.when('/edit', {
		templateUrl: 'partials/edit.html'
	})
	.otherwise({
        redirectTo: "/"
    });

});