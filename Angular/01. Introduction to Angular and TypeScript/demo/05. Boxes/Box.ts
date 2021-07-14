class Box<Type> {
    private _content: Array<Type>;
    constructor() {
        this._content = [];
    }
    public add(element: Type) {
        this._content.push(element)
    };
    public remove() {
        this._content.pop();
    }
    public get count(): number {
        return this._content.length;
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
