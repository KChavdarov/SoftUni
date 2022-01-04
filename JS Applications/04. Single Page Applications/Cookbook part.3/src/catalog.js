import { e } from './dom.js';
import { displayDetails } from './details.js';

async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes');
    const recipes = await response.json();

    return recipes;
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: () => displayDetails(recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );
    return result;
}

let main;
let section;
let setActiveNav;

//setup: 1. store section ref; 2.store main ref; 3.add event listeners
export function setupCatalog(mainTarget, sectionTarget, setActiveNavCb) {
    main = mainTarget;
    section = sectionTarget;
    setActiveNav = setActiveNavCb;
}

//display: 1. fetch data; 2. clear main element HTML; 3. attach section
export async function displayCatalog() {
    setActiveNav('catalogLink');
    section.innerHTML = '<p style="color: white">Loading...</p>';
    main.innerHTML = '';
    main.appendChild(section);
    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);
    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));
    section.innerHTML = '';
    section.appendChild(fragment);
}