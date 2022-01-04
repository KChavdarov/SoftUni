function rounding(arg1,arg2){
    let number = Number(arg1);
    let precision = Number(arg2);
    console.log(parseFloat(number.toFixed(Math.min(precision,15))));
}

rounding (10.5, 3);