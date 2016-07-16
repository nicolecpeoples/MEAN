angular.module('team_factory', []).factory('teamFactory', function(){
	var teams = [
	{name: "The Red Bulls"}
	];

	return {
		getTeams: function(callback){
			callback(teams);
		}, 
		addTeam: function(data){
			teams.push(data);
		},
		deleteTeam: function(data){
			console.log(data);
			var spliced =teams.splice(data, 1);
			console.log(spliced); 
		}
	}
})