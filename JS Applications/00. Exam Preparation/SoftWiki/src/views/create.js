import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';

const createTemplate = (onSubmit) => html `
<div class="container">
    <form @submit=${onSubmit} action="#" method="">
        <fieldset>
            <legend>Create article</legend>
            <p class="field title">
                <input type="text" id="title" name="title" placeholder="Arrays">
                <label for="title">Title:</label>
            </p>

            <p class="field category">
                <input type="text" id="category" name="category" placeholder="JavaScript">
                <label for="category">Category:</label>
            </p>
            <p class="field content">
                <textarea name="content" id="content"></textarea>
                <label for="content">Content:</label>
            </p>

            <p class="field submit">
                <button class="btn submit" type="submit">Create</button>
            </p>

        </fieldset>
    </form>
</div>`;

export async function createPage(context) {
    const user = context.user;
    if (!user) {
        return context.page.redirect('/login');
    }
    context.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();
        const author = user.id;
        const authorEmail = user.email;
        const data = { title, category, content };

        if (Object.values(data).some(a => a == '')) {
            return alert('Please fill in all fields');
        }
        data.author = author;
        data.authorEmail = authorEmail;

        await createItem(data);
        event.target.reset();
        context.page.redirect('/home');
    }
}