function memoryGame(input) {
    let array = input.shift().split(' ');
    let move = input.shift();
    let moves = 0;
    let isOver = false;

    while (move != 'end') {
        moves++;
        move = move.split(' ').map(Number);
        let [index1, index2] = move;
        if (index1 == index2 ||
            (index1 >= array.length || index1 < 0) ||
            (index2 >= array.length || index2 < 0)
        ) {
            let element = -moves + 'a';
            array.splice(array.length / 2, 0, element, element);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            if (array[index1] == array[index2]) {
                let element = array[index1];
                array.splice(index1, 1);
                if (index1 < index2) {
                    array.splice(index2 - 1, 1);
                } else {
                    array.splice(index2, 1);
                }
                console.log(`Congrats! You have found matching elements - ${element}!`);
            } else {
                console.log("Try again!");
            }
        }
        if (array.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            isOver = true;
            break;
        }
        move = input.shift();
    }
    if (!isOver) {
        console.log('Sorry you lose :(');
        console.log(array.join(' '));
    }
}
// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ]);
// memoryGame([
//     "a 2 4 a 2 4",
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]);
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);