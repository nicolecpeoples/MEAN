angular.module('products_controller', ["products_factory"]).controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory) {
	 $scope.products = [];
    // run the getStudents method and set $scope data in the callback
    productFactory.getProducts(function (data){
        $scope.products = data;
    })

  $scope.addProduct = function(productData) {
    
    productData['quantity'] = 50; //initialize items
    console.log(productData);
    productFactory.saveProducts(productData);
    $scope.newProduct = {};
  }
  $scope.deleteProduct = function(productData){
  	productFactory.deleteProducts(productData);
    
  }

}])