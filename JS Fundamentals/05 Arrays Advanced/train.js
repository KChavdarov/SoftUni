function train(input) {
    let wagonsArr = input.shift().split(' ').map(Number);
    let capacity = Number(input.shift());

    for (const element of input) {
        let command = element.split(' ')[0];
        let passengers = Number(element.split(' ').pop());
        if (command == 'Add'){
            wagonsArr.push(passengers);
        } else {
            for (let i = 0; i < wagonsArr.length; i++) {
                let wagon = wagonsArr[i];
                if (wagon + passengers > capacity){
                    continue;
                } else {
                    wagonsArr[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagonsArr.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);