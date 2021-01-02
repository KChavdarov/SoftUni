function battlemanager(input) {
    let people = {};
    let actions = {
        Add(people, name, health, energy) {
            if (!people.hasOwnProperty(name)) {
                people[name] = {
                    health: Number(health),
                    energy: Number(energy)
                };
            } else {
                people[name].health += Number(health);
            }
        },
        Attack(people, attacker, defender, damage) {
            if ((people.hasOwnProperty(attacker)) && (people.hasOwnProperty(defender))) {
                people[defender].health -= Number(damage);
                if (people[defender].health <= 0) {
                    delete people[defender];
                    console.log(`${defender} was disqualified!`);
                }
                people[attacker].energy--;
                if (people[attacker].energy <= 0) {
                    delete people[attacker];
                    console.log(`${attacker} was disqualified!`);
                }
            }
        },
        Delete(people, name) {
            if (name == "All") {
                for (const name in people) {
                    delete people[name];
                }
            } else if (people.hasOwnProperty(name)) {
                delete people[name];
            }
        }
    };

    while ((command = input.shift()) != "Results") {
        let [action, ...parameters] = command.split(": ");
        actions[action](people, ...parameters);
    }
    console.log(`People count:  ${Object.keys(people).length}`);
    let sorted = Object.entries(people).sort((a, b) => peopleSort(a, b));
    for (const [name, data] of sorted) {
        console.log(`${name} - ${data.health} - ${data.energy}`);
    }

    function peopleSort([nameA, dataA], [nameB, dataB]) {
        return dataB.health - dataA.health || nameA.localeCompare(nameB);
    }
}
battlemanager([
    'Add: Mark: 1000: 5',
    'Add: Clark: 1000: 3',
    'Attack: Clark: Mark: 500',
    'Add: Allison: 2500: 5',
    'Attack: Clark: Mark: 300',
    'Add: Charlie: 4000: 10',
    'Attack: Clark: Mark: 500',
    'Results'
]);
console.log("---");
battlemanager([
    'Add: Bonnie: 3000: 5',
    'Add: Kent: 10000: 10',
    'Add: Johny: 4000: 10',
    'Attack: Johny: Bonnie: 400',
    'Add: Chicken: 1000: 1',
    'Add: Rabbit: 3000: 5',
    'Add: Buggy: 1259: 10',
    'Delete: Kent',
    'Attack: Chicken: Rabbit: 1000',
    'Results'
]);
console.log("---");
battlemanager([
    'Add: Bonnie: 3000: 5',
    'Add: Johny: 4000: 10',
    'Delete: All',
    'Add: Bonnie: 3333: 3',
    'Results'
]);