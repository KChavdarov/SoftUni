import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const profileTemplate = () => html ``;

export async function profilePage(context) {
    context.render(profileTemplate());
}