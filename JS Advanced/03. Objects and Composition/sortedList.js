// function createSortedList() {
//     // По този начин, имаме достъп до list.numbers извън обекта - това е грешно, защото нарушаваме енкапсулацията.
//     let list = {};
//     list.numbers = [];
//     list.add = function (num) {
//         list.numbers.push(num);
//         list.numbers.sort((a, b) => a - b);
//         list.size++;
//     };
//     list.remove = function (index) {
//         if (index >= 0 && index < list.numbers.length) {
//             list.numbers.splice(index, 1);
//             list.size--;
//         }
//     };
//     list.get = function (index) {
//         if (index >= 0 && index < list.numbers.length) {
//             return list.numbers[index];
//         }
//     };
//     list.size = 0;
//     return list;
// }

function createSortedList() {
    // По този начин, нямаме достъп до list.numbers извън обекта и създаваме правилна енкапсулация
    let list = {};
    let numbers = [];
    list.add = function (num) {
        numbers.push(num);
        numbers.sort((a, b) => a - b);
        list.size++;
    };
    list.remove = function (index) {
        if (index >= 0 && index < numbers.length) {
            numbers.splice(index, 1);
            list.size--;
        }
    };
    list.get = function (index) {
        if (index >= 0 && index < numbers.length) {
            return numbers[index];
        }
    };
    list.size = 0;
    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
