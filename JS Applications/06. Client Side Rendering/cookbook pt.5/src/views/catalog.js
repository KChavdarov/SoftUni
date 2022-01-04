import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecipes, getRecipeCount } from '../api/data.js';

const catalogTemplate = (content) => html `
<section id="catalog">${content}</section>`;

const previewTemplate = (recipe, goTo) => html `
<article class="preview" @click=${()=>goTo('details',recipe._id)}><div class="title"><h2>${recipe.name}</h2></div><div class="small"><img src=${recipe.img}></div></article>`;

const pagerTemplate = (page, pages, header, goTo) => {
    const content = [`Page ${page} of ${pages}`];
    if (page > 1) { content.unshift(html `<a class="pager" , href="/catalog" @click=${event => changePage(event, page-1)}>< Prev</a>`); }
    if (page < pages) { content.push(html `<a class="pager" , href="/catalog" @click=${event => changePage(event, page+1)}>Next ></a>`); }

    return header ? html `<header class=${'section-title'}>${content}</header>` : html `<footer class=${'section-title'}>${content}</footer>`;

    function changePage(event, newPage) {
        event.preventDefault();
        goTo('catalog', newPage);
    }
};

export function setupCatalog(nav) {
    
    return showCatalog;

    async function showCatalog(page = 1) {

        const recipes = await getRecipes(page);
        const count = await getRecipeCount();
        const pages = Math.ceil(count / 5);
        const cards = recipes.map(recipe => previewTemplate(recipe, nav.goTo));

        const content = [pagerTemplate(page, pages, true, nav.goTo), cards, pagerTemplate(page, pages, false, nav.goTo)];

        const section = catalogTemplate(content);
        return section;
    }
}