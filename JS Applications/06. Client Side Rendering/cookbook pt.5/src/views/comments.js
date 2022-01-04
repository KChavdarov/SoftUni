import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { createComment, getCommentsById } from '../api/data.js';


const comment = (data) => html `
<li class="comment">
    <header>${data.author.email}</header>
    <p>${data.content}</p>
</li>`;

const commentList = (comments) => html `
<ul>
    ${comments.map(comment)}
</ul>`;

const commentsTemplate = (recipe, commentForm, comments) => html `
<div class="section-title">Comments for ${recipe.name}</div>
${commentForm}
<div class="comments">${until((async () => commentList(await comments))(), 'Loading comments...')}</div>`;

const commentForm = (active, showForm) => {
    let form;
    if (!active) {
        form = html `<form><button class="button" @click=${showForm} >Add comment</button></form>`;
    } else {
        form = html `
    <h2>New comment</h2>
    <form id="commentForm">
        <textarea name="content" placeholder="Type comment"></textarea>
        <input type="submit" value="Add comment">
    </form>`;
    }

    return html `<article class="new-comment">${form}</article>`;
};

function createForm(active, showForm) {
    const token = sessionStorage.getItem('userToken');
    if (token !== null) {
        return commentForm(active, showForm);
    } else {
        return '';
    }
}

export function showComments(recipe, nav) {
    let formActive = false;
    const commentsSection = document.createElement('div');
    const commentPromise = getCommentsById(recipe._id);
    nav.registerForm('commentForm', addComment);
    renderTemplate(commentPromise);

    return commentsSection;

    function renderTemplate(comments) {
        render(commentsTemplate(recipe, createForm(formActive, toggleForm), comments), commentsSection);
    }

    function toggleForm() {
        formActive = !formActive;
        renderTemplate(commentPromise);
    }


    async function addComment(data) {
        toggleForm();
        const comment = {
            content: data.content,
            recipeId: recipe._id,
        };
        createComment(comment);
        const comments = await getCommentsById(recipe._id);
        renderTemplate(comments);
    }
}