import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const homeTemplate = () => html ``;

export async function homePage(context) {
    context.render(homeTemplate());
}