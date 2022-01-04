import { setupForm, showForm } from './form.js';
import { setupTopics, showTopics } from './topics.js';

const main = document.querySelector('main');

setupSection('.new-topic-border', setupForm);
setupSection('.topic-title', setupTopics);

showForm();
showTopics();

function setupSection(sectionId, setup) {
    const section = document.querySelector(sectionId);
    setup(main, section);
}

document.addEventListener('click', (event) => {
    if (event.target.id == 'home') {
        event.preventDefault();
        window.history.go(0);
    }
});