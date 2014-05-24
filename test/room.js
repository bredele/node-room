
/**
 * Test dependencies.
 */

var assert = require('assert');
var room = require('..');

describe("API", function() {
	
	it("should be a factory", function() {
		var foo = room();
		var bar = room();
		assert.notEqual(foo, bar);
	});


	

});
