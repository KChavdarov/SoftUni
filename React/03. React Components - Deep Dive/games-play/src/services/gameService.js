import * as api from './api';

const API_URL = 'http://localhost:3030/data/';

const host = API_URL + '/games';

export async function getAll() {
    const result = await api.get(host);
    return result;
};

export async function getOne(id) {
    const result = await api.get(`${host}/${id}`);
    return result;
}