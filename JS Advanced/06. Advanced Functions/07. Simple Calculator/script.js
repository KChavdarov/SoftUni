function calculator() {
    let num1 = null;
    let num2 = null;
    let result = null;

    function init(selector1, selector2, resultSelector) {
        num1 = document.querySelector(`${selector1}`);
        num2 = document.querySelector(`${selector2}`);
        result = document.querySelector(`${resultSelector}`);

    }

    function add() {
        let sum = Number(num1.value) + Number(num2.value);
        result.value = sum;
    }

    function subtract() {
        let delta = Number(num1.value) - Number(num2.value);
        result.value = delta;
    }

    return {
        init,
        add,
        subtract,
    };
}