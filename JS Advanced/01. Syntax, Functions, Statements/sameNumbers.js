function sameNumbers(num) {
    num = ("" + num).split("").map(Number);
    let isSame = true;
    if (num.length > 1) {
        for (let i = 1; i < num.length; i++) {
            if (num[i] != num[i - 1]) {
                isSame = false;
                break;
            }
        }
    }
    let result = num.reduce((a, b) => a + b, 0);
    console.log(isSame);
    console.log(result);
}

sameNumbers(123);