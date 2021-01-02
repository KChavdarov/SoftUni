function fancyBarcodes(input) {
    let barcodes = input.shift();

    for (let i = 0; i < barcodes; i++) {
        let pattern = /^@#+[A-Z][\dA-Za-z]{4,}[A-Z]@#+$/;
        barcode = input.shift();
        if (!pattern.test(barcode)) {
            console.log("Invalid barcode");
        } else {
            let digits = barcode.match(/\d/g);
            productGroup = "";
            if (digits == null) {
                productGroup = "00";
            } else {
                productGroup = digits.reduce((a, b) => a + b);
            }
            console.log(`Product group: ${productGroup}`);
        }
    }
}
fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);
fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);