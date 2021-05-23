const handlers = {};

function match(url) {
    let handler = handlers[url];

    if (handler == undefined) {
        handler = defaultHandler;
    };

    return handler;
}

function registerHandler(url, handler) {
    handlers[url] = handler;
}

function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('Not Found');
    res.end();
}

module.exports = {
    match,
    registerHandler
};