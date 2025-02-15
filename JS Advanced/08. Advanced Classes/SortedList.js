class SortedList {
    constructor() {
        this._internalArray = [];
    }

    add(number) {
        if (Number(number)) {
            this._internalArray.push(number);
            this._rearrange();
        } else {
            throw new TypeError('Parameter needs to be a number');
        }

    }

    remove(index) {
        if (this._isValidIndex(index)) {
            this._internalArray.splice(index, 1);
        }
    }

    get(index) {
        if (this._isValidIndex(index)) {
            return this._internalArray[index];
        }
    }

    get size() {
        return this._internalArray.length;
    }

    _rearrange() {
        this._internalArray.sort((a, b) => a - b);
    }

    _isValidIndex(index) {
        if (index < 0 || index >= this._internalArray.length) {
            throw new RangeError('Invalid index');
        }
        return true;
    }

    toString() {
        return this._internalArray.join(', ');
    }

}

let list = new SortedList()
list.add(2)
list.add(5)
list.add(1)
list.add(8)
list.add(10)
list.remove(2);

console.log(list.size);
console.log(list.get(0));
console.log(list.toString());