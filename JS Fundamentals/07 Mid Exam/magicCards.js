function magicCards(input) {
    let arsenal = input.shift().split(':');
    let deck = [];
    let action = input.shift();

    while (action != 'Ready') {
        let [command, arg1, arg2] = action.split(' ');
        if (command == 'Add') {
            let card = arg1;
            if (arsenal.includes(card)) {
                deck.push(card);
                arsenal = arsenal.filter(a => a != card);
            } else {
                console.log('Card not found.');
            }
        } else if (command == 'Insert') {
            let card = arg1;
            let index = Number(arg2);
            if (arsenal.includes(card) && index >= 0 && index < deck.length) {
                deck.splice(index, 0, card);
                arsenal = arsenal.filter(a => a != card);
            } else {
                console.log('Error!');
            }
        } else if (command == 'Remove') {
            let card = arg1;
            if (deck.includes(card)) {
                deck = deck.filter(a => a != card);
            } else {
                console.log('Card not found.');
            }
        } else if (command == 'Swap') {
            let card1 = arg1;
            let card2 = arg2;
            let index1 = deck.indexOf(card1);
            let index2 = deck.indexOf(card2);
            deck[index1] = card2;
            deck[index2] = card1;
        } else if (command == 'Shuffle') {
            deck.reverse();
        }
        action = input.shift();
    }
    console.log(deck.join(' '));
}
magicCards(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pesho 0",
"Ready"]);