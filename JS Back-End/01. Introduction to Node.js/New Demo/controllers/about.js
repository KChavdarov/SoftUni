const html = require('../views/about.js');

function about(req, res) {
    res.statusCode = 200;
    res.write(html);
    res.end();
}

module.exports = about;