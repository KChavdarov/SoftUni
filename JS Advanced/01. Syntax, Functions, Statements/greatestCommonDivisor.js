function GCD(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let remainder = max % min;
    let quotient = min;
    let divisor = remainder;

    while (remainder != 0) {
        remainder = quotient % divisor;
        quotient = divisor;
        divisor = remainder;
    }
    let gcd = quotient;
    console.log(gcd);
}
GCD(5, 3);

// По-кратко решение на същия принцип:
function gcdMihaela(num1, num2) {
    while (num2 != 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}