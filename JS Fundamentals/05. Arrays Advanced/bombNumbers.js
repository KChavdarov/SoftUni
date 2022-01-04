function bombNumbers(array, criteria) {
    let num = criteria[0];
    let impact = criteria[1];
    let sum = 0;
    while (array.includes(num)) {
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element == num) {
                array.splice(Math.max(0, (i - impact)), 1 + impact * 2 + (Math.min(0, (i - impact))));
                break;
            }
        }
    }
    if (array.length > 0) {
        for (const element of array) {
            sum += element;
        }
    }
    console.log(sum);
}

bombNumbers([1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);