(function() {
  'use strict';

  angular.module('app.factory', ['app.dictionary', 'app.employers', 'firebase'])
    .factory('Data', function(Dictionary, Employers) {
      var refURL = 'https://careful-harmonica.firebaseio.com/';
      var userID = null;

      var getTasks = function(taskType) {
        var getTask;
        var results = [];

        if (taskType === 'current') {
          getTask = Dictionary.findNextTask;
        } else {
          getTask = Dictionary.findRecentTask;
        }

        for (var employer in Employers.data) {
          var task = {};
          var job = Employers.data[employer];

          task.employer = employer;
          task.type = getTask(job);
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
        ref.child('users').child(userID).update(Employers.addNew(newEmployer));
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
              ref.child('users').child(userData.uid).set({
                email: email,
                signupDate: Firebase.ServerValue.TIMESTAMP,
                lastLogin: Firebase.ServerValue.TIMESTAMP
              });
            }
        });
      };

      var signin = function(email, password) {
        var ref = new Firebase(refURL);
        ref.authWithPassword({
          email: email,
          password: password
        }, function(err, user) {
          if (err) {
            console.log('Error signing in', err);
          } else {
            console.log('Successfully discovered user', user);
            ref.child('users').child(user.uid).update({
              lastLogin: Firebase.ServerValue.TIMESTAMP
            });
          }
        });
      };

      var checkAuth = function(cb) {
        var ref = new Firebase(refURL);
        ref.onAuth(function(authData) {
          if (authData === null) {
            cb();
          } else {
            userID = authData.uid;
          }
        });
      };

      var logout = function() {
        var ref = new Firebase(refURL);
        console.log('firing');
        ref.unauth();
      };

      return {
        getTasks: getTasks,
        addEmployer: addEmployer,
        signup: signup,
        signin: signin,
        checkAuth: checkAuth,
        logout: logout
      };
    });
})();
