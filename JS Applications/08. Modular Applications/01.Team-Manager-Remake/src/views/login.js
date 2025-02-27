import { html } from "../../node_modules/lit-html/lit-html.js";
import { api } from "../api/api.js";

const loginTemplate = (onSubmit, error) => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form @submit=${onSubmit} id="login-form" class="main-form pad-large">
                ${error ? html`<div class="error">${error}</div>` : ''}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
`

async function onSubmit(event, context) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').toLowerCase().trim();
    const password = formData.get('password').toLowerCase().trim();

    if (email && password) {
        try {
            await api.auth.login(email, password);
            context.page.redirect('/my-teams');
        } catch (error) {
            context.renderView(loginTemplate((event) => onSubmit(event, context), error.message));
        }
    }
}

export async function loginPage(context) {
    context.renderView(loginTemplate((event) => onSubmit(event, context)));
}