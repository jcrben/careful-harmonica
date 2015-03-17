'use strict';

/**
 * @ngdoc function
 * @name carefulHarmonicaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carefulHarmonicaApp
 */
angular.module('carefulHarmonicaApp')
  .controller('MainCtrl', function ($scope, Data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function() {
      console.log('logout')
      Data.logout();
    }
  });
