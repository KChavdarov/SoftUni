function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const phonebook = document.getElementById('phonebook')
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate')
    const person = document.getElementById('person')
    const phone = document.getElementById('phone')

    loadBtn.addEventListener('click', loadContacts)
    createBtn.addEventListener('click', createContact)
    phonebook.addEventListener('click', deleteContact)

    async function loadContacts() {
        try {
            const data = await request(url)

            phonebook.innerHTML = Object.values(data)
                .map(({ person, phone, _id }) => `<li id=${_id}>${person}:${phone} <button class="delete">Delete</button></li>`)
                .join('')

        } catch (err) {
            console.log(err);
            alert('There was a problem: ' + err.message)
        }
    }

    async function createContact() {
        if ([person.value, phone.value].includes('')) {
            alert('Empty fields!')
            return
        }
        try {
            await request(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ person: person.value, phone: phone.value })
            });

            [person, phone].forEach(x => x.value = '')

            loadContacts()

        } catch (err) {
            console.log(err);
            alert('There was a problem: ' + err.message)
        }
    }

    async function deleteContact(e) {
        if (e.target.className != 'delete') {
            return
        }

        const id = e.target.parentElement.id
        try {
            await request(url + '/' + id, {
                method: 'Delete',
            })

            loadContacts()

        } catch (err) {
            console.log(err);
            alert('There was a problem: ' + err.message)
        }
    }

    async function request(url, options) {
        const res = await fetch(url, options)

        errHandling(res)

        return res.json()
    }

    function errHandling(res) {
        if (!res.ok) {
            throw new Error('El problemo' + res.status)
        }
    }
}

attachEvents();