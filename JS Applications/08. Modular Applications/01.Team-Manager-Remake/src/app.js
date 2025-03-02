import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { loginPage } from "./views/login.js";
import { navbar } from "./views/navbar.js";
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { api } from "./api/api.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myTeamsPage } from "./views/my-teams.js";

const root = document.getElementById('content');

page('/', middleware, homePage);
page('/login', middleware, routeGuard('guest'), loginPage);
page('/register', middleware, routeGuard('guest'), registerPage);
page('/catalog', middleware, catalogPage);
page('/details/:id', middleware, detailsPage);
page('/create', middleware, routeGuard('user'), createPage);
page('/edit/:id', middleware, routeGuard('user'), editPage);
page('/my-teams', middleware, routeGuard('user'), myTeamsPage);

page.start();

function middleware(context, next) {
    context.api = api;
    context.renderView = (view) => render(view, root.querySelector('main'));
    context.renderNavbar = (view) => render(view, root.querySelector('header#titlebar'));
    context.user = JSON.parse(sessionStorage.getItem('user'));
    updateNavbar(context);
    next();
}

function updateNavbar(context) {
    navbar(context);
}

function routeGuard(type) {
    const guards = {
        guest(context, next) {
            if (context.user == null) {
                next();
            } else {
                context.page.redirect('/');
            }
        },
        user(context, next) {
            if (context.user != null) {
                next();
            } else {
                context.page.redirect('/');
            }
        }
    }
    return guards[type];
}