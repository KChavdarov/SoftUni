import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html `
<h1>Register</h1>
<p class="form-info">Already registered?
    <a href="/login">Login now</a> and have some fun!
</p>

<form @submit=${onSubmit} action="">
    <div>
        <input name="email" type="email" placeholder="Email...">
    </div>
    <div>
        <input name="password" type="password" placeholder="Password">
    </div>
    <div>
        <input name="repass" type="password" placeholder="Re-password">
    </div>
    <div>
        <p class="message"></p>
        <button>Register</button>
    </div>
</form>`;

export async function registerPage(context) {
    context.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repass').trim();

        if (email == '' || password == '') {
            return alert('Please fill in all fields');
        }
        if (password.length < 6) {
            return alert('Password must be at least 6 characters long');
        }
        if (password != repass) {
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        context.setUserNav();
        event.target.reset();
        context.page.redirect('/catalog');
    }
}