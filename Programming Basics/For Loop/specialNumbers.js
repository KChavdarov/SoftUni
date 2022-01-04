function specialNumbers(startAsString, endAsString, number) {
    let start = Number(startAsString);
    let end = Number(endAsString);
    let n = Number(number);
    for (let i = start; i <= end; i++) {
        if (i % (n * n) === 0) {
            console.log(`Very special number: ${i}`);
        } else if (i % n === 0) {
            console.log(`Special number: ${i}`);
        } else {
            console.log(i);
        }
    }
}

specialNumbers(1, 25, 3);