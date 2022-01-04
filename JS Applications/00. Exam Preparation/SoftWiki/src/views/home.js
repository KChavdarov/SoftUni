import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/data.js';

const homeTemplate = (categories, articles) => html `
${articles.length == 0 ?
    html`
    <h3 class="no-articles">No articles yet</h3>` :
    html`
    <div class="content">
    ${categories.map(category =>
        html`
        <section class="${category}">
        <h2>${category}</h2>
        <div class="articles">
            ${articles.filter(a => a.category == category).map(articleTemplate)}
        </div>
        </section>`)}
    </div>`
}`;

const articleTemplate = (article) => html `
<article>
    <h3>${article.title}</h3>
    <p>${article.content}</p>
    <a href="/details/${article._id}" class="btn details-btn">Details</a>
</article>`;


export async function homePage(context) {
    if (!context.user) {
        return context.page.redirect('/login');
    }
    const articles = await getAllItems();
    const categories = [...(new Set(articles.map(a => a.category))).values()];

    context.render(homeTemplate(categories, articles));
}