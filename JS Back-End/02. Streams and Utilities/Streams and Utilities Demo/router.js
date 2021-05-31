const staticFile = require('./controllers/static.js');
const handlers = {};

function match(method, url) {
    if (method == 'GET' && url.startsWith('/static/')) {
        return staticFile;
    }

    const methods = handlers[url] || {};
    let handler = methods[method];
    return handler;
}

function registerHandler(method, url, handler) {
    let methods = handlers[url];

    if (methods == undefined) {
        methods = {};
        handlers[url] = methods;
    }

    handlers[url][method] = handler;
}

module.exports = {
    match,
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    // delete: (...params) => registerHandler('DELETE', ...params)
};