function primeCheck(n) {
    let isPrime = true;
    if (n % 2 == 0) {
        isPrime = false;
    } else {
        for (i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(isPrime);
}