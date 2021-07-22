let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee' , function(){
    it('should return R20 price based on morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return R10 price based on afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return free, no charges on evening shift' , function(){
        assert.equal(transportFee('evening'), 'free');
    });
});