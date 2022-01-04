import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItemById, deleteLike, getItemById, getLikesCountById, getUserLike, postLike } from '../api/data.js';

const detailsTemplate = (movie, likes, isUser, isOwner, isLiked, onDelete, toggleLike) => html `
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${movie.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>
                ${userControls(movie, isUser, isOwner, isLiked, onDelete, toggleLike)}
                <span class="enrolled-span">Liked ${likes}</span>
            </div>
        </div>
    </div>
</section>`;

const userControls = (movie, isUser, isOwner, isLiked, onDelete, toggleLike) => {
    if (!isUser) {
        return '';
    } else {
        return html `
        ${isOwner ? 
        html`
        <a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>
        <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` : 
        html`
        <a @click=${toggleLike} class="btn btn-primary" href="javascript:void(0)">${isLiked ? 'Unlike' : 'Like'}</a>`}`;
    }
};

export async function detailsPage(context) {
    const isUser = context.user != undefined;
    const itemId = context.params.id;
    const movie = await getItemById(itemId);
    const isOwner = context.user && context.user.id == movie._ownerId;
    let ownLike = context.user ? await getUserLike(itemId, context.user.id) : [];
    let likes = await getLikesCountById(itemId);
    let isLiked = ownLike.length > 0;

    update();

    function update() {
        context.render(detailsTemplate(movie, likes, isUser, isOwner, isLiked, onDelete, toggleLike));
    }

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this movie?');
        if (confirmed) {
            await deleteItemById(itemId);
            context.page.redirect('/catalog');
        }
    }

    async function toggleLike() {
        if (isLiked) {
            await deleteLike(ownLike[0]._id);
            likes--;
        } else {
            await postLike({ movieId: itemId });
            likes++;
        }
        isLiked = !isLiked;
        update();
    }
}