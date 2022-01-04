function areaAndVolumeCalculator(area, vol, inputAsJSON) {
    let rectangles = JSON.parse(inputAsJSON);
    rectangles = rectangles.map(rect => {
        return {
            area: Math.abs(area.apply(rect)),
            volume: Math.abs(vol.call(rect))
        };
    });
    return rectangles;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

let input = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]
    `;

console.log(areaAndVolumeCalculator(area, vol, input));