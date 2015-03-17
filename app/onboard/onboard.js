(function() {
  'use strict';

  angular.module('app.onboard', ['ngMaterial'])
    .controller('OnboardCtrl', ['$scope', 'Data', function($scope, Data) {
      $scope.user = {};
      $scope.signup = function() {
        Data.signup($scope.user.email, $scope.user.password);
      };

      $scope.signin = function() {
        Data.signin($scope.user.email, $scope.user.password);
      };

    }]);

})();
