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
        var result = Dictionary.findNextTask({}, 5)
        expect(Array.isArray(result)).to.be.true;
        expect(result).to.include('researchNotes', 'resume', 'application',
        'emails', 'calls');
      });

      it('should not return priorities that are already in the job', function() {
        var result = Dictionary.findNextTask({researchNotes:true}, 5)
        expect(result).to.not.include('researchNotes');
      });

      it('should only return the number of next tasks requested', function() {
        var result = Dictionary.findNextTask({}, 3);
        expect(result).to.have.length(3);
      });

    });

    describe('findRecentTask', function() {

      it('should return an array of job priorities', function() {
        var result = Dictionary.findRecentTask({researchNotes:true, resume:true}, 2);
        expect(Array.isArray(result)).to.be.true;
        expect(result).to.include('researchNotes', 'resume');
      });

      it('should return only recent priorities that are required for the job', function() {
        var result = Dictionary.findRecentTask({calls:true, resume:true}, 2);
        expect(result).to.not.include('researchNotes');
      });

      it('should only return the number of recent tasks requested', function() {
        var result = Dictionary.findRecentTask({calls:true, resume:true, followups:true}, 2);
        expect(result).to.have.length(2);
      });

    });

    describe('taskDetails', function() {


      
      it('should return an object', function() {
        var result = Dictionary.taskDetails('followups')
        expect(result).to.be.an('object');
      });

      it('should return the right title', function() {
        var result = Dictionary.taskDetails('followups')
        expect(result.title).to.equal('Don\'t forget');
      });

    });

    describe('taskTitle', function() {

      it('should return a string', function() {
        var result = Dictionary.taskTitle('resume');
        expect(result).to.be.a.string;
      });

    });

    describe('taskDescription', function() {

      it('should return a string', function() {
        var result = Dictionary.taskDescription('resume');
        expect(result).to.be.a.string;
      });

    });

    describe('taskScore', function() {

      it('should return an integer', function() {
        var result = Dictionary.taskScore('resume');
        expect(result).to.be.a.number;
      });

    });

  });

});
