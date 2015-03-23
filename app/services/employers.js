(function() {
  'use strict';

  angular.module('app.employers', [])
    .factory('Employers', function() {

      var data = {
        new: {
          name: 'new job',
          description: 'Add a new company to begin applying to.',
          new: 0
        }
      };

      var addNew = function(newEmployer) {
        var employer = {};
        var employerObject = {};

        employer.name = newEmployer.name;
        employer.description = newEmployer.job;
        employer.new = new Date().valueOf();
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
        addNew: addNew,
        data: data
      };
    });

})();
