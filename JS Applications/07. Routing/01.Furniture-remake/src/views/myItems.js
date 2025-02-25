import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllByUser } from '../api/data.js';
import { cardTemplate } from './card.js';

const myItemsTemplate = (items) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.map(cardTemplate)}
    </div>
`

export async function myItemsPage(context, next) {
    const userId = sessionStorage.getItem('userId');
    const items = await getAllByUser(userId);
    context.renderView(myItemsTemplate(Object.values(items)));
}