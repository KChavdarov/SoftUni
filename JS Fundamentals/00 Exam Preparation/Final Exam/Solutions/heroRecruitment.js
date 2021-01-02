function heroRecruitment(input) {
    let heroes = {};
    let actions = {
        Enroll(heroes, name) {
            if (heroes.hasOwnProperty(name)) {
                console.log(`${name} is already enrolled.`);
            } else {
                heroes[name] = new Set();
            }
            return heroes;
        },
        Learn(heroes, name, spell) {
            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (heroes[name].has(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                } else {
                    heroes[name].add(spell);
                }
            }
            return heroes;
        },
        Unlearn(heroes, name, spell) {
            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (!heroes[name].has(spell)) {
                    console.log(`${name} doesn't know ${spell}.`);
                } else {
                    heroes[name].delete(spell);
                }
            }
            return heroes;
        }
    };
    while ((command = input.shift()) != "End") {
        let [action, ...params] = command.split(" ");
        actions[action](heroes, ...params);
    }
    let sorted = Object.entries(heroes).sort((a, b) => heroSort(a, b));
    console.log("Heroes:");
    for (const [name, spells] of sorted) {
        console.log(`== ${name}: ${Array.from(spells.keys()).join(", ")}`);
    }

    function heroSort([nameA, spellsA], [nameB, spellsB]) {
        return spellsB.size - spellsA.size || nameA.localeCompare(nameB);
    }
}
heroRecruitment([
    "Enroll Stefan",
    "Enroll Pesho",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stamat ItShouldNotWork",
    "Unlearn Gosho Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"
]);
console.log("---");
heroRecruitment([
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"
]);