import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (user, logout) => html `

    <a class="active" href="/home">Home</a>
    <a href="/catalog">All Listings</a>
    <a href="/search">By Year</a>

    ${!user ? 

    html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>` : 

    html`
    <div id="profile">
        <a>Welcome ${user.username}</a>
        <a href="/profile">My Listings</a>
        <a href="/create">Create Listing</a>
        <a @click=${logout} href="javascript:void(0)">Logout</a>
    </div>`}

    `;