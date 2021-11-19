const API_URL = "http://localhost:3030/jsonstore";

export async function getAll() {
    const response = await fetch(API_URL + '/pets');
    const data = await response.json();
    return Object.values(data);
}