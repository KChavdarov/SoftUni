function petShop(ownDogs,neighbourDogs){
    ownDogs = Number(ownDogs);
    neighbourDogs = Number(neighbourDogs);
    let value = ownDogs * 2.5 + neighbourDogs * 4;
    console.log(`${value.toFixed(2)} lv.`);
}

petShop(13,9);