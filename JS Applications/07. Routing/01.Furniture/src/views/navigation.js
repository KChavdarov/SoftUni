import { html } from '../../node_modules/lit-html/lit-html.js';

const navTemplate = (logged, onSearch, toggleSearch, isSearch) => html `
<h1><a href="/">Furniture Store</a></h1>
<nav>
    <a id="catalogLink" href="/">Dashboard</a>
        ${logged
        ? html`
    <div id="user">
        <a id="createLink" href="/create">Create Furniture</a>
        <a id="profileLink" href="/my-furniture" >My Publications</a>
        <a id="logoutBtn" href="/logout">Logout</a>
    </div>` 
        : html`
    <div id="guest">
        <a id="loginLink" href="/login">Login</a>
        <a id="registerLink" href="/register">Register</a>
    </div>`}
    <a href="javascript:void(0)" @click=${toggleSearch}>${'\u2315'}</a>
    <form style="display:${isSearch ? 'block' : 'none'}" @submit=${onSearch} class="searchBar">
        <input id="searchInput" type="text" name="search">
        <input id="searchBtn" type="submit" value='SEARCH'>
    </form>
</nav>`;



export function setupNav(render, logged, redirect) {
    let isSearch = false;
    render(navTemplate(logged, onSearch, toggleSearch, isSearch));

    function onSearch(event) {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        const search = searchInput.value;
        redirect(`/?search=${encodeURIComponent(search)}`);
        event.target.reset();
    }

    function toggleSearch() {
        isSearch = !isSearch;
        render(navTemplate(logged, onSearch, toggleSearch, isSearch));
    }
}