import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs'
import * as api from './api/api.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { updateNavbar } from './views/navbar.js';
import { myItemsPage } from './views/myItems.js';

api.settings.host = 'http://localhost:3030';
const header = document.querySelector('header');
const container = document.querySelector('.container');

function middleware(context, next) {
    context.renderView = (view) => render(view, container);
    context.renderNavbar = (navbar) => render(navbar, header);
    updateNavbar(context);
    next();
}

page('/', middleware, dashboardPage);
page('/create', middleware, createPage);
page('/details/:id', middleware, detailsPage);
page('/edit/:id', middleware, editPage);
page('/my-furniture', middleware, myItemsPage);
page('/login', middleware, loginPage);
page('/register', middleware, registerPage);

page.start();