// вид каюта	     Mediterranean	Adriatic	Aegean
// standard cabin   	27.50 лв.	22.99 лв.	23.00 лв.
// cabin with balcony	30.20 лв.	25.00 лв.	26.60 лв.
//  apartment	        40.50 лв.	34.99 лв.	39.80 лв.


function cruiseShip(input) {
    let cruiseType = input[0];
    let accomodation = input[1];
    let stay = input[2];
    let price = 0;
    let vacationCost = 0;

    switch (cruiseType) {
        case "Mediterranean":
            switch (accomodation) {
                case "standard cabin":
                    price = 27.50;
                    break;
                case "cabin with balcony":
                    price = 30.20;
                    break;
                case "apartment":
                    price = 40.50;
                    break;
            }
            break;
        case "Adriatic":
            switch (accomodation) {
                case "standard cabin":
                    price = 22.99;
                    break;
                case "cabin with balcony":
                    price = 25.00;
                    break;
                case "apartment":
                    price = 34.99;
                    break;
            }
            break;
        case "Aegean":
            switch (accomodation) {
                case "standard cabin":
                    price = 23.00;
                    break;
                case "cabin with balcony":
                    price = 26.60;
                    break;
                case "apartment":
                    price = 39.80;
                    break;
            }
            break;
    }
    if (stay <= 7) {
        vacationCost = price * stay * 4;
    } else {
        vacationCost = (price * stay * 4) * 0.75;
    }
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${vacationCost.toFixed(2)} lv.`);
}
cruiseShip(['Aegean', 'standard cabin', '10', '']);
cruiseShip([ 'Adriatic', 'apartment', '5', '' ]);
cruiseShip(['Mediterranean', 'cabin with balcony', '12', '']);