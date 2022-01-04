function changeBureau(input) {
    let BTC = Number(input[0]);
    let CNY = Number(input[1]);
    let comission = Number(input[2]) / 100;

    BTC = BTC * 1168;
    CNY = CNY * 0.15;
    CNY = CNY * 1.76;

    let EUR = (CNY + BTC) / 1.95;
    EUR = EUR * (1 - comission);

    console.log(EUR.toFixed(2));
}
changeBureau([1, 5, 5]);