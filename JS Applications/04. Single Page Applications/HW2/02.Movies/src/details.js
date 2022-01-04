import { e } from './dom.js';
import { showEdit } from './edit.js';
import { showHome } from './home.js';

async function getLikesByMovieId(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = response.json();
    return data;
}

async function getOwnLikesByMovieId(id) {
    const userId = sessionStorage.getItem('userId')
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    const data = response.json();
    return data;
}


async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = response.json();

    return data;
}


async function onDelete(event, id) {
    event.preventDefault();

    const confirmerd = confirm('Are you sure you want to delete this movie?')

    if (confirmerd) {
        const response = await fetch('http://localhost:3030/data/movies/' + id, {
            method: 'delete',
            headers: { 'X-Authorization': sessionStorage.getItem('authToken') }
        });
        if (response.ok) {
            alert('Movie Deleted');
            showHome();
        } else {
            const error = await response.json();
            alert(error.message);
        }
    }

}


function createMovieCard(movie, likes, ownLikes) {
    console.log(ownLikes)
    console.log(likes)
    const userId = sessionStorage.getItem('userId');
    const controls = e('div', { classname: 'col-md-4 text-center' },
        e('h3', { className: 'my-3' }, 'Movie Description'),
        e('p', {}, movie.description));

    if (userId != null) {
        if (userId == movie._ownerId) {
            controls.appendChild(e('a', { className: 'btn btn-danger', href: '#', onClick: ()=> onDelete(event, movie._id) }, 'Delete'));
            controls.appendChild(e('a', { className: 'btn btn-warning', href: '#', onClick: ()=>showEdit(movie._id) }, 'Edit'));
        } else if (ownLikes == 0) {
            controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: likeMovie }, 'Like'));
        }
    }
    const likesSpan = e('span', { className: 'enrolled-span' }, likes + ` like` + (likes == 1 ? '' : 's'))
    controls.appendChild(likesSpan);

    const element = document.createElement('div');
    element.className = 'container';
    element.appendChild(e('div', { className: 'row bg-light text-dark' },
        e('h1', {}, `Movie title: ${movie.title}`),
        e('div', { className: 'col-md-8' }, e('img', { className: 'img-thumbnail', src: movie.img, alt: `Movie` })),
        e('div', { className: 'col-md-4 text-center' },
            controls
        )));


    return element;
    async function likeMovie(e) {
        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({ movieId: movie._id })
        });
        if (response.ok) {
            e.target.remove();
            likes++;
            likesSpan.textContent = likes + `like` + (likes == 1 ? '' : 's');
            //increment likes counter
        }
    }
}

let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

}

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);
    const [movie, likes, ownLikes] = await Promise.all([
        getMovieById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id),
    ]);
    const card = createMovieCard(movie, likes, ownLikes);
    section.appendChild(card);

}

