function houseParty(arr) {
    let list = [];
    for (const element of arr) {
        let action = element.split(' ');
        let name = action[0];
        if (action.length > 3) {
            if (list.includes(name)) {
                list = list.filter(a => a != name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);