(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'Data', function($scope, Data) {
      $scope.user = {};

      $scope.signup = function() {
        Data.signup($scope.user.email, $scope.user.password);
      };

      $scope.signin = function() {
        Data.signin($scope.user.email, $scope.user.password);
      };
      
      $scope.tasks = Data.getTasks('current');
      $scope.achievements = Data.getTasks('completed');
    }]);

})();
