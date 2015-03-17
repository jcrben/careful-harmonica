(function() {
  'use strict';

  angular.module('app.factory', ['app.dictionary', 'app.employers', 'firebase'])
    .factory('Data', function(Dictionary, Employers) {
      var refURL = "https://careful-harmonica.firebaseio.com/";

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
          task.description = Dictionary.taskDescription(task.type)
          task.score = Dictionary.taskScore(task.type);

          results.push(task);
        }

        return results;
      };

      var addEmployer = function(name, job) {
        var newEmployer = {name: name, job: job};
        Employers.addNew(newEmployer);
      }

      var addUser = function(email, password) {
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
            }
        })
      }


      return {
        getTasks: getTasks,
        addEmployer: addEmployer,
        addUser: addUser
      }
    });
})();
