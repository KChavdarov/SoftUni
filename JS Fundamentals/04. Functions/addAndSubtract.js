function addAndSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    console.log(subtract(sum(num1, num2), num3));
}

addAndSubtract(23, 6, 10);