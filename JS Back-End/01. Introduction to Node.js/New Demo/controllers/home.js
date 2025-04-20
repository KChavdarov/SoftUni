const html = require('../views/home.js');

function home(req, res) {
    res.statusCode = 200;
    res.write(html);
    res.end();
}

module.exports = home;