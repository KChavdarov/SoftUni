const layout = require('../views/layout.js');

const catalogPage = `
<div>
    <h1>Catalog</h1>
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
    </ul>
</div>
`;

function catalogController(req, res) {
    res.write(layout(catalogPage, 'Catalog'));
    res.end();
}

module.exports = catalogController;