function requestValidator(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriValidator = /^([A-Za-z.0-9]+|\*{1})$/;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageValidator = /^([^<>\\&\'\"]*?)$/;

    if (!methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!uriValidator.test(request.uri) || request.uri == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!messageValidator.test(request.message) || request.message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

console.log(requestValidator({
    method: 'POST',
    version: 'HTTP/2.0',
}
));