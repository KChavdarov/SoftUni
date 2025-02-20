const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', onLoginSubmit)
const url = 'http://localhost:3030/users/register';

function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (!email || !password) {
        return alert('All fields are mandatory');
    } else if (password != rePass) {
        return alert("Passwords don't match");
    }

    login(email, password);
}

async function login(email, password) {
    const options = {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ email, password })
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
