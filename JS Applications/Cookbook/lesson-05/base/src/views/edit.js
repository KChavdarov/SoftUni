import { editRecipeById, getRecipeById } from '../api/data.js';

export function setupEdit(section, navigation) {
    const form = section.querySelector('form');
    let recipeId;

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showEdit

    async function onSubmit(data) {
        const body = {
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        };

        await editRecipeById(recipeId, body);
        navigation.goTo('details', recipeId);
    }

    async function showEdit(id) {
        recipeId = id;
        const recipe = await getRecipeById(recipeId);

        section.querySelector('[name="name"]').value = recipe.name;
        section.querySelector('[name="img"]').value = recipe.img;
        section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
        section.querySelector('[name="steps"]').value = recipe.steps.join('\n');

        return section;
    }
}