import { html } from '../../node_modules/lit-html/lit-html.js'
import { getById, deleteById } from '../api/data.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="/images/chair.jpg" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            ${isOwner ? html`
            <div>
            <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
            <a href=”javascript:void(0)” class="btn btn-red" @click=${onDelete}>Delete</a>
            </div>` : ''}
        </div >
    </div >
`

export async function detailsPage(context, next) {
    const item = await getById(context.params.id);
    const isOwner = item._ownerId == sessionStorage.getItem('userId');
    context.renderView(detailsTemplate(item, isOwner, (event) => onDelete(event, context)));
}

async function onDelete(event, context) {
    event.preventDefault();
    const confirmed = confirm('Are you sure you want to delete this item?')
    if (confirmed) {
        await deleteById(context.params.id);
        context.page.redirect('/');
    }
}