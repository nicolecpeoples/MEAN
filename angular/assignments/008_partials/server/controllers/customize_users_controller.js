angular.module('customize_users', ['user_factory']).controller('customizeUsersController', ['$scope', 'userFactory', function($scope, userFactory){

	$scope.customers = [];
	$scope.sortType     = 'first_name';

	userFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.addCustomer = function(userData){
		userFactory.addCustomer(userData);
		$scope.newCustomer = {};
	}

	$scope.deleteCustomer = function(index){
		userFactory.deleteCustomer(index);
	}
}])