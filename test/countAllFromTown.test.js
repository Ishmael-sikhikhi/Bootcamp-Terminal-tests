let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown' , function(){
    it('should return the total registration numbers from a town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });
    it('should return zero if there is no registration numbers from a town' , function(){
        assert.equal(countAllFromTown('CA 123','CL'), 0);
    });
});