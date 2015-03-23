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
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'ngSanitize',

    'app.factory',
    'app.auth',
    'app.dashboard',
    'app.employer',
    'app.onboard',
    'app.users',
    'app.land'
  ]);

// ********************** Constants **********************

app.constant('moment', moment);

// ********************** Route Definitions **********************
app.config(['$stateProvider', '$urlRouterProvider', '$compileProvider',
  function($stateProvider, $urlRouterProvider, $compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data|ftp|mailto|chrome-extension):/);
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
        'tasks@employer': {
          templateUrl: 'dashboard/tasks.html'
        },
        'achievements@employer': {
          templateUrl: 'dashboard/achievements.html'
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
      templateUrl: 'onboard/dream.html'

    })

    .state('onboard.assets', {
      url: '/assets',
      templateUrl: 'onboard/assets.html',
      resolve: {Data: 'Data'}
    })

    .state('onboard.goal', {
      url: '/goal',
      templateUrl: 'onboard/goal.html',
    })

    .state('onboard.install', {
      url: '/install',
      templateUrl: 'onboard/install.html',
    });

}])

.run(function($location, Auth, $rootScope) {
  Auth.checkAuth(function() {
    $location.path('/land');
  });
$rootScope.$on('$stateChangeError', 
  function(event, toState, toParams, fromState, fromParams, error){ 
    console.log(error);
  });

});
