import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItemById, getItemById } from '../api/data.js';

const detailsTemplate = (article, onDelete, user) => html `
<div class="container details">
    <div class="details-content">
        <h2>${article.title}</h2>
        <strong>${article.category}</strong>
        <p>${article.content}</p>
        <div class="buttons">
            ${user.id == article.author ? 
            html`
            <a @click=${onDelete} href="/javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${article._id}" class="btn edit">Edit</a>` : 
            html`
            <a href="/home" class="btn edit">Back</a>
            `}
        </div>
    </div>
</div>`;

export async function detailsPage(context) {
    if (!context.user) {
        return context.page.redirect('/login');
    }

    const itemId = context.params.id;
    const article = await getItemById(itemId);

    context.render(detailsTemplate(article, onDelete, context.user));

    async function onDelete(event) {
        event.preventDefault();
        const confirmed = confirm('Are you sure you want to delete this article?');
        if (confirmed) {
            await deleteItemById(itemId);
            context.page.redirect('/home');
        }
    }
}