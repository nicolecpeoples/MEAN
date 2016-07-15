angular.module('product_factory', []).factory('productFactory', function() {
	
	var products = [
        {name: 'Keyboard', price: 30.25},
        {name: 'Mouse', price: 19.99},
        {name: 'Basketball', price: 2}];
    // Most important step: return the object so it can be used by the rest of our angular code
	
	return {
		getProducts: function(callback){
			console.log(products);
			
			callback(products);
		},
		saveProducts: function(params){
			products.push(params);

			console.log(products);
		},
		deleteProducts: function(params){
			var product = params.$$hashKey;
			products.splice(params, 1);
			
		}
		}
	})

// singlePageModule.factory('sharedBooks', ['$http', '$rootScope', function($http, $rootScope) {
//   var books = [];
  
//   return {
//     getBooks: function() {
//       return $http.get(base_url + 'json/get_books_json').then(function(response) {
//         books = response.data;
//         $rootScope.$broadcast('handleSharedBooks',books);
//         return books;
//       })
//     },
//     saveBooks: function($params) {
//       return $http({
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//         url: base_url + 'json/save_book',
//         method: "POST",
//         data: $params,
//       })
//         .success(function(addData) {
//           books = addData;
//           $rootScope.$broadcast('handleSharedBooks',books);
//         });
//     }
//   };
// }]);
