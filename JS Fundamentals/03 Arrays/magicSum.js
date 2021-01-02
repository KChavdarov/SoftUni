function magicSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let pair = [];
            pair.length = 2;
            if (arr[i] + arr[j] == n) {
                pair.push(arr[i]);
                pair.push(arr[j]);
                console.log(pair.join(' '));
            }
        }
    }
}

magicSum([6, 5, 3, 4, 3, 3], 7);