class Figure {
    constructor() {
        this.units = 'cm';
    }
    get area() {
    }
    changeUnits(newUnits) {
        if (newUnits) {
            const convertor = {
                m: 1,
                cm: 10,
                mm: 100,
            };
            const multiplier = convertor[newUnits] / convertor[this.units];
            this.units = newUnits;
            return multiplier;
        }
        return 1;
    }
    toString() {
        return `Figures units: ${this.units}`;
    }
}

class Rectangle extends Figure {
    constructor(width, height, units) {
        super();
        this.width = width;
        this.height = height;
        this.changeUnits(units);
    }
    get area() {
        return this.width * this.height;
    }
    toString() {
        return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
    changeUnits(newUnits) {
        const multiplier = super.changeUnits(newUnits);
        this.width *= multiplier;
        this.height *= multiplier;
    }
}

class Circle extends Figure {
    constructor(radius, units) {
        super();
        this.radius = radius;
        this.changeUnits(units);
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    toString() {
        return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
    }
    changeUnits(newUnits) {
        const multiplier = super.changeUnits(newUnits);
        this.radius *= multiplier;
    }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50