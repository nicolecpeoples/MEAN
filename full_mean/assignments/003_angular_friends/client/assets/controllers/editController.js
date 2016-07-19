app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
	
	var self = this;
	self.friend = {};
	self.friend_id = $routeParams;

	friendsFactory.getFriend(self.friend_id, function(returnedData){
	  self.friend = returnedData.data[0];
	  console.log(self.friend);
	});

	self.edit = function() {
		console.log(self.friend);
		friendsFactory.update(self.friend);
		$location.path('/');
	}

}]);