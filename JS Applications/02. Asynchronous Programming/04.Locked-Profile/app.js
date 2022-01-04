/*
ID-тата от скелета са заменени с Class-ове, за да не се нарушава принципа, че всяко ID трябва да е уникално.
Направил съм и дузина промени в CSS-a свързани с лейаута и гореспоменатата промяна.
*/

const main = document.getElementById('main');

async function lockedProfile() {
    main.textContent = '';
    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const profilesData = await response.json();

    const profiles = Object.values(profilesData).map(createProfileCard);
    profiles.forEach(p => main.appendChild(p));
}


function createProfileCard({ username, email, age }) {
    const card = createElement('div', ['class=profile'],
        createElement('img', ['src=./iconProfile2.png', 'class=userIcon'], ''),
        createElement('label', [], 'Lock'),
        createElement('input', ['type=radio', `name=${username}`, 'value=lock', 'checked=true'], ''),
        createElement('label', [], 'Unlock'),
        createElement('input', ['type=radio', `name=${username}`, 'value=unlock'], ''),
        createElement('hr'),
        createElement('label', [], 'Username'),
        createElement('input', ['type=text', 'name=username', `value=${username}`, 'disabled=true', 'readonly=true'], ''),
        createElement('div', ['class=hiddenFields'],
            createElement('hr'),
            createElement('label', [], 'Email:'),
            createElement('input', ['type=text', 'name=email', `value=${email}`, 'disabled=true', 'readonly=true'], ''),
            createElement('label', [], 'Age:'),
            createElement('input', ['type=text', 'name=age', `value=${age}`, 'disabled=true', 'readonly=true'], '')
        ),
        createElement('button', [], 'Show more')
    );

    const cardButton = card.querySelector('button');
    cardButton.addEventListener('click', () => toggleHiddenInfo(card, cardButton));

    return card;
}

function toggleHiddenInfo(card, cardButton) {
    const additionalInfo = card.querySelector('.hiddenFields');
    const status = card.querySelector('input[type=radio]:checked').value;
    if (status == 'unlock') {
        if (additionalInfo.style.display == 'block') {
            additionalInfo.style.display = 'none';
            cardButton.textContent = 'Show more';
        } else {
            additionalInfo.style.display = 'block';
            cardButton.textContent = 'Hide it';
        }
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