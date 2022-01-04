import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { deleteItemById, getCommentsByItemId, getItemById, getLikeCountByItemId, getOwnLike } from '../api/data.js';
import { loader } from '../common/loader.js';
import { likesSection } from './likes.js';
import { showModal } from '../common/modal.js';
import { showComments } from './comments.js';

const detailsTemplate = (meme, onDelete, memeLikesSection, commentsSection, isOwner) => html `
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${meme.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner ? html`
            <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button class="button danger" @click=${onDelete} >Delete</button>`: ''}
            ${memeLikesSection}
        </div>
    </div>
    ${commentsSection}
</section>`;

export function detailsPage(context) {
    const memeId = context.params.id;
    const user = context.user;
    context.render(until(loadMeme(), loader));

    async function loadMeme() {
        const [meme, likes, comments, [ownLike]] = await Promise.all([
            getItemById(memeId),
            getLikeCountByItemId(memeId),
            getCommentsByItemId(memeId),
            getOwnLike(memeId, user)
        ]);

        const isUser = user !== null;
        const isOwner = user ? meme._ownerId == user.id : false;

        const memeLikesSection = likesSection(memeId, isUser, isOwner, ownLike, likes);
        const commentsSection = showComments(memeId, comments, isUser, user);

        return detailsTemplate(meme, onDelete, memeLikesSection, commentsSection, isOwner);
    }

    async function onDelete() {
        const confirmed = await showModal('Are you sure you want to delete this meme?');
        if (confirmed) {
            await deleteItemById(memeId);
            context.page.redirect('/catalog');
        }
    }
}