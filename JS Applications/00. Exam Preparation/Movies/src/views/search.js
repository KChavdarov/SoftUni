import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const searchTemplate = () => html ``;

export async function searchPage(context) {
    context.render(searchTemplate());
}