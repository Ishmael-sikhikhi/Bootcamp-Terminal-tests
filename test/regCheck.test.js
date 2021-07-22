let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck' , function(){
    it('should return false if Registration number is not for MP ' , function(){
        assert.deepEqual(regCheck('DV 23 LP GP', 'MP'),false);
    });
    it('should return true if Registration number is for GP ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });    
    it('should return false if Registration number does not mach with the location' , function(){
        assert.equal(regCheck('DV 23 NB GP', null),false);
    });
});