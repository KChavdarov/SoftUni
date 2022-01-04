document.getElementById('registerForm').addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    if (email == '' || password == '') {
        return alert('All fields are mandatory!');
    } else if (repass !== password) {
        return alert('Passwords don\'t match!');
    }
    const response = await fetch('http://localhost:3030/users/register', {
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