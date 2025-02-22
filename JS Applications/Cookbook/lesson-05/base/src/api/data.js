import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout

export async function getRecipes(page, pageSize) {
    return await api.get(host + `/data/recipes?select=_id%2Cname%2Cimg&offset=${pageSize * (page - 1)}&pageSize=${pageSize}`)
}

export async function getRecipesCount() {
    return await api.get(host + '/data/recipes?count');
}

export async function createRecipe(data) {
    return await api.post(host + '/data/recipes', data);
}

export async function getRecipeById(id) {
    return await api.get(host + '/data/recipes/' + id);
}

export async function deleteRecipeById(id) {
    return await api.del(host + '/data/recipes/' + id);
}

export async function editRecipeById(id, data) {
    return await api.put(host + '/data/recipes/' + id, data);
}

export async function getRecent() {
    return await api.get(host + '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3');
}