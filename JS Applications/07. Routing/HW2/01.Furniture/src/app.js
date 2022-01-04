import page from '../node_modules/page/page.mjs';

import {createPage} from './views/create.js'
import {dashboardPage} from './views/dashboard.js'
import {detailsPage} from './views/details.js'
import {editPage} from './views/edit.js'
import {registerPage} from './views/register.js'
import {loginPage} from './views/login.js'
import {furniturePage} from './views/my-furniture.js';

import * as api from './api/data.js';
import { html, render } from '../node_modules/lit-html/lit-html.js'
window.api = api;

page('/', dashboardPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/register', registerPage);
page('/login', loginPage);
page('/my-furniture', furniturePage);

page.start();


export function setupNavbar() {
    const token = sessionStorage.getItem('authToken');
    let template;

    if (token){
        template = () => html `
        <a id="catalogLink" href="/" class="active">Dashboard</a>
        <div id="user">
            <a id="createLink" href="/create" >Create Furniture</a>
            <a id="publicationLink" href="/my-furniture">My Publications</a>
            <a @click="${logout}" id="logoutBtn" href="javascript:void(0)">Logout</a>
        </div>`;
    } else {
        template = () => html `
        <a id="catalogLink" href="/" class="active">Dashboard</a>
        <div id="guest">
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
        </div>`;
    }

    render(template(), document.querySelector('nav'))
}

setupNavbar();

async function logout() {
    await api.logout();
    page.redirect('/')
}