function movingTargets(input) {
    let targets = input.shift().split(' ').map(Number);
    let action = input.shift();
    while (action != 'End') {
        let [command, index, value] = action.split(' ');
        index = Number(index);
        value = Number(value);
        switch (command) {
            case 'Shoot':
                if (index < targets.length && index >= 0) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (index < targets.length && index >= 0) {
                    targets.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (index < targets.length && index >= 0 &&
                    index - value >= 0 &&
                    index + value < targets.length - 1) {
                    let start = Math.max(0, index - value);
                    let end = Math.min(targets.length - 1, index + value);
                    let range = end - start + 1;
                    targets.splice(start, range);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        action = input.shift();
    }
    console.log(targets.join('|'));
}
movingTargets([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);