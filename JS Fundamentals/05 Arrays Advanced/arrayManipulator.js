function arrayManipulator(array, commands) {
    let isPrinted = false;

    for (const command of commands) {
        let action = command.split(' ')[0];
        if (isPrinted) {
            break;
        }
        switch (action) {
            case 'add':
                array = add(array, command);
                break;
            case 'addMany':
                array = addMany(array, command);
                break;
            case 'contains':
                console.log(contains(array, command));
                break;
            case 'remove':
                array = remove(array, command);
                break;
            case 'shift':
                array = shift(array, command);
                break;
            case 'sumPairs':
                array = sumPairs(array);
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                isPrinted = true;
                break;
        }
    }

    function add(array, string) {
        let command = string.split(' ');
        let index = Number(command[1]);
        let number = Number(command[2]);
        array.splice(index, 0, number);
        return array;
    }

    function addMany(array, string) {
        let command = string.split(' ');
        let action = command.shift();
        command = command.map(Number);
        let index = command.shift();
        for (const number of command) {
            array.splice(index, 0, number);
            index++;
        }
        return array;
    }

    function contains(array, string) {
        let command = string.split(' ');
        let number = Number(command[1]);
        return array.indexOf(number);
    }

    function remove(array, string) {
        let command = string.split(' ');
        let index = Number(command[1]);
        array.splice(index, 1);
        return array;
    }

    function shift(array, string) {
        let command = string.split(' ');
        let positions = Number(command[1]);
        for (let i = 0; i < positions; i++) {
            let temp = array.shift();
            array.push(temp);
        }
        return array;
    }

    function sumPairs(array) {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 0) {
                newArr.push(array[i]);
            } else {
                newArr[newArr.length - 1] += array[i];
            }
        }
        return newArr;
    }
}
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]);