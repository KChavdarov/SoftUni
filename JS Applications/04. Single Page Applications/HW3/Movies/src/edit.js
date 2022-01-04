import {showDetails} from './details.js';

let id;
let main;
let section;

async function onSubmit(event, id) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const movie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    };

    if (movie.title === '' || movie.description === '' || movie.img === '') {
        return alert('All fields are required!');
    }

    const response = await fetch('http://localhost:3030/data/movies/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    });

    if (response.ok) {
        const movie = await response.json();
        showDetails(movie._id);
    } else {
        const error = await response.json();
        alert(error.message)
    }
}

export function  setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', (e)=>onSubmit(e, id));
}

export  async  function showEdit(idMovie) {
    main.innerHTML = '';
    id = idMovie;

    const movie = await getMovieById(id)

    section.querySelector('#title').value = movie.title;
    section.querySelector('#description').value = movie.description;
    section.querySelector('#imageUrl').value = movie.img;
    main.appendChild(section);

}

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    if (response.ok) {
        return await response.json();

    } else {
        const error = await response.json();
        alert(error.message)
    }


}