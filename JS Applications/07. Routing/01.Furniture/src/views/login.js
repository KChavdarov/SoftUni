import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit, errorMsg) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            ${errorMsg ? html`<p class="form-error">${errorMsg}</p>` : ''}
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' :'')} id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class=${'form-control' + (errorMsg ? ' is-invalid' :'')} id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>`;

export async function loginPage(context) {
    const section = loginTemplate(onSubmit);
    context.render(section);

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        if (email == '' || password == '') {
            return context.render(loginTemplate(onSubmit, 'All fields are required'));
        }
        try {
            await login(email, password);
            context.setUserNav();
            context.page.redirect('/');
        } catch (error) {
            return context.render(loginTemplate(onSubmit, error.message));
        }
    }
}