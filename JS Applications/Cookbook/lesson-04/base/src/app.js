import { setupCatalog, showCatalog } from './catalog.js';
import { setupLogin, showLogin } from './login.js';
import { setupRegister, showRegister } from './register.js';
import { setupCreate, showCreate } from './create.js';
import { setupDetails } from './details.js';
import { setupEdit } from './edit.js';

setupMain();

function setupMain() {
    setUserNav();
    const main = document.querySelector('main');
    const catalogSection = document.getElementById('catalogSection');
    const loginSection = document.getElementById('loginSection');
    const registerSection = document.getElementById('registerSection');
    const createSection = document.getElementById('createSection');
    const detailsSection = document.getElementById('detailsSection');
    const editSection = document.getElementById('editSection');

    setupNavigation();
    setupCatalog(main, catalogSection, setActiveNav);
    setupLogin(main, loginSection, setActiveNav);
    setupRegister(main, registerSection, setActiveNav);
    setupCreate(main, createSection, setActiveNav);
    setupDetails(main, detailsSection, setActiveNav);
    setupEdit(main, editSection, setActiveNav);

    showCatalog();
}

function setupNavigation() {
    document.getElementById('logoutBtn').addEventListener('click', logout);
    const nav = document.getElementById('siteNav');
    nav.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.tagName == "A") {
            let action = views[event.target.id];
            if (action) {
                action();
                setActiveNav(event.target.id);
            }
        }
    })

    const views = {
        catalogLink: showCatalog,
        loginLink: showLogin,
        registerLink: showRegister,
        createLink: showCreate,
    }
}

function setActiveNav(targetId = 'catalogLink') {
    const nav = document.getElementById('siteNav');
    [...nav.querySelectorAll('a')].forEach(link => {
        if (link.id == targetId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })
}

function setUserNav() {
    if (sessionStorage.getItem('authToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
    }
}

async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken')
        },
    });
    if (response.status == 200) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        setUserNav();
        showCatalog();
    } else {
        console.error(await response.json());
    }
}