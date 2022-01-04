async function getRecipes() {
    const token = sessionStorage.getItem('userToken');
    if (token === null) {
        document.getElementById('guest').style.display = 'inline-block';
    } else {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('logoutBtn').addEventListener('click', () => logout(token));
    }

    const main = document.querySelector('main');
    main.textContent = '';

    try {
        let url = 'http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg';
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        let recipes = await response.json();
        Object.values(recipes).map(createPreview).forEach(recipeCard => main.appendChild(recipeCard));
    } catch (err) {
        alert(err.message);
    }
}

async function getDetails(id, recipeCard) {
    const url = `http://localhost:3030/data/recipes/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    const expandedCard = createElement('article', [],
        createElement('h2', [], data.name),
        createElement('div', ['class=band'],
            createElement('div', ['class=thumb'], createElement('img', [`src=${data.img}`], '')),
            createElement('div', ['class=ingredients'],
                createElement('h3', [], 'Ingredients:'),
                createElement('ul', [], ...(data.ingredients).map(i => createElement('li', [], i))))),
        createElement('div', ['class=description'],
            createElement('h3', [], 'Preparation:'),
            ...data.steps.map(s => createElement('p', [], s))
        )
    );
    recipeCard.replaceWith(expandedCard);
    expandedCard.children[0].addEventListener('click', () => {
        expandedCard.replaceWith(recipeCard);
    });
}

function createPreview(recipe) {
    const recipeCard = createElement('article', ['class=preview'],
        createElement('div', ['class=title'], createElement('h2', [], recipe.name)),
        createElement('div', ['class=small'], createElement('img', [`src=${recipe.img}`], ''))
    );
    recipeCard.addEventListener('click', () => getDetails(recipe._id, recipeCard));
    return recipeCard;
}

async function logout(token) {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token }
    });

    if (!response.ok) {
        const data = await response.json();
        return alert(data.message);
    }
    sessionStorage.removeItem('userToken');
    window.location.pathname = '/Cookbook part.2/index.html';
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

window.addEventListener('load', getRecipes);