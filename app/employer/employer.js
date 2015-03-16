(function() {
  'use strict';
  angular
  .module('app.employer', [])
  .controller('EmployerCtrl', EmployerCtrl)

  EmployerCtrl.$inject = ['$scope', 'Data'];

  function EmployerCtrl($scope, Data) {
    $scope.employer = {};
    $scope.employer.name = "Employer Name";
    $scope.employer.job = "Job Description";

    $scope.newJob = function() {
      Data.addEmployer($scope.employer.name, $scope.employer.job);
    };
  }
})();
