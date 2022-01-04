function honeyWinterReserves(input) {
    let index = 0;
    let honeyNeeded = Number(input[index]);
    index++;
    let bee = input[index];
    index++;
    let totalHoney = 0;
    let isGathered = false;

    while (bee != "Winter has come") {
        let collected = 0;
        for (let i = 0; i < 6; i++) {
            let dailyHoney = Number(input[index]);
            index++;
            collected += dailyHoney;
        }
        totalHoney += collected;
        if (collected < 0) {
            console.log(`${bee} was banished for gluttony`);
        }
        if (totalHoney >= honeyNeeded) {
            isGathered = true;
            break;
        }
        bee = input[index];
        index++;
    }
    let difference = Math.abs(honeyNeeded - totalHoney);


    if (totalHoney < honeyNeeded) {
        console.log(`Hard Winter! Honey needed ${difference.toFixed(2)}.`);
    } else {
        console.log(`Well done! Honey surplus ${difference.toFixed(2)}.`);
    }
}
honeyWinterReserves([
    '1000',
    'Maya',
    '50',
    '10.5',
    '19.5',
    '30',
    '100',
    '100',
    'Winter has come'
]);
honeyWinterReserves([
    '300',
    'Beeatrice',
    '50',
    '-10',
    '40',
    '30',
    '100',
    '100',
    'Winter has come'
]);
honeyWinterReserves([
    '1000', 'Maya',
    '-50', '-10',
    '-20.70', '20.40',
    '10.30', '40',
    'Yama', '50',
    '10', '20',
    '30', '100',
    '100', 'Winter has come'
]);