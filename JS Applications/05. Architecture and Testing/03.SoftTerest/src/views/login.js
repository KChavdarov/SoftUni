import { login } from '../api/data.js';

export function setupLogin(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);
    form.querySelector('a').addEventListener('click', event => {
        event.preventDefault();
        navigation.goTo('register');
    });

    return showLogin;

    function showLogin() {
        return section;
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        if ([email, password].some(a => a == '')) {
            return alert('All fields are mandatory');
        }
        await login(email, password);
        form.reset();
        navigation.setUserNav();
        navigation.goTo('home');
    }
}