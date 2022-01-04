function solution() {
    const cards = document.getElementsByClassName('card');
    const input = cards[0].querySelector('input[type="text"]');
    const addGiftBtn = cards[0].querySelector('button');
    const giftList = cards[1].querySelector('ul');

    addGiftBtn.addEventListener('click', addGift);
    giftList.addEventListener('click', moveGift);

    function addGift(event) {
        const newLi = createElement('li', '', input.value,
            createElement('button', 'sendButton', 'Send'),
            createElement('button', 'discardButton', 'Discard'));
        newLi.classList.add('gift');
        giftList.appendChild(newLi);
        input.value = '';
        const gifts = Array.from(giftList.children);
        const sorted = gifts.sort((a, b) => a.textContent.localeCompare(b.textContent));
        sorted.forEach(a => giftList.appendChild(a));

    }

    function moveGift(event) {
        const gift = event.target.parentNode;
        Array.from(gift.querySelectorAll('button')).forEach(a => a.remove());

        if (event.target.id == 'sendButton') {
            cards[2].querySelector('ul').appendChild(gift);
        } else if (event.target.id == 'discardButton') {
            cards[3].querySelector('ul').appendChild(gift);
        }
    }

    function createElement(type, id, ...content) {
        const result = document.createElement(type);
        content.forEach(e => {
            if (typeof e == 'string') {
                const text = document.createTextNode(e);
                result.appendChild(text);
            } else {
                result.appendChild(e);
            }
        });
        if (id) {
            result.id = id;
        }
        return result;
    }
}