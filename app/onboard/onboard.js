(function() {
  'use strict';

  angular.module('app.onboard', ['ngMaterial', 'firebase'])
    .controller('OnboardCtrl', OnboardCtrl);

    OnboardCtrl.$inject = ['$scope', '$firebaseObject', 'Data', '$rootScope'];
    function OnboardCtrl($scope, $firebaseObject, Data, $rootScope) {
      $scope.user = {};
      var refURL = 'https://careful-harmonica.firebaseio.com/';
      var ref = new Firebase(refURL);
      ref.onAuth(function(authData) {
        var user = ref.child('users').child(authData.uid);
        var obj = $firebaseObject(user);
        obj.$loaded().then(function(data) {
          data.$bindTo($scope, 'user');
        });

      });

      $rootScope.$on('$stateChangeSuccess', function(evt, toState) {
        if (toState.url === '/assets') {
          console.log('firing uploadListener');
          Data.addFileUploadListener(function(base64File) {
            $scope.$apply(function() {$scope.user.resume = base64File;});
          });
        }
      });
    }
})();
