function wordsDigits(n) {
    n = n.toString();
    switch (n) {
        case '0':
            console.log('zero');
            break;
        case '1':
            console.log('one');
            break;
        case '2':
            console.log('two');
            break;
        case '3':
            console.log('three');
            break;
        case '4':
            console.log('four');
            break;
        case '5':
            console.log('five');
            break;
        case '6':
            console.log('six');
            break;
        case '7':
            console.log('seven');
            break;
        case '8':
            console.log('eight');
            break;
        case '9':
            console.log('nine');
            break;
    }
}

function digitsWords(n) {
    switch (n) {
        case 'zero':
            console.log(0);
            break;
        case 'one':
            console.log(1);
            break;
        case 'two':
            console.log(2);
            break;
        case 'three':
            console.log(3);
            break;
        case 'four':
            console.log(4);
            break;
        case 'five':
            console.log(5);
            break;
        case 'six':
            console.log(6);
            break;
        case 'seven':
            console.log(7);
            break;
        case 'eight':
            console.log(8);
            break;
        case 'nine':
            console.log(9);
            break;
    }
}

digitsWords ('two');