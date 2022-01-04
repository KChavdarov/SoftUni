import { createIdea } from '../api/data.js';

export function setupCreate(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);

    return showCreate;

    async function showCreate() {
        return section;
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('imageURL');

        if ([title, description, img].some(a => a == '')) {
            return alert('All fields are mandatory');
        }
        await createIdea({ title, description, img, });
        form.reset();
        navigation.setUserNav();
        navigation.goTo('dashboard');
    }
}