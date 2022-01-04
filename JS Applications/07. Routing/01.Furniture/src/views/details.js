import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { deleteItemById, getItemById } from '../api/data.js';
import { createModal } from './modal.js';

const detailsTemplate = (item, isOwner, onDelete) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${item.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${Number(item.price).toFixed(2)}</span></p>
        <p>Material: <span>${item.material}</span></p>
        ${isOwner?
        html`<div>
            <a href=/edit/${item._id} class="btn btn-info">Edit</a>
            <a href="#" @click=${onDelete} class="btn btn-red">Delete</a>
        </div>` : ''}
    </div>
</div>`;

async function createItemCard(itemPromise, onDelete) {
    const item = await itemPromise;
    const isOwner = sessionStorage.getItem('userId') === item._ownerId;
    return detailsTemplate(item, isOwner, onDelete);
}

export function detailsPage(context) {
    const id = context.params.id;
    const itemPromise = getItemById(id);
    context.render(until(createItemCard(itemPromise, onDelete), html `<h2>Loading&hellip;</h2>`));

    async function onDelete(event) {
        event.preventDefault();
        const confirmed = await createModal('Are you sure you want to delete this item?');

        if (confirmed) {
            await deleteItemById(id);
            context.page.redirect('/');
        }
    }
}