import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { getRecipeById, deleteRecipeById } from '../api/data.js';
import { showComments } from './comments.js';


const detailsTemplate = (recipe, nav) => {
    const ingredients = recipe.ingredients.map(i => html `<li>${i}</li>`);
    const steps = recipe.steps.map(s => html `<p>${s}</p>`);

    let content = [html `
        <h2>${recipe.name}</h2>
        <div class="band">
            <div class="thumb"><img src=${recipe.img}></div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>${ingredients}</ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${steps}
        </div>`];

    const userId = sessionStorage.getItem('userId');

    if (userId != null && recipe._ownerId == userId) {
        content.push(html `
        <div class="controls">
            <button @click=${()=> nav.goTo('edit',recipe._id)}>\u270E Edit</button>
            <button @click=${onDelete}>\u2716 Delete</button>
        </div>`);
    }

    const result = html `
    <section id="details">
        <article>${content}</article>
        ${showComments(recipe, nav)}
    </section>`;

    return result;

    async function onDelete(event) {
        let article = event.target.parentNode;
        while (article.tagName != 'ARTICLE') {
            article = article.parentNode;
        }
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);

        if (confirmed) {
            try {
                await deleteRecipeById(recipe._id);
                render(html `<h2>Recipe Deleted</h2>`, article);
            } catch (err) {
                alert(err.message);
            }
        }
    }
};

export function setupDetails(nav) {

    return showDetails;

    async function showDetails(id) {
        const recipe = await getRecipeById(id);
        const section = detailsTemplate(recipe, nav);

        return section;
    }
}