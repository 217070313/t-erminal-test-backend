import greet from '../greet.js';
import assert from 'assert';
describe ('the Greet function', function(){
    it ('should be able to greet Foza', function (){
        assert.equal('Hello, Foza', greet('Foza'));
    });
    it ('should be able to greet Cloud', function (){
        assert.equal('Hello, Cloud', greet('Cloud'));
    });
});