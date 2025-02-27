import { html } from "../../node_modules/lit-html/lit-html.js";
import { api } from "../api/api.js";
import { openModal } from "./modal.js";

const navbarTemplate = (isUser, onLogout) => html`
    <a href="/" class="site-logo">Team Manager</a>
    <nav>
        <a href="/catalog" class="action">Browse Teams</a>
        ${isUser
        ? html`<a href="/my-teams" class="action">My Teams</a>
        <a @click=${onLogout} href="javascript:void(0)" class="action">Logout</a>`
        : html`<a href="/login" class="action">Login</a>
        <a href="/register" class="action">Register</a>`
    }
    </nav>
`

export async function navbar(context) {
    const isUser = !!context.user;
    context.renderNavbar(navbarTemplate(isUser, () => onLogout(context)));
}

async function onLogout(context) {
    const confirmed = await openModal('Are you sure you want to log out?');
    if (confirmed) {
        await api.auth.logout();
        context.page.redirect('/');
    }
}