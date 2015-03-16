(function() {
  'use strict';

  angular.module('app.dictionary', [])
    .factory('Dictionary', function() {

      var findNextTask = function(job) {
        if (!job.research_notes) {
          return 'research_notes';
        } else if (!job.resume) {
          return 'resume';
        } else if (!job.application) {
          return 'application';
        } else if (!job.emails) {
          return 'emails';
        } else if (!job.calls) {
          return 'calls';
        } else if (!job.followups) {
          return 'followups';
        }
      };

      var taskTitle = function(type) {
        var dictionary = {
          'application': 'Gather ye\' papers!',
          'resume': 'Who goes there?',
          'research_notes': 'Reconnaissance',
          'emails': 'Message in a bottle',
          'calls': 'Ahoy, matey!',
          'interviews': 'All hands on deck!',
          'followups': 'Don\'t forget'
        };

        return dictionary[type];
      };

      var taskDescription = function(type) {
        var dictionary = {
          'application': 'Send an application to',
          'resume': 'Send a resume to',
          'research_notes': 'Research',
          'emails': 'Send an email to',
          'calls': 'Make a call to',
          'interviews': 'Interview with',
          'followups': 'Follow up with'
        };

        return dictionary[type];
      };

      var taskScore = function(type) {
        var dictionary = {
          'application': 20,
          'resume': 10,
          'research_notes': 5,
          'emails': 10,
          'calls': 25,
          'interviews': 50,
          'followups': 30
        };

        return dictionary[type];
      };

      return {
        findNextTask: findNextTask,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        taskScore: taskScore
      };
    });

})();
