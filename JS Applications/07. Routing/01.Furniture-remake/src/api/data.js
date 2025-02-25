import * as api from './api.js';

export async function getAll() {
    return await api.get(api.settings.host + '/data/catalog');
}

export async function getById(id) {
    return await api.get(api.settings.host + '/data/catalog/' + id);
}

export async function create(data) {
    return await api.post(api.settings.host + '/data/catalog', data);
}

export async function editById(id, data) {
    return await api.put(api.settings.host + '/data/catalog/' + id, data);
}

export async function deleteById(id) {
    return await api.del(api.settings.host + '/data/catalog/' + id);
}

export async function getAllByUser(userId) {
    return await api.get(api.settings.host + '/data/catalog/' + `?where=_ownerId%3D%22${userId}%22`);
}