import { setupCatalog, displayCatalog } from './catalog.js';
import { setupLogin, displayLogin } from './login.js';
import { setupRegister, displayRegister } from './register.js';
import { setupCreate, displayCreate } from './create.js';
import { setupDetails } from './details.js';
import { setupEdit } from './edit.js';

main();

function main() {
    setUserNav();

    const links = {
        'catalogLink': displayCatalog,
        'loginLink': displayLogin,
        'registerLink': displayRegister,
        'createLink': displayCreate,
    };

    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const catalog = document.getElementById('catalog');
    const editSection = document.getElementById('editSection');
    const loginSection = document.getElementById('loginSection');
    const createSection = document.getElementById('createSection');
    const detailsSection = document.getElementById('detailsSection');
    const registerSection = document.getElementById('registerSection');

    setupCatalog(main, catalog, setActiveNav);
    setupLogin(main, loginSection, setActiveNav);
    setupRegister(main, registerSection, setActiveNav);
    setupCreate(main, createSection, setActiveNav);
    setupDetails(main, detailsSection, setActiveNav);
    setupEdit(main, editSection, setActiveNav);

    setupNavigation();
    displayCatalog();

    function setupNavigation() {
        document.getElementById('logoutBtn').addEventListener('click', logout);
        nav.addEventListener('click', event => {
            if (event.target.tagName == 'A') {
                const view = links[event.target.id];
                if (typeof view == 'function') {
                    event.preventDefault();
                    setActiveNav(event.target.id);
                    view();
                }
            }
        });
    }

    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(a => {
            if (a.id == targetId) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    }

    function setUserNav() {
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
        } else {
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
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
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
            setUserNav();
            displayCatalog();
        } else {
            console.error(await response.json());
        }
    }
}