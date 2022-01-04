import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit) => html `
<section id="form-sign-up">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>
`;

export async function registerPage(context) {
    context.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPassword = formData.get('repeatPassword').trim();

        if (email == '' || password == '') {
            return alert('Please fill in all fields');
        }
        if (password.length < 6) {
            return alert('Password must be at least 6 characters long');
        }
        if (password != repeatPassword) {
            return alert('Passwords don\'t match');
        }

        await register(email, password);
        context.setUserNav();
        context.page.redirect('/catalog');
    }
}