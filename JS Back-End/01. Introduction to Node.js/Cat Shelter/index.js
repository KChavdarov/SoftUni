const http = require('http');
const port = 3030;

const server = http.createServer(mainHandler);
server.listen(port,() => `server listening on port ${port}`);

function mainHandler(req, res) {
    res.statusCode = 200;
    res.write('Hello World!');
    res.end();
}