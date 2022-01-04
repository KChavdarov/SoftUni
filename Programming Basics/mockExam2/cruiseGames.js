function cruiseGames(input) {
    let index = 0;
    let name = input[index];
    index++;
    let gamesCount = Number(input[index]);
    index++;
    let volleyballPoints = 0;
    let volleyballCount = 0;
    let tennisPoints = 0;
    let tennisCount = 0;
    let badmintonPoints = 0;
    let badmintonCount = 0;
    for (let i = 0; i < gamesCount; i++) {
        let game = input[index];
        index++;
        let points = Number(input[index]);
        index++;
        switch (game) {
            case "volleyball":
                volleyballPoints += points * 1.07;
                volleyballCount++;
                break;
            case "tennis":
                tennisPoints += points * 1.05;
                tennisCount++;
                break;
            case "badminton":
                badmintonPoints += points * 1.02;
                badmintonCount++;
                break;
        }
    }
    let avreageVolleyball = Math.floor(volleyballPoints / volleyballCount);
    let avreageTennis = Math.floor(tennisPoints / tennisCount);
    let avreageBadmintion = Math.floor(badmintonPoints / badmintonCount);
    let totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);
    if (avreageVolleyball >= 75 && avreageTennis >= 75 && avreageBadmintion >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${totalPoints} points.`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${totalPoints}.`);
    }
}
cruiseGames(['Pepi', '3', 'volleyball', '78', 'tennis', '98', 'badminton', '105']);