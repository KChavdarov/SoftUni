function summerOutfit(degrees, period) {
    let temperature = Number(degrees);
    let outfit;
    let shoes;
    switch(period){
        case "Morning":
            if(temperature >= 25){
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temperature > 18){
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >=10){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }
            break;
        case "Afternoon":
            if(temperature >= 25){
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } else if (temperature > 18){
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temperature >=10){
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}