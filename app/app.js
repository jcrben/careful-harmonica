'use strict';

/**
 * @ngdoc overview
 * @name carefulHarmonicaApp
 * @description
 * # carefulHarmonicaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('carefulHarmonicaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',

    'app.factory',
    'app.auth',
    'app.dashboard',
    'app.employer',
    'app.onboard',
    'app.users',
    'app.land'
  ]);

// ********************** Route Definitions **********************
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    // ********************** Dashboard **********************
    .state('dashboard', {
      url: '/',
      views: {
        '': {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        },
        'tasks@dashboard': {
          templateUrl: 'dashboard/tasks.html'
        },
        'score@dashboard': {
          templateUrl: 'dashboard/score.html',
        },
        'analytics@dashboard': {
          templateUrl: 'dashboard/analytics.html',
        },
        'achievements@dashboard': {
          templateUrl: 'dashboard/achievements.html'
        },
        'social@dashboard': {
          templateUrl: 'dashboard/social.html',
        },
        'signup@dashboard': {
          templateUrl: 'auth/signup.html'
        },
        'signin@dashboard': {
          templateUrl: 'auth/signin.html'
        },
        'employers@dashboard': {
          templateUrl: 'dashboard/employers.html'
        }
      }
    })

    // ********************** User Profile **********************
    .state('users', {
      url: '/users/',
      views: {
        '': {
          templateUrl: 'users/users.html',
          controller: 'UsersCtrl'
        }
      }
    })

    // ********************** Job Page **********************
    .state('employer', {
      url: '/employer/:employer',
      views: {
        '': {
          templateUrl: 'employer/employer.html',
          controller: 'EmployerCtrl'
        },
        'new@employer': {
          templateUrl: 'employer/new.html'
        }
      }
    })

    // ********************** Authentication **********************

    .state('land', {
      url: '/land',
      views: {
        '': {
          templateUrl: 'auth/land.html',
          controller: 'LandCtrl'
        },
        'signup@land': {
          templateUrl: 'auth/signin.html',
          controller: 'LandCtrl'
        }
      }
    })

    .state('signup', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'auth/signup.html',
          controller: 'AuthCtrl'
        }
      }
    })

    .state('signin', {
      url: '/signin',
      views: {
        '': {
          templateUrl: 'auth/signin.html',
          controller: 'AuthCtrl'
        }
      }
    })

    // ********************** Onboarding **********************
    .state('onboard', {
      abstract: true,
      url: '/onboard',
      templateUrl: 'onboard/onboard.html'
    })

    .state('onboard.dream', {
      url: '/dream',
      templateUrl: 'onboard/dream.html',
    })

    .state('onboard.upload', {
      url: '/upload',
      templateUrl: 'onboard/upload.html',
    })

    .state('onboard.goal', {
      url: '/goal',
      templateUrl: 'onboard/goal.html',
    })

    .state('onboard.install', {
      url: '/install',
      templateUrl: 'onboard/install.html',
    });

})

.run(function($location, Auth, $state) {
  Auth.checkAuth(function() {
    $location.path('/land');
  });
});
