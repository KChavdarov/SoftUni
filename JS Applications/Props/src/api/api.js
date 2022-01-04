import { clearUserData, getUserData, setUserData } from '../utilities.js';

export const settings = {
    host: '',
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        try {
            return await response.json();
        } catch {
            return response;
        }

    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

function createOptions(method = 'GET', data) {
    const user = getUserData();
    const options = {
        method,
        headers: {}
    };
    if (user) {
        options.headers['X-Authorization'] = user.token;
    }
    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    return options;
}

export async function get(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('POST', data));
}

export async function put(url, data) {
    return await request(url, createOptions('PUT', data));
}

export async function del(url) {
    return await request(url, createOptions('DELETE'));
}

export function logout() {
    const response = get(settings.host + '/users/logout');
    clearUserData();
    return response;
}


/*   CHANGE USER PARAMETERS IN LOGIN AND REGISTER FUNCTIONS BASED ON TASK REQUIREMENTS    */

export async function login(username, password) {
    const response = await post(settings.host + '/users/login', { username, password });
    setUserData({
        token: response.accessToken,
        id: response._id,

        username,
    });

    return response;
}

export async function register(username, password) {
    const response = await post(settings.host + '/users/register', { username, password });
    setUserData({
        token: response.accessToken,
        id: response._id,

        username,
    });

    return response;
}