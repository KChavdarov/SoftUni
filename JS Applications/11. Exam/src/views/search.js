import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSearchResults } from '../api/data.js';

const searchTemplate = (articles, query, onSubmit) => html `
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSubmit} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search" .value=${query ? query : ''}>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    ${query ? html`
    <div class="search-container">
        ${articles.length == 0 ? 
        html`
        <h3 class="no-articles">No matching articles</h3>` : 
        html`
        ${articles.map(previewTemplate)}`}
    </div>
    ` : ''}
</section>`;

const previewTemplate = (article) => html `
<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`;

export async function searchPage(context) {
    const query = context.querystring.split('=')[1];
    const articles = query ? await getSearchResults(query) : [];

    context.render(searchTemplate(articles, query, onSubmit));

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newQuery = formData.get('search').trim();

        if (newQuery != '') {
            context.page.redirect('/search?query=' + newQuery);
        }
    }
}