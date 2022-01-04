import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (user, logout) => html `

<a class="navbar-brand text-light" href="/">Movies</a>

${user ? 

html`
<ul class="navbar-nav ml-auto ">
    <li class="nav-item">
        <a class="nav-link">Welcome, ${user.email}</a>
    </li>
    <li class="nav-item">
        <a @click=${logout} class="nav-link" href="javascript:void(0)">Logout</a>
    </li>
</ul>` : 

html`
<ul class="navbar-nav ml-auto ">
    <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/register">Register</a>
    </li>
</ul>`}
`;