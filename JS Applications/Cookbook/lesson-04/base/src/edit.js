import { showCatalog } from "./catalog.js";
import { showDetails } from "./details.js";

let main;
let section;
let setActiveNav;

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

export async function showEdit(id) {
    setActiveNav('');
    main.innerHTML = '';

    const recipe = await getRecipeById(id);
    section.querySelector('[name="id"]').value = recipe._id;
    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');

    main.appendChild(section);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();
    return recipe;
}

async function onSubmit(data) {
    const body = JSON.stringify({
        name: data.name,
        img: data.img,
        ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    });

    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        showCatalog();
    }

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + data.id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body
        });

        if (response.status == 200) {
            const recipe = await response.json();
            showDetails(recipe._id);
        } else {
            throw new Error(await response.json());
        }
    } catch (err) {
        console.error(err.message);
    }
}