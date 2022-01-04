import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMostRecentArticles } from '../api/data.js';

const homeTemplate = (articles) => html `
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${articleTemplate(articles.find(a => a.category == 'JavaScript'))}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${articleTemplate(articles.find(a => a.category == 'C#'))}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${articleTemplate(articles.find(a => a.category == 'Java'))}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${articleTemplate(articles.find(a => a.category == 'Python'))}
    </section>
</section>`;

const articleTemplate = (article) => html `
${article ? 
html`
<article>
    <h3>${article.title}</h3>
    <p>${article.content}</p>
    <a href="/details/${article._id}" class="btn details-btn">Details</a>
</article>
`:html`
    <h3 class="no-articles">No articles yet</h3>
`}`;

export async function homePage(context) {
    // const categories = ['JavaScript', 'C#', 'Java', 'Python'];
    const articles = await getMostRecentArticles();

    context.render(homeTemplate(articles));
}