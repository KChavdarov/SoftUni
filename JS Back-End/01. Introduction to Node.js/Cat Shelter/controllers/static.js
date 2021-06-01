const fs = require('fs');
const defaultHandler = require('./default.js');

const types = {
    css: 'text/css',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png',
    ico: 'image/x-icon',
};

function staticHandler(req, res) {
    const [filename, name, type] = req.url.match(/([^/]+)\.(.+)$/);
    const file = fs.createReadStream('.' + req.url);
    file.once('data', data => {
        res.writeHead(200, {
            'Content-Type': types[type]
        });
        res.write(data);
        file.on('data', data => res.write(data));
    });
    file.on('end', () => res.end());
    file.on('error', () => defaultHandler(req, res));
}

module.exports = staticHandler;