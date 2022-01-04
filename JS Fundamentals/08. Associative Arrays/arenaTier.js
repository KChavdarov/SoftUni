function arenaTier(input) {
    let gladiators = {};
    let action = input.shift();
    while (action != 'Ave Cesar') {
        if (action.split(' -> ').length == 3) {
            let [gladiator, technique, skill] = action.split(' -> ');
            skill = Number(skill);
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator][technique] = skill;
            } else {
                if (!gladiators[gladiator].hasOwnProperty(technique)) {
                    gladiators[gladiator][technique] = skill;
                } else {
                    if (gladiators[gladiator][technique] < skill) {
                        gladiators[gladiator][technique] = skill;
                    }
                }
            }
        } else {
            let [gladiator1, gladiator2] = action.split(' vs ');
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                for (const technique of Object.keys(gladiators[gladiator1])) {
                    if (gladiators[gladiator2].hasOwnProperty(technique)) {
                        let totalSkill1 = Object.values(gladiators[gladiator1]).reduce((p, c) => p + c);
                        let totalSkill2 = Object.values(gladiators[gladiator2]).reduce((p, c) => p + c);
                        if (totalSkill1 > totalSkill2) {
                            delete gladiators[gladiator2];
                            break;
                        } else if (totalSkill2 > totalSkill1) {
                            delete gladiators[gladiator1];
                            break;
                        }
                    }
                }
            }
        }
        action = input.shift();
    }
    let sortedGladiators = Object.entries(gladiators).sort((gladiator1, gladiator2) => sortByTotalSkill(gladiator1, gladiator2));

    sortedGladiators.forEach(([name, techniques]) => {
        console.log(`${name}: ${Object.values(techniques).reduce((p, c) => p + c)} skill`);
        let sortedTechniques = Object.entries(techniques).sort(([technique1, skill1], [technique2, skill2]) => skill2 - skill1 || technique1.localeCompare(technique2));
        for (const [technique,skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    });

    function sortByTotalSkill([name1, techniques1], [name2, techniques2]) {
        let totalSkill1 = Object.values(techniques1).reduce((p, c) => p + c);
        let totalSkill2 = Object.values(techniques2).reduce((p, c) => p + c);
        return totalSkill2 - totalSkill1 || name1.localeCompare(name2);
    }
}
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);