import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, updateItem } from '../api/data.js';

const editTemplate = (car, onSubmit) => html `
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value="${car.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value="${car.model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value="${car.description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value="${car.year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="${car.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value="${car.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editPage(context) {
    if (!context.user) {
        return context.page.redirect('/login');
    }

    const itemId = context.params.id;
    const car = await getItemById(itemId);

    context.render(editTemplate(car, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const description = formData.get('description').trim();
        const year = Number(formData.get('year'));
        const imageUrl = formData.get('imageUrl').trim();
        const price = Number(formData.get('price'));

        const data = {
            brand,
            model,
            description,
            year,
            imageUrl,
            price,
        };

        if (Object.values(data).some(a => a === '')) {
            return alert('Please fill in all fields');
        }
        if (year < 0) {
            return alert('Please enter a valid year');
        }
        if (price < 0) {
            return alert('Please enter a valid price');
        }

        await updateItem(itemId, data);
        event.target.reset();
        context.page.redirect('/details/' + itemId);
    }
}