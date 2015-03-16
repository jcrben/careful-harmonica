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
        
        return [
          {
            title: 'Sent a resume',
            description: 'Sent your resume to IBM and received 20 points!',
            date: '3/13/15'
          },
          {
            title: 'Researched a company',
            description: 'Researched IBM and received 10 points!',
            date: '3/13/15'
          },
          {
            title: 'Got an interview!',
            description: 'Had an in-person interview with Apple and received 100 points!',
            date: '3/12/15'
          },
          {
            title: 'Found a job posting',
            description: 'Found a job posting by IBM and received 5 points!',
            date: '3/10/15'
          }
        ];
      };

      return {
        getTasks: getTasks,
        getAchievements: getAchievements
      }
    });
})();
