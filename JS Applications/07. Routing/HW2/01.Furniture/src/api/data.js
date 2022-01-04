import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getFurniture() {
    return await api.get(`http://localhost:3030/data/catalog`);
}

export async function getFurnitureById(id) {
    return await api.get(`http://localhost:3030/data/catalog/${id}`);
}

export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`)
}

export async function createFurniture(furniture) {
    return await api.post(`http://localhost:3030/data/catalog`, furniture);
}

export async function editFurniture(id, furniture) {
    return await api.put(`http://localhost:3030/data/catalog/${id}`, furniture);
}

export async function deleteFurniture(id) {
    return await api.del(`http://localhost:3030/data/catalog/${id}`);
}