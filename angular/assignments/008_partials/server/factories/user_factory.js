angular.module('user_factory', []).factory('userFactory', function(){

	var customers = [
		{first_name: "nicole", last_name: "peoples", fave_lang: "javascript"}
	];

	return {
		getCustomers: function(callback){
			callback(customers);
		},
		addCustomer: function(data){
			customers.push(data);
		},
		deleteCustomer: function(data){
			var hash = data.$$hashKey;
			console.log(hash);
			var cut = customers.splice(customers.$$hashKey = hash, 1);
			console.log(cut);
		}
	}
})