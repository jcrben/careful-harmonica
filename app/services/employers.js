(function() {
  'use strict';

  angular.module('app.employers', [])
    .factory('Employers', function() {

      var data = {
        'Apple': {
          'name': 'Apple',
          'createdAt': '2015-03-12',
          'description': 'Full Stack Engineer',
          'application': true,
          'resume': true,
          'researchNotes': true,
          'emails': 2,
          'calls': 1,
          'interviews': 1,
          'responses': 0,
          'followups': 0
        },
        'Microsoft': {
          'name': 'Microsoft',
          'createdAt': '2015-03-12',
          'description': 'Front End Engineer',
          'application': true,
          'resume': false,
          'researchNotes': false,
          'emails': 1,
          'calls': 0,
          'interviews': 0,
          'responses': 0,
          'followups': 0
        },
        'IBM': {
          'name': 'IBM',
          'createdAt': '2015-03-12',
          'description': 'Back End Engineer',
          'application': true,
          'resume': true,
          'researchNotes': true,
          'emails': 1,
          'calls': 0,
          'interviews': 0,
          'responses': 0,
          'followups': 0
        }
      };

      var addNew = function(newEmployer) {
        var employer = {};
        var employerObject = {};

        employer.name = newEmployer.name;
        employer.description = newEmployer.job;
        employer.application = 0;
        employer.resume = 0;
        employer.researchNotes = 0;
        employer.emails = 0;
        employer.calls = 0;
        employer.interviews = 0;
        employer.responses = 0;
        employer.followups = 0;

        employerObject[employer.name] = employer;
        return employerObject;
      };

      return {
        data: data,
        addNew: addNew
      };
    });

})();
