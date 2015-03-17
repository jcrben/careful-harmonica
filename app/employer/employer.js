(function() {
  'use strict';
  angular
  .module('app.employer', [])
  .controller('EmployerCtrl', EmployerCtrl);

  EmployerCtrl.$inject = ['$scope', 'Data', '$stateParams', '$filter', 'Dictionary'];

  function EmployerCtrl($scope, Data, $stateParams, $filter, Dictionary) {
    var syncObj = {};
    $scope.employer = {};
    $scope.tasks = [];
    $scope.employerName = $stateParams.employer;

    $scope.init = function() {
      $scope.employer = syncObj.employers[$scope.employerName];
      var taskTypes = Dictionary.findNextTask($scope.employer, 3);

      taskTypes.forEach(function(type) {
        $scope.tasks.push(Dictionary.taskDetails(type));
      });
      console.log($scope.tasks);
    };

    var sync = function() {
      syncObj = Data.checkAuth(function() {
        console.log('no login detected');
      }, $scope);

      syncObj.employers.$loaded().then(function() {
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
