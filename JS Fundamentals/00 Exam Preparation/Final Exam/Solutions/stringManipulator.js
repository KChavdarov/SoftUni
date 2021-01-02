function stringManipulator(input) {
    let mainString = input.shift();
    let commands = {
        Translate(mainString, char, replacement) {
            let pattern = new RegExp(`${char}`,"g");
            mainString = mainString.replace(pattern, replacement);
            console.log(mainString);
            return mainString;
        },
        Includes(mainString, substring) {
            console.log(mainString.includes(substring) ? "True" : "False");
            return mainString;
        },
        Start(mainString, substring) {
            console.log(mainString.startsWith(substring) ? "True" : "False");
            return mainString;
        },
        Lowercase(mainString) {
            mainString = mainString.toLowerCase();
            console.log(mainString);
            return mainString;
        },
        FindIndex(mainString, char) {
            let lastIndex = mainString.lastIndexOf(char);
            console.log(lastIndex);
            return mainString;
        },
        Remove(mainString, startIndex, count) {
            startIndex = Number(startIndex);
            count = Number(count);
            let endIndex = startIndex + count;
            let before = mainString.substring(0, startIndex);
            let after = mainString.substring(endIndex);
            mainString = before + after;
            console.log(mainString);
            return mainString;
        }
    };

    while ((command = input.shift()) != "End") {
        let [action, ...parameters] = command.split(" ");
        mainString = commands[action](mainString,...parameters);
    }
}

stringManipulator([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);