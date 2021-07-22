let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl' , function(){
    it('should return the total registration numbers from Paarl' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });
    it('should return the total registration numbers from Paarl' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
    });
    it('should return zero if there is no registration numbers from Paarl' , function(){
        assert.equal(countAllPaarl('CA 345 123, CK 345'), 0);
    });
});