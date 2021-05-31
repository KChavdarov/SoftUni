const fs = require('fs/promises');

async function loadTemplate(name) {
    try {
        const template = await fs.readFile(`./views/${name}.html`);
        return template.toString();
    } catch (err) {
        return '';
    }
}

async function layout(body, title = 'Welcome') {
    return render('layout', { title, body });
}

async function render(name, context) {
    let template = await loadTemplate(name);
    const properties = Object.keys(context);

    for (const prop of properties) {
        template = template.replace(new RegExp(`{{${prop}}}`, 'g'), context[prop]);
    }

    return template;
}

module.exports = {
    loadTemplate,
    layout,
    render
};