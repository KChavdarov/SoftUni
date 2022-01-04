const container = document.querySelector('.container');

export async function showTopic(topic) {
    container.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'topic-content';
    div.innerHTML = `
    <div class="topic-title">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <h2>${topic.topic}</h2>
                    <p>Date: <time>${topic.date}</time></p>
                </div>
                <div class="subscribers">
                    <p>Subscribers: <span>0</span></p>
                </div>
        </div>
    </div>`;

    const commentForm = document.createElement('div');
    commentForm.className = 'answer-comment';
    commentForm.innerHTML = `
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div`;

    commentForm.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const text = formData.get('postText');
        const username = formData.get('username');

        if (!text || !username) {
            return alert('All fields are required!');
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, username, topicId: topic._id, date: new Date().toISOString() })
        });

        if (!response.ok) {
            const error = await response.json();
            return alert(error.message);
        }

        event.target.reset();
        showTopic(topic);
    });

    const comments = await getComments();
    Object.values(comments).filter(c => c.topicId == topic._id).map(createComment).forEach(comment => {
        div.appendChild(comment);
    });

    div.appendChild(commentForm);

    container.appendChild(div);
}

async function getComments() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    return data;
}

function createComment(comment) {
    const element = document.createElement('div');
    element.className = 'comment';
    element.innerHTML = `
    <header class="header">
        <p><span>${comment.username}</span> posted on <time>${comment.date}</time></p>
    </header>
    <div class="comment-main">
        <div class="userdetails">
            <img src="./static/profile.png" alt="avatar">
        </div>
        <div class="post-content">
            <p>${comment.text}</p>
        </div>
    </div>
    <div class="footer">
        <p><span>0</span> likes</p>
    </div>`;

    return element;
}