function convertor (usd){
    let dollar = Number(usd);
    let bgn = (dollar * 1.79549).toFixed(2);
    console.log(bgn);
}

convertor("12.5")