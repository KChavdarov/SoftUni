// import modules
// grab sections
// setup modules
// setup navigation

import { setupHome, showHome as showHomePage } from './home.js';
import { setupDetails } from './details.js';
import { setupLogin, showLogin as showLoginPage } from './login.js';
import { setupRegister, showRegister as showRegisterPage } from './register.js';
import { setupCreate, showCreate as showCreatePage } from './create.js';
import { setupEdit } from './edit.js';

const main = document.querySelector('main');

const links = {
    'homeLink': showHomePage,
    'loginLink': showLoginPage,
    'registerLink': showRegisterPage,
    'createLink': showCreatePage
};

setupSection('home-page', setupHome);
setupSection('add-movie', setupCreate);
setupSection('movie-details', setupDetails);
setupSection('edit-movie', setupEdit);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);

setupNav();
//Start App in Home
showHomePage();

function setupSection(sectionId, setup){
    const section = document.getElementById(sectionId);
    setup(main, section);
}

function setupNav(){
     
    const token = sessionStorage.getItem('authToken');
    if(token != null){
        document.getElementById('welcome-message').textContent = `Welcome, ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(l =>l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l =>l.style.display = 'none');
    }else{
        [...document.querySelectorAll('nav .user')].forEach(l =>l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l =>l.style.display = 'block');
    }

    document.querySelector('nav').addEventListener('click', (event)=>{
       
        if(event.target.tagName == 'A'){
            const view = links[event.target.id];
            if(typeof view == 'function'){
                event.preventDefault();
                view();
            }
        }
    });
    document.getElementById('createLink').addEventListener('click', (event)=>{
        event.preventDefault();
        showCreatePage();
    });
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

async function logout(){
    const token = sessionStorage.getItem('authToken');
    const response = await fetch('http://localhost:3030/users/logout',{
        method: 'get',
        headers: {'X-Authorization': token}
    });
    if(response.ok){
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        [...document.querySelectorAll('nav .user')].forEach(l =>l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l =>l.style.display = 'block');
        showHomePage();
    }else{
        const error = response.json();
        alert(error.message);
    }
}