let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill' , function(){
    it('should return the total registration numbers from a town' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
    it('should return the total registration numbers from a town' , function(){
        assert.equal(totalPhoneBill('call, sms, sms, sms'), 'R4.70');
    });
});