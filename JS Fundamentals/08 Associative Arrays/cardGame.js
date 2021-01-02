function cardGame(input) {
    let hands = {};
    let scores = {};
    let system = {};

    let array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    for (let index = 0; index < array.length; index++) {
        let power = array[index];
        system[power] = index + 2;
    }

    let multipliers = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    for (let element of input) {
        element = element.split(': ');
        let name = element.shift();
        let cards = element.shift().split(', ');
        if (!hands.hasOwnProperty(name)) {
            hands[name] = new Set([]);
            scores[name] = 0;
        }
        cards.forEach(card => {
            hands[name].add(card);
        });
    }

    for (const [name, cards] of Object.entries(hands)) {
        for (const card of cards) {
            let color = card.slice(-1);
            let power = card.slice(0, -1);
            let points = system[power] * multipliers[color];
            scores[name] += points;
        }
    }

    for (const player in scores) {
        console.log(`${player}: ${scores[player]}`);            
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);