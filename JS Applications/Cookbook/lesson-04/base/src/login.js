import { showCatalog } from "./catalog.js";

let main;
let section;
let setActiveNav;

export function setupLogin(mainTarget, sectionTarget, setActiveNavCb) {
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

export async function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
    setActiveNav('loginLink');
}

async function onSubmit(data) {
    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });

    try {
        const response = await fetch('http://localhost:3030/users/login', {
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
            
            showCatalog();
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        console.error(err.message);
    }
}