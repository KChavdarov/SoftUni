const handlers = {};

function match(method, url) {
    const methods = handlers[url] || {};
    let handler = methods[method];

    if (handler == undefined) {
        handler = defaultHandler;
    };

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

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
}

module.exports = {
    match,
    registerHandler,
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    // delete: (...params) => registerHandler('DELETE', ...params)
};