function factorialDivision(num1,num2) {
    console.log((factorial(num1)/factorial(num2)).toFixed(2));

    function factorial(number) {
        let result = number;
        for (let i = number-1; i > 0; i--) {
            result *= i;
        }
        return result;
    }
}

factorialDivision(5,2);

     
function solve(a, b) {
    function getFactorial(num) {
        if (num === 0) {
            return 1;
        }
        return num * getFactorial(num - 1);
    }
    let first = getFactorial(a);
    let second = getFactorial(b);
    console.log((first / second).toFixed(2));
}