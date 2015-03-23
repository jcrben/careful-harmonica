'use strict';

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;


describe('the Employers factory', function() {

  var Employers;
  beforeEach(module('app.employers'));
  beforeEach(inject(function (_Employers_) {
    Employers = _Employers_;
    console.log(Employers)
  }));

  describe('object', function() {

    it('should have a addNew function', function() {
      expect(Employers).to.have.property('addNew');
    });

    it('should have a data function', function() {
      expect(Employers).to.have.property('data');
    });

  });

  describe('function', function() {
    
    describe('addNew', function() {
      
      it('should return an object', function() {
        var result = Employers.addNew({name:'Uber', job:'Engineer'})
        expect(result).to.be.an.object;
      })

    });

  });
  
});
