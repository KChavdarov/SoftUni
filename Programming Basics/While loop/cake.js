function cake(input) {
    let index = 0;
    let length = input[index];
    index++;
    let width = input[index];
    index++;
    let cake = width * length;
    let pieces = input[index];
    index++;

    while (pieces != "stop" && cake > 0) {
        cake -= pieces;
        pieces = input[index];
        index++;
    }
    if (cake > 0) {
        console.log(`${cake} pieces are left.`);
    } else {
        console.log(`No more cake! You need ${-1 * cake} pieces more`);
    }
}

cake([10, 10, 20, 20, 20, 20, 'stop']);