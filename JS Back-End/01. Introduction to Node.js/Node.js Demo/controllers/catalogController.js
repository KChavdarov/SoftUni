const layout = require('../views/layout.js');
const database = require('../util/database.js');

const catalogPage = (entries) => `
<div>
    <h1>Catalog</h1>
    <form method="POST" action="/create">
        <label>Item Name<input type="text" name="name"></label>
        <label>Serial Number<input type="text" name="sn"></label>
        <input type="submit">
    </form>
    <ul>
        ${entries.map(([id, item]) => `<li data-id="${id}">${item.name} - ${item.sn} <a href="/delete?id=${id}">Delete</a></li>`).join('')}
    </ul>
</div>
`;

function catalogController(req, res) {
    res.write(layout(catalogPage(Object.entries(database.database)), 'Catalog'));
    res.end();
}

module.exports = catalogController;