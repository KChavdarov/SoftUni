import { getUserData } from '../utilities.js';
import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;


const collection = '/jsonstore/shoes';


/* AUTH REQUESTS */
export const login = api.login;
export const register = api.register;
export const logout = api.logout;


/* GENERAL REQUESTS */
export async function getItemById(id) {
    return await api.get(host + collection + '/' + id);
}

export async function getAllItems() {
    const data = await api.get(host + collection);
    return Object.values(data).sort((a, b) => Number(b.sales.length) - Number(a.sales.length));
}

export async function createItem(data) {
    data._ownerId = getUserData().id;
    return await api.post(host + collection, data);
}

export async function updateItemById(id, data) {
    return await api.put(host + collection + '/' + id, data);
}

export async function deleteItemById(id) {
    return await api.del(host + collection + '/' + id);
}

export async function getMyItems(userId) {
    const data = await api.get(host + collection);
    return Object.values(data).filter(a => a._ownerId == userId);
}