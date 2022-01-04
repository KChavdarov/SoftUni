import {html, render} from '../../node_modules/lit-html/lit-html.js';
import {login} from '../api/data.js'

const loginTemplate = (ctx) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit="${e => onSubmit(e, ctx)}">
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>` 

export async function loginPage(ctx) {
    render(loginTemplate(ctx), document.getElementById('container'));
}

async function onSubmit(event, ctx) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    await login(email, password);
    event.target.reset();
    ctx.page.redirect('/');
}