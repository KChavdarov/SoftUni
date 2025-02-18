const btnLoadPosts = document.getElementById('btnLoadPosts');
const postSelect = document.getElementById('posts');
const btnViewPost = document.getElementById('btnViewPost');
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');
const postComments = document.getElementById('post-comments');

let host = 'http://localhost:3030/jsonstore/blog';

btnViewPost.disabled = true;
btnLoadPosts.addEventListener('click', loadPosts);
btnViewPost.addEventListener('click', renderPost);

function renderOptions(post) {
    let option = document.createElement('option');
    option.textContent = post.title;
    option.value = post.id;
    postSelect.appendChild(option);
}

async function renderPost() {
    let postId = postSelect.value;
    let [post, comments] = await Promise.all([loadSinglePost(postId), loadPostComments(postId)]);
    postTitle.textContent = post.title;
    postBody.textContent = post.body;
    postComments.innerHTML = '';
    comments.map(c => {
        let li = document.createElement('li');
        li.textContent = c.text;
        return li;
    }).forEach(li => {
        postComments.appendChild(li);
    });
}

async function loadPosts() {
    postSelect.innerHTML = '';
    let posts = await fetchData(host + '/posts');
    Object.values(posts).map(renderOptions);
    btnViewPost.disabled = false;
}

async function loadSinglePost(postId) {
    return await fetchData(host + '/posts/' + postId);
}

async function loadPostComments(postId) {
    let comments = await fetchData(host + '/comments');
    return Object.values(comments).filter(c => c.postId == postId);
}

async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return data;
    } catch (err) {
        console.error(err.message);
    }
}

// const btnLoadPosts = document.getElementById('btnLoadPosts');
// const btnViewPost = document.getElementById('btnViewPost');
// const postSelect = document.getElementById('posts');
// const postTitle = document.getElementById('post-title');
// const postBody = document.getElementById('post-body');
// const postComments = document.getElementById('post-comments');
// btnLoadPosts.addEventListener('click', loadPosts);
// btnViewPost.addEventListener('click', viewPost);
// btnViewPost.disabled = true;

// async function loadPosts(event) {
//     const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
//     const postsData = await response.json();

//     postSelect.textContent = '';
//     Object.values(postsData).forEach(({ body, id, title }) => {
//         const entry = createElement('option', [`value=${id}`], title);
//         postSelect.appendChild(entry);
//     });
//     btnViewPost.disabled = false;
// }

// async function viewPost(event) {
//     const target = postSelect.value;
//     const [post, commentsData] = await Promise.all([
//         fetch(`http://localhost:3030/jsonstore/blog/posts/${target}`).then(response => response.json()),
//         fetch('http://localhost:3030/jsonstore/blog/comments').then(response => response.json())
//     ]);
//     const comments = Object.values(commentsData).filter(p => p.postId == target);

//     postTitle.textContent = post.title;
//     postBody.textContent = post.body;
//     postComments.textContent = '';
//     comments.forEach(({ id, postId, text }) => {
//         const comment = createElement('li', [`id=${id}`], text);
//         postComments.appendChild(comment);
//     });
// }

// function createElement(type, attributes = [], ...content) {
//     const result = document.createElement(type);
//     if (attributes.length > 0) {
//         attributes.forEach(attr => {
//             let [attribute, value] = attr.split('=');
//             result.setAttribute(attribute, value);
//         });
//     } content.forEach(e => {
//         if (typeof e == 'string') {
//             let text = document.createTextNode(e);
//             result.appendChild(text);
//         } else {
//             result.appendChild(e);
//         }
//     });
//     return result;
// }
