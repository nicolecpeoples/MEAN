angular.module('product_controllers', ["product_factory"]).controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory) {
	 $scope.products = [];
    // run the getStudents method and set $scope data in the callback
    productFactory.getProducts(function (data){
        $scope.products = data;
    })

  $scope.addProduct = function(productData) {
    console.log(productData);
    productFactory.saveProducts(productData);
    $scope.newProduct = {};
  }
  $scope.deleteProduct = function(productData){
  	productFactory.deleteProducts(productData);
  }

}])