import { showEdit } from './edit.js';
import { showHome } from './home.js';

let main;
let section;

async function deleteMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id, {
        method: 'DELETE',
        headers: { 'X-Authorization': sessionStorage.getItem('userToken') }
    });

    try {
        if (response.ok) {
            showHome();
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.message);
    }
}

async function likeMovie(id) {
    const response = await fetch('http://localhost:3030/data/likes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': sessionStorage.getItem('userToken') },
        body: JSON.stringify({ 'movieId': id })
    });
    return response;
}

async function unlikeMovie(id) {
    const response = await fetch('http://localhost:3030/data/likes/' + id, {
        method: 'DELETE',
        headers: { 'X-Authorization': sessionStorage.getItem('userToken') },
    });
    return response;
}

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();
    return data;
}

async function getLikesById(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();
    return data;
}

async function getOwnLikeById(id) {
    const userId = sessionStorage.getItem('userId');
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22 `);
    const data = await response.json();
    return data;
}

async function createMovieCard(movie, likes, ownLike) {
    const userId = sessionStorage.getItem('userId');
    const controls = [];
    if (userId !== null) {
        if (userId == movie._ownerId) {
            controls.push('<a class="btn btn-danger" href="#">Delete</a>');
            controls.push('<a class="btn btn-warning" href="#">Edit</a>');
        } else if (ownLike.length === 0) {
            controls.push('<a class="btn btn-primary" href="#">Like</a>');
        } else if (ownLike.length !== 0) {
            controls.push('<a class="btn btn-secondary" href="#">Unlike</a>');
        }
    }
    controls.push(`<span class="btn enrolled-span">${likes + ' like' + (likes == 1 ? '' : 's')}</span>`);

    const card = document.createElement('div');
    card.className = 'container';
    card.setAttribute('data-id', movie._id);
    card.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>

        <div class="col-md-8">
            <img class="img-thumbnail"
                src="${movie.img}" alt="Movie">
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>${movie.description}</p>
            ${controls.join('')}
        </div>
    </div>`;

    const likeCounter = card.querySelector('span.enrolled-span');

    card.addEventListener('click', async event => {
        if (event.target.classList.contains('btn-danger')) {
            event.preventDefault();
            const confirmed = confirm('Are you sure you want to delete this movie?');
            if (confirmed) {
                deleteMovieById(movie._id);
            }
        } else if (event.target.classList.contains('btn-warning')) {
            event.preventDefault();
            showEdit(movie._id);
        } else if (event.target.classList.contains('btn-primary')) {
            event.preventDefault();
            const response = await likeMovie(movie._id);
            try {
                if (response.ok) {
                    ownLike = [await response.json()];
                    const unlikeBtn = document.createElement('a');
                    unlikeBtn.href = '#';
                    unlikeBtn.className = 'btn btn-secondary';
                    unlikeBtn.textContent = 'Unlike';
                    event.target.replaceWith(unlikeBtn);
                    const updatedLikes = await getLikesById(movie._id);
                    likeCounter.textContent = updatedLikes + ' like' + (likes == 1 ? '' : 's');
                } else {
                    const error = await response.json();
                    throw new Error(error.message);
                }
            } catch (error) {
                console.error(error.message);
            }
        } else if (event.target.classList.contains('btn-secondary')) {
            event.preventDefault();
            const response = await unlikeMovie(ownLike[0]._id);
            try {
                if (response.ok) {
                    const likeBtn = document.createElement('a');
                    likeBtn.href = '#';
                    likeBtn.className = 'btn btn-primary';
                    likeBtn.textContent = 'Like';
                    event.target.replaceWith(likeBtn);
                    const updatedLikes = await getLikesById(movie._id);
                    likeCounter.textContent = updatedLikes + ' like' + (likes == 1 ? '' : 's');
                } else {
                    const error = await response.json();
                    throw new Error(error.message);
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    });

    return card;
}

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    const [movie, likes, ownLike] = await Promise.all([
        getMovieById(id),
        getLikesById(id),
        getOwnLikeById(id)
    ]);

    const card = await createMovieCard(movie, likes, ownLike);
    section.appendChild(card);
}