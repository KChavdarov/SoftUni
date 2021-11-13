const API_URL = 'http://localhost:3030/jsonstore';

export async function getToDos() {
    const response = await fetch(`${API_URL}/todos`);
    const result = await response.json();
    return (Object.values(result));
}

export async function createToDo(toDo) {
    const response = await fetch(`${API_URL}/todos`, {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(toDo)});
    const result = await response.json();
    return result;
}

export async function updateToDo(id, toDo) {
    const response = await fetch(`${API_URL}/todos/${id}`, {method: 'PUT', headers: {'content-type': 'application/json'}, body: JSON.stringify(toDo)});
    const result = await response.json();
    return result;
}

export async function deleteToDo(id) {
    const response = await fetch(`${API_URL}/todos/${id}`, {method: 'DELETE'});
    const result = await response.json();
    return result;
}