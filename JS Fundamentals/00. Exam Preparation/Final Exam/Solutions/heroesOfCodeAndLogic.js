function heroes(input) {
    let heroCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroCount; i++) {
        let parameters = input.shift();
        let [name, hp, mp] = parameters.split(" ");
        health = Math.min(Number(hp), 100);
        mana = Math.min(Number(mp), 200);
        heroes[name] = {};
        heroes[name].health = health;
        heroes[name].mana = mana;
    }

    let command = input.shift();
    while (command != "End") {
        let parameters = command.split(" - ");
        let action = parameters.shift();
        let name = parameters.shift();
        let hero = heroes[name];
        if (action == "CastSpell") {
            let [manaCost, spell] = parameters;
            if (hero.mana < manaCost) {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            } else {
                hero.mana -= Number(manaCost);
                console.log(`${name} has successfully cast ${spell} and now has ${hero.mana} MP!`);
            }
        } else if (action == "TakeDamage") {
            let [damage, attacker] = parameters;
            hero.health -= Number(damage);
            if (hero.health <= 0) {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            } else {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.health} HP left!`);
            }
        } else if (action == "Recharge") {
            let [maxAmount] = parameters;
            let recharge = Math.min(200, hero.mana + Number(maxAmount)) - hero.mana;
            hero.mana += recharge;
            console.log(`${name} recharged for ${recharge} MP!`);
        } else if (action == "Heal") {
            let [maxAmount] = parameters;
            let heal = Math.min(100, hero.health + Number(maxAmount)) - hero.health;
            hero.health += heal;
            console.log(`${name} healed for ${heal} HP!`);
        }
        command = input.shift();
    }
    let sorted = Object.entries(heroes).sort((heroA, HeroB) => sortHeroes(heroA,HeroB));

    for (const [hero, data] of sorted) {
        console.log(hero);
        console.log(`  HP: ${data.health}`);
        console.log(`  MP: ${data.mana}`);
    }

    function sortHeroes([nameA, dataA], [nameB, dataB]) {
        let hpA = dataA.health;
        let hpB = dataB.health;
        return hpB - hpA || nameA.localeCompare(nameB);
    }
}
heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

// heroes([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
//   ]);