function mathOperations(a, b, operation) {
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b
    };
    console.log(operations[operation](a, b));
}