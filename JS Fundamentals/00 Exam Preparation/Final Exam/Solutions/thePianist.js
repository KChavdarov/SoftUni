function thePianist(input) {
    let count = Number(input.shift());
    let pieces = {};
    for (let i = 0; i < count; i++) {
        let tokens = input.shift().split("|");
        let [name, composer, key] = tokens;
        pieces[name] = {
            composer: composer,
            key: key
        };
    }
    let command = input.shift();

    while (command != "Stop") {
        let [action, ...parameters] = command.split("|");
        if (action == "Add") {
            let [piece, composer, key] = parameters;
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {
                    composer: composer,
                    key: key
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action == "Remove") {
            let [piece] = parameters;
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action == "ChangeKey") {
            let [piece, newKey] = parameters;
            if (!pieces.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
        command = input.shift();
    }

    let sorted = Object.entries(pieces).sort((a, b) => sortPieces(a, b));
    for (const [piece, data] of sorted) {
        let composer = data.composer;
        let key = data.key;
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }

    function sortPieces([nameA, dataA], [nameB, dataB]) {
        return nameA.localeCompare(nameB) || dataA.composer.localeCompare(dataB.composer);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);