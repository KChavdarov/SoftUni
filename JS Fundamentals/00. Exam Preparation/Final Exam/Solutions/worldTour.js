function worldTour(input) {
    let stops = input.shift();
    let command = input.shift();

    while (command != "Travel") {
        let tokens = command.split(":");
        let action = tokens.shift();

        if (action == "Add Stop") {
            let [index, string] = tokens;
            index = Number(index);
            if (index >= 0 && index < stops.length) {
                let before = stops.substring(0, index);
                let after = stops.substring(index);
                stops = before + string + after;
            }
        } else if (action == "Remove Stop") {
            let [start, end] = tokens.map(Number);
            let valid = (start >= 0 && start < stops.length) && (end >= 0 && end < stops.length);
            if (valid) {
                let before = stops.substring(0, start);
                let after = stops.substring(end + 1);
                stops = before + after;
            }
        } else if (action == "Switch") {
            let [oldString, newString] = tokens;
            if (stops.includes(oldString)) {
                let pattern = new RegExp(`${oldString}`, "g");
                stops = stops.replace(pattern, newString);
            }
        }
        console.log(stops);
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);