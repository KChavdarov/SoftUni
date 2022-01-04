import { showTopics } from "./topics.js";

let main;
let section;

export function setupForm(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);
    form.querySelector('.cancel').addEventListener('click', async (event) => {
        event.preventDefault();
        const form = event.target.parentNode.parentNode;
    
        if (event.target.className == 'cancel') {
            form.reset();
        }
    });
}

export async function showForm() {
    main.innerHTML = '';
    main.appendChild(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const topic = formData.get('topicName');
    const username = formData.get('username');
    const post = formData.get('postText');
    const date = new Date().toISOString();

    if (!topic || !username || !post) {
        return alert('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, username, post, date })
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    event.target.reset();
    showForm();
    showTopics();
}