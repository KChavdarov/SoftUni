const { deleteItem } = require('../util/catsDatabase.js');
const defaultHandler = require('./default.js');

function removeCat(req, res) {
    try {
        deleteItem(req.itemId);
        res.writeHead(303, {
            'Location': '/'
        });
        res.end();
    } catch {
        defaultHandler(req, res);
    }
}

module.exports = removeCat;