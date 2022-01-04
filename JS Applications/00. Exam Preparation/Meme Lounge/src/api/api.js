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
        } catch (error) {
            return response;
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = 'GET', data) {
    const user = sessionStorage.getItem('user');
    const result = { method, headers: {} };
    if (user !== null) {
        result.headers['X-Authorization'] = JSON.parse(user).token;
    }
    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.body = JSON.stringify(data);
    }
    return result;
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

export async function login(email, password) {
    const response = await post(settings.host + '/users/login', { email, password });
    sessionStorage.setItem('user', JSON.stringify({
        token: response.accessToken,
        id: response._id,
        email: response.email,
        username: response.username,
        gender: response.gender,
    }));
    return response;
}

export async function register(email, username, password, gender) {
    const response = await post(settings.host + '/users/register', { email, username, password, gender });
    sessionStorage.setItem('user', JSON.stringify({
        token: response.accessToken,
        id: response._id,
        email: response.email,
        username: response.username,
        gender: response.gender,
    }));
    return response;
}

export async function logout() {
    const response = await get(settings.host + '/users/logout');
    sessionStorage.removeItem('user');
    return response;
}