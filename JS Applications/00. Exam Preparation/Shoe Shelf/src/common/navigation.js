import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (user, logout) => html `
<ul>
    ${user ? html`
    <li>
        <a href="/create">Create new offer</a>
    </li>`: ''}
    <li class="site-logo">Shoe</li>
    <li>
        <a href="/">
            <img src="../public/sneakers.png" alt="">
        </a>
    </li>
    <li class="site-logo">Shelf</li>
    ${user ? html`
    <li>Welcome, ${user.email} |
        <a @click=${logout} href="javascript:void(0)">Logout</a>
    </li>` : ''}
</ul>`;