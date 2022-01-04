function addDestination() {
    const [cityInput, countryInput] = document.getElementsByClassName('inputData');
    const seasonSelector = document.querySelector('.custom-select');
    const tBody = document.getElementById('destinationsList');

    if (cityInput && countryInput) {
        const newRow = createElement('tr',
            createElement('td', `${cityInput.value}, ${countryInput.value}`),
            createElement('td', capitalize(seasonSelector.value))
        );
        tBody.appendChild(newRow);

        [cityInput, countryInput].forEach(a => a.value = '');

        let season = document.getElementById(seasonSelector.value);
        season.value = Number(season.value) + 1;
    }

    function createElement(type, ...content) {
        const element = document.createElement(type);
        content.forEach(c => {
            if (typeof c == 'string') {
                const text = document.createTextNode(c);
                element.appendChild(text);
            } else {
                element.appendChild(c);
            }
        });
        return element;
    }

    function capitalize(string) {
        let result = string[0].toUpperCase();
        result += string.substring(1).toLowerCase();
        return result;
    }
}