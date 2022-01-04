import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myPage } from './views/myPage.js';
import { registerPage } from './views/register.js';
import { setupNav } from './views/navigation.js';

import { logout } from './api/data.js';

const main = document.querySelector('.container');
const siteNav = document.getElementById('site-nav');

page('/', decorateContext, catalogPage);
page('/index.html', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/my-furniture', decorateContext, myPage);
page('/logout', logoutMiddleware, () => { page.redirect('/'); });

setUserNav();
page.start();

function decorateContext(context, next) {
    context.render = (content) => {setActiveNav(context); render(content, main);};
    context.setUserNav = setUserNav;
    context.setActiveNav = setActiveNav;
    next();
}

async function logoutMiddleware(_, next) {
    await logout();
    setUserNav();
    next();
}

function setUserNav() {
    const isLogged = sessionStorage.getItem('userToken') !== null;
    setupNav((content) => render(content, siteNav), isLogged, page.redirect);
}

function setActiveNav(context) {
    [...document.querySelectorAll('nav a')].forEach(verifyPath);
    
    function verifyPath(a) {
        const url = new URL(a.href);
        const pathname = url.pathname;
        if (pathname == context.pathname) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    }
}