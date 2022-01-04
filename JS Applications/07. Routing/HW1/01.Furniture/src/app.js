import page from '/node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from '../src/api/data.js';

import { dashboardPage } from './views/dashboard.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myPage } from './views/myFurniture.js';
import { registerPage } from './views/register.js';

const main = document.querySelector('.container');
document.getElementById('logoutBtn').addEventListener('click', logoutBtn);
navView();

page('/', decorateContext, dashboardPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/my-furniture', decorateContext, myPage);
page('/register', decorateContext, registerPage);


page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.navView = navView;
    next();
}

function navView() {
    const flag = sessionStorage.getItem('authToken');
    if (flag == null) {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    } else {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
    }
}

async function logoutBtn() {
    await logout();
    page.redirect('/')
    navView();
}