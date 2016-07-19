app.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
console.log('inside new controller');

	var index= function(){
		friendsFactory.index(function(returned_data){
			$scope.friends = returned_data.data;
			
		})
	}
	index();

	$scope.create = function(params){
		console.log(params);
		friendsFactory.create(params);
		$scope.newUser = {};
	}
	index();

	$scope.update = function(params){
		console.log(params);
		friendsFactory.update(params);
	}

	$scope.getFriend = function(data){
		console.log(data);
		
	}
}]);