import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getAllFurniture, getAllFurnitureCount } from '../api/data.js';

const catalogTemplate = (furniture, pager) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
${pager}
<div class="row space-top">
${furniture.map(furnitureCardTemplate)}
</div>`;

const furnitureCardTemplate = (item) => html `
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src="${item.img}" />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${Number(item.price).toFixed(2)}</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

const createPager = (page, pages) => html `
${pages == 0 ? html`<div class="pager">No results found</div>`: 
html`<div class="pager">${page>1? html`<a href="#page=${page-1}">&lt; Prev</a>`:''}Page ${page} of ${pages}${page < pages? html`<a href="#page=${page+1}">Next &gt;</a>`:''}</div>`}`;


const loadingScreen = html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<h2>Loading&hellip;</h2>`;



export async function catalogPage(context) {

    const search = context.querystring.split('=').pop();

    context.render(until(createCatalogPage(search), loadingScreen));

    async function createCatalogPage(search) {
        const furnitureCount = await getAllFurnitureCount(search);
        const pages = Math.ceil(furnitureCount / 2);
        const page = Math.max(Math.min(pages, Number(context.hash.split('=').pop())), 1);
        const furniture = await getAllFurniture(page, search);
        const section = catalogTemplate(furniture, createPager(page, pages));
        return section;
    }
}