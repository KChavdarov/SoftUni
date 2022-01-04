function alcoholMarket(whp,bq,wq,rq,whq){
    let whiskyPrice = Number(whp);
    let whiskyQuantity = Number(whq);
    let rakiaPrice = whiskyPrice / 2;
    let beerQuantity = Number(bq);
    let beerPrice = rakiaPrice * 0.2;
    let wineQuantity = Number(wq);
    let winePrice = rakiaPrice * 0.6;
    let rakiaQuantity = Number(rq);

    let neededCash = (whiskyPrice * whiskyQuantity + rakiaPrice * rakiaQuantity + winePrice * wineQuantity + beerPrice * beerQuantity);
    console.log(neededCash.toFixed(2));
}

alcoholMarket(50,10,3.5,6.5,1);