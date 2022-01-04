import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItemById, getItemById, updateItemById } from '../api/data.js';

const detailsTemplate = (shoe, user, onClick) => html `
<div class="offer-details">
    <h1>${shoe.brand} ${shoe.name}</h1>
    <div class="info">
        <img src="${shoe.imageUrl}" alt="shoe photo">
        <div class="description">
            ${shoe.description}
            <br>
            <br>
            <p><strong>Buyers: </strong>${shoe.sales.length}</p>
            <br>
            <p class="price">$${Number(shoe.price).toFixed(2)}</p>
        </div>
    </div>
    ${user ? html`
    <div @click=${onClick} class="actions">
        ${user.id == shoe._ownerId ? html`
        <a href="/edit/${shoe._id}">Edit</a>
        <a href="javascript:void(0)" id="deleteBtn">Delete</a>` : 
        html`
            ${shoe.sales.includes(user.email) ? 
            html`
            <span>You bought it</span>`: 
            html`
            <a href="javascript:void(0)" id="purchaseBtn">Buy</a>
            `}
        ` }
    </div>
    ` : ''}
</div>`;

export async function detailsPage(context) {
    const itemId = context.params.id;
    const shoe = await getItemById(itemId);

    update();

    function update() {
        context.render(detailsTemplate(shoe, context.user, onClick));
    }

    async function onClick(event) {
        if (event.target.id == 'deleteBtn') {
            event.preventDefault();
            const confirmed = confirm('Are you sure you want to delete this listing?');
            if (confirmed) {
                await deleteItemById(itemId);
                context.page.redirect('/catalog');
            }
        } else if (event.target.id == 'purchaseBtn') {
            event.preventDefault();
            shoe.sales.push(context.user.email);
            await updateItemById(itemId, shoe);
            update();
        }
    }
}