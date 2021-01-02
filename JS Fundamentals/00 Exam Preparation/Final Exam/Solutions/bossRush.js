function bossRush(input) {
    let count = Number(input.shift());
    for (let i = 0; i < count; i++) {
        let command = input.shift();
        let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [A-Za-z]+)#/;
        let matched = pattern.exec(command);
        if (matched != null) {
            let name = matched.groups.name;
            let title = matched.groups.title;
            let strength = name.length;
            let armour = title.length;
            console.log(`${name}, The ${title}`);
            console.log(`Strength: ${strength}`);
            console.log(`Armour: ${armour}`);
        } else {
            console.log("Access denied!");
        }
    }
}
bossRush([
    "3",
    "|GEORGI|:#Lead architect#",
    "|Hristo|:#High Overseer#",
    "|STEFAN|:#Assistant Game Developer#"
]);
console.log("---");
bossRush([
    "3",
    "|PETER|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#"
]);