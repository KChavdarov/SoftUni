const handlers = {};

function match(url, method) {
    let handler = defaultHandler;

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

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('not found');
    res.end()
}

module.exports = {
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    put: (...params) => registerHandler('PUT', ...params),
    delete: (...params) => registerHandler('DELETE', ...params),
    match,
};