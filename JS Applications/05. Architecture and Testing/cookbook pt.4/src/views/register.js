import { register } from '../api/api.js';

export function setupRegister(section, navigation) {
    section.querySelector('form').addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
    }));

    return showRegister;

    function showRegister() {
        return section;
    }

    async function onSubmit(data) {
        if (data.email == '' || data.password == '') {
            return alert('All fields are mandatory');
        } else if (data.password != data.rePass) {
            return alert('Passwords don\'t match');
        }
        await register(data.email, data.password);
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        navigation.goTo('home');
    }
}


