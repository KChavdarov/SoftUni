import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/data.js';
import { listingTemplate } from './carListing.js';

const catalogTemplate = (cars) => html `
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${cars.length == 0 ?
        html`<p class="no-cars">No cars in database.</p>`:
        cars.map(listingTemplate)}
        
    </div>
</section>`;

export async function catalogPage(context) {
    const cars = await getAllItems();
    context.render(catalogTemplate(cars));
}