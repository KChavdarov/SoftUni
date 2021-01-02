function commonElements(arr1, arr2) {
    //     for (const item of arr1) {
    //         if (arr2.includes(item)) {
    //             console.log(item);
    //         }
    //     }
    // }

    for (const item of arr1) {
        for (const element of arr2) {
            if (item === element) {
                console.log(item);
                break;
            }
        }
    }
}


commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);