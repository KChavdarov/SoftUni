function journey(budgetInput, seasonInput) {
    let budget = Number(budgetInput);
    let cost = 0;
    let season = seasonInput;
    let destination = "Bulgaria";
    let accommodation = "Hotel";

    if(budget >1000){
        destination = "Europe";
        switch(season){
            case "summer":
                cost = budget * 0.9;
                break;
            case "winter":
                cost = budget * 0.9;
                break;
        }
    } else if(budget > 100){
        destination = "Balkans";
        switch(season){
            case "summer":
                cost = budget * 0.4;
                accommodation = "Camp";
                break;
            case "winter":
                cost = budget * 0.8;
                break;
        }
    } else {
        switch(season){
            case "summer":
                cost = budget * 0.3;
                accommodation = "Camp";
                break;
            case "winter":
                cost = budget * 0.7;
                break;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${cost.toFixed(2)}`);
}
journey(50, "summer");