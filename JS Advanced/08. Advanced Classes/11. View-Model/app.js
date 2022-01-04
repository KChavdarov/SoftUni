class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex;
        this.elements = selector;
    }

    set value(value) {
        this._value = value;
        Array.from(this.elements).forEach(e => e.value = value);
    }
    get value() {
        return this._value;
    }
    set elements(selector) {
        this._elements = document.querySelectorAll(selector);
        const elements = Array.from(this.elements);
        elements.forEach(e => e.addEventListener('input', inputs.bind(this)));

        function inputs(event) {
            let value = event.target.value;
            this.value = value;
        }
    }

    get elements() {
        return this._elements;
    }

    get invalidSymbols() {
        return this._invalidSymbols;
    }

    set invalidSymbols(value) {
        this._invalidSymbols = value;
    }

    isValid() {
        return !this.invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.querySelectorAll('.textbox');
Array.from(inputs).forEach(i => i.addEventListener('input', function () { console.log(textbox.value); }));
