function hotelRoom(month, inputStay) {
    let stay = Number(inputStay);
    let studioPrice = 50;
    let apartmentPrice = 65;
    switch (month) {
        case "May":
        case "October":
            if (stay > 14) {
                studioPrice *= 0.7;
                apartmentPrice *= 0.9;
            } else if (stay > 7) {
                studioPrice *= 0.95;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.2;
            apartmentPrice = 68.7;
            if (stay > 14) {
                studioPrice *= 0.8;
                apartmentPrice *= 0.9;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            if (stay > 14) {
                apartmentPrice *= 0.9;
            }
            break;
    }
    let studioStay = studioPrice * stay;
    let apartmentStay = apartmentPrice * stay;
    console.log(`Apartment: ${apartmentStay.toFixed(2)} lv.`);
    console.log(`Studio: ${studioStay.toFixed(2)} lv.`);
}
hotelRoom("August", "20");