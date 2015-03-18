(function() {
  'use strict';
  angular
  .module('app.users', ['firebase'])
  .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['$scope', 'Data', '$firebaseObject'];

  function UsersCtrl($scope, Data, $firebaseObject) {
    var refURL = 'https://careful-harmonica.firebaseio.com/';
    var ref = new Firebase(refURL);
    $scope.users = [];
    var getUsers = $firebaseObject(ref);
    getUsers.$loaded().then(function(data) {
      angular.forEach(data.users, function(user) {
        $scope.users.push(user);
      });
    });
  }
})();
