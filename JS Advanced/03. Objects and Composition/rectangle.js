function rectangle(width, height, color) {
    let rect = {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase()+color.substring(1),
        calcArea() {
            return Number(rect.width) * Number(rect.height);
        }
    };
    return rect;
};


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

