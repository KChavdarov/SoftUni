function volleyball(arg1, arg2, arg3) {
    let year = arg1;
    let holidays = Number(arg2);
    let countryside = Number(arg3);

    let gamesInSofia = (48 - countryside) * 3 / 4;
    let gamesInCountryside = countryside;
    let gamesOnHoliday = holidays * 2 / 3;
    let totalGames = gamesInSofia + gamesInCountryside + gamesOnHoliday;

    if (year == "leap") {
        totalGames *= 1.15;
    }
    totalGames = Math.floor(totalGames);
    console.log(totalGames);
}
volleyball("leap", 5, 2);