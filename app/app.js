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
    'ui.router',

    'app.factory',
    'app.dashboard',
    'app.employer',
    'app.user'
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
        }
      }
    })

    // ********************** User Profile **********************
    .state('user', {
      url: '/user',
      views: {
        '': {
          templateUrl: 'user/user.html',
          controller: 'UserCtrl'
        },
        'tasks@user': {
          templateUrl: 'user/tasks.html',
          controller: 'UserCtrl'
        }
      }
    })

    // ********************** Job Page **********************
    .state('employer', {
      url: '/employer',
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
      url: '/onboard',
      views: {
        '': {
          templateUrl: 'onboard/onboard.html',
          controller: 'OnboardCtrl'
        },
        'dream@onboard': {
          templateUrl: 'onboard/dream.html'
        },
        'upload': {
          templateUrl: 'onboard/upload.html',
          controller: 'OnboardCtrl'
        },
        'goal': {
          templateUrl: 'onboard/goal.html',
          controller: 'OnboardCtrl'
        },
        'install': {
          templateUrl: 'onboard/install.html',
          controller: 'OnboardCtrl'
        }
      }
    });
})

.run(function($location, Data) {
  Data.checkAuth(function() {
    $location.path('/');
  });
});
