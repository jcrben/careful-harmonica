(function() {
  'use strict';

  angular.module('app.dashboard', [])
    .controller('DashboardCtrl', ['$scope', function($scope) {
      $scope.tasks = [
        {
          title: 'Introduce yourself',
          description: 'Send your resume and cover letter to Microsoft to receive 50 points.'
        },
        {
          title: 'Find a posting',
          description: 'Add a new job posting to receive 20 points.'
        },
        {
          title: 'Send a thank-you card',
          description: 'Follow-up with Apple to receive 30 points.'
        }
      ];
      $scope.achievements = [
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
        },
      ];


    }]);

})();
