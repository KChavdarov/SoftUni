function binaryDigits(num, bin) {
    let count = 0;
    while (num > 0) {
        let last = num & 1;
        if (last == bin) {
            count++;
        }
        num = num >> 1;
    }
    console.log(count);
}
binaryDigits(20, 0);
binaryDigits(15, 1);
binaryDigits(10, 0);