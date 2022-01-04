/* Добавенo:
- logout функционалност заменя login, ако потребител е вече логнат.
- всички input полета са disabled в guest mode.
- input, updated и delete бутоните са активни само за данните създадени от логнатия потребител
- автоматично зареждане на уловите при зареждане на началанта страница
*/

const token = sessionStorage.getItem('userToken');
const user = sessionStorage.getItem('userId');

function start() {
    getCatches();
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    document.querySelector('button.load').addEventListener('click', getCatches);
    if (token !== null) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        logoutBtn.addEventListener('click', async event => await logout(event));
        [...document.getElementById('createForm').querySelectorAll('input, button')].forEach(e => e.disabled = false);
        document.getElementById('createForm').addEventListener('submit', event => createCatch(event));
        document.getElementById('catches').addEventListener('click', buttonActions);
    }
}

async function buttonActions(event) {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const currentCatch = event.target.parentNode;
        const id = currentCatch.dataset.id;
        const owner = currentCatch.dataset.owner;
        if (token !== null && user === owner) {
            if (button.className === 'delete') {
                await deleteCatch(id);
                getCatches();
            } else if (button.className === 'update') {
                const inputs = [...currentCatch.querySelectorAll('input')];
                const [angler, weight, species, location, bait, captureTime] = inputs.map(a => a.value);
                const data = { angler, weight: Number(weight), species, location, bait, 'captureTime ': Number(captureTime) };
                await updateCatch(id, data);
                getCatches();
            }
        }
    }
}

async function logout(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token },
    });
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    sessionStorage.clear();
    window.location.pathname = '/index.html';
}

function renderCatch({ angler, weight, species, location, bait, 'captureTime ': captureTime, _id, _ownerId }) {
    const newCatch = document.createElement('div');
    newCatch.className = 'catch';
    newCatch.setAttribute('data-id', _id);
    newCatch.setAttribute('data-owner', _ownerId);
    newCatch.innerHTML = `
    <label>Angler</label>
    <input disabled type="text" class="angler" value="${angler}" />
    <hr>
    <label>Weight</label>
    <input disabled type="number" class="weight" value="${weight}" />
    <hr>
    <label>Species</label>
    <input disabled type="text" class="species" value="${species}" />
    <hr>
    <label>Location</label>
    <input disabled type="text" class="location" value="${location}" />
    <hr>
    <label>Bait</label>
    <input disabled type="text" class="bait" value="${bait}" />
    <hr>
    <label>Capture Time</label>
    <input disabled type="number" class="captureTime" value="${captureTime}" />
    <hr>
    <button disabled class="update">Update</button>
    <button disabled class="delete">Delete</button>`;
    return newCatch;
}

async function getCatches() {
    const catches = document.getElementById('catches');
    const data = await request('http://localhost:3030/data/catches');
    catches.innerHTML = '';
    data.forEach(entry => {
        const newCatch = renderCatch(entry);
        if (token !== null && user === newCatch.dataset.owner) {
            const elements = [...newCatch.querySelectorAll('input, button')];
            elements.forEach(i => i.disabled = false);
        }
        catches.appendChild(newCatch);
    });
}

async function updateCatch(id, data) {
    await request(`http://localhost:3030/data/catches/${id}`, {
        method: 'put',
        headers: { 'Content-type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify(data),
    });
}

async function deleteCatch(id) {
    await request(`http://localhost:3030/data/catches/${id}`, {
        method: 'delete',
        headers: { 'X-Authorization': token },
    });
}

async function createCatch(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const location = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');
    const newCatch = { angler, weight: Number(weight), species, location, bait, 'captureTime ': Number(captureTime) };
    await request('http://localhost:3030/data/catches', {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': token },
        body: JSON.stringify(newCatch),
    });
    form.reset();
    getCatches();
}

async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = response.json();
    return data;
}

start();