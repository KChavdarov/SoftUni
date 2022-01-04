function deleteByEmail() {
    let search = document.querySelector('input[name="email"]');
    let table = document.getElementById('customers');
    let result = document.getElementById('result');
    let elements = Array.from(table.querySelectorAll('tbody tr')).map(r => r.querySelector('td:last-child'));
    let match = elements.find(e => e.textContent == search.value);
    if (match) {
        match.parentNode.remove();
        result.textContent = 'Deleted.';
        search.value = '';
    } else {
        result.textContent = 'Not found.';
    }
}