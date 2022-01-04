function factory(library, orders) {

    let product = orders.map(item => {
        let result = Object.assign({}, item.template, item.parts.reduce((a, c) => Object.assign(a, { [c]: library[c] }), {}));
        return result;
    });

    return product;

    // let products = [];
    // for (const item of orders) {
    //     let composed = Object.assign({},item.template);
    //     for (const part of item.parts) {
    //         composed[part] = library[part];
    //     }
    //     products.push(composed);
    // }
    // return products;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];
const products = factory(library, orders);
console.log(products);
