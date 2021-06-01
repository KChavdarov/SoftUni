const fs = require('fs/promises');
const path = require('path');
const { render } = require('../util/template.js');
const defaultHandler = require('./default.js');

async function catController(req, res) {
    try {
        const filePath = path.normalize(path.join(__dirname, '../data/breeds.json'));
        let breeds = await fs.readFile(filePath);
        breeds = JSON.parse(breeds);
        breeds = breeds.map(a => `<option value="${a}">${a}</option>`);
        const template = await render('addCat', { 'breeds': breeds.join('/n') });
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