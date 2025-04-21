const events = require('events');

const publisher = new events.EventEmitter();

publisher.on('ping', firstHandler);
publisher.on('ping', secondHandler);

function firstHandler() {
    console.log('first');
}

function secondHandler() {
    console.log('second');
}

publisher.emit('ping');