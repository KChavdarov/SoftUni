import {html, render} from '../../node_modules/lit-html/lit-html.js';
import {createFurniture} from '../api/data.js'

const createFormTemplate = (ctx) => html `
<div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${e => onCreateSubmit(e, ctx)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="make">Make</label>
                    <input class="form-control" id="make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="model">Model</label>
                    <input class="form-control" id="model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="year">Year</label>
                    <input class="form-control" id="year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="description">Description</label>
                    <input class="form-control" id="description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="price">Price</label>
                    <input class="form-control" id="price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="image">Image</label>
                    <input class="form-control" id="image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="material">Material (optional)</label>
                    <input class="form-control" id="material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
</div>`

export async function createPage(ctx) {
    render(createFormTemplate(ctx), document.getElementById('container'));

    
}

async function onCreateSubmit(event, ctx) {
    event.preventDefault();

    const makeEl = document.getElementById('make');
    const modelEl = document.getElementById('model');
    const yearEl = document.getElementById('year');
    const descriptionEl = document.getElementById('description');
    const priceEl = document.getElementById('price');
    const imgEl = document.getElementById('image');
    const materialEl = document.getElementById('material');
    
    let isInvalid = false;

    if (!makeEl.value || makeEl.value.length < 4) {
        makeEl.className = 'form-control is-invalid';
        isInvalid = true;
    } else {
        makeEl.className = 'form-control is-valid';
    }

    if (!modelEl.value || modelEl.value.length < 4) {
        modelEl.className = 'form-control is-invalid';
        isInvalid = true;
    } else {
        modelEl.className = 'form-control is-valid';
    }

    if (!yearEl.value || Number(yearEl.value) < 1950 || Number(yearEl.value) > 2050) {
        yearEl.className = 'form-control is-invalid';
        isInvalid = true;
    } else {
        yearEl.className = 'form-control is-valid';
    }

    if (!descriptionEl.value || descriptionEl.value.length <= 10) {
        descriptionEl.className = 'form-control is-invalid';
        isInvalid = true;
    } else {
        descriptionEl.className = 'form-control is-valid';

    }

    if (!priceEl.value || Number(priceEl.value) <= 0) {
        priceEl.className = 'form-control is-invalid';
        isInvalid = true;
    } else {
        priceEl.className = 'form-control is-valid';

    }

    if (!imgEl.value) {
        imgEl.className = 'form-control is-invalid';
        isInvalid = true;
    } else {
        imgEl.className = 'form-control is-valid';
    }

    if (isInvalid) {
        return alert('Invalid information!');
    }
    
    
    const furniture = {
        make: makeEl.value,
        model: modelEl.value,
        year: yearEl.value,
        description: descriptionEl.value,
        price:priceEl.value,
        img: imgEl.value,
        material: materialEl.value,
    };
    
    await createFurniture(furniture);
    ctx.page.redirect('/');
}