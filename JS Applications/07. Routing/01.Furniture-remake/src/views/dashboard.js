import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../api/data.js';
import { cardTemplate } from './card.js';

const dashboardTemplate = (items) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.map(cardTemplate)}
    </div>
`

export async function dashboardPage(context, next) {
    const items = await getAll();
    context.renderView(dashboardTemplate(Object.values(items)));
}