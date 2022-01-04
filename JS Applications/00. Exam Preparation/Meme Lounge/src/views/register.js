import { html } from '../../node_modules/lit-html/lit-html.js';
import { classMap } from '../../node_modules/lit-html/directives/class-map.js';
import { register } from '../api/data.js';
import { notify } from '../common/notification.js';

const registerTemplate = (onSubmit, inputError) => html `
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" class="${inputError ? classMap({error: inputError.username}): ''}" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" class=${inputError ? classMap({error: inputError.email}): ''} type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" class=${inputError ? classMap({error: inputError.password}): ''} type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" class=${inputError ? classMap({error: inputError.repeatPass}): ''} type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export async function registerPage(context) {
    if (context.user !== null) {
        context.page.redirect('/catalog');
    }

    context.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        const email = formData.get('email').trim().toLowerCase();
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();
        const gender = formData.get('gender');


        const inputError = {
            email: email == '',
            username: username == '',
            password: password == '' || password != repeatPass,
            repeatPass: repeatPass == '' || password != repeatPass,
        };

        if (Object.values(inputError).some(v => v)) {
            context.render(registerTemplate(onSubmit, inputError));
            return notify('Please enter correct values');
        }

        await register(email, username, password, gender);
        context.setUserNav();
        form.reset();
        context.page.redirect('/catalog');
    }
}