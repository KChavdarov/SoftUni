import { showDetails } from './details.js';

let main;
let section;
let form;

async function onSubmit(id, data) {
    const response = await fetch('http://localhost:3030/data/movies/' + id, {
        method: 'PUT',
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

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();
    return data;
}

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    form = section.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const id = formData.get('id');
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('imageUrl');
        if ([...formData.entries()].some(a => a == '')) {
            return alert('All fields are mandatory!');
        }
        const data = { title, description, img, _ownerId: sessionStorage.getItem('userId') };
        onSubmit(id, data);
    });
}

export async function showEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);
    const movie = await getMovieById(id);
    form.querySelector('input[name="id"]').value = id;
    form.querySelector('input[name="title"]').value = movie.title;
    form.querySelector('textarea[name="description"]').value = movie.description;
    form.querySelector('input[name="imageUrl"]').value = movie.img;
}