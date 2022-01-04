function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');

    function makeKeyRow(arr) {
        let headers = ['\t<tr>'];
        let headings = [];
        for (const obj of arr) {
            let keys = Object.keys(obj);
            keys.forEach(key => {
                if (!headings.includes(key)) {
                    headings.push(escapeHtml(key));
                }
            });
        }
        for (const heading of headings) {
            headers.push(`<th>${heading}</th>`);
        }

        headers.push('</tr>');
        return headers.join('');
    }
    function makeValueRow(obj) {
        let row = ['\t<tr>'];
        let values = Object.values(obj);
        let datapoints = values.map(value => `<td>${escapeHtml(value)}</td>`);
        row.push(...datapoints);
        row.push('</tr>');
        return row.join('');
    };
    function escapeHtml(value) {
        let escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\\': '&#39;',
            '\'': '&#39;',
        };
        let escaped = '';
        if (typeof(value) != 'string') {
            return value;
        }
        for (let char of value) {
            if (escape[char] != undefined) {
                char = escape[char];
            }
            escaped += char;
        }
        return escaped;

    };
    return outputArr.join('\n');
}
console.log(JsonToHtmlTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']));

