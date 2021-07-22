let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){
    it('should return the Bellville if registration is from Bellville' , function(){
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });
    it('should return the Paarl if registration number is from Paarl' , function(){
        assert.equal(fromWhere('CJ 456'), 'Paarl');
    });
    it('should return Cape Town  if registration number is from Cape Town' , function(){
        assert.equal(fromWhere('CA 789'), 'Cape Town');
    });
    it('should return "Some other place!" if registration number is not from Bellvilee or Paarl, Cape Town' , function(){
        assert.equal(fromWhere('CL 876'), 'Some other place!');
    });
});