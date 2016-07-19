app.controller('editController', ['$scope', 'friendsFactory', '$location', '$routeParams', 'uibDateParser', function($scope, friendsFactory, $location, $routeParams, uibDateParser){

	var self = this; 
	self.friend = {};
	self.friend_id = $routeParams;
	$scope.format = 'MM/dd/yyyy';
  	$scope.date = new Date();

	friendsFactory.getFriend(self.friend_id, function(returned_data){
		self.friend = returned_data.data[0];
	})

	self.edit = function() {
		console.log(self.friend);
		friendsFactory.update(self.friend);
		$location.path('/');
	}

}]);