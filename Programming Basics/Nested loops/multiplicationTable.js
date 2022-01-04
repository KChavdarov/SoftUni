function multiplicationTable() {
    for (let numberA = 1; numberA <= 10; numberA++) {
        for (let numberB = 1; numberB <= 10; numberB++) {
            let result = numberA * numberB;
            console.log(`${numberA} * ${numberB} = ${result}`);
        }
    }
}
multiplicationTable();