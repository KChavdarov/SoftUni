import { login } from '../api/data.js';

export function setupLogin(section, navigation) {
    section.querySelector('form').addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showLogin;

    function showLogin() {
        return section;
    }

    async function onSubmit(data) {
        await login(data.email, data.password);
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        navigation.goTo('home');
    }
}