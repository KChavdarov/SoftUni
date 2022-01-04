function honeyHarvest(arg1, arg2, arg3) {
    let flower = arg1;
    let quantity = Number(arg2);
    let season = arg3;
    let honey = 0;

    switch (season) {
        case "Spring":
            switch (flower) {
                case "Sunflower":
                    honey = 10;
                    break;
                case "Daisy":
                    honey = 12 * 1.1;
                    break;
                case "Lavender":
                    honey = 12;
                    break;
                case "Mint":
                    honey = 10 * 1.1;
                    break;
            }
            break;
        case "Summer":
            switch (flower) {
                case "Sunflower":
                case "Daisy":
                case "Lavender":
                    honey = 8;
                    break;
                case "Mint":
                    honey = 12;
                    break;
            }
            break;
        case "Autumn":
            switch (flower) {
                case "Sunflower":
                    honey = 12;
                    break;
                case "Daisy":
                case "Lavender":
                case "Mint":
                    honey = 6;
                    break;
            }
            break;
    }
    let totalHoney = honey * quantity;
    switch(season){
        case "Summer":
            totalHoney *= 1.1;
            break;
        case "Autumn":
            totalHoney *= 0.95;
    }
    console.log(`Total honey harvested: ${totalHoney.toFixed(2)}`);
}
honeyHarvest("Sunflower", 11, "Autumn");