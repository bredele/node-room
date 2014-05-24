
/**
 * Test dependencies.
 */

var assert = require('assert');
var room = require('..');


describe('API', function() {

  var foo;
  beforeEach(function() {
    foo = room();
  });
  
  it('should be a factory', function() {
    var bar = room();
    assert.notEqual(foo, bar);
    assert.equal(typeof foo, 'object');
  });

  it('should have join,leave and clients handlers', function() {
    assert.equal(typeof foo.join, 'function');
    assert.equal(typeof foo.leave, 'function');
    assert.equal(typeof foo.clients, 'function');
  });

  it('should configure a room', function() {
    assert.equal(typeof foo.limit, 'function');
    assert.equal(typeof foo.expire, 'function');
  });

  it('should be an emitter', function() {
    assert(foo.emit);
    assert(foo.on);
    assert(foo.once);
    assert(foo.off);
  });

  // NOTE: it'd probably great to set keys/values and
  // use datastore
   
});


describe('Factory', function() {

  it('should assign a unique id to a newly created room', function() {
    var foo = room();
    var bar = room();
    assert(foo.uuid);
    assert.notEqual(foo.uuid, bar.uuid);
  });
});
