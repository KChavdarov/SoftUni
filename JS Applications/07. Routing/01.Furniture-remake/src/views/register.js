import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/auth.js";

const registerTemplate = (onSubmit, state = {}) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control ' + state.email} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control ' + state.password} id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control ' + state.rePass} id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`

let validationState = {
    email: '',
    password: '',
    rePass: '',
}

async function onSubmit(event, context) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').toLowerCase().trim();
    const password = formData.get('password').toLowerCase().trim();
    const rePass = formData.get('rePass').toLowerCase().trim();

    if (validate(email, password, rePass)) {
        await register(email, password);
        return context.page.redirect('/');
    } else {
        context.renderView(registerTemplate((event) => onSubmit(event, context), validationState));
    }
}

function validate(email, password, rePass) {
    if (email) {
        validationState.email = 'is-valid';
    } else {
        validationState.email = 'is-invalid';
    }

    if (password) {
        validationState.password = 'is-valid';
    } else {
        validationState.password = 'is-invalid';
    }

    if (password && password == rePass) {
        validationState.rePass = 'is-valid';
    } else {
        validationState.rePass = 'is-invalid';
    }

    return Object.values(validationState).every(a => a == 'is-valid');
}

export async function registerPage(context, next) {
    validationState = {
        email: '',
        password: '',
        rePass: '',
    }
    context.renderView(registerTemplate((event) => onSubmit(event, context), validationState));
}