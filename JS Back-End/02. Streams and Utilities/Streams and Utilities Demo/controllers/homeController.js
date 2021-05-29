const layout = require('../views/layout.js');

const homePage = `
<div>
    <h1>Welcome</h1>
    <p>Welcome page</p>
</div>
`;

function homeController(req, res) {
    res.write(layout(homePage));
    res.end();
}

module.exports = homeController;