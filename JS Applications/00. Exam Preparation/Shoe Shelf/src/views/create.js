import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';

const createTemplate = (onCreate) => html `
<h1>Create New Offer</h1>
<p class="message"></p>
<form @submit=${onCreate}>
    <div>
        <input name="name" type="text" placeholder="Name...">
    </div>
    <div>
        <input name="price" type="number" placeholder="Price...">
    </div>
    <div>
        <input name="imageUrl" type="text" placeholder="Image url...">
    </div>
    <div>
        <textarea name="description"  placeholder="Give us some description about this offer..."></textarea>
    </div>
    <div>
        <input name="brand"  type="text" placeholder="Brand...">
    </div>
    <div>
        <button>Create</button>
    </div>
</form>`;

export async function createPage(context) {
    context.render(createTemplate(onCreate));

    async function onCreate(event) {
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
        shoeData.sales = [];
        await createItem(shoeData);
        event.target.reset();
        context.page.redirect('/catalog');
    }
}