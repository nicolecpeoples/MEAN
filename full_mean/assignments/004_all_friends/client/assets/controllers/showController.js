app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {

	var self= this;

	self.friend = {};

	self.friend_id = $routeParams;

	friendsFactory.getFriend(self.friend_id, function(returned_data){
		self.friend = returned_data.data[0];
	})
}]);