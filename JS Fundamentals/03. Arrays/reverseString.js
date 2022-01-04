function reverseString(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let swap = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = swap;
    }
    console.log(arr.join(' '));
}

reverseString(['a', 'b', 'c', 'd', 'e']);