import { html } from '../../node_modules/lit-html/lit-html.js';
import { approveMembershipRequest, createItem, createMembershipRequest } from '../api/data.js';

const createTemplate = (onCreate, errorMessage) => html `
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${onCreate} id="create-form" class="main-form pad-large">
            ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>`;


export function createPage(context) {
    context.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name').trim();
        const logoUrl = formData.get('logoUrl').trim();
        const description = formData.get('description').trim();

        [...event.target.querySelectorAll('input')].forEach(i => i.disabled = true);

        try {
            if (name.length < 4) {
                throw new Error('Team name must be at least 4 characters long');
            }
            if (description.length < 10) {
                throw new Error('Description must be at least 10 characters long');
            }
            if (logoUrl === '') {
                throw new Error('Team logo is required');
            }

            const team = await createItem({ name, logoUrl, description });
            const request = await createMembershipRequest(team._id);
            await approveMembershipRequest(request);
            event.target.reset();
            context.redirect('/details/' + team._id);

        } catch (error) {
            context.render(createTemplate(onCreate, error.message));
        } finally {
            [...event.target.querySelectorAll('input')].forEach(i => i.disabled = false);
        }
    }
}