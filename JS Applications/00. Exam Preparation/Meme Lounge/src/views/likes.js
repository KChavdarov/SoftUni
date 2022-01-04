import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { deleteLike, postLike } from '../api/data.js';

const likesTemplate = (isUser, isOwner, ownLike, likes, likeControls) => {

    let button;
    if (!isUser || isOwner) {
        button = '';
    } else if (ownLike) {
        button = html `<button id="unlikeBtn" href="javascript:void(0)" class="button" >Unlike</button>`;
    } else {
        button = html `<button id="likeBtn" href="javascript:void(0)" class="button" >Like</button>`;
    }
    return html `
    <div @click=${likeControls} id="likes">
        ${button}
        <span class="like-counter" >Likes: ${likes}</span>
    </div>`;
};

export function likesSection(memeId, isUser, isOwner, ownLike, likes) {

    return likesTemplate(isUser, isOwner, ownLike, likes, likeControls);

    async function likeControls(event) {
        if (event.target.id == 'likeBtn') {
            ownLike = await postLike(memeId);
            likes++;
            render(likesTemplate(isUser, isOwner, ownLike, likes), event.target.parentNode);
        } else if (event.target.id == 'unlikeBtn') {
            await deleteLike(ownLike._id);
            ownLike = undefined;
            likes--;
            render(likesTemplate(isUser, isOwner, ownLike, likes), event.target.parentNode);
        }
    }
}