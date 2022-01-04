import { getThreeRecentRecipes } from '../api/data.js';

export function setupHome(section, navigation) {
    section.querySelector('footer a[href="/catalog"]').addEventListener('click', onClick);

    return showHome;

    async function showHome() {
        const showcase = section.querySelector('.recent-recipes');
        showcase.innerHTML = 'Loading&hellip;';

        const fragment = document.createDocumentFragment();
        const recentRecipes = await getThreeRecentRecipes();
        const thumbnails = recentRecipes.map(r => createRecipeThumbnail(r));
        thumbnails.forEach((t, i, a) => {
            fragment.appendChild(t);
            if (i < a.length - 1) {
                fragment.appendChild(createSpacer());
            }
        });

        showcase.innerHTML = '';
        showcase.appendChild(fragment);

        return section;
    }

    function onClick(event) {
        event.preventDefault();
        navigation.goTo('catalog');
    }

    function createRecipeThumbnail(recipe) {
        const result = document.createElement('article');
        result.className = 'recent';
        result.innerHTML = `
        <div class="recent-preview"><img src="${recipe.img}"></div>
        <div class="recent-title">${recipe.name}</div>`;

        result.addEventListener('click', () => navigation.goTo('details', recipe._id));

        return result;
    }

    function createSpacer() {
        const result = document.createElement('div');
        result.className = 'recent-space';
        return result;
    }
}