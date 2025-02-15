// function getArticleGenerator(articles) {
//     let initialArray = articles;
//     let container = document.getElementById('content');

//     function displayArticle() {
//         if (initialArray.length > 0) {
//             let article = initialArray.shift();
//             let content = document.createElement('article');
//             content.textContent = article;
//             container.appendChild(content);
//         }
//     }
//     return displayArticle;
// }


function getArticleGenerator(articles = []) {
    let content = document.getElementById('content');

    return showNext;

    function showNext() {
        let text = articles.shift();
        if (text) {
            let article = document.createElement('article');
            article.textContent = text;
            content.appendChild(article);
        }
    }
}
