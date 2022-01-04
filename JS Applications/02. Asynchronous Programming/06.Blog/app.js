const btnLoadPosts = document.getElementById('btnLoadPosts');
const btnViewPost = document.getElementById('btnViewPost');
const postSelect = document.getElementById('posts');
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
const postComments = document.getElementById('post-comments');
btnLoadPosts.addEventListener('click', loadPosts);
btnViewPost.addEventListener('click', viewPost);
btnViewPost.disabled = true;

async function loadPosts(event) {
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const postsData = await response.json();

    postSelect.textContent = ''; 
    Object.values(postsData).forEach(({ body, id, title }) => {
        const entry = createElement('option', [`value=${id}`], title);
        postSelect.appendChild(entry);
    });
    btnViewPost.disabled = false;
}

async function viewPost(event) {
    const target = postSelect.value;
    const [post, commentsData] = await Promise.all([
        fetch(`http://localhost:3030/jsonstore/blog/posts/${target}`).then(response => response.json()),
        fetch('http://localhost:3030/jsonstore/blog/comments').then(response => response.json())
    ]);
    const comments = Object.values(commentsData).filter(p => p.postId == target);

    postTitle.textContent = post.title;
    postBody.textContent = post.body;
    postComments.textContent = '';
    comments.forEach(({ id, postId, text }) => {
        const comment = createElement('li', [`id=${id}`], text);
        postComments.appendChild(comment);
    });
}

function createElement(type, attributes = [], ...content) {
    const result = document.createElement(type);
    if (attributes.length > 0) {
        attributes.forEach(attr => {
            let [attribute, value] = attr.split('=');
            result.setAttribute(attribute, value);
        });
    } content.forEach(e => {
        if (typeof e == 'string') {
            let text = document.createTextNode(e);
            result.appendChild(text);
        } else {
            result.appendChild(e);
        }
    });
    return result;
}
