function getArticleGenerator(articles) {
    let initialArray = articles;
    let container = document.getElementById('content');

    function displayArticle() {
        if (initialArray.length > 0) {
            let article = initialArray.shift();
            let content = document.createElement('article');
            content.textContent = article;
            container.appendChild(content);
        }
    }
    return displayArticle;
}
