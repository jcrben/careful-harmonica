'use strict';

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;


describe('the Dictionary factory', function() {

  var Dictionary;
  beforeEach(module('app.dictionary'));
  beforeEach(inject(function (_Dictionary_) {
    Dictionary = _Dictionary_;
  }));

  describe('the Dictionary\'s default functions', function() {
    

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

  describe('each Dictionary function', function() {
    
    describe('findNextTask', function() {

      it('should return an array of job priorities', function() {
  
      });

      it('should not return priorities that are that are required for the job', function() {

      });

      it('should only return the number of next tasks requested', function() {

      });

    });

    describe('findRecentTask', function() {

      it('should return an array of job priorities', function() {

      });

      it('should return only recent priorities that are required for the job', function() {

      });

      it('should only return the number of recent tasks requested', function() {

      });

    });

    describe('taskDetails', function() {

      it('should return an object', function() {

      });

      it('should return the right title', function() {

      });

    });

    describe('taskTitle', function() {

      it('should return a string', function() {

      });

    });

    describe('taskDescription', function() {

      it('should return a string', function() {

      });

    });

    describe('taskScore', function() {

      it('should return an integer', function() {

      });

    });

  });

});
