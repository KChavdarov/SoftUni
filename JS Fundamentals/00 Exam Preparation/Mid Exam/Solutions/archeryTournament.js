function archeryTournament(input) {
    let targets = input.shift().split('|').map(Number);
    let action = input.shift();
    let points = 0;

    while (action != 'Game over') {
        let [command, start, length] = action.split('@');
        start = Number(start);
        length = Number(length);
        if (command == 'Reverse') {
            targets.reverse();
        } else if (start >= 0 && start < targets.length) {
            length = length % targets.length;
            if (command == 'Shoot Left') {
                let finish = (start + (targets.length - length)) % targets.length;
                let targetPoints = targets[finish];
                points += Math.min(5, targetPoints);
                targets[finish] = Math.max(0, targets[finish] - 5);
            } else if (command == 'Shoot Right') {
                let finish = (start + length) % targets.length;
                let targetPoints = targets[finish];
                points += Math.min(5, targetPoints);
                targets[finish] = Math.max(0, targets[finish] - 5);
            }
        }
        action = input.shift();
    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}
archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over'
]);