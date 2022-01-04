import { showTopic } from './topic.js';

let main;
let section;

export function setupTopics(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showTopics() {
    section.innerHTML = '';

    const topics = await getTopics();
    const fragment = document.createDocumentFragment();

    Object.values(topics).map(createTopic).forEach(topic => {
        fragment.appendChild(topic);
    });

    section.appendChild(fragment);
    main.appendChild(section);
}

async function getTopics() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    return data;
}

function createTopic(topic) {
    const element = document.createElement('div');
    element.className = 'topic-container';
    element.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${topic.topic}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${topic.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.username}</span></p>
                    </div>
                </div>
                <div class="subscribers">
                <p>Subscribers: <span>0</span></p>
                </div>
            </div>
        </div>
    </div>`;

    element.querySelector('.normal').addEventListener('click', async (event) => {
        event.preventDefault();
        await showTopic(topic);
    });

    return element;
}