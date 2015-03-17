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

    $scope.logout = function() {
      Data.logout();
    }
 });