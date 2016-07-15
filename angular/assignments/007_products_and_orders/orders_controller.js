angular.module('orders_controller', ["products_factory"]).controller('ordersController', ['$scope', 'productFactory', function($scope, productFactory){
	products = [];

	productFactory.getProducts(function(data){
		$scope.products = data;
	})

	$scope.buyProduct = function(data) {
		productFactory.buyProduct(data);
	}
}])

