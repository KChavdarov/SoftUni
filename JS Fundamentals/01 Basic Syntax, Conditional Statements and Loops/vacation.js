function vacation(arg1, arg2, arg3) {
    let group = Number(arg1);
    let type = arg2;
    let day = arg3;
    let price = 0.00;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    price = 8.45;
                    break;
                case "Saturday":
                    price = 9.80;
                    break;
                case "Sunday":
                    price = 10.46;
                    break;
            }
            if (group >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16;
                    break;
            }
            if (group >= 100) {
                group -= 10;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price = 15;
                    break;
                case "Saturday":
                    price = 20;
                    break;
                case "Sunday":
                    price = 22.50;
                    break;
            }
            if (group >= 10 && group <=20){
                price *= 0.95;
            }
            break;
    }
    let totalPrice = price * group;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}