function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    [face, suit] = [face, suit].map(a => a.toUpperCase(a));

    if (!faces.includes(face)) {
        throw new Error('invalid Face requested');
    }

    if (!Object.keys(suits).includes(suit)) {
        throw new Error('invalid suit requested');
    }

    return {
        face,
        suit,
        toString() { return `${face}${suits[suit]}`; }
    };
}
module.exports = playingCards;

console.log(playingCards('A', 'S').toString());