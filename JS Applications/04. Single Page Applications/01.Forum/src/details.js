let container;
let section;
let form;
let header;
let formContainer;
let userInput;

async function getPostData(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    const post = await response.json();
    return post;
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = [...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});
    if (Object.values(data).some(a => a === '')) {
        return alert('All fields are mandatory');
    }
    Object.assign(data, { createDate: new Date().toLocaleString() });

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.status == 200) {
            const data = await response.json();
            form.querySelector('textarea').value = '';
            showDetails(data.postId);
        } else {
            throw new Error(await response.json());
        }
    } catch (err) {
        console.error(err.message);
    }

}

function createCommentCard(comment) {
    const card = document.createElement('div');
    card.className = 'comment';
    card.innerHTML = `
    <div class="comment">
    <header class="header">
        <p><span>${comment.username}</span> posted on <time>${comment.createDate}</time></p>
    </header>
    <div class="comment-main">
        <div class="userdetails">
            <img src="./static/profile.png" alt="avatar">
        </div>
        <div class="post-content">
            <p>${comment.postText}</p>
        </div>
    </div>`;
    return card;
}

async function InitializePost(id) {
    const data = await getPostData(id);
    header.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <h2>${data.topicName}</h2>
            <p>Date: <time>${data.createDate}</time></p>
        </div>
    </div>`;

    return createCommentCard(data);
}

function updateCommentForm(id) {
    form.querySelector('input[name="postId"]').value = id;
    form.querySelector('textarea').value = '';
    return formContainer;
}

async function getComments(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    const commentsData = await response.json();
    const comments = [...Object.values(commentsData)].filter(c => c.postId == id);
    return comments.map(c => createCommentCard(c));
}

export function setupDetails(containerTarget, sectionTarget) {
    container = containerTarget;
    section = sectionTarget;
    header = section.querySelector('div.topic-title');
    formContainer = section.querySelector('div.answer-comment');
    form = formContainer.querySelector('form');
    userInput = form.querySelector('input[name="username"]');
    form.addEventListener('submit', onSubmit);
    userInput.addEventListener('change', () => section.querySelector('#postingUser').textContent = userInput.value || 'Current User');
}

export async function showDetails(id) {
    container.innerHTML = '';
    container.appendChild(section);
    section.innerHTML = '<h2>Loading data...</h2>';
    section.appendChild(header);
    const fragment = document.createDocumentFragment();
    fragment.append(header);
    fragment.appendChild(await InitializePost(id));
    (await getComments(id)).forEach(c => (fragment.appendChild(c)));
    fragment.appendChild(updateCommentForm(id));
    section.innerHTML = '';
    section.appendChild(fragment);
}