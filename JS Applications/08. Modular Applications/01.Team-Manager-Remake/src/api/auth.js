import * as request from './request.js';


export async function login(email, password) {
    const result = await request.post(request.settings.host + '/users/login', { email, password });
    const user = {
        token: result.accessToken,
        id: result._id,
        email: result.email,
        username: result.username,
    };
    sessionStorage.setItem('user', JSON.stringify(user));
    return result;
}

export async function register(email, username, password) {
    const result = await request.post(request.settings.host + '/users/register', { email, username, password });
    const user = {
        token: result.accessToken,
        id: result._id,
        email: result.email,
        username: result.username,
    };
    sessionStorage.setItem('user', JSON.stringify(user));
    return result;
}

export async function logout() {
    const result = await request.get(request.settings.host + '/users/logout');
    sessionStorage.removeItem('user');
    return result;
}