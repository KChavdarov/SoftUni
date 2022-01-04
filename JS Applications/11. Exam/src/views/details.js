import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItemById, getItemById } from '../api/data.js';

const detailsTemplate = (article, isOwner, onDelete) => html `
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">
            ${isOwner? html `
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${article._id}" class="btn edit">Edit</a>
            ` : ''}
            <a href="/home" class="btn edit">Back</a>
        </div>
    </div>
</section>`;

export async function detailsPage(context) {
    const itemId = context.params.id;
    const article = await getItemById(itemId);
    const isOwner = context.user && context.user.id == article._ownerId;

    context.render(detailsTemplate(article, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this article?');
        if (confirmed) {
            await deleteItemById(itemId);
            context.page.redirect('/home');
        }
    }
}