import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getItemById, updateItemById } from '../api/data.js';
import { loader } from './common/loader.js';

const editTemplate = (team, onEdit, errorMessage) => html `
<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${onEdit} id="edit-form" class="main-form pad-large">
            ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
            <label>Team name: <input type="text" name="name" .value=${team.name} ></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl} ></label>
            <label>Description: <textarea name="description" .value=${team.description} ></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
            <a href="/details/${team._id}"class="action cta cancel" type="button">Cancel</a>
        </form>
    </article>
</section>`;


export function editPage(context) {
    const teamId = context.params.id;
    const section = until(populateForm(), loader);
    context.render(section);

    async function populateForm(errorMessage) {
        const team = await getItemById(teamId);
        return editTemplate(team, onEdit, errorMessage);

        async function onEdit(event) {
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

                const team = await updateItemById(teamId, { name, logoUrl, description });

                event.target.reset();
                context.redirect('/details/' + team._id);

            } catch (error) {
                context.render(editTemplate(team, onEdit, error.message));
            } finally {
                [...event.target.querySelectorAll('input')].forEach(i => i.disabled = false);
            }
        }
    }
}