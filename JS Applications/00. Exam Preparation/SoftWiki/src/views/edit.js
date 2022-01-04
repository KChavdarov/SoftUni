import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, updateItemById } from '../api/data.js';

const editTemplate = (article, onSubmit) => html `
<div class="container">
    <form @submit=${onSubmit} action="#" method="">
        <fieldset>
            <legend>Edit article</legend>
            <p class="field title">
                <input type="text" name="title" id="title" .value="${article.title}">
                <label for="title">Title:</label>
            </p>

            <p class="field category">
                <input type="text" name="category" id="category" .value="${article.category}">
                <label for="category">Category:</label>
            </p>
            <p class="field content">
                <textarea name="content" id="content" .value=${article.content}></textarea>
                <label for="content">Content:</label>
            </p>

            <p class="field submit">
                <button class="btn submit" type="submit">Edit</button>
            </p>
        </fieldset>
    </form>
</div>`;

export async function editPage(context) {
    if (!context.user) {
        return context.page.redirect('/login');
    }

    const itemId = context.params.id;
    console.log(itemId);
    const article = await getItemById(itemId);
    console.log(article);

    if (context.user.id != article.author) {
        return context.page.redirect('/home');
    }

    context.render(editTemplate(article, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();
        const author = context.user.id;
        const authorEmail = context.user.email;
        const data = { title, category, content };

        if (Object.values(data).some(a => a == '')) {
            return alert('Please fill in all fields');
        }

        data.author = author;
        data.authorEmail = authorEmail;

        await updateItemById(itemId, data);
        event.target.reset();
        context.page.redirect('/details/' + itemId);
    }
}