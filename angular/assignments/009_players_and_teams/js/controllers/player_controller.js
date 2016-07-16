angular.module('player_controller', ['player_factory']).controller('playersController', ['$scope', 'playerFactory', '$routeParams', function($scope, playerFactory, $routeParams){
	console.log($routeParams);
	$scope.players = [];

	playerFactory.getPlayers(function(data){
		$scope.players = data;
	})
	$scope.addPlayer= function(params){
		playerFactory.addPlayer(params);
		$scope.newPlayer = {};
	}
	$scope.deletePlayer = function(params){
		playerFactory.deletePlayer(params);
	}
}])