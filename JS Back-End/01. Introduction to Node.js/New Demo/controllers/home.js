const template = require('../util/template.js');

async function home(req, res) {
    const page = await template.load('home');
    res.statusCode = 200;
    res.write(await template.render(page, 'My page - Home'));
    res.end();
}

module.exports = home;