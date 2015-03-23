(function() {
  'use strict';

  angular.module('app.dictionary', [])
    .factory('Dictionary', function() {
      var priorities = [
        'new', 'researchNotes', 'resume', 'application',
        'emails', 'calls', 'interviews', 'followups'
      ];

      var findNextTask = function(job, num) {
        var results = [];
        num = num || 1;

        for (var i = 0; i < priorities.length; i++) {
          if (!job[priorities[i]] && num) {
            results.push(priorities[i]);
            num--;
          }
        }

        if (results.length <= 1) {
          return results.concat('emails');
        } else {
          return results;
        }
      };

      var findRecentTask = function(job, num) {
        var results = [];
        num = num || 1;

        for (var i = priorities.length; i >= 0; i--) {
          if (job[priorities[i]] && num) {
            results.push(priorities[i]);
            num--;
          }
        }

        return results;
      };

      var taskDetails = function(type) {
        var dictionary = {
          new: {
            type: 'new',
            title: 'Shipshape',
            description: 'Add',
            icon: 'icon-anchor',
            score: 5
          },
          application: {
            type: 'application',
            title: 'Gather ye\' papers!',
            description: 'Send an application to',
            icon: 'icon-paper-plane',
            score: 20
          },
          resume: {
            type: 'resume',
            title: 'Who goes there?',
            description: 'Send a resume to',
            icon: 'icon-pen',
            score: 10
          },
          researchNotes: {
            type: 'researchNotes',
            title: 'Reconnaissance',
            description: 'Research',
            icon: 'icon-compass',
            score: 5
          },
          emails: {
            type: 'emails',
            title: 'Message in a bottle',
            description: 'Send an email to',
            icon: 'icon-flask',
            score: 10
          },
          calls: {
            type: 'calls',
            title: 'Ahoy, matey!',
            description: 'Make a call to',
            icon: 'icon-globe',
            score: 25
          },
          interviews: {
            type: 'interviews',
            title: 'All hands on deck!',
            description:  'Interview with',
            icon: 'icon-crosshair',
            score: 50
          },
          followups: {
            type: 'followups',
            title: 'Don\'t forget',
            description: 'Follow up with',
            icon: 'icon-rocket',
            score: 30
          }
        };

        return dictionary[type];
      };

      var getRank = function(score) {
        var ranks = ['Swabbie', 'Rigger', 'Sailor', 'Boatswain',
        'Quartermaster', 'First Mate', 'Captain'];
        var result;
        var baseScore = 30;
        var incrementer = 50;

        for (var i = 0; i < ranks.length-1; i++) {
          // if (score === 0) {debugger;}
          if (score <= baseScore) {
            result = ranks[i];
            break;
          } else if (i === ranks.length-1 && score > baseScore) {
            result = 'Captain';
          } else {
            incrementer += 25;
            baseScore += incrementer;
          }
        }
        return result;
      };

      return {
        findNextTask: findNextTask,
        findRecentTask: findRecentTask,
        taskDetails: taskDetails,
        getRank: getRank
      };
    });

})();
