function pritNth(arr, n) {
    /*
    *** Mihaela's solution ***
    let result = [];
    for (let i = 0; i < arr.length; i+=n) {
        const element = arr[i];
        result.push(element);
    }
    return result;
    */

   return arr.filter((_,i) => i % n === 0); // Often we would use "_" instead of identifier when we will not be using the variable
}
console.log(pritNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));