import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const detailsTemplate = () => html ``;

export async function detailsPage(context) {
    const itemId = context.params.id;

    context.render(detailsTemplate());
}