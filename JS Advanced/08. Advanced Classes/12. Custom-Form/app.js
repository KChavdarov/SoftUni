let result = (function () {

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

    class Form {
        constructor(...objects) {
            this._element = document.createElement('div');
            this._element.classList.add('form');
            this.textboxes = [];
            if (objects.some(a => !(a instanceof Textbox))) {
                throw new TypeError('Input not of type Textbox');
            } else {
                objects.forEach(t => {
                    this._element.appendChild(...t.elements);
                    this.textboxes.push(t);
                });
            }
        }
        get textboxes() {
            return this._textboxes;
        }
        set textboxes(value) {
            this._textboxes = value;
        }

        submit() {
            let isValid = true;
            this.textboxes.forEach(t => {
                if (t.isValid()) {
                    Array.from(t.elements).map(e => e.style.border = '2px solid green');
                } else {
                    Array.from(t.elements).map(e => e.style.border = '2px solid red');
                    isValid = false;
                }
            });
            return isValid;
        }

        attach(selector) {
            let target = document.querySelector(selector);
            target.appendChild(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    };
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox('#username', /[^a-zA-Z0-9]/);
let password = new Textbox('#password', /[^a-zA-Z]/);
username.value = 'username';
password.value = 'password2';
let form = new Form(username, password);
form.attach('#root');
console.log(form.submit());
