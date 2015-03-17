(function() {
  'use strict';

  angular.module('app.factory', ['app.dictionary', 'app.employers', 'firebase'])
    .factory('Data', function(Dictionary, Employers, $state, $firebaseObject) {
      var refURL = "https://careful-harmonica.firebaseio.com/";
      var userID = null;

      var getTasks = function(taskType, num) {
        var getTask;
        var results = [];
        num = num || 1;

        if (taskType === 'current') {
          getTask = Dictionary.findNextTask;
        } else {
          getTask = Dictionary.findRecentTask;
        }

        for (var employer in Employers.data) {
          var task = {};
          var job = Employers.data[employer];

          task.employer = employer;
          task.type = getTask(job, num)[0];
          task.title = Dictionary.taskTitle(task.type);
          task.description = Dictionary.taskDescription(task.type);
          task.score = Dictionary.taskScore(task.type);

          results.push(task);
        }

        return results;
      };

      var addEmployer = function(name, job) {
        var ref = new Firebase(refURL);
        var newEmployer = {name: name, job: job};
        ref.child('users').child(userID).child('employers').update(Employers.addNew(newEmployer));
      };

      var getEmployers = function($scope, employer) {
        var ref = new Firebase(refURL);
        var emp = ref.child('users').child(userID).child('employers');
        var empSync = $firebaseObject(emp);

        emp.on('value', function(snapshot) {
          empSync.$bindTo($scope, 'data');
        });

        return empSync;
      };

      var signup = function(email, password) {
        var ref = new Firebase(refURL);

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
                employers: Employers.data
              };
              $state.go('user');
              ref.child('users').child(userData.uid).set(newUser);
            }
        });
      };

      var signin = function(email, password, success) {
        var ref = new Firebase(refURL);
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
            $state.go('user');
          }
        });
      };

      var checkAuth = function(cb, $scope) {
        var ref = new Firebase(refURL);
        var sync = {};

        ref.onAuth(function(authData) {
          if (authData === null) {
            cb();
          } else {
            userID = authData.uid;
            sync.employers = getEmployers($scope);
          }
        });

        return sync;
      };

      var logout = function() {
        var ref = new Firebase(refURL);
        $state.go('dashboard');
        ref.unauth();
      };

      return {
        getTasks: getTasks,
        addEmployer: addEmployer,
        getEmployers: getEmployers,
        signup: signup,
        signin: signin,
        checkAuth: checkAuth,
        logout: logout
      };
    });
})();
