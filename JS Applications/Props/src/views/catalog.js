import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const catalogTemplate = () => html ``;

export async function catalogPage(context) {
    context.render(catalogTemplate());
}