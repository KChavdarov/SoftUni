import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, updateItemById } from '../api/data.js';

const editTemplate = (movie, onSubmit) => html `
<section id="edit-movie">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Movie Title" .value="${movie.title}" name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${movie.description}></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" .value="${movie.img}" name="imageUrl">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <a href="/details/${movie._id}" type="submit" class="btn btn-warning">Cancel</a>
    </form>
</section>`;

export async function editPage(context) {
    const itemId = context.params.id;
    const movie = await getItemById(itemId);

    context.render(editTemplate(movie, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('imageUrl');
        const data = { title, description, img };

        if (Object.values(data).some(a => a == '')) {
            return alert('Please fill in all fields');
        }

        await updateItemById(itemId, data);
        context.page.redirect('/details/' + itemId);
    }
}