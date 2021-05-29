const events = require('events');

const publisher = new events.EventEmitter();

function raiseEvents() {
    publisher.emit('ping', 'Hello world!');
    publisher.emit('pong', 2, 3);
}

module.exports = { publisher, raiseEvents };