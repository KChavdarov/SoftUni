function cinema (type, rows, columns){
    rows = Number(rows);
    columns = Number(columns);
    let income = rows * columns;
    let premierePrice = 12.00;
    let normalPrice = 7.50;
    let discountPrice = 5.00;
    switch (type) {
        case "Premiere":
            income *= premierePrice;
            break;
        case "Normal":
            income *= normalPrice;
            break;
        case "Discount":
            income *= discountPrice;
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}