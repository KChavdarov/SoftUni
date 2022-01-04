function start() {
    document.getElementById('loginForm').addEventListener('submit', login);
    document.getElementById('registerForm').addEventListener('submit', register);
}

async function login(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    const data = await request('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('userId', data._id);
    form.reset();
    window.location.pathname = '/index.html';
}

async function register(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (email == '' || password == '') {
        return alert('All fields are mandatory!');
    }
    if (password !== rePass) {
        return alert('Passwords don\'t match!');
    }

    const data = await request('http://localhost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('userId', data._id);
    form.reset();
    window.location.pathname = '/index.html';
}

async function request(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
        alert(data.message);
        throw new Error(data.message);
    }
    return data;
}

start();