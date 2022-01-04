import { contacts } from './contacts.js';
import { contactTemplate } from './card.js';
import { render } from './node_modules/lit-html/lit-html.js';

contacts.forEach((a) => (a.isVisible = false));

const container = document.getElementById('contacts');
container.addEventListener('click', toggleInfo);

function toggleInfo(event) {
    if (event.target.classList.contains('detailsBtn')) {
        const details = event.target.parentNode.querySelector('.details');
        const id = details.id;
        const contact = contacts.find(a => a.id == id);
        contact.isVisible = !contact.isVisible;

        // render(contacts.map(contactTemplate), container);
        render(contacts.map(a => contactTemplate(a, '#')), container);
    }
}

render(contacts.map(a => contactTemplate(a, '#')), container);