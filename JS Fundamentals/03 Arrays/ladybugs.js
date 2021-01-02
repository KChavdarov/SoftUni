function ladybugs(arr) {
    //Създавам полето:
    let field = [];
    field.length = arr[0];
    for (let i = 0; i < field.length; i++) {
        field[i] = 0;
    }
    //
    //Поставям калинките на полето:
    let occupied = arr[1].split(' ');
    for (const position of occupied) {
        if (position <= field.length - 1 && position >= 0) {
            field[position] = 1;
        }
    }
    //
    //Изпълнявам хода:
    for (let i = 2; i < arr.length; i++) {
        let move = arr[i].split(' ');
        //Разбивам елемента от масива с ходовете на 3те му части:
        let start = Number(move[0]);
        let direction = move[1];
        let length = Number(move[2]);
        //Ако има калинка на началното поле, го занулявам и местя калинката:
        if (field[start] == 1) {
            field[start] = 0;
            switch (direction) {
                case 'right':
                    for (let j = (start + length); j < field.length && j >= 0; j += length) {
                        if (field[j] == 1) {
                            continue;
                        } else {
                            field[j] = 1;
                            break;
                        }
                    }
                    break;
                case 'left':
                    for (let j = (start - length); j >= 0 && j < field.length; j -= length) {
                        if (field[j] == 1) {
                            continue;
                        } else {
                            field[j] = 1;
                            break;
                        }
                    }
                    break;
            }
        }
    }
    console.log(field.join(' '));
}