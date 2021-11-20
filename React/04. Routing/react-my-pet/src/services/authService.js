export function setUser(username) {
    sessionStorage.setItem('username', username);
}

export function getUser() {
    return sessionStorage.getItem('username');
}

export function isAuthenticated() {
    return Boolean(getUser());
};

export function removeUser() {
    return sessionStorage.removeItem('username');
}