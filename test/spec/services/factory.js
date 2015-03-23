'use strict';

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;


describe('the Data factory', function() {

  var Data;
  beforeEach(module('app.factory'));
  beforeEach(inject(function (_Data_) {
    Data = _Data_;
  }));

  describe('object', function() {
    

    it('should have a addEmployer function', function() {
      expect(Data).to.have.property('addEmployer');
    });

    it('should have a getEmployers function', function() {
      expect(Data).to.have.property('getEmployers');
    });

    it('should have a timeStamp function', function() {
      expect(Data).to.have.property('timeStamp');
    });

    it('should have a readTime function', function() {
      expect(Data).to.have.property('readTime');
    });

    it('should have a checkAuth function', function() {
      expect(Data).to.have.property('checkAuth');
    });

  });

  describe('function', function() {
    
    describe('addEmployer', function() {

      it('should be a function', function() {
        expect(Data.addEmployer).to.be.a.fuction;
      });

    });

    describe('getEmployers', function() {

      it('should be a function', function() {
        expect(Data.getEmployers).to.be.a.fuction;
      });

    });

    describe('getScore', function() {

      it('should be a function', function() {
        expect(Data.getScore).to.be.a.fuction;
      });

    });

    describe('getResume', function() {

      it('should be a function', function() {
        expect(Data.getResume).to.be.a.fuction;
      });

    });

    describe('checkAuth', function() {

      it('should be a function', function() {
        expect(Data.checkAuth).to.be.a.fuction;
      });

    });

    describe('timeStamp', function() {

      it('should be a function', function() {
        expect(Data.timeStamp).to.be.a.fuction;
      });

    });

    describe('readTime', function() {

      it('should be a function', function() {
        expect(Data.readTime).to.be.a.fuction;
      });

    });

    describe('addFileUploadListener', function() {

      it('should be a function', function() {
        expect(Data.addFileUploadListener).to.be.a.fuction;
      });

    });

  });

});
