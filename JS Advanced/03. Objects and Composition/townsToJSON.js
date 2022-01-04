// function townToJSON(input) {
//     let data = [];
//     let keys = parseInput(input.shift());

//     for (const line of input) {
//         let values = parseInput(line);
//         let townObj = {};
//         for (let i = 0; i < keys.length; i++) {
//             townObj[keys[i]] = values[i];
//         }
//         standardizeNumbers(townObj);
//         data.push(townObj);
//     }

//     function parseInput(input) {
//         return input
//             .split('|')
//             .filter(a => a)
//             .map(a => a.trim());
//     }

//     function standardizeNumbers(obj) {
//         for (const [key, value] of Object.entries(obj)) {
//             if (!isNaN(Number(value))) {
//                 obj[key] = Number(Number(value).toFixed(2));
//             }
//         }
//     }

//     return JSON.stringify(data);
// }

function townToJSON(input) {
    let [keys, ...table] = input.map(splitLine);

    return JSON.stringify(table.map(entry => {
        return keys.reduce((a, c, i) => {
            a[c] = entry[i];
            return a;
        }, {});
    }));

    function convertIfNum(a) {
        return isNaN(a) ? a : Number(Number(a).toFixed(2));
    }
    
    function splitLine(input) {
        return input.split('|').filter(x => x).map(a => a.trim()).map(convertIfNum);
    }
}
console.log(townToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));