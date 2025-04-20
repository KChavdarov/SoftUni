const layout = require('./layout.js');

const homePage = `
    <h1>Welcome to my page</h1>
    <p>Page content</p>
`

module.exports = layout('welcome', homePage);