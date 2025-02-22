import { e } from '../dom.js';
import { getRecipes, getRecipesCount } from '../api/data.js';


function createRecipePreview(recipe, goTo) {
    const result = e('article', { className: 'preview', onClick: () => goTo('details', recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}

function createPager(page, pageCount, goTo) {
    const result = e('header', { className: 'section-title' },
        `page ${page} of ${pageCount}`
    )

    if (pageCount > 1 && page > 1) {
        result.appendChild(e('a', { className: 'pager', href: '/catalog', onClick: (event) => changePage(event, page - 1) }, '< Prev'));
    }

    if (pageCount > 1 && page < pageCount) {
        result.appendChild(e('a', { className: 'pager', href: '/catalog', onClick: (event) => changePage(event, page + 1) }, 'Next >'));
    }

    return result;

    function changePage(event, page) {
        event.preventDefault();
        goTo('catalog', page);
    }
}

export function setupCatalog(section, navigation) {
    const pageSize = 3;
    return showCatalog;

    async function showCatalog(page = 1) {
        section.innerHTML = 'Loading&hellip;';
        const recipeCount = await getRecipesCount();
        const pager = createPager(page, Math.ceil(recipeCount / pageSize), navigation.goTo);
        const recipes = await getRecipes(page, pageSize);
        const cards = recipes.map(recipe => createRecipePreview(recipe, navigation.goTo));

        const fragment = document.createDocumentFragment();
        fragment.appendChild(pager);
        cards.forEach(c => fragment.appendChild(c));
        section.innerHTML = '';
        section.appendChild(fragment);

        return section;
    }
}