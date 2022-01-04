// function schoolGrades(input) {
//     let register = {};
//     for (let item of input) {
//         grades = item.split(' ');
//         let name = grades.shift();
//         grades = grades.map(Number);

//         if (!register.hasOwnProperty(name)){
//             register[name] = [];
//         }
//         for (const grade of grades) {
//             register[name].push(grade);
//         }
//     }

//     let sorted = Object.entries(register);
//     sorted = sorted.sort((a,b) => avrCompare(a,b));
//     for (const [name,grades] of sorted) {
//         console.log(`${name}: ${grades.join(', ')}`);
//     }

//     function avrCompare([nameA,gradesA],[nameB,gradesB]) {
//         let sumA = gradesA.reduce((p,c) => p + c);
//         let sumB = gradesB.reduce((p,c) => p + c);
//         let averageA = sumA / gradesA.length;
//         let averageB = sumB / gradesB.length;
//         return averageA - averageB;
//     }
// }
// schoolGrades(['Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'
// ]);

function schoolGrades(input) {
    let register = new Map();
    for (let item of input) {
        grades = item.split(' ');
        let name = grades.shift();
        grades = grades.map(Number);

        if (!register.has(name)) {
            register.set(name,[]);
        }
        let updatedGrades = register.get(name);  //reference to the grades in the register;
        for (const grade of grades) {
            updatedGrades.push(grade);
        }
    }

    let sorted = Array.from(register);
    sorted = sorted.sort((a, b) => avrCompare(a, b));
    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function avrCompare([nameA, gradesA], [nameB, gradesB]) {
        let sumA = gradesA.reduce((p, c) => p + c);
        let sumB = gradesB.reduce((p, c) => p + c);
        let averageA = sumA / gradesA.length;
        let averageB = sumB / gradesB.length;
        return averageA - averageB;
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);