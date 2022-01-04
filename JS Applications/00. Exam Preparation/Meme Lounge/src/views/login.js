import { html } from '../../node_modules/lit-html/lit-html.js';
import { classMap } from '../../node_modules/lit-html/directives/class-map.js';
import { login } from '../api/data.js';
import { notify } from '../common/notification.js';

const loginTemplate = (onSubmit, inputError) => html `
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" class=${inputError ? classMap({error: inputError.email}): ''} placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" class=${inputError ? classMap({error: inputError.password}): ''} type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export async function loginPage(context) {
    if (context.user !== null) {
        context.page.redirect('/catalog');
    }

    context.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const email = formData.get('email').trim().toLowerCase();
        const password = formData.get('password').trim();

        const inputError = {
            email: email == '',
            password: password == '',
        };

        if (Object.values(inputError).some(v => v)) {
            context.render(loginTemplate(onSubmit, inputError));
            return notify('All fields are mandatory');
        }

        await login(email, password);
        form.reset();
        context.setUserNav();
        context.page.redirect('/catalog');
    }
}