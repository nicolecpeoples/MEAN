
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider.when('/', {
		// controller: new_controller,
		templateUrl: 'partials/all.html',
		
		
	})
	.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html'
	})
	.otherwise({
        redirectTo: "/friends"
    });

});