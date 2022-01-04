function addSticker(event) {
    const title = document.querySelector('input.title');
    const content = document.querySelector('input.content');
    const stickerList = document.getElementById('sticker-list');

    if (title.value != '' && content.value != '') {
        const note = createElement('li', ['class=note-content'],
            createElement('a', ['class=button'], 'x'),
            createElement('h2', [], title.value),
            createElement('hr', [], ''),
            createElement('p', [], content.value)
        );
        stickerList.appendChild(note);
        title.value = '';
        content.value = '';
    }
    stickerList.addEventListener('click', removeNote);

    function removeNote(event) {
        if (event.target.className == 'button') {
            event.target.parentNode.style.display = 'none';
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