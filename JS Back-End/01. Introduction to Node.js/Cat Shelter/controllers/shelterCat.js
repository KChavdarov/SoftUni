const { getItemById } = require('../util/catsDatabase.js');
const { render } = require('../util/template.js');
const defaultHandler = require('./default.js');

async function shelterCat(req, res) {
    try {
        const cat = getItemById(req.itemId);
        const template = await render('catShelter', cat);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(template);
        res.end();
    } catch {
        return defaultHandler(req, res);
    }
}

module.exports = shelterCat;