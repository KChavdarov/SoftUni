import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecent } from '../api/data.js';

const homeSectionTemplate = (recentRecipes, onClick, goTo) => html `
<section id="home">
    <div class="hero">
        <h2>Welcome to My Cookbook</h2>
    </div>
    <header class="section-title">Recently added recipes</header>
    <div class="recent-recipes" @click=${onClick}>${recentRecipes}</div>
    <footer class="section-title">
        <p>Browse all recipes in the <a href="/catalog" @click=${(event)=> {event.preventDefault(); goTo('catalog');}} >Catalog</a></p>
    </footer>
</section>`;

const recipePreviewTemplate = (recipe) => html `
<article data-id=${recipe._id} class="recent" >    
    <div class="recent-preview"><img src=${recipe.img}></div>
    <div class="recent-title">${recipe.name}</div>
</article>`;

const spacerTemplate = () => html `
<div class="recent-space"></div>`;


export function setupHome(nav) {

    return showHome;

    async function showHome() {
        const recipes = await getRecent();
        const cards = recipes.map(recipePreviewTemplate);
        const result = [];

        cards.forEach((card, i, arr) => {
            result.push(card);
            if (i < arr.length - 1) {
                result.push(spacerTemplate());
            }
        });

        const section = homeSectionTemplate(result, onClick, nav.goTo);

        return section;
    }

    function onClick(event) {
        let article = event.target;
        while (article.tagName != 'ARTICLE' && article != event.currentTarget) {
            article = article.parentNode;
        }
        if (article.dataset.id) {
            nav.goTo('details', article.dataset.id);
        }
    }
}