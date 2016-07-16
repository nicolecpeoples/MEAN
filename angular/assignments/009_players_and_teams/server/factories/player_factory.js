angular.module('player_factory', []).factory('playerFactory', function(){
	var players = [
		{first_name: "Kobe", last_name: "Bryant"}
	];

	return {
		getPlayers: function(callback){
			callback(players);
		}, 
		addPlayer: function(data){
			players.push(data);
		},
		deletePlayer: function(params){
			console.log(params);
			players.splice(params, 1);
		}
	}
})