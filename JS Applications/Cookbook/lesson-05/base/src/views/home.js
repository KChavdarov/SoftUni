import { getRecent } from '../api/data.js';
import { e } from '../dom.js';

function createRecipePreview(recipe, goTo) {
    const result = e('article', { className: 'recent', onClick: () => goTo('details', recipe._id) },
        e('div', { className: 'recent-preview' }, e('img', { src: recipe.img })),
        e('div', { className: 'recent-title' }, recipe.name),
    );

    return result;
}

export function setupHome(section, navigation) {
    section.querySelector('a[href="/catalog"]').addEventListener('click', (event) => {
        event.preventDefault();
        navigation.goTo('catalog');
    })

    return showHome;

    async function showHome() {
        const recentRecipes = section.querySelector('.recent-recipes');
        recentRecipes.innerHTML = 'Loading&hellip;';

        const recipes = await getRecent();
        const cards = recipes.map(recipe => createRecipePreview(recipe, navigation.goTo));

        const fragment = document.createDocumentFragment();
        cards.forEach(c => fragment.appendChild(c));
        recentRecipes.innerHTML = '';
        recentRecipes.appendChild(fragment);

        return section;
    }
}