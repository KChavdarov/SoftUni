const url = 'http://localhost:3030/jsonstore/collections/books';
const booksData = document.getElementById('booksData');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');

async function start() {
    loadBooks();
    document.getElementById('loadBooks').addEventListener('click', loadBooks);
    document.getElementById('cancelBtn').addEventListener('click', cancelEdit);
    createForm.addEventListener('submit', createFormSubmit);
    booksData.addEventListener('click', bookActions);
    editForm.addEventListener('submit', editFormSubmit);
}

start();

async function loadBooks() {
    booksData.innerHTML = ''
    const books = await getAllBooks();
    Object.entries(books).map(([id, data]) => createRow(id, data)).forEach(r => booksData.appendChild(r));
}

function createRow(id, { title, author }) {
    const newRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    const authorCell = document.createElement('td');
    authorCell.textContent = author;
    const actions = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(actions);
    newRow.setAttribute('data-id', id);
    return newRow;
}

async function createFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        title: formData.get('title'),
        author: formData.get('author'),
    }

    await createBook(data);
    event.target.reset();
    loadBooks();
}

async function editFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { id, title, author } = {
        id: formData.get('id'),
        title: formData.get('title'),
        author: formData.get('author'),
    }

    await editBook(id, { title, author })
    cancelEdit();
    event.target.reset();
    loadBooks();
}

async function onDelete(id) {
    const confirmed = confirm('Are you sure you want to delete this book?');
    if (confirmed) {
        await deleteBook(id);
        loadBooks();
    }
}

async function bookActions(event) {
    const row = event.target.parentElement.parentElement;
    let id = row.dataset.id;

    if (event.target.textContent.toLowerCase() == 'delete') {
        onDelete(id);
    } else if (event.target.textContent.toLowerCase() == 'edit') {
        renderEditForm(id);
    }
}

async function renderEditForm(id) {
    createForm.style.display = 'none';
    editForm.style.display = 'block'
    const { title, author } = await getBookById(id);
    const [titleInput, authorInput, idInput] = editForm.querySelectorAll('input');
    titleInput.value = title;
    authorInput.value = author;
    idInput.value = id;
}

function cancelEdit() {
    editForm.style.display = 'none'
    createForm.style.display = 'block';
    editForm.reset();
}

async function getAllBooks() {
    const response = await fetch(url);
    if (!response.ok) {
        const err = response.json();
        console.error(err.message);
    }
    return response.json();
}

async function getBookById(id) {
    const response = await fetch(url + `/${id}`);
    if (!response.ok) {
        const err = response.json();
        console.error(err.message);
    }
    return response.json();
}

async function createBook(data) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        const err = response.json();
        console.error(err.message);
    }
    return response.json();
}

async function deleteBook(id) {
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url + `/${id}`, options);
    if (!response.ok) {
        const err = response.json();
        console.error(err.message);
    }
    return response.json();
}

async function editBook(id, data) {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }
    const response = await fetch(url + `/${id}`, options);
    if (!response.ok) {
        const err = response.json();
        console.error(err.message);
    }
    return response.json();
}



// async function start() {
//     loadBooks();
//     document.getElementById('loadBooks').addEventListener('click', loadBooks);
//     document.getElementById('createForm').addEventListener('submit', createFormSubmit);
//     document.getElementById('booksData').addEventListener('click', bookActions);
//     document.getElementById('editForm').addEventListener('submit', editFormSubmit);
//     document.getElementById('cancelBtn').addEventListener('click', cancelEdit);
// }

// start();

// function cancelEdit() {
//     const editForm = document.getElementById('editForm');
//     const createForm = document.getElementById('createForm');
//     createForm.style.display = 'block';
//     editForm.style.display = 'none';
// }

// async function bookActions(event) {
//     if (event.target.tagName == 'BUTTON') {
//         const button = event.target;
//         const row = button.parentNode.parentNode;
//         const id = row.dataset.id;
//         if (button.className === 'delete') {
//             const confirmed = confirm('Are you sure you want to delete this book?');
//             if (confirmed) {
//                 await deleteBook(id);
//                 loadBooks();
//             }
//         } else if (button.className === 'edit') {
//             const bookData = await getBook(id);
//             renderEditForm(id, bookData);
//         }
//     }
// }

// function renderEditForm(id, { author, title }) {
//     const editForm = document.getElementById('editForm');
//     const createForm = document.getElementById('createForm');
//     createForm.style.display = 'none';
//     editForm.style.display = 'block';
//     const [titleInput, authorInput, idInput] = editForm.querySelectorAll('input');
//     titleInput.value = title;
//     authorInput.value = author;
//     idInput.value = id;
// }

// async function editFormSubmit(event) {
//     event.preventDefault();
//     const createForm = document.getElementById('createForm');
//     const editForm = event.target;
//     const formData = new FormData(editForm);
//     const title = formData.get('title');
//     const author = formData.get('author');
//     const id = formData.get('id');
//     await editBook(id, { title, author });
//     editForm.reset();
//     createForm.style.display = 'block';
//     editForm.style.display = 'none';
//     await loadBooks();
// }

// async function createFormSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const title = formData.get('title');
//     const author = formData.get('author');
//     await createBook({ title, author });
//     form.reset();
//     await loadBooks();
// }

// async function loadBooks() {
//     const books = await getAllBooks();
//     const bookList = document.getElementById('booksData');
//     bookList.textContent = '';
//     Object.entries(books).forEach(([id, data]) => {
//         bookList.appendChild(createRow(id, data));
//     });
// }

// async function getBook(id) {
//     const data = await request(`http://localhost:3030/jsonstore/collections/books/${id}`);
//     return data;
// }

// async function getAllBooks() {
//     const data = await request('http://localhost:3030/jsonstore/collections/books');
//     return data;
// }

// async function createBook(book) {
//     const data = await request('http://localhost:3030/jsonstore/collections/books', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(book)
//     });
//     return data;
// }

// async function editBook(id, book) {
//     const data = await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(book)
//     });
//     return data;
// }

// async function deleteBook(id) {
//     const data = await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
//         method: 'delete',
//     });
//     return data;
// }

// async function request(url, options) {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }
//     const data = await response.json();
//     return data;
// }

// function createRow(id, { title, author }) {
//     const newRow = document.createElement('tr');
//     const titleCell = document.createElement('td');
//     titleCell.textContent = title;
//     const authorCell = document.createElement('td');
//     authorCell.textContent = author;
//     const actions = document.createElement('td');
//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Edit';
//     editBtn.classList.add('edit');
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete');
//     actions.appendChild(editBtn);
//     actions.appendChild(deleteBtn);
//     newRow.appendChild(titleCell);
//     newRow.appendChild(authorCell);
//     newRow.appendChild(actions);
//     newRow.setAttribute('data-id', id);
//     return newRow;
// }