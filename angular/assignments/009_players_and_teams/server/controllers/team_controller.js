angular.module('team_controller', ['team_factory']).controller('teamsController', ['$scope', 'teamFactory', function($scope, teamFactory){
	$scope.teams = [];

	teamFactory.getTeams(function(data){
		$scope.teams = data;
	})

	$scope.addTeam = function(params){
		teamFactory.addTeam(params);
		$scope.newTeam = {};
	}

	$scope.deleteTeam = function(params){
		teamFactory.deleteTeam(params);
	}

}])