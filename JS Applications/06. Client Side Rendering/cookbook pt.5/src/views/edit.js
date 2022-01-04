import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecipeById, editRecipe } from '../api/data.js';

const editTemplate = (recipe) => html `
<section id="edit">
    <article>
        <h2>Edit Recipe</h2>
        <form id="editForm">
            <input type="hidden" .value=${recipe._id} name="_id">
            <label>Name: <input type="text" name="name" placeholder="Recipe name" .value=${recipe.name}></label>
            <label>Image: <input type="text" name="img" placeholder="Image URL" .value=${recipe.img}></label>
            <label class="ml">Ingredients: <textarea name="ingredients" placeholder="Enter ingredients on separate lines" .value=${recipe.ingredients.join('\n')}></textarea></label>
            <label class="ml">Preparation: <textarea name="steps" placeholder="Enter preparation steps on separate lines" .value=${recipe.steps.join('\n')}></textarea></label>
            <input type="submit" value="Update Recipe">
        </form>
    </article>
</section>`;

export function setupEdit( nav) {
    nav.registerForm('editForm', onSubmit);
    return showEdit;

    async function showEdit(id) {

        const recipe = await getRecipeById(id);
        const section = editTemplate(recipe);

        return section;
    }

    async function onSubmit(data) {
        const body = {
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
        };

        try {
            await editRecipe(data._id, body);
            nav.goTo('details', data._id);
        } catch (err) {
            alert(err.message);
        }
    }
}