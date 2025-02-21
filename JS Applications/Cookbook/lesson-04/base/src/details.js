import { showCatalog } from './catalog.js';
import { e } from './dom.js'
import { showEdit } from './edit.js'

let main;
let section;
let setActiveNav;

export function setupDetails(mainTarget, sectionTarget, setActiveNavCb) {
    main = mainTarget;
    section = sectionTarget;
    setActiveNav = setActiveNavCb;
}

export async function showDetails(id) {
    main.innerHTML = '';
    section.innerHTML = '';
    const recipe = await getRecipeById(id);
    section.appendChild(createRecipeCard(recipe));
    main.appendChild(section);
    setActiveNav('');
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();
    return recipe;
}

async function onDelete(id) {
    const confirmed = confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
        const token = sessionStorage.getItem('authToken');
        if (token == null) {
            return showCatalog();
        }
        const options = {
            method: 'delete',
            headers: { 'X-Authorization': token }
        };
        try {
            const response = await fetch('http://localhost:3030/data/recipes/' + id, options);
            if (response.status == 200) {
                const recipe = await response.json();
                showCatalog();
            } else {
                throw new Error(await response.json());
            }
        } catch (err) {
            console.error(err.message);
        }
    }
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s)),
        ),
    );

    const userId = sessionStorage.getItem('userId');
    if (userId != null && recipe._ownerId == userId) {
        result.appendChild(
            e('div', { className: 'controls' },
                e('button', { onClick: () => showEdit(recipe._id) }, '\u270E Edit'),
                e('button', { onClick: () => onDelete(recipe._id) }, '\u2716 Delete'),
            )
        )
    }

    return result;
}