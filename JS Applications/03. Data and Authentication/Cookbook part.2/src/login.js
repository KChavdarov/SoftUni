document.getElementById('loginForm').addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email == '' || password == '') {
        return alert('All fields are mandatory!');
    }

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
        return alert(data.message);
    } else {
        sessionStorage.setItem('userToken', data.accessToken);
        window.location.pathname = '/Cookbook part.2/index.html';
    }
}