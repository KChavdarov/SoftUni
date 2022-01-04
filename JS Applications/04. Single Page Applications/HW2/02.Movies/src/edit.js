import { showDetails } from './details.js'


let main;
let section;
let movieId;

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);

}

export async function showEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);

    movieId = id;
}

async function onSubmit() {
    event.preventDefault();
    const formData = new FormData(event.target);
    const editMovie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    }
    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        return alert('You\'re not logged in!');
    }

    try {
        const response = await fetch('http://localhost:3030/data/movies/' + movieId, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(editMovie)
        });

        if (response.status == 200) {
            showDetails(movieId);
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (err) {
        alert(err.message);
        console.error(err.message);
    }
}
