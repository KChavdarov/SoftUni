function addOrSubtract(arr) {
    let sumOriginal = 0;
    let sumModified = 0;

    for (const number of arr) {
        sumOriginal += number;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumModified += arr[i];
    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumModified);
}

addOrSubtract([5, 15, 23, 56, 35]);