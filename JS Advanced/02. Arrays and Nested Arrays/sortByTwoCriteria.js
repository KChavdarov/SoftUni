function sortByTwoCriteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return arr.join("\n");
}