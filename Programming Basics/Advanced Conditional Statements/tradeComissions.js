function tradeComissions(town, sales) {
    sales = Number(sales);
    let commission = 0;
    let isError = false;
    switch (town) {
        case "Sofia":
            if (sales > 10000) {
                commission = sales * 0.12;
            } else if (sales > 1000) {
                commission = sales * 0.08;
            } else if (sales > 500) {
                commission = sales * 0.07;
            } else if (sales >= 0) {
                commission = sales * 0.05;
            } else {
                isError = true;
            }
            break;
        case "Varna":
            if (sales > 10000) {
                commission = sales * 0.13;
            } else if (sales > 1000) {
                commission = sales * 0.10;
            } else if (sales > 500) {
                commission = sales * 0.075;
            } else if (sales >= 0) {
                commission = sales * 0.045;
            } else {
                isError = true;
            }
            break;
        case "Plovdiv":
            if (sales > 10000) {
                commission = sales * 0.145;
            } else if (sales > 1000) {
                commission = sales * 0.12;
            } else if (sales > 500) {
                commission = sales * 0.08;
            } else if (sales >= 0) {
                commission = sales * 0.055;
            } else {
                isError = true;
            }
            break;
        default:
            isError = true;
            break;
    }
    if (!isError) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}