const layout = require('../views/layout.js');

const aboutPage = `
<div>
    <h1>About us</h1>
    <p>About page</p>
</div>
`;

function aboutController(req, res) {
    res.write(layout(aboutPage,'About us'));
    res.end();
}

module.exports = aboutController;