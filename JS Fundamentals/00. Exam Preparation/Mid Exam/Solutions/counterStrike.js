function counterStrike(input) {
    input = input.map(Number);
    let energy = input.shift();
    let isOver = false;
    let wonCount = 0;

    for (const distance of input) {
        if (isNaN(distance)) {
            break;
        }
        if (energy - distance >= 0) {
            energy -= distance;
            wonCount++;
            if (wonCount % 3 == 0) {
                energy += wonCount;
            }
        } else {
            isOver = true;
            console.log(`Not enough energy! Game ends with ${wonCount} won battles and ${energy} energy`);
            break;
        }
    }
    if (!isOver){
        console.log(`Won battles: ${wonCount}. Energy left: ${energy}`);
    }
}
// counterStrike([
//     '100',
//     '10',
//     '10',
//     '10',
//     '1',
//     '2',
//     '3',
//     '73',
//     '10'
// ]);
counterStrike([
'200',
'54',
'14',
'28',
'13',
'End of battle'
]);