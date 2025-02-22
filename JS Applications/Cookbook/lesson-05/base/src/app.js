import { createNavigation } from './navigation.js';
import { setupHome } from './views/home.js';
import { setupCatalog } from './views/catalog.js';
import { setupDetails } from './views/details.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupCreate } from './views/create.js';
import { setupEdit } from './views/edit.js';
import { setupLogout } from './views/logout.js';


window.addEventListener('load', async () => {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    const navigation = await createNavigation(main, nav);

    navigation.setUserNav();
    navigation.registerView('logout', document.createElement('section'), setupLogout, 'logoutBtn');
    navigation.registerView('home', document.getElementById('home'), setupHome);
    navigation.registerView('catalog', document.getElementById('catalog'), setupCatalog, 'catalogLink');
    navigation.registerView('details', document.getElementById('details'), setupDetails);
    navigation.registerView('login', document.getElementById('login'), setupLogin, 'loginLink');
    navigation.registerView('register', document.getElementById('register'), setupRegister, 'registerLink');
    navigation.registerView('create', document.getElementById('create'), setupCreate, 'createLink');
    navigation.registerView('edit', document.getElementById('edit'), setupEdit);
    document.getElementById('views').remove();

    await navigation.goTo('home');
});
