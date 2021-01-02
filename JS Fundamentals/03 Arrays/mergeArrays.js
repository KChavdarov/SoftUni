function mergeArrays(arr1, arr2) {
    let arr3 = [];
    arr3.length = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < arr3.length; i++) {
        if (i % 2 == 0) {
            arr3[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            arr3[i] = arr1[i] + arr2[i];
        }
    }
    console.log(arr3.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);