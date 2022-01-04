function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getPhonebook);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
}

attachEvents();

async function getPhonebook() {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let response = await fetch(url);
    let data = await response.json();
    loadBookData(data);
}

function loadBookData(data) {
    let ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    for (const book of Object.values(data)) {
        let li = document.createElement('li');
        li.id = book._id;
        let entry = `${book.person}:${book.phone} <button>Delete</button>`;
        li.innerHTML = entry;
        li.children[0].addEventListener('click', deleteEntry);
        ul.appendChild(li);
    }
}

async function createEntry() {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');
    if (person.value != '' && phone.value != '') {
        let data = {person: person.value, phone: phone.value};
        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        person.value = '';
        phone.value = '';

        await getPhonebook();
    }
}

async function deleteEntry(event) {
    let id = event.target.parentElement.id
    await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete',
    });
    await getPhonebook()
}