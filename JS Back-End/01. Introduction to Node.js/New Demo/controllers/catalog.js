const items = require('../models/items.js');
const template = require('../util/template.js');

async function catalog(req, res) {
    const html = await template.load('catalog');
    const contents = items.getAll().map(([a, b]) => `<li id="${a}">${b}</li>`).join('\n');
    const page = template.interpolate(html, { contents });
    res.statusCode = 200;
    res.write(await template.render(page, 'My page - Catalog'));
    res.end();
}

module.exports = catalog;