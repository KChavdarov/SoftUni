function relocation(input) {
    let index = 0;
    let length = input[index];
    index++;
    let width = input[index];
    index++;
    let height = input[index];
    index++;
    let room = length * width * height;
    let roomLeft = room;
    let box = input[index];
    index++;

    while (box != 'done') {
        if (roomLeft < 0) {
            console.log(`No more free space! You need ${roomLeft * -1} Cubic meters more.`);
            break;
        }
        roomLeft -= box;
        box = input[index];
        index++;
    }
    if (roomLeft >= 0) {
        console.log(`${roomLeft} Cubic meters left.`);
    }
}

relocation([10, 10, 2, 20, 20, 20, 20, 122]);
relocation([10, 1, 2, 4, 6, 'done']);