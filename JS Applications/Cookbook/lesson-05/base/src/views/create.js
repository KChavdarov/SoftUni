import { createRecipe } from '../api/data.js'

export function setupCreate(section, navigation) {
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showCreate;

    async function onSubmit(data) {
        const body = {
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        };

        const recipe = await createRecipe(body);
        navigation.goTo('details', recipe._id);
    }

    function showCreate() {
        return section;
    }
}