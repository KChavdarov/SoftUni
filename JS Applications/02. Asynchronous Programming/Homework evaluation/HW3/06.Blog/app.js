const urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
const urlComments = 'http://localhost:3030/jsonstore/blog/comments';
const selector = document.getElementById('posts')

function attachEvents() {
    //select buttons
    const btnLoad = document.getElementById('btnLoadPosts')
    const btnView = document.getElementById('btnViewPost')

    //add event for buttons;
    btnLoad.addEventListener('click', loadPosts);
    btnView.addEventListener('click', view);

}

attachEvents();


async function loadPosts() {
    const requestPosts = await fetch(urlPosts);
    const dataPosts = await requestPosts.json()

    const select = document.getElementById('posts');

    //add posts as options
    Object.values(dataPosts).map(createOption).forEach(o => select.appendChild(o));

}

function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;
    return result;
}

async function view() {
    const postId = document.getElementById('posts').value;


    const urlSelectedPost = 'http://localhost:3030/jsonstore/blog/posts/' + postId


    const [requestPost, requestComments] = await Promise.all([
        fetch(urlSelectedPost),
        fetch(urlComments)
    ]);

    const dataPost = await requestPost.json();

    const dataComments = await requestComments.json();

    document.getElementById('post-title').textContent = dataPost.title;
    document.getElementById('post-body').textContent = dataPost.body;
    const comments = Object.values(dataComments).filter(c => c.postId == postId)

    const commentsUl = document.getElementById('post-comments');

    commentsUl.innerHTML = '';

    comments.map(createComment).forEach(c => commentsUl.appendChild(c));
};

function createComment(comment) {
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}