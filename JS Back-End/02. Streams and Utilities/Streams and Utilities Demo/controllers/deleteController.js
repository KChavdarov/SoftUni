const database = require('../util/database.js');

function deleteController(req, res) {
    database.removeItem(req.itemId);
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}

module.exports = deleteController;