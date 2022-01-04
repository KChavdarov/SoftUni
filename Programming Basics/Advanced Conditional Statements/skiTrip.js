function skiTrip(days, accommodationType, feedback) {
    days = Number(days);
    let overnights = Number(days)-1 ;
    let tripCost = 0;
    switch(accommodationType){
        case "room for one person":
            tripCost = overnights * 18.00;
            break;
        case "apartment":
            if (overnights > 15){
                tripCost = overnights * 25 * 0.5;
            } else if (overnights >= 10){
                tripCost = overnights * 25 * 0.65;
            } else {
                tripCost = overnights * 25 * 0.7;
            }
            break;
        case "president apartment":
            if (overnights > 15){
                tripCost = overnights * 35 * 0.8;
            } else if (overnights >= 10){
                tripCost = overnights * 35 * 0.85;
            } else {
                tripCost = overnights * 35 * 0.9;
            }
            break;
    }
    switch(feedback){
        case "positive":
            tripCost *= 1.25;
            break;
        case "negative":
            tripCost *= 0.9;
            break;
    }
    console.log(tripCost.toFixed(2));
}