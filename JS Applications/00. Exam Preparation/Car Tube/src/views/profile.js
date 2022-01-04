import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyItems } from '../api/data.js';
import { listingTemplate } from './carListing.js';

const profileTemplate = (cars) => html `
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${cars.length !== 0 ? cars.map(listingTemplate) : html`
        <p class="no-cars"> You haven't listed any cars yet.</p>`}
    </div>
</section>`;

export async function profilePage(context) {
    if (!context.user) {
        return context.page.redirect('/login');
    }
    const cars = await getMyItems(context.user.id);
    console.log(cars);
    context.render(profileTemplate(cars));
}