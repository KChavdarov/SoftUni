const staticHandler = require('./controllers/static.js');

const handlers = {};

function registerHandler(method, pathname, handler) {
    if (handlers[pathname] == undefined) {
        handlers[pathname] = {};
    }

    handlers[pathname][method] = handler;
}

function match(method, pathname) {
    if (pathname.startsWith('/content')) {
        return staticHandler;
    }
    const methods = handlers[pathname] || {};
    const handler = methods[method];
    return handler;
}

module.exports = {
    registerHandler,
    match,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params)
};