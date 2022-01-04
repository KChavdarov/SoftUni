import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { getFurniture } from '../api/data.js';
import { setupNavbar } from '../app.js';

const furnitureTemplate = (furniture) => html `
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src="${furniture.img}" />
                <p>${furniture.description}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                <div>
                    <a  href="/details/${furniture._id}" class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>`;

const dashTemplate = (furnitureList) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${furnitureList.map(f => furnitureTemplate(f))}
</div>`;

export async function dashboardPage() {
    const furniture = await getFurniture();
    setupNavbar();
    render(dashTemplate(furniture), document.getElementById('container'));
}