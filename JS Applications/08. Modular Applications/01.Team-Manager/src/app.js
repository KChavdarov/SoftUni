import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';
import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { browsePage } from './views/browse.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';

import * as api from './api/data.js';
import { editPage } from './views/edit.js';
import {myTeamsPage} from './views/myTeams.js';

window.api = api;

const main = document.querySelector('main');
const siteNav = document.getElementById('siteNav');

page('/', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/browse', decorateContext, browsePage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/my-teams', decorateContext, myTeamsPage);

page.start();
setUserNav();

function decorateContext(context, next) {
    const user = window.sessionStorage.getItem('user');
    context.user = JSON.parse(user);
    context.setUserNav = setUserNav;
    context.redirect = page.redirect;
    context.render = (content) => render(content, main);
    next();
}

document.getElementById('logoutBtn').addEventListener('click', async event => {
    await logout();
    setUserNav();
    page.redirect('/');
});

function setUserNav() {
    if (window.sessionStorage.getItem('user') === null) {
        [...siteNav.querySelectorAll('a.guest')].forEach(a => a.style.display = 'block');
        [...siteNav.querySelectorAll('a.user')].forEach(a => a.style.display = 'none');
    } else {
        [...siteNav.querySelectorAll('a.guest')].forEach(a => a.style.display = 'none');
        [...siteNav.querySelectorAll('a.user')].forEach(a => a.style.display = 'block');
    }
}