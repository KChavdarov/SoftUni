function addOrRemove(commands) {
    let actions = {
        add: (arr, n) => arr.push(n),
        remove: (arr) => arr.pop()
    };
    let n = 1;
    let arr = [];
    for (const command of commands) {
        actions[command](arr, n);
        n++;
    }
    return arr.length == 0 ? "Empty" : arr.join("\n");
}
console.log(addOrRemove(['remove', 
'remove', 
'remove']
));