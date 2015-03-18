'use strict';

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;


describe('the Dictionary factory', function() {

  describe('the Dictionary\'s default functions', function() {
    
    var Dictionary;
    beforeEach(module('app.dictionary'));
    beforeEach(inject(function (_Dictionary_) {
      Dictionary = _Dictionary_;
    }));

    it('should have a findNextTask function', function() {
      expect(Dictionary).to.have.property('findNextTask');
    });

    it('should have a findRecentTask function', function() {
      expect(Dictionary).to.have.property('findRecentTask');
    });

    it('should have a taskTitle function', function() {
      expect(Dictionary).to.have.property('taskTitle');
    });

    it('should have a taskDescription function', function() {
      expect(Dictionary).to.have.property('taskDescription');
    });

    it('should have a taskScore function', function() {
      expect(Dictionary).to.have.property('taskScore');
    });

    it('should have a taskDetails function', function() {
      expect(Dictionary).to.have.property('taskDetails');
    });

  });

  describe('', function(){})
});












// describe('the friend module', function() {

//   describe('the friend module\'s html templates', function () {

//     it('should not have any <html> tags', function () {

//       //try using fs directly without using require statement


//     });

//     // it('should have a section for badges', function () {

//     // });

//     // it('should have a section for to-do\'s', function () {

//     // });

//     // it('should have a section for recent activities', function () {

//     // });

//   });




// });

// describe('Controller: OnboardCtrl', function () {

//   // TODO: Implement controller tests 
  
//   // load the controller's module
//   // beforeEach(module('carefulHarmonicaApp'));

//   // var OnboardCtrl,
//   //   scope;

//   // Initialize the controller and a mock scope
//   // beforeEach(inject(function ($controller, $rootScope) {
//   //   scope = $rootScope.$new();
//   //   OnboardCtrl = $controller('OnboardCtrl', {
//   //     $scope: scope
//   //   });
//   // }));
  
// });
