import { html } from "../../node_modules/lit-html/lit-html.js";

const registerTemplate = (onSubmit, errors) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
                ${errors ? html`<div class="error">${errors}</div>` : ''}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
`

async function onSubmit(event, context) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').toLowerCase().trim();
    const username = formData.get('username').toLowerCase().trim();
    const password = formData.get('password').toLowerCase().trim();
    const repass = formData.get('repass').toLowerCase().trim();

    [...event.target.querySelectorAll('input, textarea, button')].forEach(i => i.disabled = true);

    const errorText = validate(email, username, password, repass);

    if (errorText != '') {
        context.renderView(registerTemplate((event) => onSubmit(event, context), errorText));
    } else {
        try {
            await context.api.auth.register(email, username, password);
            event.target.reset();
            context.page.redirect('/my-teams');
        } catch (error) {
            context.renderView(registerTemplate((event) => onSubmit(event, context), error.message));
        }
    }
    
    [...event.target.querySelectorAll('input, textarea, button')].forEach(i => i.disabled = false);
}

export async function registerPage(context) {
    context.renderView(registerTemplate((event) => onSubmit(event, context)));
}

function validate(email, username, password, repass) {
    let result = [];
    if (!email) {
        result.push('Please enter a valid email.');
    }
    if (!username || username.length < 3) {
        result.push('Please enter a valid username.');
    }
    if (!password || password.length < 3) {
        result.push('Password is too short.');
    }
    if (!repass || repass != password) {
        result.push('Passwords don\'t match');
    }

    return result.join('\n');
}