function passwordReset(input) {
    let password = input.shift();
    let command = input.shift();

    while (command != "Done") {
        let parameters = command.split(" ");
        let action = parameters.shift();
        if (action == "TakeOdd") {
            let temp = "";
            for (let i = 1; i < password.length; i += 2) {
                temp += password[i];
            }
            password = temp;
            console.log(password);
        } else if (action == "Cut") {
            let [index, length] = parameters.map(Number);
            let start = index;
            let end = start + length;
            let before = password.substring(0, start);
            let after = password.substring(end);
            password = before + after;
            console.log(password);
        } else if (action == 'Substitute') {
            let [key, replacement] = parameters;
            let pattern = new RegExp(`${key}`, "g");
            if (password.includes(key)) {
                password = password.replace(pattern, replacement);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);