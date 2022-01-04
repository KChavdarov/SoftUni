import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { classMap } from '../../node_modules/lit-html/directives/class-map.js';
import { createItem } from '../api/data.js';
import { loader } from '../common/loader.js';
import { notify } from '../common/notification.js';

const createTemplate = (onSubmit, fieldsError) => html `
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" class=${fieldsError ? classMap({error: fieldsError.title}): ''} type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" class=${fieldsError ? classMap({error: fieldsError.description}): ''} placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" class=${fieldsError ? classMap({error: fieldsError.imageUrl}): ''} type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export async function createPage(context) {
    if (context.user === null) {
        return context.page.redirect('/login');
    }

    context.render(createTemplate(onSubmit));

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
            context.render(createTemplate(onSubmit, fieldsError));
            return notify('Please fill in all fields');
        }

        context.render(loader);
        await createItem({ title, description, imageUrl });
        form.reset();
        context.page.redirect('/catalog');
    }
}