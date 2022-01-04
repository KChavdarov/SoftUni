import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, updateItemById } from '../api/data.js';

const editTemplate = (shoe, onEdit) => html `
<h1>Edit Offer</h1>
<p class="message"></p>
<form @submit=${onEdit}>
<div>
        <input name="name" type="text" placeholder="Name..." .value=${shoe.name}>
    </div>
    <div>
        <input name="price" type="number" placeholder="Price..." .value=${shoe.price}>
    </div>
    <div>
        <input name="imageUrl" type="text" placeholder="Image url..." .value=${shoe.imageUrl}>
    </div>
    <div>
        <textarea name="description"  placeholder="Give us some description about this offer..." .value=${shoe.description}></textarea>
    </div>
    <div>
        <input name="brand"  type="text" placeholder="Brand..." .value=${shoe.brand}>
    </div>
    <div>
        <button>Edit</button>
    </div>
</form>`;

export async function editPage(context) {
    const itemId = context.params.id;
    const shoe = await getItemById(itemId);

    context.render(editTemplate(shoe, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name').trim();
        const price = Number(formData.get('price'));
        const imageUrl = formData.get('imageUrl').trim();
        const description = formData.get('description').trim();
        const brand = formData.get('brand').trim();

        const shoeData = {
            name,
            price,
            imageUrl,
            description,
            brand,
        };

        if (Object.values(shoeData).some(a => a == '')) {
            return alert('Please fill in all fields');
        }
        if (price < 0) {
            return alert('Please enter a valid price');
        }
        shoeData.sales = shoe.sales;
        await updateItemById(itemId, shoeData);
        event.target.reset();
        context.page.redirect('/details/' + itemId);
    }
}