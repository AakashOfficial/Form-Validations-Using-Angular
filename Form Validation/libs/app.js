var myApp = angular.module('myApp', []);

myApp.controller('FormController', ['$scope', function($scope) {

  $scope.register = function() {
    $scope.message = 'Congratulation ' + $scope.user.username+" , thanks for registering";
  };

}]);