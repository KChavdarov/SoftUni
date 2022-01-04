import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;


const collection = '/data/wiki';


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

export async function updateItemById(id, data) {
    return await api.put(host + collection + '/' + id, data);
}

export async function deleteItemById(id) {
    return await api.del(host + collection + '/' + id);
}


/* SPECIFIC REQUESTS */

export async function getMostRecentArticles(){
    return await api.get(host + collection + '?sortBy=_createdOn%20desc&distinct=category');
}

export async function getSearchResults(query) {
    return await api.get(host + collection + `?where=title%20LIKE%20%22${query}%22`);
}