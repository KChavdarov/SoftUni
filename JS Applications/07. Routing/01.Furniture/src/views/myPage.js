import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getMyFurnitureCount, getMyFurniture } from '../api/data.js';

const myPageTemplate = (cardsPromise, pager) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
${pager}
<div class="row space-top">
${until(cardsPromise, html`<h2>Loading&hellip;</h2>`)}
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
<div class="pager">${page>1? html`<a href="/my-furniture/?page=${page-1}">&lt; Prev</a>`:''}Page ${page} of ${pages}${page < pages? html`<a href="/my-furniture/?page=${page+1}">Next &gt;</a>`:''}</div>`;

async function createCards(furniturePromise) {
    const furniture = await furniturePromise;
    const cards = furniture.map(furnitureCardTemplate);
    return cards;
}

export async function myPage(context) {
    const furnitureCount = await getMyFurnitureCount();
    const pages = Math.ceil(furnitureCount / 2);
    const page = Math.max(Math.min(pages, Number(context.querystring.split('=').pop())), 1);
    const cardPromise = createCards(getMyFurniture(page));
    const section = myPageTemplate(cardPromise, createPager(page, pages));
    context.render(section);
}