async function request(url, options) {
    const response = await fetch(url, options);

    if (!response.ok) {
        const error = await response.json();
        console.error(error.message);
        throw new Error(error.message);
    }

    try {
        const data = await response.json();
        return data;
    } catch (err) {
        return response;
    }
}

function setOptions(method = 'GET', data) {
    const result = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');

    if (token) {
        result.headers['X-Authorization'] = token;
    }

    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.body = JSON.stringify(data);
    }

    return result;
}

export const settings = {
    host: ''
}

export async function get(url) {
    return request(url, setOptions('GET'));
}

export async function post(url, data) {
    return request(url, setOptions('POST', data));
}

export async function put(url, data) {
    return request(url, setOptions('PUT', data));
}

export async function del(url) {
    return request(url, setOptions('DELETE'));
}

export async function login(data) {
    const user = await post(settings.host + '/users/login', data);
    sessionStorage.setItem('authToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('email', user.email);
}

export async function register(data) {
    const user = await post(settings.host + '/users/register', data);
    sessionStorage.setItem('authToken', user.accessToken);
    sessionStorage.setItem('userId', user._id);
    sessionStorage.setItem('email', user.email);
}

export async function logout() {
    await get('http://localhost:3030/users/logout');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
}