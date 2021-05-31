const fs = require('fs');
const defaultHandler = require('./defaultController.js');
const types = {
    'css': 'text/css',
    'jpg': 'image/jpeg',
    'png': 'image/png'
};

module.exports = (req, res) => {
    const [match, filename, type] = req.url.match(/([^/]+)\.(.+)$/);
    const file = fs.createReadStream(`./static/${match}`);
    file.once('data', data => {
        res.writeHead(200, {
            'Content-Type': types[type]
        });
        res.write(data);
        file.on('data', data => res.write(data));
    });
    file.on('end', () => res.end());
    file.on('error', () => defaultHandler(req, res));
};