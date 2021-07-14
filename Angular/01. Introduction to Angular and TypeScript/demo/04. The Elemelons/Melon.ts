abstract class Melon {
    private _elementIndex: number;
    constructor(public weight: number, public melonSort: string, protected element: 'Water' | 'Fire' | 'Earth' | 'Air') {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = element;
        this._elementIndex = this.weight * melonSort.length
    }
    toString() {
        return `
        “Element: ${this.element}”
        “Sort: ${this.melonSort}”
        “Element Index: ${this._elementIndex}”
        `};

    public get elementIndex(): number {
        return this._elementIndex;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort, 'Water');
    }
}
class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort, 'Fire');
    }
}
class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort, 'Earth');
    }
}
class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort, 'Air');
    }
}

class Melolemonmelon extends Watermelon {
    private _elements = ['Fire', 'Earth', 'Air', 'Water'];
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }
    morph() {
        const newElement = this._elements.shift();
        if (newElement) {
            this._elements.push(newElement);
            this.element = newElement as 'Water' | 'Fire' | 'Earth' | 'Air';
        }
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());