import { showDetails } from './details.js';

async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();
    return data;
}

function createMoviePreview(movie) {
    const card = document.createElement('div');
    card.className = 'card mb-4';
    card.innerHTML = `
        <img class="card-img-top"
            src="${movie.img}"
            alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <button id=${movie._id} type="button" class="btn btn-info movieDetailsLink">Details</button>
        </div>`;
    return card;
}

let main;
let section;
let container;

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('.card-deck.d-flex.justify-content-center');
    container.addEventListener('click', event => {
        if (event.target.classList.contains('movieDetailsLink')) {
            showDetails(event.target.id);
        }
    });
}

export async function showHome() {
    container.innerHTML = 'Loading...';
    main.innerHTML = '';
    main.appendChild(section);

    const movies = await getMovies();
    const cards = movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(card => fragment.appendChild(card));
    container.innerHTML = '';
    container.appendChild(fragment);
}