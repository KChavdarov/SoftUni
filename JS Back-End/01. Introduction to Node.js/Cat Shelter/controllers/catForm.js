const { getBreeds } = require('../util/breedsDatabase.js');
const { render } = require('../util/template.js');
const defaultHandler = require('./default.js');

async function catController(req, res) {
    try {
        let breeds = getBreeds();
        breeds = breeds.map(a => `<option value="${a}">${a}</option>`);
        const template = await render('addCat', { 'breeds': breeds.join('') });
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(template);
        res.end();
    } catch {
        return defaultHandler(req, res);
    }
}

module.exports = catController;