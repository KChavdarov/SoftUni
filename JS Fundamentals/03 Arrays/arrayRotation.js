function arrayRotation(arr, n) {
    for (let i = 0; i < n; i++) {
        let swap = arr.shift();
        arr.push(swap);
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);