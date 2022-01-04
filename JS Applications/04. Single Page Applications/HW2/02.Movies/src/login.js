import { showHome } from './home.js'

let main;
let section;


async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
        e.target.reset();
        const data = await response.json();
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);
        const welcomeUser = document.getElementById('welcome-msg');
        welcomeUser.textContent = `Welcome. ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');

        showHome();
    } else {
        const error = await response.json();
        alert(error.message)
    }
}

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    const form = section.querySelector('form');

    form.addEventListener('submit', onSubmit);
}

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}