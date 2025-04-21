const fs = require('fs/promises');

async function load(name) {
    try {
        const template = await fs.readFile(`./views/${name}.html`)
        return template.toString();
    } catch (error) {
        return '';
    }
};

async function render(page, title) {
    const layout = await load('layout');
    return layout.replace('{{title}}', title).replace('{{page}}', page);
}

function interpolate(html, context) {
    Object.entries(context).forEach(([k, v]) => {
        html = html.replaceAll(`{{${k}}}`, v);
    })
    return html;
}

module.exports = { load, interpolate, render };