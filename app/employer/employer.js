(function() {
  'use strict';
  angular
  .module('app.employer', [])
  .controller('EmployerCtrl', EmployerCtrl)

  EmployerCtrl.$inject = ['$scope', 'Data', '$stateParams'];

  function EmployerCtrl($scope, Data, $stateParams) {
    $scope.newEmployer = {};
    $scope.newEmployer.name = 'Employer Name';
    $scope.newEmployer.job = 'Job Description';

    $scope.employer = $stateParams;

    $scope.newJob = function() {
      Data.addEmployer($scope.newEmployer.name, $scope.newEmployer.job);
    };
  }
})();
