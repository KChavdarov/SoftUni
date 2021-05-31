const database = require('../util/database.js');
const { layout, render } = require('../util/template.js');

async function catalogController(req, res) {
    const catalogPage = await render('catalog', {
        items: Object.entries(database.database).map(([id, item]) => `<li data-id="${id}">${item.name} - ${item.sn} <a href="/delete?id=${id}">Delete</a></li>`).join('')
    });

    res.write(await layout(catalogPage, 'Catalog'));
    res.end();
}

module.exports = catalogController;