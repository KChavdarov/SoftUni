import { deleteIdeaById, getIdeaById } from '../api/data.js';
import { e } from '../dom.js';


export function setupDetails(section, navigation) {

    return showDetails;

    async function showDetails(id) {
        section.innerHTML = '';
        const idea = await getIdeaById(id);
        section.appendChild(createDetailView(idea));
        return section;
    }

    function createDetailView(idea) {
        const result = document.createDocumentFragment();
        result.appendChild(e('img', { className: 'det-img', src: idea.img }));
        const card = e('div', { className: 'desc' },
            e('h2', { className: 'display-5' }, idea.title),
            e('p', { className: 'infoType' }, 'Description:'),
            e('p', { className: 'idea-description' }, idea.description),
        );
        result.appendChild(card);

        if (sessionStorage.getItem('authToken') !== null && sessionStorage.getItem('userId') === idea._ownerId) {
            result.appendChild(e('div', { className: 'text-center' }, e('a', { className: 'btn detb', href: '', onClick: deleteIdea }, 'Delete')));

            function deleteIdea(event) {
                event.preventDefault();
                const confirmed = confirm('Are you sure you want to delete this idea?');
                if (confirmed) {
                    deleteIdeaById(idea._id);
                    navigation.goTo('dashboard');
                }
            }
        }
        return result;
    }
}

{/* <img class="det-img" src="./images/dinner.jpg" />
<div class="desc">
    <h2 class="display-5">Dinner Recipe</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a
        long
        day. With so many easy pasta recipes out there, there's something for every palate to love. That's
        why
        pasta
        makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to
        its
        versatility.</p>
</div>
<div class="text-center">
    <a class="btn detb" href="">Delete</a>
</div> */}