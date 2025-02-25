import {setupHome, showHome} from './src/home.js';
import {setupDetails} from './src/details.js';
import {setupLogin, showLogin} from './src/login.js';
import {setupRegister, showRegister} from './src/register.js';
import {setupCreate, showCreate} from './src/create.js';
import {setupEdit} from './src/edit.js';

const main = document.querySelector('main');

const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate
};

setupSection('home-page', setupHome)
setupSection('add-movie', setupCreate)
setupSection('movie-details', setupDetails)
setupSection('edit-movie', setupEdit)
setupSection('form-login', setupLogin)
setupSection('form-sign-up', setupRegister)

setupNavigation();

//Start application in home view
showHome();

function setupSection(sectionId, setupFunction) {
    const section = document.getElementById(sectionId);
    setupFunction(main, section);
}

function setupNavigation() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
    } else {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
    }


    document.querySelector('nav').addEventListener('click', (event) => {
        const view = links[event.target.id];
        if (typeof view == "function") {
            event.preventDefault();
            view();
        }
    });
    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault();
        showCreate();
    });
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

async function logout() {
    const token = sessionStorage.getItem('authToken');
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {'X-Authorization': token}
    });

    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');

        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');

        showHome();
    } else {
        const error = await response.json();
        alert(error.message);
    }
}