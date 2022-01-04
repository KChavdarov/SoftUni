export const settings = {
    host: ''
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
    const token = sessionStorage.getItem('userToken');
    const result = { method , headers: {} };
    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.body = JSON.stringify(data);
    }
    if (token !== null) {
        result.headers['X-Authorization'] = token;
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
    const result = await post(settings.host + '/users/login', { email, password });
    sessionStorage.setItem('userToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);
    return result;
}

export async function register(email, password) {
    const result = await post(settings.host + '/users/register', { email, password });
    sessionStorage.setItem('userToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);
    return result;
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    return result;
}