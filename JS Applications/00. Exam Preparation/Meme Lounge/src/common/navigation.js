import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (user, logout, search) => html `
${user !== null ? html`
<!-- Logged users -->
<div class="user">
    <a href="/catalog">All Memes</a>
    <a href="/create">Create Meme</a>
    <form @submit=${search} class="search">
        <input type="search" placeholder="search here">
    </form>
    <div class="profile">
        <span>Welcome, ${JSON.parse(user).email}</span>
        <a href="/my-profile">My Profile</a>
        <a @click=${logout} href="javascript:void(0)">Logout</a>
    </div>
</div>` : html `
<!-- Guest users -->
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/home">Home Page</a>
    <a href="/catalog">All Memes</a>
    <form @submit=${search} class="search">
        <input type="search" placeholder="search here">
    </form>
</div>`}`;