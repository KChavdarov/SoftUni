import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSearchResults } from '../api/data.js';
import { listingTemplate } from './carListing.js';

const searchTemplate = (onSearch, search, cars) => html `
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input type="text" id="search-input" name="search" placeholder="Enter desired production year" .value=${search}>
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    ${search ? html` 
    <h2>Results:</h2>
    <div class="listings"> 
        ${cars.length !== 0 ? cars.map(listingTemplate) : 
        html`<p class="no-cars"> No results.</p>`}
        `: ''}
    </div>
</section>`;

export async function searchPage(context) {
    const search = context.querystring.split('=')[1];
    const cars = search ? await getSearchResults(Number(search)) : [];
    context.render(searchTemplate(onSearch, search, cars));

    async function onSearch() {
        const newSearch = Number(document.getElementById('search-input').value);
        context.page.redirect('/search?query=' + newSearch);
    }
}