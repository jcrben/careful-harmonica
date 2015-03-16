(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'Data', function($scope, Data) {
      $scope.tasks = Data.getTasks();
      $scope.achievements = Data.getAchievements();
    }]);

})();
