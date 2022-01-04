import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getAllFurnitureCount(search) {
    return await api.get(host + '/data/catalog?where=' + encodeURIComponent(`make LIKE "${search}"`) + '&count');
}

export async function getMyFurnitureCount() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + '/data/catalog?where=' + encodeURIComponent(`_ownerId="${userId}"`) + '&count');
}

export async function getAllFurniture(page, search) {
    return await api.get(host + '/data/catalog?select=' + encodeURIComponent('_id,img,description,price') + '&where=' + encodeURIComponent(`make LIKE "${search}"`) + `&offset=${(page-1) * 2}&pageSize=2`);
}

export async function getMyFurniture(page) {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + '/data/catalog?select=' + encodeURIComponent('_id,img,description,price') + '&where=' + encodeURIComponent(`_ownerId="${userId}"`) + `&offset=${(page-1) * 2}&pageSize=2`);
}

export async function getItemById(id) {
    return await api.get(host + '/data/catalog/' + id);
}

export async function createItem(data) {
    return await api.post(host + '/data/catalog', data);
}

export async function updateItemById(id, data) {
    return await api.put(host + '/data/catalog/' + id, data);
}

export async function deleteItemById(id) {
    return await api.del(host + '/data/catalog/' + id);
}