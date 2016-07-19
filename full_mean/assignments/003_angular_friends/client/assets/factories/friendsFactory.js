console.log('Friends Factory');
var app = angular.module("app", ["ngRoute"]);

app.factory('friendsFactory', ['$http', function($http){
	var friends = [];
	var friend = [];

	return {
		index: function(callback){
			$http.get('/friends').then(function(returned_data){
		        // console.log(returned_data.data);
		        friends = returned_data.data;
		        callback(friends);
		      });
		},
		create: function(newfriend, callback){
			console.log(newfriend);
			$http.post('/friends', newfriend).then(function(returned_data){
				console.log(returned_data.data);
				if(typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		},
		update: function(friend, callback){
			$http.put('/friends/' + friend._id, friend).then(function(returned_data){
				console.log(returned_data.data);
			})
		},
		getFriend: function(friend, callback){
			console.log(friend);
			$http.get('/friends/'+ friend.id).then(function(returned_data) {
				friend = returned_data.data
				console.log(returned_data.data);
				callback(friend);
			})
		}
	}

}]);