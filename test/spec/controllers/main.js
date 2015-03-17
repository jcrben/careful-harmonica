'use strict';

describe('Controller: OnboardCtrl', function () {

  // load the controller's module
  beforeEach(module('carefulHarmonicaApp'));

  var OnboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnboardCtrl = $controller('OnboardCtrl', {
      $scope: scope
    });
  }));

  it('should test something', function () {
    // expect(scope.awesomeThings.length).toBe(3);
  });
});
