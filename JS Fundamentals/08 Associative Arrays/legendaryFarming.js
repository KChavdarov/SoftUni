function legendaryFarming(input) {
    let elements = input.split(' ');
    let legendary = {
        'shards': 0,
        'motes': 0,
        'fragments': 0
    };
    let junk = {};
    for (let i = 0; i < elements.length; i += 2) {
        let amount = Number(elements[i]);
        let resource = elements[i + 1].toLowerCase();
        if (resource == 'motes' || resource == 'shards' || resource == 'fragments') {
            if (!legendary.hasOwnProperty(resource)) {
                legendary[resource] = 0;
            }
            legendary[resource] += amount;
            if (legendary[resource] >= 250) {
                legendary[resource] -= 250;
                // if (legendary[resource] == 0) {
                //     delete legendary[resource];
                // }
                if (resource == 'shards') {
                    console.log("Shadowmourne obtained!");
                } else if (resource == 'fragments') {
                    console.log("Valanyr obtained!");
                } else if (resource == 'motes') {
                    console.log("Dragonwrath obtained!");
                }
                break;
            }
        } else {
            if (!junk.hasOwnProperty(resource)) {
                junk[resource] = 0;
            }
            junk[resource] += amount;
        }
    }
    let sortedLegendary = Object.entries(legendary).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [resource, amount] of sortedLegendary) {
        console.log(`${resource}: ${amount}`);
    }
    for (const [resource, amount] of sortedJunk) {
        console.log(`${resource}: ${amount}`);
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');