const { getItems } = require('../util/catsDatabase.js');
const { render } = require('../util/template.js');
const defaultHandler = require('./default.js');

async function homeController(req, res) {
    const search = req.search || '';
    try {
        const cats = getItems();
        const filtered = Object.values(cats).filter(cat => Object.values(cat).toString().includes(search));
        const listItems = await Promise.all(filtered.map((cat) => render('catLi', cat)));
        const template = await render('index', { list: listItems.join('') });
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(template);
        res.end();
    } catch {
        return defaultHandler(req, res);
    }
}

module.exports = homeController;