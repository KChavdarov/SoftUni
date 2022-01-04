window.onload = getArticleList();

const main = document.getElementById('main');

async function getArticleList() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const articleList = await response.json();

    main.textContent = '';
    articleList.forEach(({ _id: id }) => getArticleData(id));
}

async function getArticleData(id) {
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
    const { title, content } = await response.json();

    const article = createElement('div', ['class=accordion'], '');
    const head = createElement('div', ['class=head'],
        createElement('span', [], title),
        createElement('button', ['class=button', `id=${id}`], 'More'));
    const extra = createElement('div', ['class=extra'],
        createElement('p', [], content));

    article.appendChild(head);
    article.appendChild(extra);
    main.appendChild(article);

    const button = head.querySelector('button');
    button.addEventListener('click', () => expandContent(extra, button));
}

function expandContent(extra, button) {
    if (button.textContent == 'More') {
        button.textContent = 'Less';
        extra.style.display = 'block';
    } else {
        button.textContent = 'More';
        extra.style.display = 'none';
    }
}

function createElement(type, attributes = [], ...content) {
    const result = document.createElement(type);
    if (attributes.length > 0) {
        attributes.forEach(attr => {
            let [attribute, value] = attr.split('=');
            result.setAttribute(attribute, value);
        });
    } content.forEach(e => {
        if (typeof e == 'string') {
            let text = document.createTextNode(e);
            result.appendChild(text);
        } else {
            result.appendChild(e);
        }
    });
    return result;
}