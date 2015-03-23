(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', 'Data', 'Dictionary', '$sce', function($scope, Data, Dictionary) {
      $scope.user = {};
      $scope.page = 'All';
      var syncObj = {};

      $scope.clickTask = function(task) {
        $scope.employers[task.employer][task.type] = Data.timeStamp();
        $scope.score.$value += task.score;
      };
      $scope.init = function() {
        $scope.tasks = [];
        $scope.achievements = [];

        angular.forEach($scope.employers, function(employer) {
          if (employer && typeof employer === 'object') {
            var type = Dictionary.findNextTask(employer);
            var obj = Dictionary.taskDetails(type[0]);
            obj.employer = employer.name;
            $scope.tasks.push(obj);

            type = Dictionary.findRecentTask(employer);
            if (type.length > 0) {
              obj = Dictionary.taskDetails(type[0]);
              obj.employer = employer.name;
              obj.date = Data.readTime(employer[type[0]]);
              $scope.achievements.push(obj);
            }
          }
        });
      };

      var sync = function() {
        syncObj = Data.checkAuth({
          success: function() {
            $scope.init();
            syncObj.employers.$watch(function() {
              $scope.init();
            });
          },
          error: function() {
            console.log('no login detected');
          }
        }, $scope);
      };

      sync();

    }]);

})();
