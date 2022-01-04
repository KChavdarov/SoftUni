import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { classMap } from '../../node_modules/lit-html/directives/class-map.js';
import { updateItemById, getItemById } from '../api/data.js';
import { loader } from '../common/loader.js';
import { notify } from '../common/notification.js';

const editTemplate = (meme, onSubmit, fieldsError) => html `
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" class=${fieldsError ? classMap({error: fieldsError.title}): ''} type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" class=${fieldsError ? classMap({error: fieldsError.description}): ''} placeholder="Enter Description" name="description" .value=${meme.description} ></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" class=${fieldsError ? classMap({error: fieldsError.imageUrl}): ''} type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;



export async function editPage(context) {
    if (context.user === null) {
        return context.page.redirect('/login');
    }

    const memeId = context.params.id;
    context.render(until(showEdit(), loader));

    async function showEdit() {
        const meme = await getItemById(memeId);
        return editTemplate(meme, onSubmit);

        async function onSubmit(event) {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);

            const title = formData.get('title').trim();
            const description = formData.get('description').trim();
            const imageUrl = formData.get('imageUrl').trim();

            const fieldsError = {
                title: title == '',
                description: description == '',
                imageUrl: imageUrl == '',
            };

            if (Object.values(fieldsError).some(f => f)) {
                context.render(editTemplate(meme, onSubmit, fieldsError));
                return notify('Please fill in all fields');
            }

            context.render(loader);
            await updateItemById(memeId, { title, description, imageUrl });
            form.reset();
            context.page.redirect('/details/' + memeId);
        }
    }
}