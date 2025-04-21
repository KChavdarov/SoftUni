const template = require('../util/template.js');

async function about(req, res) {
    const page = await template.load('about');
    res.statusCode = 200;
    res.write(await template.render(page, 'My page - About'));
    res.end();
}

module.exports = about;