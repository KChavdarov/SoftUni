function numbers1toN3(number) {
    let n = Number(number);
    let start = 1;
    if (n % 2 == 0) {
        start = 2;
    }
    for (i = start; i <= n; i +=2) {
        console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
    }
}

numbers1toN3(5);