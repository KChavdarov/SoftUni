import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/data.js';

const catalogTemplate = (shoes) => html `
<div class="shoes">
    ${shoes.length == 0 ? html`
    <span>No shoes to display. Be the first to create a new offer&hellip;</span>` :
    shoes.map(shoeTemplate)}
</div>`;

const shoeTemplate = (shoe) => html `
<div class="shoe">
    <img src="${shoe.imageUrl}">
    <h3>${shoe.brand} ${shoe.name}</h3>
    <a href="/details/${shoe._id}">Buy it for $${Number(shoe.price).toFixed(2)}</a>
</div>`;

export async function catalogPage(context) {
    if (!context.user) {
        context.page.redirect('/home');
    }

    const shoes = await getAllItems();
    context.render(catalogTemplate(shoes));
}