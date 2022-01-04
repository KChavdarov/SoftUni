import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html `
<h1>Login</h1>
<p class="form-info">Don't have account?
    <a href="/register">Register now</a> and fix that!
</p>
<form @submit=${onSubmit} action="">
    <div>
        <input name="email" type="email" placeholder="Email...">
    </div>

    <div>
        <input name="password" type="password" placeholder="Password...">
    </div>
    <div>
        <button>Login</button>
    </div>
</form>`;

export async function loginPage(context) {
    context.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            return alert('Please fill in all fields');
        }

        await login(email, password);
        context.setUserNav();
        event.target.reset();
        context.page.redirect('/catalog');
    }
}