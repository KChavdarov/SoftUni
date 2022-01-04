function activationKeys(input) {
    let activationKey = input.shift();
    let command = input.shift();
    while (command != 'Generate') {
        let parameters = command.split('>>>');
        let action = parameters.shift();
        if (action == 'Contains') {
            let testKey = parameters.shift();
            if (activationKey.includes(testKey)) {
                console.log(`${activationKey} contains ${testKey}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (action == 'Flip') {
            let [type, start, end] = parameters;
            let before = activationKey.substring(0, start);
            let middle = activationKey.substring(start, end);
            let after = activationKey.substring(end);
            if (type == 'Upper') {
                middle = middle.toUpperCase();
            } else if (type == 'Lower') {
                middle = middle.toLowerCase();
            }
            activationKey = before + middle + after;
            console.log(activationKey);
        } else if (action == 'Slice') {
            let [start, end] = parameters;
            let before = activationKey.substring(0, start);
            let after = activationKey.substring(end);
            activationKey = before + after;
            console.log(activationKey);
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
// activationKeys([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
// ]);
activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]);