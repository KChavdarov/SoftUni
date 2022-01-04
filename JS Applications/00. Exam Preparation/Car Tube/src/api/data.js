import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;


const collection = '/data/cars';


/* AUTH REQUESTS */
export const login = api.login;
export const register = api.register;
export const logout = api.logout;


/* GENERAL REQUESTS */
export async function getItemById(id) {
    return await api.get(host + collection + '/' + id);
}

export async function getAllItems() {
    return await api.get(host + collection + '?sortBy=_createdOn%20desc');
}

export async function createItem(data) {
    return await api.post(host + collection, data);
}

export async function updateItem(id, data) {
    return await api.put(host + collection + '/' + id, data);
}

export async function deleteItemById(id) {
    return await api.del(host + collection + '/' + id);
}

export async function getMyItems(userId) {
    return await api.get(host + collection + `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}



/* SPECIFIC REQUESTS */

export async function getSearchResults(query) {
    return await api.get(host + collection + '?where=year%3D' + query);
}