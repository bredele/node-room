
/**
 * Module dependencies.
 * @api private
 */

var Emitter = require('component-emitter');
var uuid = require('node-uuid');


/**
 * Expose 'Room' factory.
 */

module.exports = function() {
  return new Room();
};


/**
 * Create a room.
 *
 * A room has a unique uuid and is backend
 * by redis.
 * 
 * @api public
 */

function Room() {
  this.uuid = uuid();
}


// room is an emitter

Emitter(Room.prototype);


Room.prototype.clients = function() {
  
};

Room.prototype.join = function() {
  
};

Room.prototype.leave = function() {
  
};

Room.prototype.limit = function() {
  
};

Room.prototype.expire = function() {
  
};