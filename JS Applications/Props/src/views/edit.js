import { html } from '../../node_modules/lit-html/lit-html.js';
import {} from '../api/data.js';

const editTemplate = () => html ``;

export async function editPage(context) {
    const itemId = context.params.id;

    context.render(editTemplate());
}