(function() {
  'use strict';

  angular.module('app.employers', [])
    .factory('Employers', function() {

      var data = {
        "Apple": {
          "created_at": "2015-03-12",
          "description": "Full Stack Engineer",
          "application": true,
          "resume": true,
          "research_notes": true,
          "emails": 2,
          "calls": 1,
          "interviews": 1,
          "responses": 0,
          "followups": 0
        },
        "Microsoft": {
          "created_at": "2015-03-12",
          "description": "Front End Engineer",
          "application": true,
          "resume": false,
          "research_notes": false,
          "emails": 1,
          "calls": 0,
          "interviews": 0,
          "responses": 0,
          "followups": 0
        },
        "IBM": {
          "created_at": "2015-03-12",
          "description": "Back End Engineer",
          "application": true,
          "resume": true,
          "research_notes": true,
          "emails": 1,
          "calls": 0,
          "interviews": 0,
          "responses": 0,
          "followups": 0
        }
      };

      var addNew = function(newEmployer) {
        var employer = {}

        employer.name = newEmployer.name
        employer.description = newEmployer.job;
        employer.application = false;
        employer.resume = false;
        employer.research_notes = false
        employer.emails = 0;
        employer.calls = 0;
        employer.interviews = 0;
        employer.responses = 0;
        employer.followups = 0;

        data[newEmployer.name] = employer;
        console.log(data);
      }

      return {
        data: data,
        addNew: addNew
      };
    });

})();
