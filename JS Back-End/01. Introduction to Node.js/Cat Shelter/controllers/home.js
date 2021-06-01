const {render} = require('../util/template.js');
const defaultHandler = require('./default.js');

async function homeController(req, res) {
    try {
        const template = await render('index');
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