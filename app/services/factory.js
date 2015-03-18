(function() {
  'use strict';

  angular.module('app.factory', ['app.dictionary', 'app.employers', 'firebase'])
    .factory('Data', function(Dictionary, Employers, $state, $firebaseObject) {
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
            if ($scope) {
              sync.employers = getEmployers($scope);
              sync.score = getScore($scope);
              cb.success();
            }
          }
        });

        return sync;
      };

      var timeStamp = function() {
        return Firebase.ServerValue.TIMESTAMP;
      };

      var signup = function(email, password) {

        ref.createUser({
          email: email,
          password: password
        }, function(err, userData) {
            if (err) {
              if (err.code === 'EMAIL_TAKEN') {
                console.log('Email in use');
              }
              if (err.code === 'INVALID_EMAIL') {
                console.log('Invalid email');
              }
              else {
                console.log('Error creating user', err);
              }
            } else {
                console.log('Successfuly created user', userData);
                var newUser = {
                  email: email,
                  signupDate: Firebase.ServerValue.TIMESTAMP,
                  lastLogin: Firebase.ServerValue.TIMESTAMP,
                  score: 0,
                  employers: Employers.data
                };
                ref.child('users').child(userData.uid).set(newUser);
                signin(email, password);
                $state.go('onboard.dream');
            }
        });
      };

      var signin = function(email, password, success) {
        ref.authWithPassword({
          email: email,
          password: password
        }, function(err, user) {
          if (err) {
            console.log('Error signing in', err);
          } else {
            console.log('Successfully discovered user', user);
            success();
            ref.child('users').child(user.uid).update({
              lastLogin: Firebase.ServerValue.TIMESTAMP
            });
            $state.go('onboard.dream');
          }
        });
      };

      var logout = function() {
        $state.go('land');
        ref.unauth();
      };

      return {
        addEmployer: addEmployer,
        getEmployers: getEmployers,
        timeStamp: timeStamp,
        signup: signup,
        signin: signin,
        checkAuth: checkAuth,
        logout: logout
      };
    });
})();
