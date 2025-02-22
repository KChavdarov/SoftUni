import { register } from '../api/data.js';

export function setupRegister(section, navigation) {
    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showRegister;

    async function onSubmit(data) {
        if (data.password != data.rePass) {
            return alert('Passwords don\'t match');
        }

        const body = {
            email: data.email,
            password: data.password,
        };

        await register(body);
        form.reset();
        navigation.setUserNav();
        navigation.goTo('catalog');
    }

    function showRegister() {
        return section;
    }
}