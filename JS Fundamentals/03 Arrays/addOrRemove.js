function addOrRemove(arr) {
    let newArr = [];
    let n = 1;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case 'add':
                newArr.push(n);
                break;
            case 'remove':
                newArr.pop();
                break;
        }
        n++;
    }
    if (newArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}

addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);