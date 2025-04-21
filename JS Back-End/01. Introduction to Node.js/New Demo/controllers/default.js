module.exports = function defaultHandler(req, res) {
    res.statusCode = 404;
    res.write('not found');
    res.end()
}