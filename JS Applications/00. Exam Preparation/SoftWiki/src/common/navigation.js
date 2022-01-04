import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (user, logout) => html `
${!user ? 

html`
<h1><a class="home" href="/login">SoftWiki</a></h1>
<nav class="nav-buttons">
    <a href="/register">Register</a>
</nav>` : 

html`
<h1><a class="home" href="/home">SoftWiki</a></h1>
<nav class="nav-buttons">
    <a href="/create">Create</a>
    <a @click=${logout} href="javascript:void(0)">Logout</a>
</nav>`}
`;