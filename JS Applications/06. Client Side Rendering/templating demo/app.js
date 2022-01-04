// load dynamic content (articles)
// load template
// generate article HTML(using template and content)
// render HTML on the page


import { renderTemplate } from './engine.js';

const main = document.querySelector('main');

async function start() {
    const articles = await (await fetch('./articles.json')).json();
    const articleTemplate = await (await fetch('./article.html')).text();

    main.innerHTML = articles.map(a => renderTemplate(articleTemplate, a)).join('');
}

start();