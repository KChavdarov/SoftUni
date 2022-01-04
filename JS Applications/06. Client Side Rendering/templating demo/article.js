export function createArticle(article) {
    return `
    <article>
        <header>
            <h3>${article.title}</h3>
            <p>Clicked: ${article.counter}</p>
        </header>
        <div class="article-content">
            <p>${article.content}</p>
        </div>
        <footer>Author: ${article.author}</footer>
    </article>`;
}