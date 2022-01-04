import { html, render } from 'https://unpkg.com/lit-html?module';
import { createArticle } from '../templating demo/article.js';

async function start() {
    const section1 = document.getElementById('main1');
    const section2 = document.getElementById('main2');
    const articles = await (await fetch('./articles.json')).json();
    articles[0].counter = 0;
    articles[0].isOwner = true;

    const articleTemplate = (article, articleClass, inputTemplate) => html`
    <article>
        <header>
            <h3>${article.title}</h3>
            <p>Clicked: ${article.counter}</p>
        </header>
        <div class=${articleClass}>
            <p>${article.content}</p>
        </div>
        <button ?disabled=${!article.isOwner} @click=${()=> alert('Article edited!')}>Edit</button>
        <input disabled .value=${inputTemplate}>
        <footer>Author: ${article.author}</footer>
    </article>`;

    document.getElementById('btn').addEventListener('click', () => {
        articles[0].counter++;
        render(articleTemplate(articles[0], 'article-content', 'Test Input Value'), section1);
        section2.innerHTML = createArticle(articles[0]);
    });
}

start();