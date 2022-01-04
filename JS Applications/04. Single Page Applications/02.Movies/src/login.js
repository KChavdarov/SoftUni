import { showHome } from './home.js';

let main;
let section;
let form;

async function onSubmit(data) {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    try {
        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('userToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);
            document.getElementById('welcomeMessage').textContent = `Welcome, ${sessionStorage.getItem('email')}`;
            [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
            [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
            form.reset();
            showHome();
            document.getElementById('createMovieBtn').style.display = 'inline-block';
        } else {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (error) {
        alert(error.message);
    }
}

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    form = section.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        onSubmit({ email, password });
    });
}

export function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}