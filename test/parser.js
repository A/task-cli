'use strict';

// Dependencies
var parse = require('../lib/parser');


describe('parser', function() {
  it('should return false if no one param finded', function() {
    var args = 'hello world';
    parse(args).should.eql({});
  });
  it('should parse one param:value', function() {
    var args = 'name: robot beep boop';
    parse(args).should.have.property('name', 'robot beep boop');
  });
  it('should skip mess before the first param', function() {
    var args = '--add name: go to club';
    parse(args).should.have.property('name', 'go to club');
  });
  it('should parse multiple param:value', function() {
    var args = 'name: eat my own dog food description: go for it!';
    var parsed = parse(args);
    parsed.should.have.property('name', 'eat my own dog food');
    parsed.should.have.property('description', 'go for it!');
  });
});
