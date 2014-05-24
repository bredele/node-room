
/**
 * Module dependencies.
 * @api private
 */

var Emitter = require('component-emitter');


/**
 * Expose 'Room' factory.
 */

module.exports = function() {
	return new Room();
};


/**
 * Room constructor.
 * @api public
 */

function Room() {
  //do something
}


// room is an emitter

Emitter(Room.prototype);


Room.prototype.join = function() {
	
};

Room.prototype.leave = function() {
	
};

Room.prototype.limit = function() {
	
};

Room.prototype.expire = function() {
	
};