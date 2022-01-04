function formEngine() {
    document.getElementById('register').addEventListener('click', hideShow);
    document.getElementById('regForm').addEventListener('submit', onRegisterSubmit);
    document.getElementById('loginForm').addEventListener('submit', onLoginSubmit);
}

function hideShow(event) {

    let registerForm = document.getElementsByTagName('form')[0];
    let loginForm = document.getElementsByTagName('form')[1];

    if (event.target.textContent === 'Register') {
        loginForm.style.display = '';
        registerForm.style.display = 'none';
        event.target.textContent = 'Login';
        document.getElementById('message').innerHTML = '(click for Register)';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = '';
        event.target.textContent = 'Register';
        document.getElementById('message').innerHTML = '(click for Login)';

    }

}

formEngine();

async function onRegisterSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');
    if (email === '' || password === '') {
        return alert('All fields are required!');
    }
    if (password !== rePass) {
        return alert('Password fields must be the same!');
    }
    let response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email,password})
    });

    if (response.ok === false){
        let error = await response.json()
        return alert(error.message)
    }
    let data = await response.json();
    sessionStorage.setItem('userToken',data.accessToken);
    sessionStorage.setItem('userId',data._id);
    window.location.pathname = '/index.html'
}

async function onLoginSubmit(event) {
    event.preventDefault();
    sessionStorage.clear();
    let formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    if (email === '' || password === '') {
        return alert('All fields are required!');
    }
    let response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email,password})
    });

    if (response.ok === false){
        let error = await response.json()
        return alert(error.message)
    }
    let data = await response.json();
    sessionStorage.setItem('userToken',data.accessToken);
    sessionStorage.setItem('userId',data._id);
    window.location.pathname = 'index.html'
}

