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

      taskTypes.forEach(function(type) {
        $scope.tasks.push(Dictionary.taskDetails(type));
      });
      achievementTypes.forEach(function(type, i) {
        $scope.achievements.push(Dictionary.taskDetails(type));
        $scope.achievements[i].date = $scope.employer[type];
      });
    };

    $scope.completeTask = function(task) {
      $scope.employers[$scope.employerName][task.type] = Data.timeStamp();
      $scope.score.$value += task.score;
    };

    var sync = function() {
      syncObj = Data.checkAuth(function() {
        console.log('no login detected');
      }, $scope);

      syncObj.employers.$loaded().then(function() {
        $scope.init();
      });

      syncObj.employers.$watch(function() {
        $scope.init();
      });
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
