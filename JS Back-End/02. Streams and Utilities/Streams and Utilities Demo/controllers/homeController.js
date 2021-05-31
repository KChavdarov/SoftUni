const { loadTemplate, layout } = require('../util/template.js');

async function homeController(req, res) {
    const homePage = await loadTemplate('home');
    res.write(await layout(homePage));
    res.end();
}

module.exports = homeController;