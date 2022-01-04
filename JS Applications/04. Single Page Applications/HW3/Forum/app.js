import {setupHome, showHome} from './home.js';
import {setupTopicComment} from './comment.js';


const main = document.querySelector('main');



setupSection('homeLink', setupHome);
setupSection('commentLink', setupTopicComment);

setupNavigation();
showHome();
// document.getElementById('views').innerHTML='';

function setupSection(sectionId, setupFunction) {
    const section = document.getElementById(sectionId);
    setupFunction(main, section);
}

function setupNavigation() {
    document.querySelector('nav a').addEventListener('click', (e) => {
            e.preventDefault();
            showHome();

    });

}

