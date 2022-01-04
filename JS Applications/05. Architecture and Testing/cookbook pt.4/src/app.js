import { logout as apiLogout } from './api/data.js';
import { setupCatalog } from './views/catalog.js';
import { setupCreate } from './views/create.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupDetails } from './views/details.js';
import { setupEdit } from './views/edit.js';
import { setupHome } from './views/home.js';

import { createNavigation } from './navigation.js';

window.addEventListener('load', async () => {
    // navigation.setUserNav();

    const main = document.querySelector('main');
    const nav = document.getElementById('siteNav');

    const navigation = createNavigation(main, nav);

    navigation.registerView('home', document.getElementById('home'), setupHome, 'homeLink');
    navigation.registerView('catalog', document.getElementById('catalog'), setupCatalog, 'catalogLink');
    navigation.registerView('details', document.getElementById('details'), setupDetails);
    navigation.registerView('login', document.getElementById('login'), setupLogin, 'loginLink');
    navigation.registerView('register', document.getElementById('register'), setupRegister, 'registerLink');
    navigation.registerView('create', document.getElementById('create'), setupCreate, 'createLink');
    navigation.registerView('edit', document.getElementById('edit'), setupEdit);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('views').remove();

    navigation.goTo('home');

    async function logout(event) {
        event.preventDefault();
        await apiLogout();
        navigation.setUserNav();
        navigation.goTo('catalog');
    }
});
