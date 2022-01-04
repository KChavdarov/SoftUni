import { e } from '../dom.js';
import { getIdeas } from '../api/data.js';

export function setupDashboard(section, navigation) {

    return showDashboard;

    async function showDashboard() {
        section.innerHTML = 'Loading&hellip;';

        const fragment = document.createDocumentFragment();
        const ideas = await getIdeas();
        if (ideas.length > 0) {
            const card = ideas.map(i => createIdeaCard(i));
            card.forEach(c => fragment.appendChild(c));
        } else {
            fragment.appendChild(e('h1', {}, 'No ideas yet! Be the first one :)'));
        }

        section.innerHTML = '';
        section.appendChild(fragment);
        return section;
    }

    function createIdeaCard(idea) {
        const card = e('div', { className: 'card overflow-hidden current-card details', style: 'width: 20rem; height: 18rem;' },
            e('div', { className: 'card-body' }, e('p', { className: 'card-text' }, idea.title)),
            e('img', { src: idea.img, className: 'card-image', alt: 'Card image cap' }),
            e('a', { className: 'btn', href: '', 'onClick': onClick }, 'Details')
        );
        return card;

        function onClick(event) {
            event.preventDefault();
            // if (sessionStorage.getItem('authToken') !== null) {
                navigation.goTo('details', idea._id);
            // } else { navigation.goTo('login'); }
        }
    }
}