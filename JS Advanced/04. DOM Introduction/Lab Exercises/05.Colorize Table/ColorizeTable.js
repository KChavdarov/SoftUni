function colorize() {
    let rows = Array.from(document.querySelectorAll('table tr:nth-child(even)'));
    rows.map(r => r.style.backgroundColor = 'teal');
}