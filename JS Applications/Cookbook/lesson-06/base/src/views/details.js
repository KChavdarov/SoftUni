import { e } from '../dom.js';
import { getRecipeById, deleteRecipeById } from '../api/data.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const detailsTemplate = (recipe, isOwner, onEdit, onDelete) => html`
    <section id="details">
        <article>
            <h2>${recipe.name}</h2>
            <div class="band">
                <div class="thumb"><img .src=${recipe.img}></div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(i => html`<li>${i}</li>`)}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${recipe.steps.map(s => html`<p>${s}</p>`)}
            </div>
            ${isOwner ? html`
            <div class="controls">
                <button @click=${onEdit}>${'\u270E Edit'}</button>
                <button @click=${onDelete}>${'\u2716 Delete'}</button>
            </div>`: ''}
        </article>
    </section>
`

export function setupDetails(section, nav) {
    return showDetails;

    async function showDetails(id) {
        const recipe = await getRecipeById(id);
        const userId = sessionStorage.getItem('userId');
        const isOwner = userId != null && recipe._ownerId == userId;
        return detailsTemplate(recipe, isOwner, onEdit, onDelete);

        function onEdit() {
            nav.goTo('edit', recipe._id);
        }

        async function onDelete() {
            const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
            if (confirmed) {
                try {
                    await deleteRecipeById(recipe._id);
                    alert('recipe deleted');
                    nav.goTo('catalog')
                } catch (err) {
                    alert(err.message);
                }
            }
        }
    }
}
