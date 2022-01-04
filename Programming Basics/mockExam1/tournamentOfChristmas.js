function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let game = input[index];
    index++;
    let charityFund = 0;
    let daysWon = 0;
    for (let i = 0; i < days; i++) {
        let winCount = 0;
        let loseCount = 0;
        let dailyDonation = 0;
        while (game != "Finish") {
            let result = input[index];
            index++;
            if (result == "win") {
                dailyDonation += 20;
                winCount++;
            } else if (result == "lose") {
                loseCount++;
            }
            game = input[index];
            index++;
        }
        if (winCount > loseCount) {
            dailyDonation *= 1.1;
            daysWon++;
        }
        charityFund += dailyDonation;
        game = input[index];
        index++;
    }
    if (daysWon > (days / 2)) {
        charityFund *= 1.2;
        console.log(`You won the tournament! Total raised money: ${charityFund.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${charityFund.toFixed(2)}`);
    }
}
tournamentOfChristmas([
    '2', 'volleyball',
    'win', 'football',
    'lose', 'basketball',
    'win', 'Finish',
    'golf', 'win',
    'tennis', 'win',
    'badminton', 'win',
    'Finish'
]);