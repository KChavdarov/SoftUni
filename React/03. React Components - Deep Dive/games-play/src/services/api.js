async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const result = await response.json();
            return result;
        } catch {
            return response;
        }
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
};

function createOptions(method = 'GET', data) {
    const options = {
        method,
        headers: {}
    };
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