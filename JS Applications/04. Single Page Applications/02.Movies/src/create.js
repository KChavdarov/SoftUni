import { showDetails } from './details.js';

let main;
let section;
let form;

async function onSubmit(data) {
    const response = await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('userToken')
        },
        body: JSON.stringify(data)
    });

    try {
        if (response.ok) {
            const movie = await response.json();
            form.reset();
            showDetails(movie._id);
        } else {
            const error = response.json();
            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.message);
    }
}

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    form = section.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('imageUrl');
        if ([...formData.entries()].some(a => a == '')) {
            return alert('All fields are mandatory!');
        }
        const data = { title, description, img, _ownerId: sessionStorage.getItem('userId') };
        onSubmit(data);
    });
}

export function showCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}