function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPhoneBook);
    document.getElementById('phonebook').addEventListener('click', deleteBtnAction);
    document.getElementById('btnCreate').addEventListener('click', processForm);
    loadPhoneBook();
}

async function processForm() {
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    await createEntry({ person: person.value, phone: phone.value });
    person.value = '';
    phone.value = '';
    loadPhoneBook();
}

async function deleteBtnAction(event) {
    if (event.target.tagName == 'BUTTON') {
        const button = event.target;
        const liElement = button.parentNode;
        const id = liElement.dataset.id;
        await deleteEntry(id);
        loadPhoneBook();
    }
}

async function loadPhoneBook() {
    const phonebook = document.getElementById('phonebook');
    const entries = await getPhoneBookEntries();
    phonebook.textContent = '';
    Object.values(entries).forEach(data => {
        const newLi = renderPhoneBookEntry(data);
        phonebook.appendChild(newLi);
    });
}

function renderPhoneBookEntry({ phone, person, _id: id }) {
    const newLi = document.createElement('li');
    newLi.textContent = `${person}: ${phone}`;
    newLi.setAttribute('data-id', id);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    newLi.appendChild(deleteBtn);
    return newLi;
}

async function createEntry(data) {
    await request('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    loadPhoneBook();
}

async function deleteEntry(id) {
    const deletedEntry = await request(`http://localhost:3030/jsonstore/phonebook/${id}`, { method: 'delete' });
    return deletedEntry;
}

async function getPhoneBookEntries() {
    const phoneBookEntries = await request('http://localhost:3030/jsonstore/phonebook');
    return phoneBookEntries;
}

async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

attachEvents();