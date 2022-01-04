class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    };
    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }
    shopping([product, price]) {
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= price;
        this.products.push(product);
        return `You have successfully bought ${product}!`;
    }
    recipes(recipe) {
        let { recipeName, productsList } = recipe;
        const isPreparable = productsList.reduce((acc, curr) => {
            if (!this.products.includes(curr)) {
                acc = false;
            }
            return acc;
        }, true);
        if (!isPreparable) {
            throw new Error('We do not have this product');
        }
        this.dishes.push(recipe);
        return `${recipeName} has been successfully cooked!`;
    }
    inviteGuests(name, dish) {
        if (!this.dishes.map(a => a.recipeName).includes(dish)) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }
    showAttendance() {
        let output = Object.entries(this.guests);
        output = output.map(([name, dish]) => {
            const products = this.dishes.find(a => a.recipeName == dish).productsList;
            return `${name} will eat ${dish}, which consists of ${products.join(', ')}`;
        });
        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());
