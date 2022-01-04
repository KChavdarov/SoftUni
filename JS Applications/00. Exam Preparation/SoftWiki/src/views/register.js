import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html `
<div class="container auth">
    <form @submit=${onSubmit} action="#" method="">
        <fieldset>
            <legend>Register</legend>
            <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up. It increases by diffusion and grows by dispersion.</blockquote>
            <p class="field email">
                <input type="email" id="email" name="email" placeholder="maria@email.com">
                <label for="email">Email:</label>
            </p>
            <p class="field password">
                <input type="password" name="password" id="register-pass">
                <label for="register-pass">Password:</label>
            </p>
            <p class="field password">
                <input type="password" name="rep-pass" id="rep-pass">
                <label for="rep-pass">Repeat password:</label>
            </p>
            <p class="field submit">
                <button class="btn submit" type="submit">Register</button>
            </p>
            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</div>`;

export async function registerPage(context) {
    context.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('rep-pass').trim();

        if (email == '' || password == '') {
            return alert('Please fill in all fields');
        }
        if (password != repass) {
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        event.target.reset();
        context.setUserNav();
        context.page.redirect('/');
    }
}