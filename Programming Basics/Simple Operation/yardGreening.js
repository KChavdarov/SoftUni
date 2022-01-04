function yardGreening (area){
    area = Number(area);
    let price = area * 7.61;
    let discountedPrice = price * 0.82;
    let discount = price * 0.18;
    console.log (`The final price is: ${discountedPrice.toFixed(2)} lv.`);
    console.log (`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening (540);