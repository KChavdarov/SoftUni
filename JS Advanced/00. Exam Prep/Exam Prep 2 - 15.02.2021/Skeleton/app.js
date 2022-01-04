function solution() {
    const sections = document.getElementsByClassName('card');
    const nameInput = sections[0].querySelector('input');
    const giftList = sections[1].querySelector('ul');
    const sentGifts = sections[2].querySelector('ul');
    const discardedGifts = sections[3].querySelector('ul');
    const addBtn = sections[0].querySelector('button');

    addBtn.addEventListener('click', addGift);
    giftList.addEventListener('click', buttonActions);

    function addGift() {
        const newLi = createElement('li', ['class=gift'],
            nameInput.value,
            createElement('button', ['class=sendButton'], 'Send'),
            createElement('button', ['class=discardButton'], 'Discard'),
        );
        giftList.appendChild(newLi);
        Array.from(giftList.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => giftList.appendChild(li));
        nameInput.value = '';
    }

    function buttonActions(event) {
        if (event.target.tagName == 'BUTTON') {
            if (event.target.className == 'sendButton') {
                sentGifts.appendChild(event.target.parentNode);
            }
            if (event.target.className == 'discardButton') {
                discardedGifts.appendChild(event.target.parentNode);
            }
            Array.from(event.target.parentNode.getElementsByTagName('button')).forEach(b => b.remove());
        }
    }

    function createElement(type, attributes = [], ...content) {
        const result = document.createElement(type);
        if (attributes.length > 0) {
            attributes.forEach(a => {
                const [attribute, value] = a.split('=');
                result.setAttribute(attribute, value);
            });
        }
        content.forEach(e => {
            if (typeof e == 'string') {
                const text = document.createTextNode(e);
                result.appendChild(text);
            } else {
                result.appendChild(e);
            }
        });
        return result;
    }
}