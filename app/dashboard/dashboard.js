(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'Data', function($scope, Data) {
      var syncObj = {};
      $scope.user = {};

      $scope.signup = function() {
        Data.signup($scope.user.email, $scope.user.password);
      };

      $scope.signin = function() {
        Data.signin($scope.user.email, $scope.user.password, sync);
      };

      var sync = function() {
        syncObj = Data.checkAuth(function() {
          console.log('no login detected');
        }, $scope);

        $scope.tasks = Data.getTasks('current');
        $scope.achievements = Data.getTasks('completed');
      };

      sync();

    }]);

})();
