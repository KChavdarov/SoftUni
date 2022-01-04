import { displayCatalog } from './catalog.js';
import { displayDetails } from './details.js';

async function onSubmit(data) {
    const recipeId = data.id;
    const body = JSON.stringify({
        name: data.name,
        img: data.img,
        ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    });

    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        return alert('You are not logged in');
    }

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + recipeId, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body
        });

        if (response.status == 200) {
            displayDetails(recipeId);
        } else {
            throw new Error(await response.json());
        }
    } catch (err) {
        console.error(err.message);
    }
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

let main;
let section;
let setActiveNav;

//setup: 1. store section ref; 2.store main ref; 3.add event listeners
export function setupEdit(mainTarget, sectionTarget, setActiveNavCb) {
    main = mainTarget;
    section = sectionTarget;
    setActiveNav = setActiveNavCb;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));
}

//display: 1. fetch data; 2. clear main element HTML; 3. attach section
export async function displayEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);
    const recipe = await getRecipeById(id);
    section.querySelector('[name="id"]').value = id;
    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}