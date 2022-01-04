function arrayModifier(input) {
    let arr = input.shift().split(' ');
    arr = arr.map(Number);
    let action = input.shift();

    while (action != 'end') {
        let command = action.split(' ')[0];
        let index1 = Number(action.split(' ')[1]);
        let index2 = Number(action.split(' ')[2]);
        switch (command) {
            case 'swap':
                arr = swap(arr, index1, index2);
                break;
            case 'multiply':
                arr = multiply(arr, index1, index2);
                break;
            case 'decrease':
                arr = decrease(arr);
                break;
        }
        action = input.shift();
    }

    console.log(arr.join(', '));


    function swap(arr, index1, index2) {
        let num1 = arr[index1];
        let num2 = arr[index2];
        arr.splice(index1, 1, num2);
        arr.splice(index2, 1, num1);
        return arr;
    }

    function multiply(arr, index1, index2) {
        let num1 = arr[index1];
        let num2 = arr[index2];
        arr.splice(index1, 1, (num1 * num2));
        return arr;
    }

    function decrease(arr) {
        return arr.map(a => a - 1);
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);