class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase();
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
