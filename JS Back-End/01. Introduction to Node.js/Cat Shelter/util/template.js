const fs = require('fs/promises');
const path = require('path');

async function loadTemplate(name) {
    const pathname = path.normalize(path.join(__dirname, `../views/${name}.html`));
    try {
        const template = await fs.readFile(pathname);
        return template.toString();
    } catch (err) {
        return err;
    }
}

async function render(name, context = {}) {
    try {
        let template = await loadTemplate(name);
        const properties = Object.keys(context);
        for (const prop of properties) {
            template = template.replace(new RegExp(`{{${prop}}}`, 'g'), context[prop]);
        }
        return template;
    } catch (err) {
        return err;
    }
}

module.exports = { loadTemplate, render };