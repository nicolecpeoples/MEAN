angular.module('player_controller', ['player_factory']).controller('playersController', ['$scope', 'playerFactory', function($scope, playerFactory){

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