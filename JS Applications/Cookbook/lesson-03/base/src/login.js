const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', onLoginSubmit)
const url = 'http://localhost:3030/users/login';

function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return alert('Please enter email and password');
    }

    login(email, password);
}

async function login(email, password) {
    const options = {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ email, password }),
    }
    const response = await fetch(url, options);
    if (!response.ok) {
        const err = response.json();
        return alert(err.message);
    }
    const data = await response.json();
    console.log(data);
    sessionStorage.setItem('userToken', data.accessToken);
    window.location.pathname = 'index.html';
}
