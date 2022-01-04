import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';

const createTemplate = (onSubmit) => html `
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form @submit=${onSubmit} id="create" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>`;

export async function createPage(context) {
    if (!context.user) {
        return context.page.redirect('/login');
    }

    context.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const categories = ['JavaScript', 'C#', 'Java', 'Python'];
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();
        const data = { title, category, content };

        if (Object.values(data).some(a => a == '')) {
            return alert('Please fill in all fields');
        }
        if (!categories.includes(category)) {
            return alert('Category must be one of "JavaScript", "C#", "Java", or "Python"');
        };

        await createItem(data);
        context.page.redirect('/home');
    }
}