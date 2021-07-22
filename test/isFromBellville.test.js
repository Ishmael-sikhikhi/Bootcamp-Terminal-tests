let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville' , function(){
    it('should return true if Registration number is from Bellville' , function(){
        assert.equal(isFromBellville('CY 123'),true);
    });
    it('should return false if Registration number is not from Bellville' , function(){
        assert.equal(isFromBellville('CJ 123'),false);
    });

});