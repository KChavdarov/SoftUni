import { html } from "../../node_modules/lit-html/lit-html.js";

const createTemplate = (onSubmit, errors) => html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form @submit=${onSubmit} id="create-form" class="main-form pad-large">
            ${errors ? html`<div class="error">${errors}</div>` : ''}
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team">
            </form>
        </article>
    </section>
`

export async function createPage(context) {
    context.renderView(createTemplate((event) => onSubmit(event, context)));
}

async function onSubmit(event, context) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name').toLowerCase().trim();
    const logoUrl = formData.get('logoUrl').toLowerCase().trim();
    const description = formData.get('description').toLowerCase().trim();

    [...event.target.querySelectorAll('input, textarea, button')].forEach(i => i.disabled = true);

    const errorText = validate(name, logoUrl, description);

    if (errorText != '') {
        context.renderView(createTemplate((event) => onSubmit(event, context), errorText));
    } else {
        try {
            const team = await context.api.data.createTeam({ name, logoUrl, description });
            context.page.redirect(`/details/${team._id}`);
        } catch (error) {
            context.renderView(createTemplate((event) => onSubmit(event, context), error.message));
        }
    }
    
    [...event.target.querySelectorAll('input, textarea, button')].forEach(i => i.disabled = false);
}

function validate(name, logoUrl, description) {
    let result = [];
    if (!name || name.length < 4) {
        result.push('Please enter a valid team name.');
    }
    if (!logoUrl) {
        result.push('Please enter a team logo URL.');
    }
    if (!description || description.length < 1) {
        result.push('Please enter a valid team description.');
    }

    return result.join('\n');
}