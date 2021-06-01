const { getBreeds } = require('../util/breedsDatabase.js');
const { getItemById } = require('../util/catsDatabase.js');
const { render } = require('../util/template.js');
const defaultHandler = require('./default.js');

async function editCat(req, res) {
    try {
        const cat = getItemById(req.itemId);
        let breeds = getBreeds();
        breeds = breeds.map(a => `<option value="${a}">${a}</option>`).join('');
        cat.breedsList = breeds;
        const page = await render('editCat', cat);
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(page);
        res.end();
    } catch {
        return defaultHandler(req, res);
    }
}

module.exports = editCat;