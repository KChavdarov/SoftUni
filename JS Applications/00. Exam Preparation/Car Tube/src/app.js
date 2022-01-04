import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

/* *** TESTING *** */
// import * as api from './api/data.js';
// window.api = api;

/* *** UTILITY IMPORTS *** */
import { getUserData } from './utilities.js';
import { navigationTemplate } from './common/navigation.js';
import { logout as apiLogout } from './api/data.js';

/* *** PAGE IMPORTS *** */
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';
import { profilePage } from './views/profile.js';

import { searchPage } from './views/search.js';


/* *** DOM REFERENCES *** */
const main = document.getElementById('site-content');
const nav = document.getElementById('site-nav');


/* *** ROUTER SETUP *** */
page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/home', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/profile', decorateContext, profilePage);

page('/search', decorateContext, searchPage);


/* *** APP STARTUP *** */
setUserNav();
page.start();


/* *** FUNCTIONS *** */
function decorateContext(context, next) {
    context.user = getUserData();
    context.render = (section) => render(section, main);
    context.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const user = getUserData();
    render(navigationTemplate(user, logout), nav);
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/home');
}