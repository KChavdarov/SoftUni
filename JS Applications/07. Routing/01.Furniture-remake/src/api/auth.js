import * as api from './api.js';

export async function login(email, password) {
    const result = await api.post(api.settings.host + '/users/login', { email, password });
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);
    return result;
}

export async function register(email, password) {
    const result = await api.post(api.settings.host + '/users/register', { email, password });
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);
    return result;
}

export async function logout() {
    const result = await api.get(api.settings.host + '/users/logout');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    return result;
}