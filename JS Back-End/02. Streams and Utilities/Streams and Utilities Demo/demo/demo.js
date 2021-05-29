const { publisher } = require('./index.js');

publisher.on('ping', firstHandler);
publisher.on('ping', secondHandler);
publisher.on('pong', thirdHandler);

function firstHandler(a) { console.log('first ' + a); }

function secondHandler(a) { console.log('second ' + a.length); }

function thirdHandler(a, b) { console.log('third ', a + b); }