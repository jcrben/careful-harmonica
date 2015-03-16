(function() {
  'use strict';

  angular.module('app.factory', ['app.dictionary', 'app.employers'])
    .factory('Data', function(Dictionary, Employers) {

      var getTasks = function() {
        var results = [];

        for (var employer in Employers.data) {
          var task = {};
          var job = Employers.data[employer];

          task.employer = employer;
          task.type = Dictionary.findNextTask(job);
          task.title = Dictionary.taskTitle(task.type);
          task.description = Dictionary.taskDescription(task.type)
          task.score = Dictionary.taskScore(task.type);

          results.push(task);
        }

        return results;
      };

      var getAchievements = function() {
        var results = [];

        for (var employer in Employers.data) {
          var task = {};
          var job = Employers.data[employer];

          task.employer = employer;
          task.type = Dictionary.findRecentTask(job);
          task.title = Dictionary.taskTitle(task.type);
          task.description = Dictionary.taskDescription(task.type)
          task.score = Dictionary.taskScore(task.type);

          results.push(task);
        }

        return results;
      };

      return {
        getTasks: getTasks,
        getAchievements: getAchievements
      }
    });
})();
