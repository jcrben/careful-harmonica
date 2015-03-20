(function() {
  'use strict';

  angular.module('app.onboard', ['ngMaterial', 'firebase'])
    .controller('OnboardCtrl', OnboardCtrl);
      
    OnboardCtrl.$inject = ['$scope', '$firebaseObject'];
    function OnboardCtrl($scope, $firebaseObject) {
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
    }
})();
