(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'Data', function($scope, Data) {
      $scope.tasks = Data.getTasks('current');
      $scope.achievements = Data.getTasks('completed');
    }]);

})();
