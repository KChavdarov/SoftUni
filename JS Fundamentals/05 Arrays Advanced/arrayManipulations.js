function arrayManipulations(input) {
    let numbersArr = input.shift().split(' ');

    for (const element of input) {
        let command = element.split(' ')[0];
        switch (command) {
            case 'Add':
                numbersArr = add(numbersArr, element);
                break;
            case 'Remove':
                numbersArr = remove(numbersArr, element);
                break;
            case 'RemoveAt':
                numbersArr = removeAt(numbersArr, element);
                break;
            case 'Insert':
                numbersArr = insert(numbersArr, element);
                break;
        }
    }

    console.log(numbersArr.join(' '));


    function add(array, string) {
        let number = string.split(' ')
            .pop();
        array.push(number);
        return array;
    }

    function remove(array, string) {
        let number = string.split(' ')
            .pop();
        return array.filter(a => a != number);
    }

    function removeAt(array, string) {
        let index = string.split(' ')
            .pop();
        array.splice(index, 1);
        return array;
    }

    function insert(array, string) {
        let subArr = string.split(' ');
        let index = subArr.pop();
        let number = subArr.pop();
        array.splice(index, 0, number);
        return array;
    }
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);