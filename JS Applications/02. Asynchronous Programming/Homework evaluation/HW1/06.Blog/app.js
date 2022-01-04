function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts)
    document.getElementById('btnViewPost').addEventListener('click', displayPost)
    document.getElementById('btnViewPost').disabled = true;

}

attachEvents();

async function getPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    let response = await fetch(url);
    const data = await response.json();

    let select = document.getElementById('posts');
    select.innerHTML = '';
    document.getElementById('btnViewPost').disabled = false;

    Object.values(data).map(createOption).forEach(op => select.appendChild(op));
}

async function displayPost() {
    const postId = document.getElementById('posts').value;
    await getCommentsByPostId(postId);
}

function createOption(post) {
    let result = document.createElement('option');

    result.textContent = post.title;
    result.value = post.id;

    return result;
}

async function getCommentsByPostId(postId) {
    const postsUrl = `http://localhost:3030/jsonstore/blog/posts/` + postId;
    let postResponse = await fetch(postsUrl);
    let postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;
    let commentsResponse = await fetch(commentsUrl);
    let commentsData = await commentsResponse.json();

    let comments = Object.values(commentsData).filter(comment => comment.postId == postId);

    const commentsList = document.getElementById('post-comments');
    commentsList.innerHTML = '';

    comments.map(createComment).forEach(comment => commentsList.appendChild(comment))
}

function createComment(comment) {
    const result = document.createElement('li');;
    result.textContent = comment.text;
    result.id = comment.id;
    return result;
}
