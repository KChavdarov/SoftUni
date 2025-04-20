const html = require('../views/catalog.js');
const items = require('../models/items.js');

function home(req, res) {
    res.statusCode = 200;
    res.write(html(items.getAll()));
    res.end();
}

module.exports = home;