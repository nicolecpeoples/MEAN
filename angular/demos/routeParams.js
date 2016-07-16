<tr ng-repeat = 'team in TC.teams track by $index'>
 <td><a href="#/{{team.name}}" ng-bind = 'team.name'></a></td>
 <td><button ng-click='TC.removeTeam($index)'>Remove</button></td>
</tr>

myApp.config(function ($routeProvider) {
 // continue of config
 .when('/:teamname',{
  templateUrl: 'partials/team.html'
 })
});

myApp.controller('teamController', function(teamsFactory, $routeParams){
 console.log($routeParams)
})