
/**
 * Test dependencies.
 */

var assert = require('assert');
var room = require('..');


describe("API", function() {

	var foo;
	beforeEach(function() {
		foo = room();
	});
	
	it("should be a factory", function() {
		var bar = room();
		assert.notEqual(foo, bar);
	});

	it('should have join and leave handlers', function() {
		assert.equal(typeof foo.join, 'function');
		assert.equal(typeof foo.leave, 'function');
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
	 
});
