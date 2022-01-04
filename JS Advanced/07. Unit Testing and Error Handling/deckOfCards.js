let createCard = require('./playingCards');

function deckOfCards(deck) {
    let result = [];

    for (const cardAsString of deck) {
        let card = cardAsString.split('');
        let suit = card.pop();
        let face = card.join('');
        try {
            result.push(createCard(face, suit).toString());
        } catch (err) {
            return `Invalid card: ${cardAsString}`;
        }
    }
    return result.join(' ');
}

console.log(deckOfCards(['AS', '10D', 'KH', '2C', '1C']));