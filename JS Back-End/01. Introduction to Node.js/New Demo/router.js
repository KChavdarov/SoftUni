const handlers = {};
const staticHandler = require('./controllers/static.js');
const defaultHandler = require('./controllers/default.js');

function match(url, method) {
    let handler = defaultHandler;

    if (method == 'GET' && url.startsWith('/static/')) {
        return staticHandler;
    }

    if (handlers[url] && handlers[url][method]) {
        handler = handlers[url][method];
    }

    return handler;
}

function registerHandler(method, url, handler) {
    if (handlers[url] == undefined) {
        handlers[url] = {}
    }

    const methods = handlers[url];
    methods[method] = handler;
}

module.exports = {
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    put: (...params) => registerHandler('PUT', ...params),
    delete: (...params) => registerHandler('DELETE', ...params),
    match,
};