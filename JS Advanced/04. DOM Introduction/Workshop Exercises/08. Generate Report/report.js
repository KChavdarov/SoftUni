function generateReport(colNames) {
    let headers = getHeaders();
    let selection = getSelection(headers);
    let data = extractTableData();
    prepareOutput();

    function getSelection(headers) {
        let selection = headers.reduce((acc, curr, ind, arr) => {
            if (curr.checked) {
                acc.push(ind);
            }
            return acc;
        }, []);
        return selection;
    }

    function getHeaders() {
        let headers = Array.from(document.querySelector('table thead tr').children);
        headers = headers.map(header => header = (header.children)[0]);
        return headers;
    }

    function extractTableData() {
        let rows = Array.from(document.querySelectorAll('table tbody tr'));
        let data = rows.map(r => r = Array.from(r.children).map(d => d = d.textContent));
        return data;
    }

    function prepareOutput() {
        let result = data.reduce(reducer, []);
        let output = JSON.stringify(result, null, 2);
        if (selection.length > 0) {
            document.getElementById('output').value = output;
        }


        function reducer(acc, curr) {
            let person = {};
            selection.forEach(i => {
                person[headers[i].name] = curr[i];
            });
            acc.push(person);
            return acc;
        }
    }
}