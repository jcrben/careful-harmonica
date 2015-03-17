(function() {
  'use strict';
  angular
  .module('app.employer', [])
  .controller('EmployerCtrl', EmployerCtrl)

  EmployerCtrl.$inject = ['$scope', 'Data', '$stateParams', '$filter'];

  function EmployerCtrl($scope, Data, $stateParams, $filter) {
    var syncObj = {};
    $scope.newEmployer = {};
    $scope.newEmployer.name = 'Employer Name';
    $scope.newEmployer.job = 'Job Description';

    $scope.employer = {};
    $scope.employerName = $stateParams.employer;

    $scope.newJob = function() {
      Data.addEmployer($scope.newEmployer.name, $scope.newEmployer.job);
    };

    var sync = function() {
      syncObj = Data.checkAuth(function() {
        console.log('no login detected');
      }, $scope);

      syncObj.employers.$loaded().then(function() {
        $scope.employer = syncObj.employers[$scope.employerName];
      });
    };

    sync();
  }
})();
