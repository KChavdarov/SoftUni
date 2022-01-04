function smallestTwo(arr) {
    let sorted = arr.sort((a, b) => a - b).slice(0, 2);
    return sorted.join(" ");
}
console.log(smallestTwo([30, 15, 50, 5]));