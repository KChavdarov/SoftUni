function problem1(input) {
    let message = input.shift();
    let actions = {
        Change(message, key, replacement) {
            let pattern = new RegExp(`${key}`, "g");
            message = message.replace(pattern, replacement);
            console.log(message);
            return message;
        },
        Includes(message, test) {
            console.log(message.includes(test) ? "True" : "False");
            return message;
        },
        End(message, test) {
            console.log(message.endsWith(test) ? "True" : "False");
            return message;
        },
        Uppercase(message) {
            message = message.toUpperCase();
            console.log(message);
            return message;
        },
        FindIndex(message, char) {
            console.log(message.indexOf(char));
            return message;
        },
        Cut(message, start, length) {
            start = Number(start);
            length = Number(length);
            message = message.substring(start, start + length);
            console.log(message);
            return message;
        }
    };
    while ((command = input.shift()) != "Done") {
        let [action, ...params] = command.split(" ");
        message = actions[action](message, ...params);
    }
}
problem1([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);