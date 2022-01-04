import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onLogin, errorMessage) => html `
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onLogin} id="login-form" class="main-form pad-large">
            ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>`;

export async function loginPage(context) {
    const renderTemplate = (errorMessage) => context.render(loginTemplate(onLogin, errorMessage));
    renderTemplate();

    async function onLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        [...event.target.querySelectorAll('input')].forEach(i => i.disabled = true);

        try {
            if (email === '' || password === '') {
                throw new Error('Please fill in all fields');
            }
            await login(email, password);
            context.setUserNav();
            context.redirect('/');
        } catch (error) {
            return renderTemplate(error.message);
        } finally {
            [...event.target.querySelectorAll('input')].forEach(i => i.disabled = false);
        }
    }
}