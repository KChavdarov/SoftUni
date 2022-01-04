import { logout } from '../api/data.js';

export function setupLogout(section, navigation) {

    return showLogout;

    async function showLogout() {
        await logout();
        navigation.setUserNav();
        return section;
    }
}