function tailoringWorkshop (n,l,w){
    n=Number(n);
    l=Number(l);
    w=Number(w);

    let tableClothArea = n * (l + 0.3 * 2) * (w + 0.3 * 2);
    let tischleiferArea = n * (Math.pow(l/2,2));

    let valueUSD = ((tableClothArea * 7) + (tischleiferArea * 9));
    let valueBGN = (valueUSD * 1.85);

    console.log (valueUSD.toFixed(2) + " USD");
    console.log (valueBGN.toFixed(2) + " BGN");
}

tailoringWorkshop(10,1.20,0.65);