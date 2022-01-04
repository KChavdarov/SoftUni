import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';

const createTemplate = (onCreate, invalidState) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onCreate}>
            ${invalidState !== undefined ? html`<p class="form-error" >Invalid input</p>`: ''}
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control${invalidState ? (invalidState.make? ' is-valid': ' is-invalid') : ''}" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control${invalidState ? (invalidState.model? ' is-valid': ' is-invalid') : ''}" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control${invalidState ? (invalidState.year? ' is-valid': ' is-invalid') : ''}" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control${invalidState ? (invalidState.description? ' is-valid': ' is-invalid') : ''}" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control${invalidState ? (invalidState.price? ' is-valid': ' is-invalid') : ''}" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control${invalidState ? (invalidState.img? ' is-valid': ' is-invalid') : ''}" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`;

export async function createPage(context) {
    context.render(createTemplate(onCreate));
    
    async function onCreate(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {
            [k]: v
        }), {});
        data.year = Number(data.year);
        data.price = Number(data.price);

        const invalidState = evaluateData(data);

        if (Object.values(invalidState).some(a => a === false)) {
            return context.render(createTemplate(onCreate, invalidState));
        }

        await createItem(data);
        context.page.redirect('/');
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