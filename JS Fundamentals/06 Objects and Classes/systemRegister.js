function systemRegister(input) {
    // input = input.sort((a, b) => a.localeCompare(b));
    let systems = {};

    input.forEach(triplet => {
        let [systemName, componentName, subcomponentName] = triplet.split(' | ');
        if (systems[systemName] == undefined) {
            systems[systemName] = {};
        }
        if (systems[systemName][componentName] == undefined) {
            systems[systemName][componentName] = [];
        }
        systems[systemName][componentName].push(subcomponentName);
        /*  Data Structure Template:
        Systems{ 
            syst1: [
                {comp1:[subc1,subc2,subc3]},
                {comp2:[subc1,subc2,subc3]}
            ],
            syst2: [
                {comp3:[subc1,subc2,subc3]},
                {comp4:[subc1,subc2,subc3]}
            ]
        }
        */
    });
    // console.log(Object.entries(systems));
    // console.log(systems);

    let systemKeys = Object.keys(systems);
    systemKeys = systemKeys.sort((a, b) => {
        let keyA = Object.keys(systems[a]);
        let keyB = Object.keys(systems[b]);
        return keyB.length - keyA.length;
    });

    systemKeys.forEach(system => {
        console.log(system);

        let componentKeys = Object.keys(systems[system]);
        componentKeys = componentKeys.sort((a, b) => {
            let keyA = Object.keys(systems[system][a]);
            let keyB = Object.keys(systems[system][b]);
            return keyB.length - keyA.length;
        });

        componentKeys.forEach(component => {
            console.log(`|||${component}`);
            systems[system][component].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`);
            });
        });
    });
}

systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);