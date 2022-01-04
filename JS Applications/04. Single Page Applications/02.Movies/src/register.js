import { showHome } from './home.js';

let main;
let section;
let form;

async function onSubmit(data) {
    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    try {
        if (response.ok) {
            const data = await response.json();
            sessionStorage.clear();
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

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    form = section.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('repeatPassword');

        if (email === '' || password === '') {
            return alert('All fields are mandatory!');
        } else if (password.length < 6) {
            return alert('Password needs to be at least 6 characters long!');
        } else if (password !== repass) {
            return alert('Passwords don\'t match!');
        }

        onSubmit({ email, password });
    });
}

export function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}