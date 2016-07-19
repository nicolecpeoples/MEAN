app.controller('newController', ['$scope', 'friendsFactory', '$location','uibDateParser', function($scope, friendsFactory, $location, uibDateParser){

	$scope.format = 'MM/dd/yyyy';
  	$scope.date = new Date();

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
		$location.path('/');
	}

	$scope.update = function(params){
		console.log(params);
		friendsFactory.update(params);
	}

	$scope.getFriend = function(data){
		console.log(data);
		
	}

	$scope.delete = function(data){
		console.log(data);
		friendsFactory.delete(data);
		index();
	}

}]);