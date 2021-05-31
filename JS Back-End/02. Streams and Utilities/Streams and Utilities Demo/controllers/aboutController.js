const { layout, loadTemplate } = require('../util/template.js');

async function aboutController(req, res) {
    const aboutPage = await loadTemplate('about');
    res.write(await layout(aboutPage, 'About us'));
    res.end();
}

module.exports = aboutController;