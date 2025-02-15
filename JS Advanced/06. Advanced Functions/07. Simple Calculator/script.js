let calculator = calculator();
calculator.init('input#num1', 'input#num2', 'input#result');
document.getElementById('sumButton').addEventListener('click', calculator.add);
document.getElementById('subtractButton').addEventListener('click', calculator.subtract);

function calculator() {
    let inputA = null;
    let inputB = null;
    let resultField = null

    return {
        init,
        add,
        subtract,
    }

    function init(selector1, selector2, resultSelector) {
        inputA = document.querySelector(selector1);
        inputB = document.querySelector(selector2);
        resultField = document.querySelector(resultSelector);
    }

    function add() {
        let a = Number(inputA.value);
        let b = Number(inputB.value);
        resultField.value = a + b;
    }

    function subtract() {
        let a = Number(inputA.value);
        let b = Number(inputB.value);
        resultField.value = a - b;
    }
}