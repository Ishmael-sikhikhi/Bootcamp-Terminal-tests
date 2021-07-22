let assert = require("assert");
let greet = require("../greet");

describe('Greet' , function(){
    it('should show you a greet message and name' , function(){
        assert.equal(greet('Amanda'),'Hello, Amanda')
    });
    it('should show you a greet message and name' , function(){
        assert.equal(greet('Lina'),'Hello, Lina')
    });

});