/*
    - Добавена like + unlike фукционалност
    - Поправен CSS
*/

import { setupHome, showHome } from './home.js';
import { setupLogin, showLogin } from './login.js';
import { setupRegister, showRegister } from './register.js';
import { setupDetails } from './details.js';
import { setupCreate, showCreate } from './create.js';
import { setupEdit } from './edit.js';

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const createBtn = document.getElementById('createMovieBtn');

const links = {
    'logoutLink': logout,
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createMovieBtn': showCreate,
};

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);


setupNavigation();
showHome();

function setupNavigation() {
    setUserControls();
    nav.addEventListener('click', event => {
        const view = links[event.target.id];
        if (typeof view === 'function') {
            event.preventDefault();
            view();
        }
    });
    createBtn.addEventListener('click', event => {
        event.preventDefault;
        showCreate();
    });
}

async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': sessionStorage.getItem('userToken') }
    });
    if (response.ok) {
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        setUserControls();
        showLogin();
    }
}

function setUserControls() {
    if (sessionStorage.getItem('userToken') !== null) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${sessionStorage.getItem('email')}`;
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
        document.getElementById('createMovieBtn').style.display = 'inline-block';
    } else {
        document.getElementById('welcomeMessage').textContent = 'Welcome!';
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
        document.getElementById('createMovieBtn').style.display = 'none';
    }
}
