import { displayCatalog } from './catalog.js';

async function onSubmit(data) {
    if (data.password != data.rePass) {
        return console.error('Passwords don\'t match');
    }

    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });

    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
        const data = await response.json();
        if (response.status == 200) {
            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
            displayCatalog();
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        console.error(err.message);
    }
}

let main;
let section;
let setActiveNav;

//setup: 1. store section ref; 2.store main ref; 3.add event listeners
export function setupRegister(mainTarget, sectionTarget, setActiveNavCb) {
    main = mainTarget;
    section = sectionTarget;
    setActiveNav = setActiveNavCb;
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));
}

//display: 1. fetch data; 2. clear main element HTML; 3. attach section
export async function displayRegister() {
    setActiveNav('registerLink');
    main.innerHTML = '';
    main.appendChild(section);
}