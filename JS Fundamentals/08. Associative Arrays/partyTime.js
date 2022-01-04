function partyTime(input) {
    let party = {};
    party.vip = [];
    party.regular = [];
    let separator = input.indexOf('PARTY');
    let guestlist = input.slice(0, separator);
    let guests = input.slice(separator + 1);

    for (const guest of guestlist) {
        if (Number.isNaN(Number(guest[0]))) {
            party.regular.push(guest);
        } else {
            party.vip.push(guest);
        }
    }

    // let guest = input.shift();
    // while (guest != 'PARTY') {
    //     if (Number.isNaN(Number(guest[0]))) {
    //         party.regular.push(guest);
    //     } else {
    //         party.vip.push(guest);
    //     }
    //     guest = input.shift();
    // }

    // for (const guest of guests) {
    //     if (Number.isNaN(Number(guest[0]))) {
    //         party.regular = party.regular.filter(a => a != guest);
    //     } else {
    //         party.vip = party.vip.filter(a => a != guest);
    //     }
    // }

    for (const guest of guests) {
        if (party.vip.includes(guest)) {
            let i = party.vip.indexOf(guest);
            party.vip.splice(i, 1);
        } else if (party.regular.includes(guest)) {
            let i = party.regular.indexOf(guest);
            party.regular.splice(i, 1);
        }
    }

    // for (const guest of input) {
    //     if (party.vip.includes(guest)) {
    //         let i = party.vip.indexOf(guest);
    //         party.vip.splice(i, 1);
    //     } else if (party.regular.includes(guest)) {
    //         let i = party.regular.indexOf(guest);
    //         party.regular.splice(i, 1);
    //     }
    // }
    let missingGuests = party.vip.concat(party.regular);
    console.log(missingGuests.length);
    console.log(missingGuests.join('\n'));
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);