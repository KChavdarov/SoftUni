import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import * as api from './api/data.js';
import { showModal } from './common/modal.js';
window.api = api;

// import { logout as apiLogout } from './api/data.js';

import { navigationTemplate } from './common/navigation.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';


const nav = document.getElementById('site-nav');
const main = document.getElementById('main');

window.showModal = showModal;


setUserNav();

page('/', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/my-profile', decorateContext, profilePage);

page.start();

function decorateContext(context, next) {
    context.user = null;
    const user = sessionStorage.getItem('user');
    if (user !== null) {
        context.user = JSON.parse(user);
    }
    context.render = section => render(section, main);
    context.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const user = sessionStorage.getItem('user');
    render(navigationTemplate(user, logout, search), nav);
}

async function logout() {
    // await apiLogout();
    await api.logout();
    page.redirect('/home');
    setUserNav();
}

function search(event) {
    event.preventDefault();
    const search = event.target.querySelector('input').value.trim();
    if (search != '') {
        page.redirect(`/catalog?search=${search}&page=1`);
        event.target.reset();
    }
}