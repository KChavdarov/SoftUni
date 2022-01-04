import { showDetails } from './details.js';

let main;
let section;
let form;

async function getPosts() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const posts = await response.json();
    return posts;
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'topic-container';
    card.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2 data-id="${post._id}">${post.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${post.createDate}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${post.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return card;
}

async function topicActions(event) {
    if (event.target.tagName == 'H2') {
        event.preventDefault();
        const id = event.target.dataset.id;
        showDetails(id);
    }
}

export function setupPostPreview(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    form = section.querySelector('form');

    section.addEventListener('click', topicActions);
}

export async function showPostPreview() {
    section.innerHTML = '<h2>Loading Posts...</h2>';
    main.appendChild(section);
    const posts = await getPosts();
    const cards = [...Object.values(posts)].sort((a, b) => { return new Date(b.createDate) - new Date(a.createDate); }).map(p => createPostCard(p));
    section.innerHTML = '';
    if (cards.length === 0) {
        section.innerHTML = '<div style="text-align: center;"><h3>There are no posts in our forum yet.</h3><h3>You are welcome to create the first one.</h3></div>';
    } else {
        cards.forEach(c => { section.appendChild(c); });
    }
}