import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (user, logout) => html `

<a href="/catalog">Catalogue</a>
<a href="/search">Search</a>

${user ? 

html`
<div id="user">
    <a href="/create">Create</a>
    <a @click=${logout} href="javascript:void(0)">Logout</a>
</div>` : 

html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`}

`;