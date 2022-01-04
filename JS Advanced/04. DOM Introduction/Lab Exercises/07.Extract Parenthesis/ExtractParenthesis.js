function extract(content) {
    let regex = new RegExp('\\((.+?)\\)', 'gm');
    let text = document.getElementById('content').textContent;
    let matches = [];
    let match = regex.exec(text);
    while (match != null) {
        matches.push(match[1]);
        match = regex.exec(text);
    }
    return matches.join('; ');
}