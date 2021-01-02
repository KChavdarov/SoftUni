function shoot(input) {
    let targets = input.shift().split(' ').map(Number);
    let shot = input.shift();

    while (shot != 'End') {
        shot = Number(shot);
        if (shot >= targets.length || shot < 0) {
            shot = input.shift();
            continue;
        } else {
            if (targets[shot] == -1) {
                continue;
            } else {
                let value = targets[shot];
                targets[shot] = -1;
                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] > value && targets[i] != -1) {
                        targets[i] -= value;
                    } else if (targets[i] <= value && targets[i] != -1) {
                        targets[i] += value;
                    }
                }
            }
        }
        shot = input.shift();
    }
    let count = targets.filter(a => a == -1).length;
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

shoot(['24 50 36 70', '0', '4', '3', '1', 'End']);
shoot(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);