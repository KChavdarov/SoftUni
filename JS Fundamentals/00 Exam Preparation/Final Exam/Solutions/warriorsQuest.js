function warriorsQuest(input) {
    let skill = input.shift();
    let actions = {
        GladiatorStance(string) {
            string = string.toUpperCase();
            console.log(string);
            return string;
        },
        DefensiveStance(string) {
            string = string.toLowerCase();
            console.log(string);
            return string;
        },
        Dispel(string, index, letter) {
            index = Number(index);
            if (index >= 0 && index < string.length) {
                string = string.split("");
                string.splice(index, 1, letter);
                string = string.join("");
                console.log("Success!");
            } else {
                console.log("Dispel too weak.");
            }
            return string;
        },
        Target(string, type, substring, secondSubstring) {
            if (type == "Change") {
                string = string.replace(substring, secondSubstring);
            } else if (type == "Remove") {
                string = string.replace(substring, "");
            }
            console.log(string);
            return string;
        }
    };
    while ((command = input.shift()) != "For Azeroth") {
        let [action, ...params] = command.split(" ");
        if (actions.hasOwnProperty(action)) {
            skill = actions[action](skill, ...params);
        } else {
            console.log("Command doesn't exist!");
        }
    }
}
warriorsQuest([
    "fr1c710n",
    "GladiatorStance",
    "Dispel 2 I",
    "Dispel 4 T",
    "Dispel 6 O",
    "Dispel 5 I",
    "Dispel 10 I",
    "Target Change RICTION riction",
    "For Azeroth"
]);
console.log("---");
warriorsQuest([
"DYN4MICNIC",
"Target Remove NIC",
"Dispel 3 A",
"DefensiveStance",
"Target Change d D",
"target change D d",
"For Azeroth"
]);