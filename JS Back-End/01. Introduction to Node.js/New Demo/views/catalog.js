const layout = require('./layout.js');

const homePage = (items = []) => `
    <h1>Catalog</h1>
    <form method="post" action="/create">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
    <label for="serial">Serial Number</label>
    <input type="text" name="serial" id="serial">
    <input type="submit" value="Create item">
    </form>
    <ul>
        ${items.map(([a, b]) => `<li id="${a}">${b}</li>`).join('\n')}
    </ul>
    <p>Page content</p>
`
module.exports = (items) => layout('catalog', homePage(items));