(function() {
  'use strict';
  angular.module('app.land', [])
    .controller('LandCtrl', LandCtrl);

    function LandCtrl($scope, Data, Auth) {

      $scope.enter = function() {
        Auth.OAuthSignin();
      };
    }
})();
