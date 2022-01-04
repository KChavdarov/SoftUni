function imitationGame(input) {
    let message = input.shift();
    let command = input.shift();

    while (command != "Decode") {
        let parameters = command.split("|");
        let action = parameters.shift();

        if (action == "Move") {
            let count = Number(parameters.shift());
                let extract = message.substring(0, count);
                message = message.substring(count) + extract;
        } else if (action == "Insert") {
            let [index, value] = parameters;
            index = Number(index);
                let before = message.substring(0, index);
                let after = message.substring(index);
                message = before + value + after;
        } else if (action == "ChangeAll") {
            let [key, replacement] = parameters;
            // let pattern = new RegExp(`${key}`, "g");
            // message = message.replace(pattern, replacement);
            while (message.includes(key)) {
                message = message.replace(key, replacement);
            }
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
imitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);