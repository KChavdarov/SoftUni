import { getRecent } from '../api/data.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = (recipes, onClick) => html`
    <section id="home">
        <div class="hero">
            <h2>Welcome to My Cookbook</h2>
        </div>
        <header class="section-title">Recently added recipes</header>
        <div class="recent-recipes" @click=${onClick}>${recipes.map(articleTemplate)}</div>
        <footer class="section-title">
            <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
        </footer>
    </section>
`

const articleTemplate = (recipe) => html`
    <article class="recent" data-id=${recipe._id}>
        <div class="recent-preview">
            <img .src=${recipe.img}>
        </div>
        <div class="recent-title">
            ${recipe.name}
        </div>
    </article>
`

export function setupHome(section, nav) {
    return showHome;

    async function showHome() {
        const recipes = await getRecent();
        return homeTemplate(recipes, onClick);
    }

    function onClick(event) {
        let article = event.target;
        while (!article.classList.contains('recent') && article != event.currentTarget) {
            article = event.target.parentElement;
        }
        const id = article.dataset.id;
        if (id) {
            nav.goTo('details', id);
        }
    }
}