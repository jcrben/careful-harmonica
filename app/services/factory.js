(function() {
  'use strict';

  angular.module('app.factory', ['app.dictionary', 'app.employers', 'firebase'])
    .factory('Data', function(Dictionary, Employers, $state, $firebaseObject, $rootScope) {
      var refURL = 'https://careful-harmonica.firebaseio.com/';
      var ref = new Firebase(refURL);
      var userID = null;

      var addEmployer = function(name, job) {
        var newEmployer = {name: name, job: job};
        ref.child('users').child(userID).child('employers').update(Employers.addNew(newEmployer));
      };

      var getEmployers = function($scope) {
        var emp = ref.child('users').child(userID).child('employers');
        var empSync = $firebaseObject(emp);
        empSync.$bindTo($scope, 'employers');

        return empSync;
      };

      var getScore = function($scope) {
        var score = ref.child('users').child(userID).child('score');
        var scoreSync = $firebaseObject(score);
        scoreSync.$bindTo($scope, 'score');

        return scoreSync;
      };

      var checkAuth = function(cb, $scope) {
        var sync = {};

        ref.onAuth(function(authData) {
          if (authData === null) {
            cb.error();
          } else {
            userID = authData.uid;
            $rootScope.isAuth = true;
            console.log($rootScope);
            if ($scope) {
              sync.score = getScore($scope);
              sync.employers = getEmployers($scope);
              sync.employers.$loaded().then(cb.success);
            }
          }
        });

        return sync;
      };

      var timeStamp = function() {
        return Firebase.ServerValue.TIMESTAMP;
      };

      return {
        addEmployer: addEmployer,
        getEmployers: getEmployers,
        timeStamp: timeStamp,
        checkAuth: checkAuth
      };
    });
})();
