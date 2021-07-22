let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo' , function(){
    it('should return the number of years ago' , function(){
        assert.equal(yearsAgo(1976), 45);
    });
    it('should return the number of years ago' , function(){
        assert.equal(yearsAgo(2000), 21);
    });
});