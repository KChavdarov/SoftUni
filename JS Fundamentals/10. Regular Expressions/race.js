function race(input) {
    let racers = {};
    for (const name of input.shift().split(', ')) {
        racers[name] = 0;
    }
    let command = input.shift();
    while (command != 'end of race') {
        let name = command.match(/[a-z]/gi).join('');
        let distance = command.match(/\d/g).map(Number).reduce((a, b) => a + b);
        if (racers.hasOwnProperty(name)) {
            racers[name] += distance;
        }
        command = input.shift();
    }
    let sorted = Object.entries(racers).sort(([nameA, distanceA], [nameB, distanceB]) => distanceB - distanceA);
    sorted.length = 3;
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);