(function() {
  'use strict';

  angular.module('app.onboard', ['ngMaterial'])
    .controller('OnboardCtrl', OnboardCtrl);
      
    OnboardCtrl.$inject = ['$scope'];
    function OnboardCtrl($scope) {
      $scope.user = {};
      
    }

})();
