const handlers = {};

function registerHandler(method, pathname, handler) {
    if (handlers[pathname] == undefined) {
        handlers[pathname] = {};
    }

    handlers[pathname][method] = handler;
}

function match(method, pathname) {
    const methods = handlers[pathname] || {};
    const handler = methods[method] || defaultHandler;
    return handler;
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not found');
    res.end();
}

module.exports = {
    registerHandler,
    match,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params)
};