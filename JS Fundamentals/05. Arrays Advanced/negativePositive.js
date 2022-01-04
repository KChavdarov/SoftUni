function negativePositive(arr) {
    let result = [];
    for (const element of arr) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    console.log(result.join('\n'));
}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);