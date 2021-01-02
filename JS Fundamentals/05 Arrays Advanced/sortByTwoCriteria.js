function sortByTwoCriteria(array) {
    array.sort();
    // array.sort(
    //     function sortByLength(a, b) {
    //         let x = a.length;
    //         let y = b.length;
    //         return (x - y);
    //     }
    // );

    array.sort((a, b) => sortByTwo(a, b));

    function sortByTwo(a, b) {
        let x = a.length;
        let y = b.length;
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return a - b;
        }
    }
    console.log(array.join('\n'));
}
sortByTwoCriteria(["Peter", "Isacc", "Theodor", "Jack", "Harrison", "George"]);