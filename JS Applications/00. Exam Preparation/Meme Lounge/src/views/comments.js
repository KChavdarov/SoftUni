import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { postComment } from '../api/data.js';

const commentsSection = document.createElement('div');
commentsSection.className = 'comments';

const content = (comments, isUser, onSubmit) => html `
<style>
    .comments {
        text-align:center;
        max-width: 50rem;
        margin: 3rem auto;
    }
    
    .comments form{
        padding: 1rem;
        border: 2px solid black;
        margin: 1rem;
        box-shadow: 2px 5px 13px 0px #989898;
        border-radius: 7px;
        overflow: hidden;
    }

    .comments textarea{
        width: 90%;
        margin: 1rem auto;
    }
    
    .comments input, textarea {
        display: block;
        margin: auto;
        box-shadow: none;
    }

    .comment{
        margin: 2rem 1rem;
        border: 2px solid black;
        border-radius: 7px;
        overflow: hidden;
        box-shadow: 2px 5px 13px 0px #989898;
    }

    .comment header{
        text-transform: capitalize;
        font-weight: bold;
        background-color: #007bff;
        color: white;
    }
    
    .comment p{
        text-align: left;
        padding: 0.5rem;
    }

</style>
    ${isUser? html`
<div>
    <div id="create-comment">
        <form @submit=${onSubmit}>
            <h3>New Comment</h3>
            <textarea name="text" placeholder="Type comment here..."></textarea>
            <input class="button" type="submit">
        </form>
    </div>` : ''}
    ${comments.map(commentTemplate)}
</div>`;

const commentTemplate = (comment) => html `
<div class="comment">
    <header>${comment.author.username}</header>
    <p>${comment.text}</p>
</div>`;


export function showComments(itemId, comments, isUser, user) {
    const username = isUser ? user.username : undefined;
    render(content(comments, isUser, onSubmit), commentsSection);
    return commentsSection;

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const text = formData.get('text');

        const newComment = await postComment(itemId, text);
        newComment.author = { username };

        event.target.reset();
        comments.unshift(newComment);
        render(content(comments, isUser, onSubmit), commentsSection);
    }
}