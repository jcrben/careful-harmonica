(function() {
  'use strict';
  angular
  .module('app.user', ['firebase'])
  .controller('UserCtrl', UserCtrl);

  UserCtrl.$inject = ['$scope', 'Data', '$firebaseObject'];

  function UserCtrl($scope, Data, $firebaseObject) {
    var refURL = 'https://careful-harmonica.firebaseio.com/';
    var ref = new Firebase(refURL);
    $scope.users = [];
    var getUsers = $firebaseObject(ref);
    getUsers.$loaded().then(function(data) {
      console.log(data);
      angular.forEach(data.users, function(user) {
        if (user.score === undefined) {
          user.score = "TBA";
        }
        $scope.users.push(user);
      });
      console.log($scope.users);
    });
  };
})();
