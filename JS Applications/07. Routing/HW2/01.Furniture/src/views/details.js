import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { deleteFurniture, getFurnitureById } from '../api/data.js';

const template = (furniture, ctx) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${furniture.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${furniture.make}</span></p>
        <p>Model: <span>${furniture.model}</span></p>
        <p>Year: <span>${furniture.year}</span></p>
        <p>Description: <span>${furniture.description}</span></p>
        <p>Price: <span>${furniture.price}</span></p>
        <p>Material: <span>${furniture.material}</span></p>
        ${checkForOwner(furniture, ctx)}
    </div>
</div>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const furniture = await getFurnitureById(id);

    render(template(furniture, ctx), document.getElementById('container'))
}

function checkForOwner(furniture, ctx) {
    const userId = sessionStorage.getItem('userId');

    return userId == furniture._ownerId ? html `
    <div>
        <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
        <a @click="${e => onDelete(e, ctx)}" class="btn btn-red">Delete</a>
    </div>` : html ``
}

async function onDelete(event, ctx) {
    event.preventDefault();
    const id = ctx.params.id;

    const confirmed = confirm('Are you sure you want to delete this item?');

    if (confirmed) {
        await deleteFurniture(id);
        ctx.page.redirect('/');
    }   
}