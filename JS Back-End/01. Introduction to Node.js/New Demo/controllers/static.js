const fs = require('fs');
const defaultHandler = require('./default.js');

module.exports = (req, res) => {
    const url = req.url;
    const src = fs.createReadStream('.' + url);
    src.on('error', () => {
        defaultHandler(req, res);
    })
    src.pipe(res);
}