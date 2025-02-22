import { logout } from "../api/data.js";

export function setupLogout(section, navigation) {
    return logoutUser;

    async function logoutUser() {
        await logout();
        navigation.setUserNav();
        navigation.goTo('home');
        return section;
    }
}