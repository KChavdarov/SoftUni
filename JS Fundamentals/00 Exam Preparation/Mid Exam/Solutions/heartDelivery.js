function hearDelivery(input) {
    let neighbourhood = input.shift().split('@').map(Number);
    let action = input.shift();
    let cupidIndex = 0;

    while (action != 'Love!') {
        let jump = Number(action.split(' ')[1]);
        if (cupidIndex + jump < neighbourhood.length) {
            cupidIndex += jump;
        } else {
            cupidIndex = 0;
        }

        if (neighbourhood[cupidIndex] > 0) {
            neighbourhood[cupidIndex] -= 2;
            if (neighbourhood[cupidIndex] == 0) {
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        }
        action = input.shift();
    }
    console.log(`Cupid's last position was ${cupidIndex}.`);
    if (neighbourhood.filter(a => a > 0).length > 0) {
        let failed = neighbourhood.filter(a => a > 0).length;
        console.log(`Cupid has failed ${failed} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}
// hearDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
hearDelivery(['4@4@4@4',
'Jump 1',
'Jump 1',
'Jump 1',
'Jump 1',
'Jump 1',
'Jump 1',
'Jump 1',
'Jump 1',
'Love!'
]);