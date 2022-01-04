function secretChat(input) {
    let message = input.shift();
    let instruction = input.shift();
    while (instruction != "Reveal") {
        let parameters = instruction.split(":|:");
        let action = parameters.shift();
        if (action == "InsertSpace") {
            let [index] = parameters;
            index = Number(index);
            let before = message.substring(0, index);
            let after = message.substring(index);
            message = before + " " + after;
            console.log(message);
        } else if (action == "Reverse") {
            let [substring] = parameters;
            if (message.includes(substring)) {
                let start = message.indexOf(substring);
                let end = substring.length + start;
                let reversed = substring.split("").reverse().join("");
                let before = message.substring(0, start);
                let after = message.substring(end);
                message = before + after + reversed;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (action == "ChangeAll") {
            let [key, replacement] = parameters;
            let pattern = new RegExp(`${key}`, "\g");
            message = message.replace(pattern, replacement);
            console.log(message);
        }
        instruction = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);