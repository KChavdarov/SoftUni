import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function getIdeas() {
    return await api.get(host + '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getIdeaById(id) {
    return await api.get(host + '/data/ideas/' + id);
}

export async function deleteIdeaById(id) {
    return await api.del(host + '/data/ideas/' + id);
}

export async function createIdea(idea) {
    return await api.post(host + '/data/ideas/', idea);
}