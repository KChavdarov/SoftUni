function extendPrototype(input) {
    input.prototype.species = 'Human';
    input.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} says hi!`);
    }
};

extendPrototype(Person);
const myPerson = new Person('ivan');
console.log(myPerson);
console.log(myPerson.toSpeciesString());