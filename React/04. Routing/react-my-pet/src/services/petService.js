const API_URL = 'http://localhost:3030/jsonstore';

export async function getAll() {
    const response = await fetch(API_URL + '/pets');
    const data = await response.json();
    return Object.values(data);
}

export async function getOne(id) {
    const response = await fetch(API_URL + '/pets/' + id);
    const data = await response.json();
    return data;
}

export async function createOne(data) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(API_URL + '/pets', options);
    return await response.json();
}
