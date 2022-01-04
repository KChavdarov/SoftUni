import { html } from '../../node_modules/lit-html/lit-html.js'
import { getDetails, deleteRecord } from '../api/data.js'


const detailsTemplate = (data, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${data.img} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material}</span></p>
        ${sessionStorage.getItem('userId') == data._ownerId ? html`
        <div>
            <a href=${'/edit/' + data._id} class="btn btn-info">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
        </div>`: ''}
    </div>
</div>`;


export async function detailsPage(ctx) {
    const itemId = ctx.params.id;
    const data = await getDetails(itemId);

    ctx.render(detailsTemplate(data, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteRecord(itemId);
            ctx.page.redirect('/');
        }
    }
}