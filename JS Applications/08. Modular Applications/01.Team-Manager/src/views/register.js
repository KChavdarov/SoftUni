import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onRegister, errorMessage) => html `
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onRegister} id="register-form" class="main-form pad-large">
            ${errorMessage? html`<div class="error">${errorMessage}</div>` : ''}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`;

export async function registerPage(context) {
    const renderTemplate = (errorMessage) => context.render(registerTemplate(onRegister, errorMessage));
    renderTemplate();

    async function onRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repass').trim();
        const data = { email, username, password, repass };

        [...event.target.querySelectorAll('input')].forEach(i => i.disabled = true);

        try {
            if (Object.values(data).some(a => a == '')) {
                throw new Error('Please fill in all fields');
            }
            if (username.length < 3) {
                throw new Error('Username needs to be at least 3 characters long');
            }
            if (password.length < 3) {
                throw new Error('Password needs to be at least 3 characters long');
            }
            if (password !== repass) {
                throw new Error('Passwords don\'t match');
            }
            await register(email, username, password);
            context.setUserNav();
            context.redirect('/');
        } catch (error) {
            return renderTemplate(error.message);
        } finally {
            [...event.target.querySelectorAll('input')].forEach(i => i.disabled = false);
        }
    }
}