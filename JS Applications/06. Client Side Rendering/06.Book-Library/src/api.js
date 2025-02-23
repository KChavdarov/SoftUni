const host = 'http://localhost:3030/jsonstore/collections/books';

async function request(endpoint, method = 'GET', data) {
    const options = { method, headers: {} };
    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(endpoint, options);

    if (response.ok === false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    try {
        const data = await response.json();
        return data;
    } catch {
        return response;
    }
}

export async function getAllBooks() {
    const data = await request(host);
    return Object.entries(data).map(([k, v]) => Object.assign(v, { _id: k }));
}

export async function editBook(id, data) {
    return await request('http://localhost:3030/jsonstore/collections/books/' + id, 'PUT', data);
}

export async function createBook(data) {
    return await request('http://localhost:3030/jsonstore/collections/books', 'POST', data);
}

export async function deleteBook(id) {
    return await request('http://localhost:3030/jsonstore/collections/books/' + id, 'DELETE');
}

export async function getBookById(id) {
    const data = await request('http://localhost:3030/jsonstore/collections/books/' + id,);
    return Object.assign(data, { _id: id });
}


// async function request(endpoint, method = 'GET', data) {
//     const options = { method };
//     if (data) {
//         options.headers = { 'Content-Type': 'application/json' };
//         options.body = JSON.stringify(data);
//     }

//     const response = await fetch(endpoint, options);

//     if (response.ok === false) {
//         const error = await response.json();
//         alert(error.message);
//         throw new Error(error.message);
//     }
//     try {
//         const data = await response.json();
//         return data;
//     } catch {
//         return response;
//     }
// }

// async function getAllBooks() {
//     const data = await request('http://localhost:3030/jsonstore/collections/books');
//     return Object.entries(data).map(([k, v]) => Object.assign(v, { _id: k }));
// }

// async function editBook(id, data) {
//     return await request('http://localhost:3030/jsonstore/collections/books/' + id, 'PUT', data);
// }

// async function createBook(data) {
//     return await request('http://localhost:3030/jsonstore/collections/books', 'POST', data);
// }

// async function deleteBook(id) {
//     return await request('http://localhost:3030/jsonstore/collections/books/' + id, 'DELETE');
// }

// async function getBookById(id) {
//     const data = await request('http://localhost:3030/jsonstore/collections/books/' + id, );
//     return Object.assign(data, { _id: id });
// }

// export { getAllBooks, editBook, deleteBook, createBook, getBookById };