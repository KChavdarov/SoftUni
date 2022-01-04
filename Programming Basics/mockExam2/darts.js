function dart(input) {
    let index = 0;
    let points = Number(input[index]);
    index++;
    let throws = 0;
    let isBullseye = false;
    while (points > 0) {
        let sector = input[index];
        index++;
        let score = Number(input[index]);
        index++;
        switch (sector) {
            case "number section":
                points -= score;
                break;
            case "double ring":
                points -= 2 * score;
                break;
            case "triple ring":
                points -= 3 * score;
                break;
            case "bullseye":
                isBullseye = true;
                break;
        }
        throws++;
        if (isBullseye) {
            console.log(`Congratulations! You won the game with a bullseye in ${throws} moves!`);
            break;
        }
    }
    if (!isBullseye) {
        if (points < 0) {
            console.log(`Sorry, you lost. Score difference: ${-points}.`);
        } else {
            console.log(`Congratulations! You won the game in ${throws} moves!`);
        }
    }
}