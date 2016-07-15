angular.module('user_lists_controller', ['user_factory']).controller('userListsController', ['$scope', 'userFactory', function($scope, userFactory){

	$scope.customers = [];
	$scope.sortType = 'first_name';

	userFactory.getCustomers(function(data){
		$scope.customers = data;
	})
}])