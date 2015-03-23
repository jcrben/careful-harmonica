(function() {
  'use strict';
  angular
  .module('app.users', ['app.dictionary', 'firebase'])
  .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['$scope', 'Data', 'Dictionary', '$firebaseObject'];

  function UsersCtrl($scope, Data, Dictionary, $firebaseObject) {
    var refURL = 'https://careful-harmonica.firebaseio.com/';
    var ref = new Firebase(refURL);
    $scope.users = [];
    var getUsers = $firebaseObject(ref);
    getUsers.$loaded().then(function(data) {
      angular.forEach(data.users, function(user) {
        var rank = Dictionary.getRank(user.score);
        user.rank = rank;
        $scope.users.push(user);
      });
    });
  }
})();
