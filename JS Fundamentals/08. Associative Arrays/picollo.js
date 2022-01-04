function picollo(input) {
    let parkingLot = new Set();
    for (const element of input) {
        let [action, numberPlate] = element.split(', ');
        if (action == 'IN') {
            parkingLot.add(numberPlate);
        } else if (action == 'OUT'){
            parkingLot.delete(numberPlate);
        }
    }
    let sorted = Array.from(parkingLot).sort();
    if (sorted.length > 0){
        console.log(sorted.join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }
}
picollo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);