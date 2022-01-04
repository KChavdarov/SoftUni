function stringManipulator(input) {
    let mainString = input.shift();
    let actions = {
        Change(mainString, char, replacement) {
            let pattern = new RegExp(`${char}`, "g");
            mainString = mainString.replace(pattern, replacement);
            console.log(mainString);
            return mainString;
        },
        Includes(mainString, string) {
            console.log(mainString.includes(string) ? "True" : "False");
            return mainString;
        },
        End(mainString, string) {
            console.log(mainString.endsWith(string) ? "True" : "False");
            return mainString;
        },
        Uppercase(mainString) {
            console.log(mainString);
            return mainString.toUpperCase();
        },
        FindIndex(mainString, char) {
            console.log(mainString.indexOf(char));
            return mainString;
        },
        Cut(mainString, startIndex, length) {
            mainString = mainString.substring(Number(startIndex), Number(startIndex) + Number(length));
            console.log(mainString);
            return mainString;
        }
    };

    while ((command = input.shift()) != "Done") {
        let [action, ...parameters] = command.split(" ");
        mainString = actions[action](mainString, ...parameters);
    }
}
stringManipulator([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);