async function request(url, options) {
    let response = await fetch(url, options);
    if (request.ok == false) {
        let error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    let data = await response.json();
    return data;
}

async function getAllBooks() {
    let books = await request('http://localhost:3030/jsonstore/collections/books');
    let rows = Object.entries(books).map(createRow).join('');
    document.getElementsByTagName('tbody')[0].innerHTML = rows;
}

function createRow([id, book]) {
    const result = `<tr data-id="${id}">
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>
                        <button class="editBtn">Edit</button>
                        <button class="deleteBtn">Delete</button>
                        </td>
                    </tr>`;
    return result;
}

async function createBook(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let book = {title: formData.get('title'), author: formData.get('author')};

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });
    event.target.reset();
    await getAllBooks()
}

async function updateBook(event) {
    event.preventDefault()
    let formData = new FormData(event.target)
    let id = formData.get('id')
    let book = {title: formData.get('title'), author: formData.get('author')};
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });
    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
    event.target.reset();
    await getAllBooks()
}

async function deleteBook(id) {
    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete',
    });
}

function start() {

    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.getElementById('editForm').addEventListener('submit', updateBook);
    document.getElementById('editForm').addEventListener('cancel', getAllBooks);
    document.getElementsByTagName('table')[0].addEventListener('click', handleTableClick);

}

start();

async function handleTableClick(event) {

    if (event.target.className == 'editBtn') {
        let bookId = event.target.parentElement.parentElement.dataset.id;
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';

        await loadBookForEditing(bookId);

    } else if (event.target.className == 'deleteBtn') {
        let bookId = event.target.parentElement.parentElement.dataset.id;
        let confirmed = confirm('Are you sure?')
        if (confirmed){
            await deleteBook(bookId)
            await getAllBooks()
        }

    }
}

async function loadBookForEditing(id) {
    let book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
    document.querySelector('#editForm [name="title"]').value = book.title
    document.querySelector('#editForm [name="author"]').value = book.author
    document.querySelector('#editForm [name="id"]').value = id
}