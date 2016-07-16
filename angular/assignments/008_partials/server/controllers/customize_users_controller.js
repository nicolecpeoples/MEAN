angular.module('customize_users', ['user_factory']).controller('customizeUsersController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location){
	console.log($location)
	$scope.customers = [];
	$scope.sortType     = 'first_name';

	userFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.addCustomer = function(userData){
		userFactory.addCustomer(userData);
		$scope.newCustomer = {};
		$location.url('/list');
		
	}

	$scope.deleteCustomer = function(index){
		userFactory.deleteCustomer(index);
	}
}])