/*  SESSION STORAGE HANDLING  */
export function getUserData() {
    const user = sessionStorage.getItem('user');
    if (user !== null) {
        return JSON.parse(user);
    } else {
        return undefined;
    }
}

export function setUserData(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function clearUserData() {
    sessionStorage.removeItem('user');
}