function sumTable() {
    let rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let prices = rows.map(row => Number(row.lastElementChild.textContent));
    let result = prices.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('sum').textContent = result;
}