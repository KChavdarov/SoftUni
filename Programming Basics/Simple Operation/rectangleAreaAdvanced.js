function rectangleKiril (x1,y1,x2,y2){
    let length = Math.abs(Number(x1) - Number(x2));
    let width = Math.abs(Number(y1) - Number(y2));
    let area = ((length * width)).toFixed(2);
    let perimeter = (2 * (length + width)).toFixed(2);

    console.log (area);
    console.log (perimeter);
}


function rectangleOfficial (x1,y1,x2,y2){
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);

    let length = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let area = (length * width).toFixed(2);
    let perimeter = (2 * (length + width)).toFixed(2);

    console.log (area);
    console.log (perimeter);
}

rectangleOfficial("60","20","10","50");