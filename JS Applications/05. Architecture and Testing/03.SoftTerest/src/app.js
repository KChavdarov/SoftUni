import { createNavigation } from './navigation.js';
import { setupCreate } from './views/create.js';
import { setupDashboard } from './views/dashboard.js';
import { setupDetails } from './views/details.js';
import { setupHome } from './views/home.js';
import { setupLogin } from './views/login.js';
import { setupLogout } from './views/logout.js';
import { setupRegister } from './views/register.js';

window.addEventListener('load', async () => {

    const main = document.querySelector('main');
    const nav = document.getElementById('site-navigation');
    const navigation = createNavigation(main, nav);

    navigation.registerView('home', document.getElementById('home-page'), setupHome, 'homeLink');
    navigation.registerView('dashboard', document.getElementById('dashboard-holder'), setupDashboard, 'dashboardLink');
    navigation.registerView('details', document.getElementById('details-page'), setupDetails);
    navigation.registerView('login', document.getElementById('login-page'), setupLogin, 'loginLink');
    navigation.registerView('register', document.getElementById('register-page'), setupRegister, 'registerLink');
    navigation.registerView('logout', document.getElementById('home-page'), setupLogout, 'logoutLink');
    navigation.registerView('create', document.getElementById('create-page'), setupCreate, 'createLink');
    document.querySelector('div.views').remove();

    navigation.goTo('home');
});