function extractText() {
    let lis = Array.from(document.getElementsByTagName('li'));
    let box = document.getElementById('result');
    box.value = lis.map(a => a.textContent).join('\n');
}