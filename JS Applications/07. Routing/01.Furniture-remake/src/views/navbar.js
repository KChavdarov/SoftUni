import { html } from '../../node_modules/lit-html/lit-html.js'
import { logout } from '../api/auth.js';

const navbarTemplate = (isUser, onLogout) => html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/" class="active">Dashboard</a>
        ${isUser ? html`
        <div id="user">
            <a id="createLink" href="/create" >Create Furniture</a>
            <a id="profileLink" href="/my-furniture" >My Publications</a>
            <a @click=${onLogout} id="logoutBtn" href="javascript:void(0)">Logout</a>
        </div>`
        : html`
        <div id="guest">
            <a id="loginLink" href="/login">Login</a>
            <a id="registerLink" href="/register">Register</a>
        </div >`}
    </nav >
`

export function updateNavbar(context) {
    const isUser = sessionStorage.getItem('authToken') != null;
    context.renderNavbar(navbarTemplate(isUser, () => onLogout(context)));
}

async function onLogout(context) {
    await logout();
    context.page.redirect('/');
}