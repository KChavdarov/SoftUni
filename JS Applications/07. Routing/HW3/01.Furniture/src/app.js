import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import {logout} from './api/data.js';
import {dashboardPage} from './views/dashboard.js';
import {detailsPage} from './views/details.js';
import {createPage} from './views/create.js';
import {editPage} from './views/edit.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';
import {myFurniturePage} from './views/myFurniture.js';

const main = document.querySelector('.container');

page('/', decorateCtx, dashboardPage);
page('/myFurniture', decorateCtx, myFurniturePage);
page('/details/:id', decorateCtx, detailsPage);
page('/create', decorateCtx, createPage);
page('/edit/:id', decorateCtx, editPage);
page('/login', decorateCtx, loginPage);
page('/register', decorateCtx, registerPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
    
})

setUserNav();

page.start();

function decorateCtx(ctx, next) {
    ctx.render =(content) => render (content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if(userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
         document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    } 
}