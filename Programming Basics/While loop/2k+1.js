function twoTimesKPlusOne(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let k = 1;
    while (k <= n) {
        console.log(k);
        k = 2 * k + 1;
    }
}