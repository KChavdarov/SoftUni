import {e} from './dom.js'
import {showHome} from "./home.js";
import {showEdit} from "./edit.js";

let main;
let section;

async function getLikesByMovieId(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    return await response.json();

}

async function getOwnLikesByMovieId(id) {
    const userId = sessionStorage.getItem('userId');
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    return await response.json();

}

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    return await response.json();

}

async  function onDelete(e, id) {
    e.preventDefault();
    const confirmed = confirm('Do you want to delete this movie?');

    if (confirmed) {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'delete',
            headers: {'X-Authorization': sessionStorage.getItem('authToken')}
        });
        if (response.ok) {
            alert('Movie deleted');
            showHome()
        }else {
            const error = await response.json();
            alert(error.message);
        }
    }
}

async  function onEdit(e, id) {
    e.preventDefault();
    showEdit(id)
}

function createMovieCard(movie, likes, ownLike) {
    const controls = e('div', {className: 'col-md-4 text-center'},
        e('h3', {className: 'my-3'}, 'Movie Description'),
        e('p', {}, movie.description),
    );

    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        if (userId === movie._ownerId) {
            controls.appendChild(e('a', {className: 'btn btn-danger', href: '#', onclick: (e) => onDelete(e, movie._id)}, 'Delete'));
            controls.appendChild(e('a', {className: 'btn btn-warning', href: '#', onclick: (e) => onEdit(e, movie._id)}, 'Edit'));
        } else if (ownLike.length === 0){
            controls.appendChild(e('a', {className: 'btn btn-primary', href: '#', onClick: likeMovie}, 'Like'));
        }
    }
    const likesSpan = e('span', {className: 'enrolled-span'}, likes + ' like' + (likes === 1 ? '' : "s"))
    controls.appendChild(likesSpan);

    const element = document.createElement('div');
    element.className = 'container';
    element.appendChild(e('div', {className: 'row bg-light text-dark'},
        e('h1', {}, `Movie title: ${movie.title}`),
        e('div', {className: 'col-md-8'}, e('img', {className: 'img-thumbnail', src: movie.img})),
        controls
    ));

    return element;

    async function likeMovie(event) {
        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({movieId: movie._id})
        });
        if (response.ok) {
            event.target.remove();
            likes++;
            likesSpan.textContent = likes + ' like' + (likes === 1 ? '' : "s");
        }
    }
}


export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = 'Waiting...';
    main.innerHTML = '';
    main.appendChild(section);

    const [movie, likes, ownLike] = await Promise.all([
        getMovieById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id)
    ]);
    const card = createMovieCard(movie, likes, ownLike);
    section.innerHTML = '';
    section.appendChild(card);
}