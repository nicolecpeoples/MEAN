angular.module('associations_controller', ['player_factory', 'team_factory']).controller('associationsController', ['$scope', 'playerFactory','teamFactory', function($scope, playerFactory, teamFactory){
	$scope.teams = [];
	$scope.players = [];
	$scope.associations = [];

	teamFactory.getTeams(function(data){
		$scope.teams = data;
	})
	playerFactory.getPlayers(function(data){
		$scope.players = data;
	})

	$scope.addAssociation = function(data){

		console.log(data);
		$scope.associations.push(data);
		$scope.newAssociation = {};
	}
	$scope.deleteAssignment = function(data){
		$scope.associations.splice(data, 1);
	}

}])