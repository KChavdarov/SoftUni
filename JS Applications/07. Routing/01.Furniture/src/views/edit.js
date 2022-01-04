import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getItemById, updateItemById } from '../api/data.js';

const editTemplate = (item, onEdit, invalidState) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onEdit}>
            ${invalidState !== undefined ? html`<p class="form-error" >Invalid input</p>`: ''}
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control${invalidState ? (invalidState.make? ' is-valid': ' is-invalid') : ''}" id="new-make" type="text" name="make" .value=${item.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control${invalidState ? (invalidState.model? ' is-valid': ' is-invalid') : ''}" id="new-model" type="text" name="model" .value=${item.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control${invalidState ? (invalidState.year? ' is-valid': ' is-invalid') : ''}" id="new-year" type="number" name="year" .value=${item.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control${invalidState ? (invalidState.description? ' is-valid': ' is-invalid') : ''}" id="new-description" type="text" name="description" .value=${item.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control${invalidState ? (invalidState.price? ' is-valid': ' is-invalid') : ''}" id="new-price" type="number" name="price" .value=${Number(item.price).toFixed(2)}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control${invalidState ? (invalidState.img? ' is-valid': ' is-invalid') : ''}" id="new-image" type="text" name="img" .value=${item.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                    <a href="/details/${item._id}" class="btn btn-grey" >Cancel</a>
                </div>
            </div>
        </form>`;

async function populateForm(itemPromise, onEdit, invalidState) {
    const item = await itemPromise;
    return editTemplate(item, onEdit, invalidState);
}

export async function editPage(context) {
    const id = context.params.id;
    const itemPromise = getItemById(id);
    context.render(until(populateForm(itemPromise, onEdit), html `<h2>Loading&hellip;</h2>`));

    async function onEdit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {
            [k]: v
        }), {});
        data.year = Number(data.year);
        data.price = Number(data.price);

        const invalidState = evaluateData(data);

        if (Object.values(invalidState).some(a => a === false)) {
            return context.render(until(populateForm(itemPromise, onEdit, invalidState), html `<h2>Loading&hellip;</h2>`));
        }

        await updateItemById(id, data);
        context.page.redirect('/details/' + id);
    }

    function evaluateData(data) {
        const validData = Object.assign({}, data);
        validData.make = validData.make.length >= 4;
        validData.model = validData.model.length >= 4;
        validData.description = validData.description.length > 10;
        validData.price = validData.price > 0;
        validData.year = validData.year > 1950 && validData.year < 2050;
        validData.img = validData.img !== '';
        return validData;
    }
}