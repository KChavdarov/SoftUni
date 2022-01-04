import { showPostPreview } from './postsPreview.js';

let container;
let main;
let section;
let form;

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});
    if (Object.values(data).some(a => a === '')) {
        return alert('All fields are mandatory');
    }
    Object.assign(data, { createDate: new Date().toLocaleString() });

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.status == 200) {
            form.reset();
            showPostPreview();
        } else {
            throw new Error(await response.json());
        }
    } catch (err) {
        console.error(err.message);
    }
}

export function setupCreatePost(containerTarget, mainTarget, sectionTarget) {
    container = containerTarget;
    main = mainTarget;
    section = sectionTarget;
    form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);
    form.querySelector('button.cancel').addEventListener('click', event => { event.preventDefault(); form.reset(); });
};

export function showCreatePost() {
    container.innerHTML = '';
    container.appendChild(main);
    main.innerHTML = '';
    main.appendChild(section);
    showPostPreview();
};