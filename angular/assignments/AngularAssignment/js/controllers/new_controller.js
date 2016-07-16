    myAppModule.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
      $scope.addUser = function(){
      	userFactory.create($scope.user)
        console.log($scope.user);
        $location.url('/index');
      }
    }]);