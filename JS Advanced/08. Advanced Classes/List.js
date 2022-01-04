class List {
    constructor() {
        this.collection = [];
        this.size = this.collection.length;
    }

    add(element) {
        this.collection.push(element);
        this.collection = this.collection.sort((a, b) => a - b);
        this.size = this.collection.length;
    };
    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError('index out of range');
        } else {
            this.collection.splice(index, 1);
            this.size = this.collection.length;
        }
    };
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError('index out of range');
        }
        else {
            return this.collection[index];
        }
    };
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
