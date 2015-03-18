(function() {
  'use strict';
  angular
  .module('app.employer', [])
  .controller('EmployerCtrl', EmployerCtrl);

  EmployerCtrl.$inject = ['$scope', 'Data', '$stateParams', '$filter', 'Dictionary'];

  function EmployerCtrl($scope, Data, $stateParams, $filter, Dictionary) {
    var syncObj = {};
    $scope.employer = {};
    $scope.employerName = $stateParams.employer;

    $scope.init = function() {
      $scope.tasks = [];
      $scope.achievements = [];
      $scope.employer = syncObj.employers[$scope.employerName];

      var taskTypes = Dictionary.findNextTask($scope.employer, 3);
      var achievementTypes = Dictionary.findRecentTask($scope.employer, 3);

      taskTypes.forEach(function(type, i) {
        $scope.tasks.push(Dictionary.taskDetails(type));
        $scope.tasks[i].employer = $scope.employerName;
      });
      achievementTypes.forEach(function(type, i) {
        $scope.achievements.push(Dictionary.taskDetails(type));
        $scope.achievements[i].date = $scope.employer[type];
      });
    };

    $scope.clickTask = function(task) {
      $scope.employers[$scope.employerName][task.type] = Data.timeStamp();
      $scope.score.$value += task.score;
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

    // TODO: Move new employer function to a separate module
    $scope.newEmployer = {};
    $scope.newEmployer.name = 'Employer Name';
    $scope.newEmployer.job = 'Job Description';
    $scope.newJob = function() {
      Data.addEmployer($scope.newEmployer.name, $scope.newEmployer.job);
    };
  }
})();
