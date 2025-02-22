import { login } from '../api/data.js';

export function setupLogin(section, navigation) {
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showLogin;

    async function onSubmit(data) {
        const body = {
            email: data.email,
            password: data.password,
        };

        await login(body);
        form.reset();
        navigation.setUserNav();
        navigation.goTo('catalog');
    }

    function showLogin() {
        return section;
    }
}