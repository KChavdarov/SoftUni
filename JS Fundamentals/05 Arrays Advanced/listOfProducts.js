function listOfProducts(arr) {
    let orderedList = arr.sort((a, b) => a.localeCompare(b));
    console.log(addNumber(orderedList).join('\n'));

    function addNumber(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = `${i+1}.${array[i]}`;
        }
        return array;
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);